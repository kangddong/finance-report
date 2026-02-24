---
name: ui-foreign-trend
description: 대시보드에 외국인 매매 동향 및 수급 분석 데이터를 반영합니다.
---

# UI Foreign Trend

이 스킬은 `scripts/fetch_foreign_investor_trends.py`를 실행하여 최신 외국인 수급 데이터를 가져오고, `dashboard/data.js`를 업데이트하여 대시보드 UI에 반영합니다.

## When to use this skill
- 외국인 매매 동향을 대시보드에 업데이트하고 싶을 때
- 수급 분석 데이터를 최신화하고 싶을 때

## How to use it
1. 이 스킬을 실행하면 `.venv/bin/python scripts/update_dashboard_with_foreign_data.py` 스크립트가 실행됩니다.
2. 스크립트는 다음을 수행합니다:
    - 네이버 금융에서 보유 종목 및 코스피 상위 종목의 외국인 순매수 데이터를 크롤링합니다.
    - `dashboard/data.js`의 가장 최신 리포트 데이터에 `foreignInvestorTrend` 필드를 추가하거나 업데이트합니다.
3. 대시보드를 새로고침하면 "외국인 수급 분석" 카드에 데이터가 표시됩니다.

## Requirements
- `.venv` 가상환경이 설정되어 있어야 합니다.
- `finance-datareader`, `beautifulsoup4`, `requests` 패키지가 설치되어 있어야 합니다.
