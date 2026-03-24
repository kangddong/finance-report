---
name: fetch-indicators
description: 거래 전후 모니터링 지수와 매크로 체크리스트를 수집해 `report/YYYY-MM-DD.json`의 `indicators` 필드를 채우고, 대시보드 지수 확인 페이지에서 바로 해석할 수 있는 형태로 정리한다. 미국 선물, 코스피 야간선물, 환율, 변동성, 금리, 원자재, 실시간 수급 지표를 업데이트하거나 `indicators` 구조를 보강할 때 사용한다.
---

# Fetch Indicators

장 전과 장 중에 확인해야 할 핵심 지수를 일관된 구조로 정리한다.

## Update scope

- 장 전 루틴
  - 미국 선물: `esFutures`, `nqFutures`, `ymFutures`, `rtyFutures`
  - 한국 야간 선물: `kospiNightFutures`, `kosdaqNightFutures`
  - 환율/달러: `exchangeRate`, `dollarIndex`, `usdJpy`, `usdCnh`
  - 변동성: `vix`, `move`, `vkospi`, `vxn`
  - 금리: `us10y`, `us2y`, `yieldSpread`, `kr3y`
- 장 중 루틴
  - 프로그램 매매: `programTrading`
  - 외국인 실시간 순매수: `foreignNetBuyingLive`
  - 코스피 거래대금: `kospiTurnover`
  - 업종 주도력: `sectorBreadth`
  - 반도체 체크: `sox`
- 원자재/안전자산
  - `wti`, `gold`, `goldSilverRatio`, `copper`, `bitcoin`
- 보조 심리 지표
  - `fearAndGreed`

## Monitoring priorities

### 초필수

- `kospiNightFutures`: 다음 날 코스피 시초가 예측의 핵심
- `nqFutures`, `esFutures`: 미장 방향성과 국장 동조 여부 확인
- `exchangeRate`: 외국인 수급 압력 확인
- `vix`: 글로벌 공포 수준
- `fearAndGreed`: 위험선호 요약

### 중요

- `vkospi`: 국내 투자심리
- `dollarIndex`: 달러 강세 여부
- `us10y`: 성장주 압박 여부
- `foreignNetBuyingLive`: 외국인 실시간 방향
- `sox`: 반도체 업종 체감 방향

### 특수 상황

- `move`: 채권 패닉 확인
- `usdJpy`: 엔 캐리 청산 우려 확인
- `wti`: 지정학 리스크 확인
- `goldSilverRatio`: 극단적 리스크오프 확인

## Interpretation guide

- `kospiNightFutures`
  - `<= -1.0%`: 다음 날 갭하락 경계
  - `< 0%`: 약세 출발 가능성
  - `>= 0%`: 보합 또는 강세 출발 가능성
- `exchangeRate`
  - `>= 1400`: 외국인 매도 압력 경계
- `vix`
  - `< 20`: 안정
  - `20-29.99`: 경계
  - `>= 30`: 공포
- `us10y`
  - `>= 4.5%`: 성장주 부담
- `goldSilverRatio`
  - `< 60`: Risk On
  - `60-80`: 중립
  - `> 80`: 극도 공포

## Workflow

1. 최신 날짜의 `report/YYYY-MM-DD.json`을 연다.
2. 아래 지수 목록을 기준으로 `indicators` 키를 채우거나 갱신한다.
3. 값이 실시간성 강한 경우 숫자와 함께 짧은 해석형 `status`를 넣는다.
4. 새 키를 추가했다면 대시보드 페이지와 `dashboard/js/db.js` 소비 구조가 깨지지 않는지 확인한다.
5. 지수 확인 페이지(`dashboard/indicators.html`)에서 카드와 우선순위 표가 정상 렌더링되는지 확인한다.

## Recommended label map

```json
{
  "fearAndGreed": { "label": "Fear & Greed", "value": "", "status": "" },
  "esFutures": { "label": "S&P 500 선물", "value": "", "status": "" },
  "nqFutures": { "label": "나스닥 선물", "value": "", "status": "" },
  "ymFutures": { "label": "다우 선물", "value": "", "status": "" },
  "rtyFutures": { "label": "러셀 2000 선물", "value": "", "status": "" },
  "kospiNightFutures": { "label": "코스피 야간선물", "value": "", "status": "" },
  "kosdaqNightFutures": { "label": "코스닥 야간선물", "value": "", "status": "" },
  "exchangeRate": { "label": "원/달러 환율", "value": "", "status": "" },
  "dollarIndex": { "label": "달러 인덱스", "value": "", "status": "" },
  "usdJpy": { "label": "USD/JPY", "value": "", "status": "" },
  "usdCnh": { "label": "USD/CNH", "value": "", "status": "" },
  "vix": { "label": "VIX", "value": "", "status": "" },
  "move": { "label": "MOVE", "value": "", "status": "" },
  "vkospi": { "label": "VKOSPI", "value": "", "status": "" },
  "vxn": { "label": "VXN", "value": "", "status": "" },
  "us10y": { "label": "미국 10년물", "value": "", "status": "" },
  "us2y": { "label": "미국 2년물", "value": "", "status": "" },
  "yieldSpread": { "label": "10Y-2Y 스프레드", "value": "", "status": "" },
  "kr3y": { "label": "한국 3년물 국채", "value": "", "status": "" },
  "programTrading": { "label": "프로그램 매매", "value": "", "status": "" },
  "foreignNetBuyingLive": { "label": "외국인 실시간 순매수", "value": "", "status": "" },
  "kospiTurnover": { "label": "코스피 거래대금", "value": "", "status": "" },
  "sectorBreadth": { "label": "업종별 등락", "value": "", "status": "" },
  "sox": { "label": "SOX", "value": "", "status": "" },
  "wti": { "label": "WTI 유가", "value": "", "status": "" },
  "gold": { "label": "금", "value": "", "status": "" },
  "goldSilverRatio": { "label": "금/은 비율", "value": "", "status": "" },
  "copper": { "label": "구리", "value": "", "status": "" },
  "bitcoin": { "label": "비트코인", "value": "", "status": "" }
}
```

## Output rule

- `value`는 화면에 바로 쓸 수 있는 문자열로 저장한다.
- `status`는 단순 등락이 아니라 투자 해석이 보이도록 짧게 쓴다.
- 실시간 수집이 어려운 지표는 가장 최근 확인 시점 기준으로 업데이트하고, 값이 없으면 키를 유지한 채 빈 문자열 대신 `N/A`를 사용한다.
