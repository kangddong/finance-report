---
description: 매일 아침 시황 판단부터 종목 분석, 대시보드 반영까지 데일리 리포트 전체 루틴 (국장/미장 분리)
---

# 📋 Daily Report Workflow (국장/미장 분리)

리포트는 **하나의 JSON 파일**에 `krSession`(국장)과 `usSession`(미장)으로 섹션 분리하여 저장합니다.
슬래시 커맨드: `/daily-report`

---

## 📁 리포트 데이터 구조

```json
{
  "date": "YYYY-MM-DD",
  "indicators": {
    "fearAndGreed":   { "label": "Fear & Greed",  "value": "", "status": "" },
    "cpiKorea":       { "label": "한국 CPI",       "value": "", "status": "YoY" },
    "cpiUS":          { "label": "미국 CPI",       "value": "", "status": "YoY" },
    "exchangeRate":   { "label": "원/달러 환율",   "value": "", "status": "" },
    "dollarIndex":    { "label": "달러 인덱스",    "value": "", "status": "" },
    "goldSiverRatio": { "label": "금/은 비율",     "value": "", "status": "" },
    "kospiNightFutures": { "label": "코스피 야간선물", "value": "", "status": "" },
    "vkospi":         { "label": "VKOSPI",       "value": "", "status": "" },
    "us10y":          { "label": "미국 10년물",    "value": "", "status": "" },
    "vix":            { "label": "VIX",           "value": "", "status": "" }
  },
  "krSession": {
    "overview": "국장 시황 한 줄 요약",
    "regime": "Trend Confirm | Overreaction Unwind | Two-way Chop",
    "holdings": [],
    "watchlist": [],
    "strategy": { "position": "", "title": "", "description": "" }
  },
  "usSession": {
    "overview": "미장 시황 한 줄 요약",
    "regime": "Trend Confirm | Overreaction Unwind | Two-way Chop",
    "holdings": [],
    "watchlist": [],
    "strategy": { "position": "", "title": "", "description": "" }
  }
}
```

---

## 🌅 아침 루틴 (국장 - 08:00~09:30)

### STEP 1. 매크로 공통 지표 수집

`macro-research` 스킬을 사용하여 아래 지표를 조회하고 `indicators` 필드를 채웁니다.

| 지표 | 출처 |
|------|------|
| Fear & Greed | CNN Money |
| 원/달러 환율 | 네이버 금융 |
| DXY (달러 인덱스) | Yahoo Finance |
| 금/은 비율 (GC/SI) | Yahoo Finance |
| VIX | Yahoo Finance |
| 미국 10년물 (US10Y) | Yahoo Finance |

### STEP 2. 코스피 야간선물 확인 (국장 전 필수)

- 코스피 야간선물 등락률과 VKOSPI를 확인하여 `indicators.kospiNightFutures`, `indicators.vkospi` 입력
- 야간선물 -1% 이하 → 갭하락 대비, 추격 매수 금지

### STEP 3. 국장 장세 판정 (`market-regime`)

`market-regime` 스킬로 국장의 오늘 성격을 판별하여 `krSession.regime` 입력

```
- NQ/ES 전일 종가 기준 방향
- 코스피 야간선물 Gap (%)
- VKOSPI 수준
```

### STEP 4. 국내 종목 차트 캡처 (`toss-capture`)

`toss-capture` 스킬로 **국내 보유 종목** 차트 캡처
- 삼성전자, SK하이닉스, PLUS K 방산, KODEX AI 전력핵심설비, 현대차, 두산에너빌리티
- 저장: `report/images/YYYY-MM-DD/[종목명].png`

### STEP 5. 국내 종목 분석 (`report`)

`report` 스킬로 **국내 종목만** 분석하여 `krSession.holdings` 작성
- 5일선 기준 매수/매도/관망 판단
- 외국인/기관/개인 매매 동향 포함
- `krSession.strategy` 작성 (국장 전략 요약)

### STEP 6. 국장 데이터 1차 동기화 (`sync-dashboard`)

`sync-dashboard` 스킬로 국장 데이터만 우선 반영
- 저장: `report/YYYY-MM-DD.json` (krSession 완성, usSession은 빈 값)

---

## 🌃 저녁 루틴 (미장 - 22:00~23:30)

### STEP 7. 미장 직전 매크로 재확인 (`macro-research`)

미장 개장 전 지표를 업데이트하여 `indicators` 덮어쓰기 (환율/VIX 등 변동 반영)

### STEP 8. 미장 장세 판정 (`market-regime`)

`market-regime` 스킬로 미장의 오늘 성격 판별하여 `usSession.regime` 입력

```
- NQ/ES 선물 (23:20 기준)
- 프리마켓 NVDA, PLTR 등락률
- VIX 수준
```

### STEP 9. 미국 종목 차트 캡처 (`toss-capture`)

`toss-capture` 스킬로 **미국 보유 종목** 차트 캡처
- 사이퍼 마이닝, 엔비디아, 팔란티어
- 저장: `report/images/YYYY-MM-DD/[종목명].png`

### STEP 10. 미국 종목 분석 (`report`)

`report` 스킬로 **미국 종목만** 분석하여 `usSession.holdings` 작성
- `usSession.strategy` 작성 (미장 전략 요약)

### STEP 11. (조건부) 외부 충격 이벤트 (`external-shock-tracker`)

당일 중요 이벤트 발생 시 실행 (관세, 연준 발언, 지정학 이벤트 등)

### STEP 12. 최종 동기화 (`sync-dashboard`)

`sync-dashboard` 스킬로 완성된 전체 데이터 대시보드에 반영
- chrome-devtools로 국장/미장 탭 렌더링 확인
- 콘솔 에러 없음 확인

---

## ✅ 완료 체크리스트

**국장 (아침)**
- [ ] STEP 1: 매크로 공통 지표 수집 (indicators 완성)
- [ ] STEP 2: 코스피 야간선물 확인
- [ ] STEP 3: 국장 Regime 판정 완료
- [ ] STEP 4: 국내 종목 차트 캡처
- [ ] STEP 5: 국내 종목 분석 (krSession 완성)
- [ ] STEP 6: 국장 데이터 1차 동기화

**미장 (저녁)**
- [ ] STEP 7: 미장 직전 매크로 재확인
- [ ] STEP 8: 미장 Regime 판정 완료
- [ ] STEP 9: 미국 종목 차트 캡처
- [ ] STEP 10: 미국 종목 분석 (usSession 완성)
- [ ] STEP 11: 외부 충격 이벤트 정리 (해당 시)
- [ ] STEP 12: 최종 동기화 및 브라우저 확인
