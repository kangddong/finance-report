from __future__ import annotations

from typing import Any

import requests

from collectors.common import create_supabase, load_settings, utc_now

ECOS_BASE_URL = "https://ecos.bok.or.kr/api"


def _extract_rows(payload: dict[str, Any], service_name: str) -> list[dict[str, Any]]:
    service = payload.get(service_name, {})
    if isinstance(service, dict):
        rows = service.get("row", [])
        if isinstance(rows, list):
            return rows
    return []


def fetch_key_statistics() -> list[dict[str, Any]]:
    settings = load_settings()
    if not settings.ecos_api_key:
        return []

    url = (
        f"{ECOS_BASE_URL}/KeyStatisticList/"
        f"{settings.ecos_api_key}/json/kr/1/100"
    )
    response = requests.get(
        url,
        headers={"User-Agent": "signal-forge/0.1"},
        timeout=30,
    )
    response.raise_for_status()
    rows = _extract_rows(response.json(), "KeyStatisticList")
    return rows


def build_macro_payload(rows: list[dict[str, Any]]) -> list[dict[str, object]]:
    collected_at = utc_now()
    payload: list[dict[str, object]] = []

    for row in rows:
        stat_name = str(row.get("STAT_NAME", "")).strip()
        value = row.get("DATA_VALUE")
        cycle = str(row.get("CYCLE", "")).strip()
        metric_date = str(row.get("TIME", "")).strip()

        if not stat_name or value in (None, ""):
            continue

        normalized_name = (
            stat_name.upper()
            .replace(" ", "_")
            .replace("/", "_")
            .replace("(", "_")
            .replace(")", "")
            .replace("-", "_")
        )

        date_value = None
        if len(metric_date) == 8:
            date_value = f"{metric_date[:4]}-{metric_date[4:6]}-{metric_date[6:]}"
        elif len(metric_date) == 6:
            date_value = f"{metric_date[:4]}-{metric_date[4:6]}-01"
        elif len(metric_date) == 4:
            date_value = f"{metric_date}-01-01"

        if not date_value:
            continue

        try:
            metric_value = float(str(value).replace(",", ""))
        except ValueError:
            continue

        payload.append(
            {
                "metric_date": date_value,
                "metric_name": f"ECOS_{normalized_name}",
                "metric_value": metric_value,
                "unit": cycle or "ECOS",
                "metadata": {
                    "collector": "collectors.ecos",
                    "collected_at": collected_at,
                    "source": "ECOS",
                    "stat_name": stat_name,
                    "cycle": cycle,
                },
            }
        )

    return payload


def run() -> int:
    rows = fetch_key_statistics()
    if not rows:
        print("[collector:ecos] skipped: ECOS_API_KEY not set or no rows returned")
        return 0

    payload = build_macro_payload(rows)
    if not payload:
        print("[collector:ecos] skipped: no payload built from ECOS rows")
        return 0

    client = create_supabase()
    client.table("macro_daily").upsert(
        payload, on_conflict="metric_date,metric_name"
    ).execute()
    return 0


if __name__ == "__main__":
    raise SystemExit(run())
