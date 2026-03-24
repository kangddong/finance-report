# 💾 Data Layer and Integration Guide

프리미엄 파이낸스 대시보드의 모든 주식 데이터 및 분석 리포트는 **정적 데이터 스택**과 **추상화된 데이터 접근 레이어**가 결합되어 관리됩니다.

## 📦 데이터 파일 구조

### 1. **`dashboard/data.js` (원본 스택)**
- 기업 리포트, 섹터 분석, 외부 충격 지표, 포트폴리오 현황 등의 원시 데이터를 담고 있습니다.
- 모든 데이터는 상수(`.const`)와 배열(`.array`)로 정의되며 `export`를 통해 외부로 제공됩니다.
- 주요 데이터 객체:
  - `REPORTS_HISTORY`: 일자별 대시보드 리포트 데이터
  - `ANALYSIS_REPORTS`: 개별 기업/섹터 종목 리포트 맵
  - `EXTERNAL_SHOCK_EVENTS`: 거시 경제 이벤트 타임라인 데이터
  - `EXTERNAL_POLICY_DATA`: 정책 및 금리 기조 데이터
  - `COMPANY_ANALYSIS_ITEMS` 등: 섹션별 고정 항목 데이터

### 2. **`dashboard/finance_word_data.js` (용어 사전)**
- 금융 용어 및 정의 데이터를 전문적으로 관리합니다.
- `FINANCE_WORDS` 객체를 통해 카테고리별 용어를 구조화합니다.

## 🛠️ `db.js`: 데이터 접근 인터페이스 (Hub)

UI 컴포넌트는 `data.js`의 원본 데이터를 직접 사용하지 않고, 반드시 **`js/db.js`**를 거치도록 설계되었습니다. 이 중앙 허브는 다음과 같은 API를 제공합니다.

### **핵심 API 함수**

| 함수명 | 설명 | 반환 타입 |
| :--- | :--- | :--- |
| `getAllReports()` | 모든 과거 리포트 데이터를 최신순으로 반환 | `Array` |
| `getLatestReport()` | 가장 최근(최신일자)의 리포트 반환 | `Object` |
| `getAvailableDates()` | 리포트가 존재하는 유효한 날짜 목록 반환 | `Array<string>` |
| `getReportByDate(date)` | 특정 일자의 리포트 데이터를 반환 | `Object` |
| `getStockInfo(stockName)` | 특정 종목의 상세 섹터/테마/키워드 정보 반환 | `Object` |

### **데이터 연동 (Data Flow)**

1. **데이터 업데이트**: 파이썬 스크립트(`scripts/`) 등이 실행되어 `data.js`의 내용을 업데이트 합니다.
2. **중앙 집중화**: `db.js`가 업데이트된 `data.js` 상수를 `import`하여 다시 통합적으로 `export`합니다.
3. **UI 소비**: 각 섹션 모듈(`js/sections/*.js`)이 필요한 데이터를 `db.js`에서 `import`하여 렌더링에 사용합니다.

## 🚀 데이터 추가 및 수정 가이드
- **날짜별 리포트 추가**: `REPORTS_HISTORY` 배열의 처음에 새로운 리포트 객체를 추가합니다.
- **종목 데이터 수정**: `ANALYSIS_REPORTS`의 해당 종목 키값을 찾아 `content`, `rating`, `tags` 등을 수정합니다.
- **용어 추가**: `FINANCE_WORDS` 객체의 해당 카테고리(예: `Economy`)에 새로운 용어 객체를 추가합니다.
## 2026-03 Session Helpers

- `getLatestIndicatorsSnapshot()` returns `{ date, indicators }` for the dedicated indicator page.
- `getMarketSessionData(report, market)` returns normalized `holdings`, `watchlist`, and `strategy`.
- If a report already contains `krSession` or `usSession`, use those values first.
- If not, split legacy arrays by market as a fallback so older reports still render in the KR/US tab UI.
