---
name: market-regime
description: "미국 시장 개장 전후의 선물/프리마켓 지표를 분석하여 오늘의 시장 성격(추세 지속 vs 되돌림 vs 변동성)을 판정합니다."
---

# Market Regime Analyzer (Microstructure)

본 스킬은 선물/프리마켓과 정규장 시가 사이의 괴리를 분석하여, 오늘의 장세가 **추세 확정(Trend Confirm)**인지, **과매수/과매도 되돌림(Overreaction Unwind)**인지, 아니면 **양방향 변동성(Two-way Chop)**인지 판별하는 도구입니다.

## 🕒 타임라인 및 체크 포인트 (한국 시간 - 겨울 기준)

1.  **20:00 - 22:00 (Early Pre-market)**: 글로벌 매크로(WTI, US10Y, DXY)와 선물(ES, NQ)의 기조 파악.
2.  **23:20 (Pre-opening)**: 개장 직전 선물 지표 및 주요 종목(NVDA, AAPL 등) 프리마켓 등락률 확정.
3.  **23:30 - 23:35 (Open & Gap Check)**:
    - **Gap (%)** 산출: (정규장 시가 - 전일 종가) / 전일 종가 * 100
    - **Divergence** 산출: Gap - 선물 등락률
4.  **00:00 - 00:30 (First 30-60m)**: 시가 부근 지지/저항 확인 및 **Extension** (현재가 - 시가) 측정.
5.  **01:30 (Post-morning session)**: 추세의 연속성 또는 되돌림의 완성 여부 판정.

## 📊 핵심 지표 및 계산식

| 지표 | 계산식 | 의미 |
| :--- | :--- | :--- |
| **Gap (%)** | `(Open - PrevClose) / PrevClose * 100` | 시장의 개장 기대치/충격량 |
| **Futures Move** | `NQ or ES % changes` | 개장 전 선물 지수 방향성 |
| **Divergence** | `Gap (%) - Futures Move (%)` | 선물 대비 현물의 과열/냉각 정도 (단기 되돌림 확률) |
| **Extension** | `(Current - Open) / Open * 100` | 개장 후 추세의 강도 |

## 🚦 판정 규칙 (Decision Matrix)

### 1. Trend Confirm (추세 지속)
- **조건**: `Extension` 방향이 `Gap` 방향과 일치하며, 개장 30분 후에도 시가를 이탈하지 않음.
- **수치**: `|Divergence| < 0.2%` (선물과 현물의 보조가 맞음).
- **대응**: 추세 방향으로 포지션 진입 또는 보유.

### 2. Overreaction Unwind (과장 반영 후 되돌림)
- **조건**: `Gap`이 과도하게 발생했으나, `Extension`이 반대 방향으로 진행 (갭 메우기).
- **수치**: `|Divergence| > 0.5%` 또는 `|Gap| > 1.0%` 발생 후 시가 회복 실패.
- **대응**: 추격 매수 자제, 반대 방향 스캘핑 또는 관망.

### 3. Two-way Chop (양방향 변동성)
- **조건**: `VIX`가 급증하거나 중요 지표(CPI 등) 발표 직후. 가격이 시가를 중심으로 위아래로 반복 교차.
- **수치**: `Extension`이 시가 기준 ±0.3% 내에서 반복.
- **대응**: 매매 횟수 제한, 지지/저항 하단/상단 박스권 매매.

## 📝 데일리 입력 템플릿

매일 밤 아래 템플릿을 복사하여 `보고서` 작성 시 활용하십시오.

```markdown
### 🔍 [YYYY-MM-DD] Market Regime Check
- **Futures (23:20)**: NQ `[ ]%`, ES `[ ]%`
- **Open (23:30)**: QQQ `[ ]$`, SPY `[ ]$` (Gap: `[ ]%`)
- **Macro**: VIX `[ ]`, US10Y `[ ]`, DXY `[ ]`

**[중간 산출]**
- Divergence (Gap - Futures): `[ ]%`
- Extension (00:30): `[ ]%`

**[최종 판정]**
- [ ] Trend Confirm / [ ] Overreaction Unwind / [ ] Two-way Chop
- **사유**:
```
