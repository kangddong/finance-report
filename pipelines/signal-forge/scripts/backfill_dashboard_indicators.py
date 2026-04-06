from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

sys.path.append(str(Path(__file__).resolve().parents[1]))


ROOT_DIR = Path(__file__).resolve().parents[3]
DATA_PATH = ROOT_DIR / "apps" / "finance-helper" / "dashboard" / "data.json"

INDICATOR_CONFIG = {
    "fearAndGreed": {
        "metric_name": "FH_DASHBOARD_FEAR_AND_GREED",
        "unit": "index",
    },
    "cpiKorea": {
        "metric_name": "FH_DASHBOARD_CPI_KOREA",
        "unit": "percent",
    },
    "cpiUS": {
        "metric_name": "FH_DASHBOARD_CPI_US",
        "unit": "percent",
    },
    "exchangeRate": {
        "metric_name": "FH_DASHBOARD_EXCHANGE_RATE",
        "unit": "KRW/USD",
    },
    "dollarIndex": {
        "metric_name": "FH_DASHBOARD_DOLLAR_INDEX",
        "unit": "index",
    },
    "goldSiverRatio": {
        "metric_name": "FH_DASHBOARD_GOLD_SILVER_RATIO",
        "unit": "ratio",
    },
}


def _parse_numeric(value: str | int | float | None) -> float | None:
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return float(value)

    cleaned = str(value).strip().replace(",", "").replace("%", "")
    if not cleaned:
        return None

    try:
        return float(cleaned)
    except ValueError:
        return None


def build_rows() -> list[dict[str, Any]]:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    rows: list[dict[str, Any]] = []

    for report in data.get("REPORTS_HISTORY", []):
        report_date = report.get("date")
        indicators = report.get("indicators") or {}
        if not report_date or not indicators:
            continue

        for indicator_key, indicator in indicators.items():
            config = INDICATOR_CONFIG.get(indicator_key)
            if not config:
                continue

            rows.append(
                {
                    "metric_date": report_date,
                    "metric_name": config["metric_name"],
                    "metric_value": _parse_numeric(indicator.get("value")),
                    "unit": config["unit"],
                    "metadata": {
                        "indicatorKey": indicator_key,
                        "label": indicator.get("label") or indicator_key,
                        "status": indicator.get("status") or "",
                        "displayValue": indicator.get("value") or "",
                        "source": "financeHelper.dashboard_data_backfill",
                    },
                }
            )

    return rows


def main() -> None:
    parser = argparse.ArgumentParser(description="Backfill dashboard indicators into Supabase macro_daily.")
    parser.add_argument("--dry-run", action="store_true", help="Print rows instead of upserting them.")
    args = parser.parse_args()

    rows = build_rows()
    if args.dry_run:
        print(json.dumps(rows, ensure_ascii=False, indent=2))
        return

    from collectors.common import create_supabase

    client = create_supabase()
    client.table("macro_daily").upsert(rows, on_conflict="metric_date,metric_name").execute()
    print(f"Upserted {len(rows)} rows into macro_daily.")


if __name__ == "__main__":
    main()
