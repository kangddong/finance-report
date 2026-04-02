# Data Inventory

## Principle

무엇을 수집할지는 "어떤 내러티브를 만들고 싶은가"가 아니라
"어떤 주장을 검증하거나 반박할 수 있는가"를 기준으로 정합니다.

## 1. Market Structure Data

목적: 시장 전체의 방향과 자금 흐름을 확인합니다.

수집 대상:

- 코스피, 코스닥, 주요 업종 지수
- 거래대금, 시가총액
- 외국인/기관/개인 순매수
- 공매도 잔고와 거래 비중
- 투자자 예탁금
- 신용잔고
- 원/달러 환율
- 국채 금리

저장 예시:

- `market_daily`
- `flows_daily`
- `macro_daily`

## 2. Policy And Regulation Data

목적: 제도 변화가 기대인지 실행인지 구분합니다.

수집 대상:

- 금융위원회 보도자료
- 한국거래소 공지
- 한국은행 발표
- 기획재정부 발표
- MSCI 시장 접근성 관련 문서
- 공매도, 상법개정, 외환시장 개방 관련 공지

저장 예시:

- `policy_docs`

필수 필드:

- `title`
- `source_org`
- `source_url`
- `published_at`
- `summary`
- `topics`
- `impact_area`

## 3. Industry Chain Data

목적: 특정 섹터의 구조적 상승 논리를 데이터로 점검합니다.

수집 대상:

- 메모리 반도체 가격
- HBM 관련 공급/증설 뉴스
- AI 데이터센터 CAPEX 뉴스
- 전력기기/원전/조선/방산 수주 뉴스
- 글로벌 빅테크 AI 투자 발표

저장 예시:

- `industry_signals`
- `news_items`

중요 포인트:

- 기사 한 건보다 반복 패턴을 보관합니다.
- 숫자, 기업명, 투자 규모, 발주 주체를 구조화합니다.

## 4. Company-Level Data

목적: 스토리와 실적이 같이 움직이는지 확인합니다.

우선 추적 후보:

- 삼성전자
- SK하이닉스
- 한화에어로스페이스
- HD현대일렉트릭
- 두산에너빌리티

수집 대상:

- 실적 발표
- 컨센서스 변화
- 자사주 취득/소각
- CAPEX
- 수주 공시
- 밸류에이션 지표

저장 예시:

- `company_metrics`
- `company_events`

## 5. Narrative Score Inputs

목적: 영상 한 편의 주장처럼 큰 테마를 수치로 압축합니다.

엔진 후보:

- 반도체 슈퍼사이클
- MSCI/제도 개선
- 주주환원 강화
- 머니무브
- AI 인프라 수혜

저장 예시:

- `theme_scores`

권장 필드:

- `theme_name`
- `score`
- `delta`
- `confidence`
- `evidence_refs`
- `computed_at`

## 6. Output Artifacts

목적: 사람이 바로 읽고 의사결정에 쓸 수 있는 결과물을 만듭니다.

산출물:

- 주간 브리프
- 영상 후보 주제
- 주장별 팩트체크 목록
- 리스크 테이블

저장 예시:

- `weekly_briefs`
- `content_candidates`

## MVP Priority

처음에는 아래만 자동화합니다.

1. 시장 일일 데이터
2. 정책/제도 문서
3. 핵심 종목 이벤트
4. 산업 뉴스 태깅
5. 주간 브리프 생성
