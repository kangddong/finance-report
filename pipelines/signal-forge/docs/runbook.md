# Runbook

## Purpose

이 문서는 Signal Forge 운영 기준 문서다.
무엇이 자동으로 돌고 있는지, 어떤 secret이 필요한지, 실패 시 어디를 봐야 하는지를 정리한다.

## Current Pipeline

현재 GitHub Actions workflow는 다음 순서로 실행된다.

1. `market`
2. `ecos`
3. `policy`
4. `briefs`

실행 파일:

- `.github/workflows/collect.yml`
- `scripts/run_collectors.py`

## Required Secrets

### Required

- `SUPABASE_URL`
  - 예: `https://zofpynymldlwunixwyvm.supabase.co`
- `SUPABASE_SECRET_KEY`
  - Supabase의 `sb_secret_...` 형식 secret key

### Optional

- `ECOS_API_KEY`
  - 한국은행 ECOS Open API 키
  - 없으면 `ecos` collector는 skip 된다

## Workflow Triggers

현재 workflow는 아래 방식으로 실행 가능하다.

- `workflow_dispatch`
- `schedule`

필요 시 `push` 트리거를 추가할 수 있지만, 문서 수정만으로 실행되는 낭비를 막기 위해 현재는 수동/스케줄 기반으로 운영한다.

## Tables

### `market_daily`

역할:

- KOSPI, KOSDAQ 일일 지수 스냅샷 저장

현재 입력:

- KRX 메인 지수 요약

### `macro_daily`

역할:

- 시장 폭, KRX 개요, 거시 지표 저장

현재 입력:

- KRX 상승/하락/보합 종목 수
- KRX 시장 개요
- ECOS 지표가 있으면 추가 적재

### `policy_docs`

역할:

- 정책/제도 문서 저장

현재 입력:

- 금융위원회 보도자료 목록

주의:

- 금융위 사이트는 TLS/연결 문제가 간헐적으로 발생할 수 있다
- 현재 collector는 재시도 후에도 실패하면 skip 성격으로 취급된다

### `weekly_briefs`

역할:

- 주간 브리프 Markdown 저장

현재 구성:

- 이번 주 핵심 변화
- 시장 요약
- 정책 흐름
- 거시 지표
- 다음 주 체크리스트
- 데이터 범위

## Collector Behavior

### `market`

- 필수 collector
- 실패 시 workflow 실패 처리

수집 항목:

- KOSPI
- KOSDAQ
- 상승/하락/보합 종목 수
- KRX 시장 개요 일부

### `ecos`

- 선택 collector
- `ECOS_API_KEY` 없으면 skip
- 실패해도 전체 workflow는 계속 진행

### `policy`

- 선택 collector
- 금융위 사이트 연결 문제 가능
- 실패해도 전체 workflow는 계속 진행

### `briefs`

- 필수 collector
- `market_daily`, `macro_daily`, `policy_docs`를 읽어 `weekly_briefs` 생성
- 실패 시 workflow 실패 처리

## Failure Handling

### 1. Workflow 자체가 실패할 때

가장 먼저 확인할 것:

- GitHub Actions 로그
- 실패한 collector 이름

파일:

- `scripts/run_collectors.py`

### 2. `market` 실패

확인 포인트:

- KRX 메인 페이지 접근 가능 여부
- KRX JSON 응답 구조 변경 여부

관련 파일:

- `collectors/market.py`

영향:

- `weekly_briefs` 품질 저하 또는 실패 가능

### 3. `policy` 실패

확인 포인트:

- 금융위 사이트 연결 상태
- TLS reset 여부
- HTML 구조 변경 여부

관련 파일:

- `collectors/policy.py`

영향:

- 정책 문서가 비어도 workflow 전체는 성공 가능

### 4. `briefs` 실패

확인 포인트:

- `market_daily`에 최소 데이터가 있는지
- `macro_daily` 쿼리 결과가 정상인지
- 테이블 스키마 변경이 있었는지

관련 파일:

- `collectors/briefs.py`

영향:

- 주간 브리프 생성 실패
- workflow 실패 처리

## Normal Verification

실행 후 정상 여부는 아래 순서로 본다.

1. `Actions`에서 workflow 성공 확인
2. Supabase `market_daily` 최근 row 확인
3. Supabase `macro_daily` 최근 row 확인
4. Supabase `weekly_briefs` 최신 row 확인

## Next Planned Work

- 두 번째 정책 소스 추가
- ECOS 실사용 여부 결정
- 브리프 리스크 플래그 강화
- 수급/환율/금리 소스 확장
