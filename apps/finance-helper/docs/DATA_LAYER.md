# 💾 Data Layer and Integration Guide

프리미엄 파이낸스 대시보드의 모든 주식 데이터 및 분석 리포트는 **JSON 정적 파일**과 **비동기 데이터 접근 레이어**가 결합되어 관리됩니다.

## 📦 데이터 파일 구조

### 1. **`dashboard/data.json` (원본 데이터)**
- 기업 리포트, 섹터 분석, 외부 충격 지표, 포트폴리오 현황 등의 원시 데이터를 JSON 형식으로 저장합니다.
- Python 스크립트(`scripts/`)가 `report/*.json`과 외부 수집 결과를 병합하여 이 파일을 갱신합니다.
- 주요 데이터 키:
  - `REPORTS_HISTORY`: 일자별 대시보드 리포트 데이터
  - `ANALYSIS_REPORTS`: 개별 기업/섹터 종목 리포트 맵
  - `EXTERNAL_SHOCK_EVENTS`: 거시 경제 이벤트 타임라인 데이터
  - `EXTERNAL_POLICY_DATA`: 정책 및 금리 기조 데이터
  - `COMPANY_ANALYSIS_ITEMS` 등: 섹션별 고정 항목 데이터

### 2. **`dashboard/finance_word_data.json` (용어 사전)**
- 금융 용어 및 정의 데이터를 전문적으로 관리합니다.
- `FINANCE_WORDS` 배열 구조로 카테고리별 용어를 제공합니다.

### 3. **`dashboard/generated/supabase-indicators.json` (Supabase 지표 스냅샷)**
- Supabase `macro_daily` row를 대시보드가 바로 쓰는 `indicator` 객체로 변환한 산출물입니다.
- 기본 구조는 `{ "date": "YYYY-MM-DD", "indicators": { ... } }` 입니다.
- `db.js`와 레거시 `load-data.js`는 이 파일을 읽어 메인 대시보드 최신 카드에 지표를 오버레이합니다.

## 🛠️ `db.js`: 데이터 접근 인터페이스 (Hub)

UI 컴포넌트는 JSON 파일을 직접 `fetch`하지 않고, 반드시 **`js/db.js`**를 거치도록 설계되었습니다.

### **초기화**

`db.js`는 ES module 형식이며, 데이터를 비동기로 로드합니다. 모든 소비자는 데이터 접근 전에 반드시 `await ready()`를 호출해야 합니다.

```javascript
import { ready, getAllReports } from './db.js';

await ready();          // fetch()로 data.json + finance_word_data.json 로드
const reports = getAllReports();
```

### **핵심 API 함수**

| 함수명 | 설명 | 반환 타입 |
| :--- | :--- | :--- |
| `ready()` | 데이터 로드 완료까지 대기 (최초 1회만 fetch) | `Promise<void>` |
| `getAllReports()` | 모든 과거 리포트 데이터를 최신순으로 반환 | `Array` |
| `getLatestReport()` | 가장 최근(최신일자)의 리포트 반환 | `Object` |
| `getAvailableDates()` | 리포트가 존재하는 유효한 날짜 목록 반환 | `Array<string>` |
| `getReportByDate(date)` | 특정 일자의 리포트 데이터를 반환 | `Object` |
| `getStockInfo(stockName)` | 특정 종목의 상세 섹터/테마/키워드 정보 반환 | `Object` |
| `getLatestIndicatorsSnapshot()` | 최신 리포트의 indicators 반환 | `{ date, indicators }` |
| `getMarketSessionData(report, market)` | 정규화된 holdings/watchlist/strategy 반환 | `Object` |

### **데이터 연동 (Data Flow)**

1. **데이터 업데이트**: Python 스크립트(`scripts/`)가 `report/*.json`과 외부 수집 결과를 `dashboard/data.json`에 반영합니다.
2. **비동기 로드**: `db.js`가 `fetch()` API로 `data.json`, `finance_word_data.json`, `generated/supabase-indicators.json`을 비동기 로드하고 모듈 내부에 캐시합니다.
3. **UI 소비**: 각 섹션 모듈(`js/sections/*.js`)이 필요한 데이터를 `db.js`에서 `import`하여 렌더링에 사용합니다.

## 🚀 데이터 추가 및 수정 가이드
- **날짜별 리포트 추가**: `report/YYYY-MM-DD.json`을 생성한 뒤 `sync_reports_to_dashboard.py`를 실행합니다.
- **종목 데이터 수정**: `dashboard/data.json`의 해당 키를 직접 수정하거나 스크립트를 통해 갱신합니다.
- **용어 추가**: `dashboard/finance_word_data.json`에 새로운 용어 객체를 추가합니다.

## 2026-03 Session Helpers

- `getLatestIndicatorsSnapshot()` returns `{ date, indicators }` for the dedicated indicator page.
- `getMarketSessionData(report, market)` returns normalized `holdings`, `watchlist`, and `strategy`.
- If a report already contains `krSession` or `usSession`, use those values first.
- If not, split legacy arrays by market as a fallback so older reports still render in the KR/US tab UI.
