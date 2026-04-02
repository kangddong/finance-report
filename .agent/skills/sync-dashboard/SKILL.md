---
name: sync-dashboard
description: 생성된 JSON 리포트 데이터를 앱 대시보드용 JSON 파일(data.json)로 동기화합니다.
---

# Sync Dashboard

생성된 JSON 리포트 데이터를 대시보드용 JSON 파일(`apps/finance-helper/dashboard/data.json`)로 동기화합니다. 이를 통해 대시보드에서 최신 데이터를 확인할 수 있습니다.

## When to use this skill

- `apps/finance-helper/report/YYYY-MM-DD.json` 파일이 생성되거나 수정되었을 때
- 대시보드 데이터를 최신 리포트 기준으로 업데이트하고 싶을 때

## How to use it

1. `apps/finance-helper` 디렉터리에서 `python scripts/sync_reports_to_dashboard.py` 스크립트를 실행하거나,
2. 수동으로 할 경우: `apps/finance-helper/dashboard/data.json` 파일의 `REPORTS_HISTORY` 배열을 읽어옵니다.
3. 새로운 리포트 데이터가 이미 배열에 존재하는지 날짜(date)로 확인합니다.
4. 존재하지 않는다면 배열에 추가하고, 존재한다면 해당 날짜의 데이터를 업데이트합니다.
5. 최종 JSON 객체를 `apps/finance-helper/dashboard/data.json` 파일에 덮어씁니다.
6. 작업 완료 후 대시보드의 데이터 히스토리에 새로운 리포트가 성공적으로 통합되었음을 보고합니다.
