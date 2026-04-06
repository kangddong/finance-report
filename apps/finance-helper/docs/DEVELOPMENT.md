# 🚀 Development and Expansion Guide

본 문서는 프리미엄 파이낸스 대시보드의 로컬 개발 환경 설정, 새로운 기능 추가 방법, 그리고 코드 유지보수 가이드를 제공합니다.

## 🛠️ 로컬 개발 환경 설정

본 대시보드는 서버 사이드 로직 없이 순수 정적 파일(HTML/CSS/JS)로 구성되어 있습니다. 단, **ES 모듈(ES Modules)** 형식을 사용하므로 브라우저 보안 정책상 반드시 로컬 서버 환경이 필요합니다.

### 1. **간단한 로컬 서버 실행 (추천)**

VS Code 확장 프로그램인 **Live Server**를 사용하거나, 터미널에서 아래 명령어를 실행하세요.

```powershell
# Python이 설치된 경우 (포트 8000)
python -m http.server 8000
```

### 2. **브라우저 접속**

로컬 서버 실행 후 브라우저에서 `http://localhost:8000` 으로 접속하여 변경 사항을 실시간으로 확인합니다.

---

## 🛠️ 기능 확장 워크플로우 (New Feature Addition)

새로운 섹션(예: `AI 추천 섹터`)을 추가하고 싶다면 다음 3단계 절차를 따르세요.

### **Step 1: HTML 컨텐츠 정의**
`dashboard/index.html` 의 `<main>` 영역 내부에 새로운 `<section>` 을 정의합니다.

```html
<section id="section-ai-recommender" class="nav-section">
  <!-- 렌더링될 구조 정의 -->
</section>
```

### **Step 2: 전용 모듈 및 스타일 생성**
섹션 전용 로직과 스타일링 파일을 생성합니다.
1. `dashboard/css/ai-recommender.css` 생성 및 스타일 작성
2. `dashboard/js/sections/ai-recommender.js` 생성 및 렌더링 로직 작성

### **Step 3: 애플리케이션 등록 (app.js)**
`dashboard/js/app.js` 에서 새로 만든 모듈을 `import` 하고 초기화 함수를 호출합니다.

```javascript
import { renderAiRecommender } from './sections/ai-recommender.js';

// DOMContentLoaded 내부에서 호출
document.addEventListener('DOMContentLoaded', () => {
    renderAiRecommender();
    // ...
});
```

---

## 📐 코드 스타일 및 베스트 프랙티스

### 1. **Modular Programming**
- 각 섹션 렌더링 함수는 하나의 기능만 수행하도록 설계하세요.
- 전역 변수 사용을 지양하고, 컴포넌트 내부에서만 상태를 관리하세요.

### 2. **Data-Driven UI**
- UI를 직접 조작하는 대신, `db.js` 에서 데이터를 가져와 루프(`forEach`, `map`)를 통해 HTML 문자열을 동적으로 생성하고 `innerHTML` 에 삽입하는 방식을 권장합니다.

### 3. **Error Handling (보강 예정)**
- 데이터가 없을 경우(`null`, `undefined`)를 대비해 기본값을 설정하고 사이드바 버튼이 제대로 작동하는지 교차 검증하세요.

## 📝 향후 로드맵 (Planned Updates)
- **JSON 기반 동적 리포트 로더**: 특정 일자의 리포트를 외부 JSON 파일로부터 비동기 호출하는 기능.
- **차트 라이브러리 연동**: `Chart.js` 또는 `D3.js` 를 활용한 고급 시각화 모듈 추가.
- **다크/라이트 모드 자동 전환**: 시스템 설정에 따른 테마 전환 최적화.
## 2026-03 Working Rules

- For indicator-page changes, edit `dashboard/indicators.html`, `dashboard/css/indicators.css`, and `dashboard/js/sections/indicators-page.js` together.
- If the same Market Monitor experience is exposed inside `dashboard/index.html`, keep the DOM IDs and rendering contract aligned with `indicators-page.js` so both entry points stay in sync.
- For KR/US dashboard tabs, keep the rendering logic in `dashboard/js/sections/dashboard.js` and resolve data through `dashboard/js/db.js`.
- When adding report fields for one market session, prefer `krSession` and `usSession`, but preserve fallback rendering for legacy reports that only have top-level `holdings`, `watchlist`, and `strategy`.
