# 🎨 Pricing & Styling System

대시보드의 모든 스타일 요소는 **CSS 변수(Properties)**와 **기능별 모듈(Modular CSS)**로 체계적으로 설계되었습니다.

## 🛠️ CSS 변수 시스템 (Root Variables)

글로벌 변수는 **`dashboard/css/base.css`**에 정의되어 있으며, 색상, 타이포그래피, 테두리 반경 등을 통제합니다.

```css
:root {
  /* Core Colors */
  --bg-dark: #0f172a;        /* 기본 배경 */
  --card-bg: #1e293b;        /* 카드 배경 */
  --accent-blue: #38bdf8;    /* 주력 강조색 */
  --accent-purple: #818cf8;  /* 강조 보라색 */
  
  /* Indicators */
  --positive: #ef4444;       /* 주가 상승 (Red) */
  --negative: #3b82f6;       /* 주가 하락 (Blue) */
  --neutral: #94a3b8;        /* 중립/보합 (Slate) */

  /* Spacing & Borders */
  --radius-lg: 1rem;         /* 큰 둥근 모서리 */
  --shadow-premium: 0 10px 25px -5px rgba(0, 0, 0, 0.3); /* 프리미엄 그림자 */
}
```

## 📁 CSS 모듈 구성 (Modular CSS)

하나의 거대 파일 대신, 각 기능 영역은 독립된 CSS 파일을 가집니다.

- **`base.css`**: 전역 초기화, CSS 변수 정의, 바디 스타일링. 
- **`sidebar.css`**: 대시보드의 좌측 내비게이션 바 전용 스타일.
- **`dashboard.css`**: 메인 컨테이너 레이아웃, 공통 카드 디자인, 헤더.
- **`analysis.css`**: 기업/섹터 분석 그리드, 랭킹 카드, 상세 리포트 팝업.
- **`stocks.css`**: 주식 종목 리스트, 화살표 아이콘, 등락률 인디케이터.
- **`external-factors.css`**: 지정학적 리스크 타임라인, 정책 기조 그래프.
- **`learning.css`**: 채권 가이드, 투자 대가 카드, 포트폴리오 차트.
- **`tools.css`**: 금융 계산기 입력 필드, 모달 레이아웃.

## 📐 디자인 가이드 및 컴포넌트

### 1. **Card Component (`.card`)**
- 모든 정보 단위는 카드 형식으로 구성됩니다.
- 스타일 속성: `glassmorphism` 효과, 미세한 보더(`1px solid rgba(255,255,255,0.05)`), 부드러운 호버 애니메이션.

### 2. **Typography**
- 기본 폰트: **Outfit** (Google Fonts).
- 숫자 표현: `system-ui` 폰트를 사용하여 주가와 등락률의 가독성을 최우선시합니다.

### 3. **Interactivity**
- 버튼 및 카드에는 `transition: all 0.3s ease;`를 적용하여 부드러운 사용자 경험을 제공합니다.
- 사이드바 메뉴는 `.active` 클래스를 통해 현재 위치를 표시합니다.

## 🚀 스타일 확장 방법
새로운 섹션을 추가할 경우 다음 순서를 따릅니다.
1. `dashboard/css/` 경로에 새로운 섹션 이름의 CSS 파일을 생성합니다.
2. `dashboard/index.html` 의 `<head>` 영역에 `<link>` 태그를 추가합니다.
3. 기존 변수를 활용하여 일관된 디자인 시스템을 유지합니다.
