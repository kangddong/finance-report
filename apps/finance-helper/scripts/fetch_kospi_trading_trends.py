import argparse
import json
from datetime import datetime

import requests


HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Referer": "https://www.tossinvest.com/indices/KGG01P",
}
DAILY_URL = "https://wts-info-api.tossinvest.com/api/v1/stock-infos/index/net-buying/daily"
INDEX_CODE = "KGG01P"
INVESTORS = [
    ("개인", "individualsNetBuying"),
    ("외국인", "foreignersNetBuying"),
    ("기관", "institutionsNetBuying"),
]


def format_amount(value):
    eok = int(round(value / 100000000))
    sign = "+" if eok > 0 else ""
    return f"{sign}{eok:,}억"


def fetch_daily_net_buying(count=35):
    response = requests.get(
        DAILY_URL,
        headers=HEADERS,
        params={
            "code": INDEX_CODE,
            "count": count,
            "from": datetime.now().strftime("%Y-%m-%d"),
        },
        timeout=20,
    )
    response.raise_for_status()
    payload = response.json()
    return payload["result"]["investorActivityAmounts"]


def build_market_flow(daily_data):
    market_flow = []
    recent_days = daily_data[:3]

    for investor_name, field_name in INVESTORS:
        latest_value = recent_days[0][field_name]
        market_flow.append(
            {
                "investor": investor_name,
                "summary": f"최신 순매수 금액 {format_amount(latest_value)}",
                "top_stocks": [
                    {"name": f"{row['dt'][5:]} {format_amount(row[field_name])}"}
                    for row in recent_days
                ],
            }
        )

    return market_flow


def build_foreign_daily_tags(daily_data, limit=5):
    return [
        {
            "Rank": index + 1,
            "Name": f"{row['dt'][5:]} {format_amount(row['foreignersNetBuying'])}",
        }
        for index, row in enumerate(daily_data[:limit])
    ]


def build_daily_rows(daily_data, limit=5):
    return [
        {
            "date": row["dt"],
            "individualsNetBuying": row["individualsNetBuying"],
            "foreignersNetBuying": row["foreignersNetBuying"],
            "institutionsNetBuying": row["institutionsNetBuying"],
        }
        for row in daily_data[:limit]
    ]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    daily_data = fetch_daily_net_buying()
    result = {
        "market_flow": build_market_flow(daily_data),
        "daily_rows": build_daily_rows(daily_data),
        "top_foreign": build_foreign_daily_tags(daily_data),
        "source": "Toss Invest",
        "fetchedAt": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    if args.json:
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return

    print("[코스피 매매 동향]")
    for flow in result["market_flow"]:
        print(f"- {flow['investor']}: {flow['summary']}")


if __name__ == "__main__":
    main()
