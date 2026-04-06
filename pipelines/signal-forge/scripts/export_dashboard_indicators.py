from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

sys.path.append(str(Path(__file__).resolve().parents[1]))

from collectors.common import create_supabase


TARGET_METRICS = {
    "FH_DASHBOARD_FEAR_AND_GREED": {
        "indicator_key": "fearAndGreed",
        "label": "Fear & Greed",
    },
    "FH_DASHBOARD_CPI_KOREA": {
        "indicator_key": "cpiKorea",
        "label": "한국 CPI",
    },
    "FH_DASHBOARD_CPI_US": {
        "indicator_key": "cpiUS",
        "label": "미국 CPI",
    },
    "FH_DASHBOARD_EXCHANGE_RATE": {
        "indicator_key": "exchangeRate",
        "label": "원/달러 환율",
    },
    "FH_DASHBOARD_DOLLAR_INDEX": {
        "indicator_key": "dollarIndex",
        "label": "달러 인덱스",
    },
    "FH_DASHBOARD_GOLD_SILVER_RATIO": {
        "indicator_key": "goldSiverRatio",
        "label": "금/은 비율",
    },
}

OUTPUT_PATH = (
    Path(__file__).resolve().parents[3]
    / "apps"
    / "finance-helper"
    / "dashboard"
    / "generated"
    / "supabase-indicators.json"
)


def _format_metric_value(value: object) -> str:
    try:
        numeric = float(value)
    except (TypeError, ValueError):
        return str(value)
    return f"{numeric:,.2f}"


def _get_display_value(value: object, metadata: dict[str, Any]) -> str:
    display_value = metadata.get("displayValue")
    if display_value:
        return str(display_value)
    return _format_metric_value(value)


def _fetch_metric_rows(client: Any, metric_name: str, metric_date: str | None = None) -> list[dict[str, Any]]:
    query = (
        client.table("macro_daily")
        .select("metric_date,metric_name,metric_value,metadata")
        .eq("metric_name", metric_name)
    )

    if metric_date:
        query = query.eq("metric_date", metric_date)
    query = query.order("metric_date", desc=True)

    response = query.execute()
    return response.data or []


def export_dashboard_indicators() -> dict[str, object]:
    client = create_supabase()
    latest_indicators: dict[str, dict[str, str]] = {}
    indicators_by_date: dict[str, dict[str, dict[str, str]]] = {}
    latest_snapshot_date = ""

    for metric_name, config in TARGET_METRICS.items():
        rows = _fetch_metric_rows(client, metric_name, config.get("metric_date"))
        if not rows:
            continue

        for row in rows:
            metadata = row.get("metadata") or {}
            source_date = str(row.get("metric_date") or config.get("metric_date") or "")
            if not source_date:
                continue

            indicator_payload = {
                "label": str(metadata.get("label") or config["label"]),
                "value": _get_display_value(row.get("metric_value"), metadata),
                "status": str(metadata.get("status") or f"Supabase {source_date}"),
                "sourceDate": source_date,
                "sourceMetric": metric_name,
            }

            indicators_by_date.setdefault(source_date, {})[config["indicator_key"]] = indicator_payload

            if source_date >= latest_snapshot_date:
                latest_snapshot_date = source_date
                latest_indicators[config["indicator_key"]] = indicator_payload

    payload = {
        "date": latest_snapshot_date,
        "indicators": latest_indicators,
        "byDate": indicators_by_date,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    return payload


if __name__ == "__main__":
    export_dashboard_indicators()
