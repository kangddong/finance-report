# 📊 Finance Dashboard Development Documentation

이 문서는 프리미엄 파이낸스 대시보드의 아키텍처, 데이터 구조 및 개발 가이드를 제공합니다.

## 📁 문서 리스트

- [🏗️ 시스템 아키텍처 (ARCHITECTURE.md)](./ARCHITECTURE.md): 프로젝트의 구조와 모듈화 전략
- [💾 데이터 레이어 가이드 (DATA_LAYER.md)](./DATA_LAYER.md): `data.js` 구조와 `db.js` 인터페이스
- [🎨 스타일링 시스템 (STYLING.md)](./STYLING.md): 모듈화된 CSS 관리 및 스타일 가이드
- [🚀 개발 및 확장 가이드 (DEVELOPMENT.md)](./DEVELOPMENT.md): 새로운 기능 추가 및 로컬 개발 환경 설정

## 🛠️ 최근 리팩토링 하이라이트 (V2.0)
- **Monolith to Module**: 거대한 `style.css`와 `script.js`를 기능별 모듈로 완전히 분리했습니다.
- **ES Modules 도입**: 모든 자바스크립트 로직을 브라우저 표준 모듈 방식으로 구현했습니다.
- **중앙 데이터 인터페이스**: `db.js`를 통해 모든 데이터 접근을 일원화했습니다.
