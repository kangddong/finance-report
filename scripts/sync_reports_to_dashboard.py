import json
import os
import re

DATA_JSON_PATH = os.path.join('dashboard', 'data.json')
REPORT_DIR = 'report'
REQUIRED_REPORT_KEYS = ('date', 'overview', 'holdings', 'watchlist', 'strategy')


def normalize_legacy_report(date, entries, existing_by_date):
    existing = existing_by_date.get(date)
    if isinstance(existing, dict):
        print(f"Using existing normalized report for legacy file {date}.json")
        return existing

    holdings = []
    watchlist = []
    for entry in entries:
        normalized = {
            'name': entry.get('name'),
            'currentPrice': entry.get('price'),
            'return': entry.get('change'),
            'advice': entry.get('advice'),
            'reason': entry.get('reason'),
            'image': entry.get('image'),
        }
        if entry.get('type') == '관심':
            normalized['outlook'] = entry.get('outlook', '확인 필요')
            watchlist.append(normalized)
        else:
            holdings.append(normalized)

    return {
        'date': date,
        'overview': '레거시 형식 리포트에서 변환된 데이터입니다.',
        'indicators': {},
        'holdings': holdings,
        'watchlist': watchlist,
        'strategy': {
            'position': 'Legacy',
            'title': '레거시 리포트 변환',
            'description': '구버전 JSON 포맷을 현재 대시보드 형식으로 변환했습니다.',
            'summary': '구버전 JSON 포맷을 현재 대시보드 형식으로 변환했습니다.',
        },
    }


def is_dashboard_report(data):
    return isinstance(data, dict) and all(key in data for key in REQUIRED_REPORT_KEYS)


def normalize_single_stock_report(date, data, existing_by_date):
    existing = existing_by_date.get(date)
    if is_dashboard_report(existing):
        print(f"Using existing normalized report for non-dashboard file {date}.json")
        return existing

    stock_name = data.get('name', '단일 종목 리포트')
    current_price = data.get('price', '-')
    avg_price = data.get('avg_price', '-')
    change = data.get('change', '-')
    reason = data.get('reason', '상세 분석 내용이 없습니다.')
    image = data.get('image')

    return {
        'date': date,
        'overview': f"{stock_name} 중심의 단일 종목 딥다이브 리포트입니다. 최신 대시보드 스키마에 맞춰 요약 항목으로 변환했습니다.",
        'indicators': {},
        'holdings': [
            {
                'name': stock_name,
                'avgPrice': avg_price,
                'currentPrice': current_price,
                'return': change,
                'advice': 'WATCH',
                'reason': reason,
                'image': image,
            }
        ],
        'watchlist': [],
        'strategy': {
            'position': 'Single Stock',
            'title': f'{stock_name} 딥다이브',
            'description': '단일 종목 분석 리포트를 대시보드 카드 형식으로 변환했습니다.',
            'summary': reason,
        },
    }

def validate_schema(data):
    if not isinstance(data, dict):
        raise ValueError("Root data.json must be a JSON object (dictionary).")
    
    required_keys = ['REPORTS_HISTORY', 'ANALYSIS_REPORTS', 'COMPANY_DETAIL_LIBRARY']
    for key in required_keys:
        if key not in data:
            data[key] = [] if key != 'COMPANY_DETAIL_LIBRARY' else {}
            print(f"Warning: Missing key '{key}' in data.json. Initialized empty.")
            
    if not isinstance(data['REPORTS_HISTORY'], list):
        raise ValueError("'REPORTS_HISTORY' must be a list.")
    if not isinstance(data['ANALYSIS_REPORTS'], list):
        raise ValueError("'ANALYSIS_REPORTS' must be a list.")
    if not isinstance(data['COMPANY_DETAIL_LIBRARY'], dict):
        raise ValueError("'COMPANY_DETAIL_LIBRARY' must be a dictionary.")
    return True

def sync_reports():
    print("Starting sync of all reports...")

    try:
        with open(DATA_JSON_PATH, 'r', encoding='utf-8') as f:
            full_data = json.load(f)
            
        validate_schema(full_data)

        old_reports = full_data.get('REPORTS_HISTORY', [])
        existing_by_date = {
            report.get('date'): report
            for report in old_reports
            if isinstance(report, dict) and report.get('date')
        }

        if not os.path.exists(REPORT_DIR):
            print(f"Report directory {REPORT_DIR} does not exist.")
            return

        reports = []
        files = [f for f in os.listdir(REPORT_DIR) if f.endswith('.json')]
        files.sort(reverse=True)

        for filename in files:
            filepath = os.path.join(REPORT_DIR, filename)
            date = os.path.splitext(filename)[0]
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    data = json.load(f)

                if isinstance(data, list):
                    data = normalize_legacy_report(date, data, existing_by_date)
                elif isinstance(data, dict) and not is_dashboard_report(data):
                    data = normalize_single_stock_report(date, data, existing_by_date)
                elif not isinstance(data, dict):
                    raise ValueError(f"Unsupported report type: {type(data).__name__}")

                reports.append(data)
                print(f"Loaded {filename}")
            except Exception as e:
                print(f"Error loading {filename}: {e}")

        if not reports:
            print("No reports found.")
            return

        extra_data_map = {}
        for report in old_reports:
            if not isinstance(report, dict):
                continue
            date = report.get('date')
            if date and 'foreignInvestorTrend' in report:
                extra_data_map[date] = {'foreignInvestorTrend': report['foreignInvestorTrend']}

        for rep in reports:
            date = rep.get('date')
            if date in extra_data_map:
                print(f"Restoring extra data for {date}")
                rep.update(extra_data_map[date])

        full_data['REPORTS_HISTORY'] = reports

        with open(DATA_JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(full_data, f, ensure_ascii=False, indent=4)

        print("Successfully synced reports to data.json")

    except Exception as e:
        print(f"Error updating data.json: {e}")

if __name__ == "__main__":
    sync_reports()
