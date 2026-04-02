from __future__ import annotations

from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import requests

from collectors.common import create_supabase, utc_now

LIST_URL = "https://data.krx.co.kr/contents/MDC/MAIN/main/index.cmd"
JSON_URL = "https://data.krx.co.kr/comm/bldAttendant/getJsonData.cmd"
TARGET_INDEXES = {
    "코스피": "KOSPI",
    "코스닥": "KOSDAQ",
}


def _make_session() -> tuple[requests.Session, dict[str, str]]:
    session = requests.Session()
    headers = {
        "User-Agent": "Mozilla/5.0",
        "Referer": LIST_URL,
        "Origin": "https://data.krx.co.kr",
    }
    session.get(LIST_URL, headers=headers, timeout=30).raise_for_status()
    return session, headers


def _fetch_json(session: requests.Session, headers: dict[str, str], bld: str) -> dict[str, object]:
    response = session.post(
        JSON_URL,
        data={"bld": bld},
        headers=headers,
        timeout=30,
    )
    response.raise_for_status()
    return response.json()


def collect_market_snapshots() -> tuple[list[dict[str, object]], list[dict[str, object]]]:
    collected_at = utc_now()
    trade_day = datetime.now(ZoneInfo("Asia/Seoul")).date()
    if trade_day.weekday() == 5:
        trade_day -= timedelta(days=1)
    elif trade_day.weekday() == 6:
        trade_day -= timedelta(days=2)
    trade_date = trade_day.isoformat()

    session, headers = _make_session()
    rows = _fetch_json(session, headers, "dbms/MDC/MAIN/MDCMAIN00101")["output"]
    market_overview = _fetch_json(session, headers, "dbms/MDC/MAIN/MDCMAIN00106")["output"]

    payload: list[dict[str, object]] = []
    macro_payload: list[dict[str, object]] = []
    for row in rows:
        kr_name = row.get("IDX_IND_NM")
        if kr_name not in TARGET_INDEXES:
            continue

        name = TARGET_INDEXES[kr_name]
        metadata = {
            "collector": "collectors.market",
            "collected_at": collected_at,
            "source": "KRX",
            "source_detail": "MDCMAIN00101 main index summary",
            "krx_index_name": kr_name,
            "index_code": row.get("IDX_IND_CD"),
            "change_value": float(str(row["CMPPREVDD_IDX"]).replace(",", "")),
        }
        payload.append(
            {
                "trade_date": trade_date,
                "index_name": name,
                "close": float(str(row["PRSNT_IDX"]).replace(",", "")),
                "change_pct": float(str(row["IDX_FLUC_RT"]).replace(",", "")),
                "volume": None,
                "trading_value": None,
                "metadata": metadata,
            }
        )
        macro_payload.extend(
            [
                {
                    "metric_date": trade_date,
                    "metric_name": f"{name}_ADVANCERS",
                    "metric_value": float(str(row["UP_ISU_CNT"]).replace(",", "")),
                    "unit": "count",
                    "metadata": metadata,
                },
                {
                    "metric_date": trade_date,
                    "metric_name": f"{name}_DECLINERS",
                    "metric_value": float(str(row["DN_ISU_CNT"]).replace(",", "")),
                    "unit": "count",
                    "metadata": metadata,
                },
                {
                    "metric_date": trade_date,
                    "metric_name": f"{name}_UNCHANGED",
                    "metric_value": float(str(row["STEAD_ISU_CNT"]).replace(",", "")),
                    "unit": "count",
                    "metadata": metadata,
                },
            ]
        )

    if len(payload) != len(TARGET_INDEXES):
        raise RuntimeError("Failed to collect all target KRX indexes.")

    for row in market_overview:
        label = str(row.get("TP_NM", "")).strip()
        for market_name in ("KOSPI", "KOSDAQ"):
            raw_value = row.get(market_name)
            if raw_value in (None, ""):
                continue
            metric_name = (
                f"{market_name}_{label}"
                .replace(" ", "_")
                .replace("(", "_")
                .replace(")", "")
                .replace("/", "_")
            )
            try:
                metric_value = float(str(raw_value).replace(",", ""))
            except ValueError:
                continue
            macro_payload.append(
                {
                    "metric_date": trade_date,
                    "metric_name": metric_name.upper(),
                    "metric_value": metric_value,
                    "unit": "krx_main_overview",
                    "metadata": {
                        "collector": "collectors.market",
                        "collected_at": collected_at,
                        "source": "KRX",
                        "source_detail": "MDCMAIN00106 market overview",
                        "market": market_name,
                        "label": label,
                    },
                }
            )

    return payload, macro_payload


def run() -> int:
    client = create_supabase()
    market_payload, macro_payload = collect_market_snapshots()
    client.table("market_daily").upsert(
        market_payload, on_conflict="trade_date,index_name"
    ).execute()
    client.table("macro_daily").upsert(
        macro_payload, on_conflict="metric_date,metric_name"
    ).execute()
    return 0


if __name__ == "__main__":
    raise SystemExit(run())
