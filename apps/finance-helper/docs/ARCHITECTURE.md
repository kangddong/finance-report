# 🏗️ Premium Finance Dashboard Architecture (V2.0)

본 대시보드는 **UI 독립성**, **데이터 접근의 중앙화**, **모듈별 유지보수**를 핵심 가치로 설계된 **Modern JavaScript Application**입니다.

## 📁 디렉토리 구조 및 역할

```text
dashboard/
├── index.html            # 메인 애플리케이션 진입점 (모든 섹션 컨테이너)
├── data.json             # 원본 데이터 (fetch로 비동기 로드)
├── generated/
│   └── supabase-indicators.json # Supabase에서 동기화된 지표 스냅샷 (`date` + `indicators`)
├── finance_word_data.json # 금융 용어 사전 데이터
├── css/                  # 모듈화된 스타일 시트
│   ├── base.css          # 글로벌 변수, 초기화, 배경 설정
│   ├── sidebar.css       # 내비게이션 및 레이아웃
│   ├── dashboard.css     # 공통 구성 요소 (카드, 헤더 등)
│   ├── analysis.css      # 기업/섹터 분석 그리드 및 카드 전용
│   ├── ... (외부 요소, 학습, 주식 목록 등 전용 CSS)
├── js/                   # 현대적인 ES 모듈 기반 로직
│   ├── app.js            # 메인 오케스트레이터 (애플리케이션 초기화 및 이벤트 바인딩)
│   ├── db.js             # 데이터 레이어 허브 (fetch + 캐시 + 접근 API, `ready()` 필수)
│   ├── sections/         # 섹션별 렌더링 로직 (ES Modules)
│   │   ├── dashboard.js  # 메인 대시보드 및 지표 렌더링
│   │   ├── analysis.js   # 기업 리포트 그리드 렌더링
│   │   ├── learn.js      # 학습용 (채권, 포트폴리오 등) 렌더링
│   │   ├── wordbook.js   # 금융 용어 사전 인터랙션
│   │   └── ... (외부 요인 등)
│   └── utils/            # 범용 유틸리티
│       └── markdown.js   # 텍스트 마크다운 파서 및 포맷터
```

## 🛠️ 주요 아키텍처 원칙 (Core Principles)

### 1. **Data Centralization (db.js)**
- 모든 UI 컴포넌트는 JSON 파일을 직접 `fetch`하지 않습니다.
- `db.js`가 `fetch()` API로 `data.json`을 비동기 로드하고, 모듈 내부에 캐시합니다.
- 선택적으로 `generated/supabase-indicators.json`을 함께 읽어 대시보드가 바로 쓸 수 있는 `indicators` 스냅샷을 최신 카드에 오버레이합니다.
- 소비자(app.js, indicators-app.js 등)는 데이터 접근 전에 반드시 `await ready()`를 호출합니다.
- 이후 `getAllReports()`, `getLatestReport()` 등 API를 통해 데이터에 접근합니다.

### 2. **Section Separation (Single Responsibility)**
- 각 UI 섹션은 자신만의 전용 JS 모듈(`js/sections/*.js`)과 전용 CSS 파일(`css/*.css`)을 가집니다.
- 하나의 섹션을 수정하거나 추가할 때 다른 섹션에 영향을 주지 않도록 완전히 격리되었습니다.

### 3. **Modern Lifecycle Management (DOMContentLoaded)**
- `app.js`에서 통합적으로 `DOMContentLoaded` 이벤트를 관리하며, 초기화 시점에 필요한 모든 섹션 리스너를 한 번에 등록합니다.
- 동적으로 데이터가 바뀔 때 마다 `renderDashboard` 등을 호출하여 UI를 업데이트하는 선언적 패턴을 지향합니다.

### 4. **SEO & Accessibility Ready**
- 시맨틱 HTML5 태그를 적극 활용하여 검색 엔진 및 보조 공학 기기의 접근성을 높였습니다. 
## 2026-03 Update Notes

- `dashboard/indicators.html` is now a dedicated indicator-check page instead of a large inline script page.
- Indicator page logic lives in `dashboard/js/sections/indicators-page.js`.
- Indicator page styling lives in `dashboard/css/indicators.css`.
- Main dashboard session switching is handled through `dashboard/js/db.js` session helpers and `dashboard/js/sections/dashboard.js`.
- UI modules must continue to read report data through `db.js`, not by fetching `data.json` directly.
- All entry points (`app.js`, `indicators-app.js`) call `await ready()` before any data access.
