from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from collectors.common import create_supabase


TARGET_METRICS = {
    "FH_BACKFILL_VALIDATION_EXCHANGE_RATE": {
        "indicator_key": "exchangeRate",
        "label": "원/달러 환율",
        "metric_date": "2026-03-18",
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


def _fetch_metric_row(client: Any, metric_name: str, metric_date: str | None) -> dict[str, Any] | None:
    query = (
        client.table("macro_daily")
        .select("metric_date,metric_name,metric_value,metadata")
        .eq("metric_name", metric_name)
    )

    if metric_date:
        query = query.eq("metric_date", metric_date)
    else:
        query = query.order("metric_date", desc=True)

    response = query.limit(1).execute()
    rows = response.data or []
    return rows[0] if rows else None


def export_dashboard_indicators() -> dict[str, object]:
    client = create_supabase()
    indicators: dict[str, dict[str, str]] = {}
    snapshot_date = ""

    for metric_name, config in TARGET_METRICS.items():
        row = _fetch_metric_row(client, metric_name, config.get("metric_date"))
        if not row:
            continue

        metadata = row.get("metadata") or {}
        source_date = str(row.get("metric_date") or config.get("metric_date") or "")
        indicators[config["indicator_key"]] = {
            "label": str(metadata.get("label") or config["label"]),
            "value": _format_metric_value(row.get("metric_value")),
            "status": str(metadata.get("status") or f"Supabase {source_date}"),
            "sourceDate": source_date,
            "sourceMetric": metric_name,
        }
        snapshot_date = max(snapshot_date, source_date)

    payload = {
        "date": snapshot_date,
        "indicators": indicators,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    return payload


if __name__ == "__main__":
    export_dashboard_indicators()
