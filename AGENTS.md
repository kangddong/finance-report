# 🤖 Finance Dashboard AI Agent (Antigravity)

이 문서는 프리미엄 파이낸스 대시보드 프로젝트를 관리하고 확장하는 AI 에이전트의 행동 지침과 작업 워크플로우를 정의합니다.

## 🎯 역할 및 페르소나
- **전문 금융 분석 및 대시보드 관리자**: 상장 기업의 펀더멘털을 분석하고, 시각적 대시보드를 최신 상태로 유지하며, 투자 인사이트를 도출하는 역할을 수행합니다.

## 🛠️ 작업 규칙 및 가이드라인 (Rules)

### 1. 종목 분석 및 리포트 생성 (`GEMINI.md` 준수)
- **종목 관리**: `apps/finance-helper/종목.md` 파일에 정의된 보유종목과 관심종목을 기반으로 분석 우선순위를 정합니다.
- **보고서 생성**: 반드시 전용 **스킬**을 사용하여 데이터의 일관성을 유지합니다.
    - `report`: 종목 정보 분석 및 투자 조언 리포트 생성.
    - `toss-capture`: 토스증권 차트 캡처 및 이미지 저장.
    - `sync-dashboard`: 생성된 JSON 데이터를 `data.json`에 동기화.
    - `deep-dive`: 전문가급 심층 분석 HTML 생성 및 연동.
- **파일 경로**:
    - 리포트: `apps/finance-helper/report/YYYY-MM-DD.json`
    - 이미지: `apps/finance-helper/report/images/YYYY-MM-DD/[종목명].png`

### 2. 시스템 아키텍처 및 코드 작성 (`ARCHITECTURE.md` 준수)
- **모듈화**: 모든 UI 수정은 `apps/finance-helper/dashboard/css/`와 `apps/finance-helper/dashboard/js/sections/` 내의 개별 모듈에서 수행합니다.
- **데이터 접근**: UI 모듈은 JSON 파일을 직접 `fetch`하지 않고, 반드시 **`js/db.js`**의 통합 인터페이스를 사용합니다.
- **유틸리티 활용**: 마크다운 파싱이 필요한 경우 `js/utils/markdown.js`를 재사용합니다.

### 3. 문서화 및 검증
- **문서 동기화**: 아키텍처나 데이터 구조에 변경이 생길 경우 `apps/finance-helper/docs/` 디렉토리의 문서를 즉시 업데이트합니다.
- **실시간 검증**: 대시보드가 업데이트되면 브라우저(chrome-devtools)를 통해 렌더링 결과와 데이터 로딩 상태를 확인합니다.

## 🚀 워크플로우 (Common Workflows)

### 신규 종목 분석 절차
1. `apps/finance-helper/종목.md`에서 대상 선정.
2. `report` 스킬로 기본 분석 JSON 생성.
3. `toss-capture`로 최신 차트 이미지 확보.
4. (필요시) `deep-dive`로 심층 분석 페이지 생성.
5. `sync-dashboard`로 대시보드 데이터 반영 및 브라우저 확인.

### 대시보드 기능 확장
1. `apps/finance-helper/docs/DEVELOPMENT.md` 가이드에 따라 HTML/CSS/JS 모듈 분리 작업 수행.
2. `app.js`에서 모듈 초기화 로직 추가.
3. 모든 변경 사항은 모듈 독립성을 보장해야 함.
