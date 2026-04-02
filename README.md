# financeHelper

금융 대시보드 앱과 데이터 수집 파이프라인을 함께 관리하는 모노레포입니다.

## Structure

```text
financeHelper/
├── apps/
│   └── finance-helper/
│       ├── dashboard/
│       ├── docs/
│       ├── report/
│       ├── scripts/
│       ├── tests/
│       ├── requirements.txt
│       └── 종목.md
├── pipelines/
│   └── signal-forge/
│       ├── collectors/
│       ├── docs/
│       ├── scripts/
│       ├── supabase/
│       └── requirements.txt
└── .github/workflows/
```

## Roles

- `apps/finance-helper`
  - 정적 대시보드 앱
  - 일자별 리포트 JSON과 화면 렌더링 자산 관리
  - `dashboard/data.json` 생성 및 갱신 스크립트 보유
- `pipelines/signal-forge`
  - 시장/정책/거시 데이터 수집 파이프라인
  - Supabase 정규화 테이블 적재
  - GitHub Actions collector 실행 대상

## App Run

```bash
cd apps/finance-helper
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python scripts/sync_reports_to_dashboard.py
python scripts/update_dashboard_with_foreign_data.py
python -m http.server 8000
```

- `http://localhost:8000/dashboard/index.html`
- `http://localhost:8000/dashboard/reports.html`

## Pipeline Run

```bash
cd pipelines/signal-forge
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m scripts.run_collectors
```

## GitHub Actions

- workflow: `.github/workflows/collect-signal-forge.yml`
- working directory: `pipelines/signal-forge`
