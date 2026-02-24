# Premium Finance Dashboard 개발 지침 (UI_GUIDE)

이 문서는 `dashboard-sample`의 디자인과 기능을 재현하기 위한 개발 지침을 담고 있습니다.

## 1. 디자인 철학 (Rich Aesthetics)
사용자에게 프리미엄한 첫인상을 주기 위해 다음 요소를 핵심으로 합니다.
- **Glassmorphism**: 배경이 비치는 투명한 카드 디자인 (`backdrop-filter: blur`).
- **Dark Mode**: 깊이감 있는 어두운 배경 (`#030712`)과 선명한 액센트 컬러.
- **Micro-animations**: 요소가 나타날 때 부드럽게 떠오르는 애니메이션 (`fadeInUp`).
- **Typography**: 현대적인 느낌의 'Outfit' 폰트 사용.

## 2. 파일 구조 및 역할
- **index.html**: 대시보드의 뼈대. 헤더, 날짜 선택기, 그리드 레이아웃(보유/관심/조언)을 정의합니다.
- **style.css**: 디자인 시스템 정의. CSS 변수(`:root`)를 사용하여 색상과 간격을 통일합니다.
- **script.js**: `data.js`의 데이터를 읽어 HTML을 동적으로 생성합니다.
- **data.js**: 실제 데이터가 담긴 JavaScript 파일. 전역 변수 `REPORTS_HISTORY` 배열을 포함합니다.

## 3. 핵심 구현 가이드

### A. CSS 변수 및 공통 스타일
```css
:root {
    --primary-bg: #030712;
    --card-bg: rgba(15, 23, 42, 0.75);
    --accent-blue: #38bdf8;
    --text-primary: #ffffff;
    --up-color: #fb7185; /* 상승 */
    --down-color: #60a5fa; /* 하락 */
}

/* Glassmorphism 효과 */
.card {
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.15);
}
```

### B. 동적 컨텐츠 렌더링 (JavaScript)
데이터의 배열 순서에 따라 템플릿 리터럴을 활용해 HTML을 생성합니다.
- `REPORTS_HISTORY`의 마지막 요소가 가장 최근 데이터입니다.
- **Markdown 지원**: `reason` 필드의 `**텍스트**`를 `<strong>텍스트</strong>`로 치환하여 강조 효과를 부여합니다.
  ```javascript
  text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  ```

### C. 데이터 구조 (Data Contract)
`data.js`는 다음과 같은 형식을 유지해야 `script.js`와 호환됩니다.
```javascript
const REPORTS_HISTORY = [
  {
    "date": "YYYY-MM-DD",
    "overview": "요약 문구",
    "holdings": [{ "name": "종목명", "return": "+7.14%", "advice": "HOLD", ... }],
    "watchlist": [...],
    "strategy": { "summary": "...", ... }
  }
];
```

## 4. UI/UX 디테일 체크리스트
- [ ] **반응형 디자인**: 모바일 화면에서 그리드가 1열로 전환되는가?
- [ ] **호버 효과**: 카드가 호버될 때 살짝 위로 뜨거나 확대되는가? (`transform: translateY(-12px)`)
- [ ] **강조 포인트**: 핵심 키워드(종목명 등)에 그라데이션이나 하이라이트가 적용되었는가?
- [ ] **배경 레이어**: `body::before`를 사용하여 배경 이미지를 어둡게 깔아 텍스트 가독성을 확보했는가?

## 5. 스킬과의 연동
- 생성된 보고서 JSON은 `sync-dashboard` 스킬을 통해 `data.js`에 누적되어야 합니다.
- `toss-capture`로 저장된 이미지는 `report/images/` 경로를 참조하여 대시보드에 표시됩니다.
