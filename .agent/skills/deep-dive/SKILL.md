---
name: deep-dive
description: 개별 기업에 대한 전문가급 딥다이브 분석 HTML 페이지를 생성하고 대시보드와 연동하는 End-to-End 워크플로우 스킬이다. 기업 분석 요청, 종목 심층 분석, A-to-Z 정리, 마스터급 리포트 생성 시 트리거된다.
---

# Deep Dive — 기업 전문가 딥다이브 분석 스킬

## 개요

특정 기업에 대해 **전문가 수준의 A-to-Z 딥다이브 분석**을 수행하고, 프리미엄 HTML 리포트를 생성하여 대시보드에 연동하는 전체 워크플로우이다.

기존 `company-analysis` 스킬(분석 프레임)과 `create-analysis` 스킬(HTML 생성)을 통합하고, 데이터 수집 → 분석 → HTML 생성 → 대시보드 연동까지 **자동화**한다.

## 트리거 조건

다음 키워드가 포함된 요청이 들어오면 이 스킬을 사용한다:

- "딥다이브", "심층 분석", "A to Z", "전문가 분석", "마스터급 분석"
- "기업 분석해줘" + 특정 종목명
- "펀더멘털 분석", "가이던스 분석", "거버넌스 분석"

## 워크플로우 (5단계)

### Phase 1: 정보 수집

1. `종목.md`에서 대상 종목의 보유/관심 여부 및 평단가를 확인한다.
2. `search_web`으로 아래 정보를 수집한다:
   - 최신 분기/연간 실적 (매출, 영업이익, EPS, FCF 등)
   - Forward Guidance (매출 가이던스, 마진 전망, Rule of 40 등)
   - 거버넌스 구조 (지배구조, SBC, 내부자 거래 등)
   - 동종업계 밸류에이션 비교 (P/E, P/S, EV/EBITDA 등)
   - 애널리스트 목표주가 (최소 3곳 이상)
   - 최근 뉴스, 컨퍼런스콜, 주주서한 핵심 내용
   - 리스크 요인 (규제, 경쟁, 매크로 등)
3. `toss-capture` 스킬로 해당 종목의 차트를 캡처한다.
   - 저장 위치: `report/images/YYYY-MM-DD/{종목명}.png`

### Phase 2: 분석 수행

`company-analysis` 스킬의 분석 프레임을 따르되, **전문가 딥다이브** 수준으로 아래 9개 필수 섹션을 작성한다:

| # | 섹션 | 필수 포함 내용 |
|---|------|--------------|
| 0 | **한줄 결론** | 핵심 투자 포인트를 한 문장으로. 데이터 근거 포함 |
| 1 | **핵심 KPI 대시보드** | 6개 이상의 KPI 카드 (매출, 성장률, Rule of 40, FCF 마진, NDR, 흑자 분기 등) |
| 2 | **기업 개요** | 사업 모델, 핵심 제품/서비스별 카드, 고객군, 매출 구성 |
| 3 | **차트 분석** | 토스 캡처 이미지 + 이평선 분석, 지지선/저항선 |
| 4 | **실적과 성장률** | 최소 3개년 실적 비교표 + 가이던스 + Rule of 40 해석 |
| 5 | **기술적 해자** | 전환 비용, 네트워크 효과, 브랜드 파워, 특허/IP 등 |
| 6 | **성장 전략** | 신제품, M&A, 시장 확장, 파트너십 등 |
| 7 | **거버넌스** | 지배구조, SBC 추이, 내부자 매매, 주주 환원 정책 |
| 8 | **밸류에이션** | 동종업계 비교표 (최소 2개 기업) + 애널리스트 목표가 |
| 9 | **리스크 & 투자 판단** | Bull/Bear case, 사용자 평단가 기반 맞춤 전략 |

### Phase 3: HTML 페이지 생성

`dashboard/analysis/{종목영문명}.html`에 프리미엄 HTML 파일을 생성한다.

#### 필수 디자인 규칙

1. `../style.css`를 상속하여 대시보드와 통일감을 유지한다.
2. 아래 **전용 CSS 컴포넌트**를 `<style>` 블록에 포함한다:

```html
<style>
    .analysis-container { max-width: 900px; margin: 0 auto; padding: 4rem 2rem; }
    .analysis-header { margin-bottom: 3rem; text-align: center; }
    .analysis-content {
        background: var(--card-bg);
        backdrop-filter: blur(40px);
        border-radius: 32px;
        padding: 4rem;
        border: 1px solid var(--glass-border);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    /* KPI 카드 그리드 */
    .kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem; margin: 2rem 0;
    }
    .kpi-card {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 18px; padding: 1.25rem; text-align: center;
        transition: transform 0.3s ease;
    }
    .kpi-card:hover { transform: translateY(-4px); border-color: rgba(56, 189, 248, 0.3); }
    .kpi-value {
        font-size: 1.8rem; font-weight: 800;
        background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .kpi-label { font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.35rem; }

    /* 제품/서비스 카드 */
    .product-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2rem 0; }
    .product-card {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px; padding: 1.25rem;
    }
    .product-card h4 { color: var(--accent-blue); margin-bottom: 0.5rem; }

    /* 비교 테이블 */
    .comparison-table { width: 100%; border-collapse: collapse; margin: 2rem 0; background: rgba(255,255,255,0.02); border-radius: 16px; overflow: hidden; }
    .comparison-table th, .comparison-table td { padding: 1.25rem; text-align: left; border-bottom: 1px solid var(--glass-border); }
    .comparison-table th { background: rgba(255,255,255,0.05); color: var(--accent-blue); font-weight: 600; }

    /* 하이라이트 박스 */
    .highlight-box { border-left: 4px solid var(--accent-blue); padding: 1.5rem; background: rgba(0, 122, 255, 0.1); border-radius: 0 16px 16px 0; margin: 2rem 0; }
    .highlight-box.purple { border-left-color: var(--accent-purple); background: rgba(129, 140, 248, 0.08); }
    .highlight-box.green { border-left-color: #22c55e; background: rgba(34, 197, 94, 0.08); }
    .highlight-box.red { border-left-color: #ef4444; background: rgba(239, 68, 68, 0.08); }

    /* 흐름도 */
    .logic-flow { display: flex; align-items: center; justify-content: space-between; margin: 3rem 0; flex-wrap: wrap; gap: 1.5rem; background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 20px; }
    .logic-step { background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 16px; text-align: center; flex: 1; min-width: 150px; border: 1px solid var(--glass-border); transition: transform 0.3s ease; }
    .logic-step:hover { transform: translateY(-5px); }
    .logic-step h4 { color: var(--accent-blue); margin-bottom: 0.5rem; }
    .arrow { font-size: 1.5rem; color: var(--accent-blue); opacity: 0.5; }

    /* 차트 이미지 */
    .chart-img { width: 100%; border-radius: 16px; margin: 2rem 0; border: 1px solid rgba(255,255,255,0.1); }

    /* Typography */
    h2 { margin-top: 3rem; color: #fff; border-bottom: 2px solid var(--accent-blue); display: inline-block; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
    h3 { color: var(--accent-blue); margin-top: 2rem; margin-bottom: 1rem; }
    p { line-height: 1.8; color: #ccc; margin-bottom: 1.5rem; }
    ul { margin-bottom: 1.5rem; list-style: none; padding-left: 0; }
    ul li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; color: #ddd; line-height: 1.7; }
    ul li::before { content: "▸"; color: var(--accent-blue); position: absolute; left: 0; font-weight: bold; }

    /* 네비게이션 */
    .back-link { display: inline-flex; align-items: center; color: var(--accent-blue); text-decoration: none; font-weight: 600; margin-bottom: 1rem; transition: gap 0.2s; gap: 0.3rem; }
    .back-link:hover { gap: 0.5rem; }
    .status-tag { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem; }
    .status-buy { background: rgba(34, 197, 94, 0.2); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.3); }
    .status-hold { background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); }
    .status-sell { background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); }

    @media (max-width: 768px) {
        .product-grid { grid-template-columns: 1fr; }
        .kpi-grid { grid-template-columns: repeat(2, 1fr); }
        .analysis-content { padding: 2rem; }
    }
</style>
```

#### HTML 골격 구조

```html
<body>
    <div class="analysis-container">
        <header class="analysis-header">
            <a href="../index.html" class="back-link">← DASHBOARD</a>
            <div class="status-tag status-buy">투자 의견: BUY</div>  <!-- buy/hold/sell -->
            <h1>{기업명} ({티커})<br>전문가 딥다이브 분석</h1>
            <p>작성일: YYYY-MM-DD | 평단가: $XXX | 현재가: $XXX | 수익률: X.XX%</p>
        </header>

        <main class="analysis-content">
            <!-- 0. 한줄 결론 -->
            <section>
                <h2>💎 한줄 결론</h2>
                <div class="highlight-box purple">...</div>
            </section>

            <!-- 1. KPI 대시보드 -->
            <section>
                <h2>📊 핵심 KPI 대시보드</h2>
                <div class="kpi-grid">
                    <div class="kpi-card"><div class="kpi-value">값</div><div class="kpi-label">라벨</div></div>
                    <!-- 최소 6개 -->
                </div>
            </section>

            <!-- 2~9. 본문 섹션들 ... -->
        </main>

        <footer style="margin-top: 3rem; text-align: center; color: var(--text-secondary);">
            <p>© 2026 Premium Finance Dashboard. AI-Powered Analysis.</p>
        </footer>
    </div>
</body>
```

### Phase 4: 대시보드 연동

1. `dashboard/data.js`에서 해당 종목 객체를 찾는다.
2. `reportPath` 속성을 추가하여 HTML 분석 페이지를 연결한다:
   ```javascript
   "reportPath": "analysis/{종목영문명}.html"
   ```
3. 해당 종목의 `reason` 필드에 핵심 가이던스 수치를 반영하여 업데이트한다.

### Phase 5: 확인 및 브라우저 오픈

1. `live-server`가 실행 중인지 확인한다.
2. 브라우저로 분석 페이지를 열어 렌더링을 확인한다:
   ```
   open http://127.0.0.1:5501/analysis/{종목영문명}.html
   ```

## 분석 원칙 (company-analysis 스킬 상속)

- `보고된 숫자`와 `해석`을 구분한다.
- 숫자 나열이 아닌 **추세와 원인**을 설명한다.
- 성장의 원인을 가격, 물량, 제품 믹스, 마진, 인수 효과, 환율, 업황으로 나눠 본다.
- 밸류에이션은 **성장 지속성 + 사업의 질 + 동종기업**과 함께 해석한다.
- 일회성 이익과 반복 가능한 이익 체력을 분리한다.
- 근거 없이 "좋은 회사다" 같은 문장을 **절대 쓰지 않는다**.
- 마지막은 애매한 요약 대신 **명확한 투자 의견과 구체적 가격 전략**으로 끝낸다.

## 산업별 추가 체크

### 반도체 기업

- 메모리 vs 비메모리, AI 수혜 계층 (GPU, HBM, 파운드리, 패키징) 구분
- Capex, 가동률, ASP, bit growth, 공정 믹스
- 고객 집중도와 hyperscaler 의존도

### SaaS / 소프트웨어 기업

- ARR, NDR(Net Dollar Retention), Rule of 40
- SBC 비중, GAAP vs Non-GAAP 이익 차이
- Land-and-Expand 전략, ACV(연간 계약 가치) 추이

### 제조업 / 에너지

- ROIC, 설비 투자 사이클, 감가상각 부담
- 원자재 가격 민감도, 환율 영향
- 수주잔고, 가동률

## 품질 기준

- [ ] KPI 대시보드에 6개 이상의 핵심 지표가 있는가?
- [ ] 실적 비교표가 3개년(또는 3분기) 이상 포함되었는가?
- [ ] 동종업계 비교표에 최소 2개 기업이 있는가?
- [ ] 애널리스트 목표가가 3곳 이상 인용되었는가?
- [ ] Bull Case / Bear Case가 구체적 가격과 함께 제시되었는가?
- [ ] 사용자의 평단가를 고려한 맞춤 전략이 포함되었는가?
- [ ] 리스크가 최소 3개 이상 명시되었는가?
- [ ] `reportPath`로 대시보드와 연동되었는가?

## 파일 경로 규칙

| 항목 | 경로 |
|------|------|
| 분석 HTML | `dashboard/analysis/{종목영문명}.html` |
| 차트 이미지 | `report/images/YYYY-MM-DD/{종목명}.png` |
| JSON 리포트 | `report/YYYY-MM-DD.json` |
| 대시보드 데이터 | `dashboard/data.js` |

## 레퍼런스

- 분석 프레임: `.agent/skills/company-analysis/SKILL.md`
- HTML 디자인: `.agent/skills/create-analysis/SKILL.md`
- 차트 캡처: `.agent/skills/toss-capture/SKILL.md`
- 대시보드 동기화: `.agent/skills/sync-dashboard/SKILL.md`
- 실제 예시: `dashboard/analysis/palantir.html` (팔란티어 딥다이브)
