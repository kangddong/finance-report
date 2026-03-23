/**
 * @file data.js
 * @description 주식 분석 리포트의 히스토리를 저장하는 파일입니다.
 * sync-dashboard 스킬에 의해 자동으로 업데이트됩니다.
 */

export const REPORTS_HISTORY = [
    {
        "date": "2026-03-21",
        "overview": "[주요 이슈] 글로벌 사모대출 리스크와 함께 중동 전쟁의 국가적 역학 관계가 급변하고 있습니다. 이란-이스라엘 전면전 속에서 UAE는 한국을 '최우선 원유 공급국'으로 지정하며 에너지 안보를 약속했습니다. 이는 국산 미사일 '천궁-II'의 기여도가 결정적이었던 것으로 분석됩니다. 반면 이란-중국 관계는 전략적 딜레마에 처하며 시장의 불확실성을 가속화하고 있습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "18",
                "status": "Extreme Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.0%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "2.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,492.50",
                "status": "▲ 2.80"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "100.10",
                "status": "▲ 0.40"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "62.10",
                "status": "▼ 0.76"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "201,000원",
                "return": "+41.87%",
                "advice": "HOLD",
                "reason": "1. **기술적 분석**: 5일선 지지를 테스트 중입니다. 기술주 전반의 투심 악화로 상승 탄력이 둔화되었으나, 20만원 선 수성 여부가 핵심입니다.\n2. **대응 전략**: 매크로 불확실성이 크므로 비중 확대보다는 기존 물량을 홀딩하며 관망합니다.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "985,000원",
                "return": "+66.16%",
                "advice": "WATCH",
                "reason": "1. **현재 상황**: 100만원 선을 하회하며 단기 조정폭이 깊어지고 있습니다. AI 버블 우려와 사모펀드 리스크가 복합적으로 작용 중입니다.\n2. **대응 전략**: 5일선 회복 전까지는 보수적으로 접근하며 지지선 확인이 필요.",
                "image": null
            },
            {
                "name": "팔란티어 (PLTR) - 마스터 딥다이브",
                "avgPrice": "166.51달러",
                "currentPrice": "150.31달러",
                "return": "-9.73%",
                "advice": "BUY",
                "reason": "1. **2026 가이던스**: 매출 $7.18B(+61% YoY) 및 미국 상업 매출 $3.14B(+115%)의 초강세 전망.\n2. **Rule of 40의 혁신**: 118%라는 유례없는 기록(성장+마진)을 가이던스로 제시, 펀더멘털은 무적 상태.\n3. **거버넌코 및 해자**: Alex Karp의 강력한 리더십과 Ontology(온톨로지) 시스템 기반의 높은 전환 비용 확보.\n4. **대응 전략**: $145~148 구간의 강력한 지지선을 활용한 분할 매수. $166 평단가는 2026년 타겟가($230+) 대비 여전히 매력적입니다.",
                "image": "report/images/2026-03-21/팔란티어.png",
                "reportPath": "analysis/palantir-deep-dive.html"
            }
        ],
        "watchlist": [],
        "strategy": {
            "position": "Defensive & Hedge",
            "title": "사모펀드 리스크와 중동 에너지 안보의 충돌",
            "description": "금융 시장은 사모펀드 환매 중단이라는 내부적 악재와 중동 전쟁이라는 외부적 충격에 동시에 노출되어 있습니다. 하지만 UAE와의 원유 공급 협력은 한국 제조업의 안전판 역할을 할 것이며, '천궁-II'로 상징되는 K-방산의 신뢰도는 포트폴리오의 강력한 헤지 수단이 될 것입니다. 현금 비중 30%를 유지하며 방산 및 원전 섹터의 비중 확대를 고려하십시오."
        }
    },
    {
        "date": "2026-03-18",
        "overview": "[마감 시황] 중동 긴장 장기화 우려에도 미국 기술주의 강력한 복원력이 돋보인 하루였습니다. 엔비디아가 프리마켓에서 1% 이상 상승하며 반도체 섹터의 투심을 견인했고, 코스피 대장주 삼성전자와 SK하이닉스도 각각 20만원과 100만원 선을 회복하거나 안착을 시도하는 강한 흐름을 보였습니다. 공포지수는 23포인트로 여전히 '극심한 공포' 단계이지만, 연준의 금리 결정을 앞둔 관망세 속에서 저점 매수세가 유입되는 모습입니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "23",
                "status": "Extreme Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.0%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "2.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,489.70",
                "status": "▲ 4.50"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "99.70",
                "status": "▼ 0.10"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "62.86",
                "status": "▼ 7.64"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "203,500원",
                "return": "+43.64%",
                "advice": "HOLD",
                "reason": "1. **기술적 분석**: 20만원 선을 강력하게 돌파하며 5일선 위에 안착했습니다. 외국인의 순매수세가 다시 유입되며 수급이 개선되는 양상입니다.\n2. **대응 전략**: 전고점 부근까지의 추가 상승 여력이 충분하므로 수익 극대화 관점에서 **홀딩(HOLD)**합니다.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "1,009,000원",
                "return": "+70.21%",
                "advice": "WATCH",
                "reason": "1. **현재 상황**: 100만원 라운드 피겨 안착 여부가 관건입니다. 엔비디아 실적 기대감과 동조화되는 흐름을 보이고 있습니다.\n2. **대응 전략**: 100만원 선 근처에서 매물 소화 과정이 필요하며, 급격한 변동에 대비해 추격 매수보다는 **관망(WATCH)**이 유리합니다.",
                "image": null
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "107,300원",
                "return": "+15.75%",
                "advice": "BUY",
                "reason": "1. **모멘텀**: SMR 글로벌 수주 기대감과 국내 원전 수출 뉴스가 긍정적으로 작용하며 2%대 견조한 상승을 보였습니다.\n2. **대응 전략**: 에너지 위기 속에서 확실한 성장 동력을 확보한 섹터로, 눌림목 발생 시 비중을 확대하는 **매수(BUY)** 전략이 유효합니다.",
                "image": null
            },
            {
                "name": "Nvidia",
                "avgPrice": "189.06달러",
                "currentPrice": "183.95달러",
                "return": "-2.70%",
                "advice": "BUY",
                "reason": "1. **시장 평가**: 기술적 조정 이후 $180 초반에서 강력한 지지를 형성하고 있습니다. AI 인프라 수요는 단기 노이즈와 무관하게 건재합니다.\n2. **대응 전략**: 평단가 대비 소폭 하락 구간이나, 본장의 회복 탄력성이 매우 높으므로 적극적인 **추가 매수(BUY)**로 대응합니다.",
                "image": null
            },
            {
                "name": "Palantir Tech",
                "avgPrice": "166.51달러",
                "currentPrice": "155.08달러",
                "return": "-6.86%",
                "advice": "BUY",
                "reason": "1. **전망**: 최근 중동 이슈로 인한 군사 AI 수요가 실적으로 연결될 가능성이 매우 높습니다. 주가는 고점 대비 조정을 받았으나 펀더멘털은 더욱 강화되었습니다.\n2. **대응 전략**: 낙폭 과대 구간으로 판단되며, 중장기 성장성을 신뢰하고 **매수(BUY)**하여 단가를 낮추는 기회로 삼습니다.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "PLUS K 방산",
                "currentPrice": "68,900원",
                "outlook": "매우 긍정적",
                "advice": "BUY",
                "reason": "지정학적 리스크 지속 시 가장 확실한 수익처. 수주 잔고와 매크로 환경이 모두 우호적."
            },
            {
                "name": "테슬라",
                "currentPrice": "$420.50",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "반등 시도를 하고 있으나 강한 저항선 돌파 여부가 불투명하여 조금 더 관찰이 필요함."
            }
        ],
        "strategy": {
            "position": "Growth & Hedge",
            "title": "공포 지수의 하락과 회복의 서막",
            "description": "공포지수가 23포인트로 소폭 상승(회복)하며 극단적인 비관론에서 벗어나려는 시도가 보입니다. 중동 리스크는 여전히 상존하지만, 시장은 이미 이를 가격에 상당 부분 반영한 것으로 보입니다. 현재는 방산과 원전 등 '확실한 수혜주'로 헤지를 유지하면서도, 조정을 받은 반도체와 AI 대장주를 저가 매수하여 수익력을 복구해야 하는 중요한 구간입니다. 연준의 발언 이후의 달러 인덱스 향방을 주시하며 대응합시다."
        },
        "policyStance": {
            "fed": {
                "rate": "4.50 ~ 4.75%",
                "stance": "Neutral",
                "nextMeeting": "2026-05-01",
                "summary": "금리 동결 가능성이 높으며, 인플레이션 둔화 속도에 따른 **점진적 인하(Pivot)** 기대감이 유지되고 있습니다. 미 본장의 강력한 기술주 반등은 연준의 금리 우려 완화에 기인합니다."
            },
            "bok": {
                "rate": "3.25%",
                "stance": "Hawkish",
                "nextMeeting": "2026-04-12",
                "summary": "환율 급등 및 가계 부채 우려로 인해 **매파적(Hawkish)** 동결 기조를 유지 중입니다. 한/미 금리차로 인한 외인 자금 이탈 여부가 핵심 모니터링 포인트입니다."
            },
            "strategy": "한/미 정책 디커플링이 지속되는 가운데, 환율 안정이 최우선 과제입니다. **환율 1,500원 돌파 여부**에 따라 한은의 추가 금리 인상 카드가 나올 수 있으므로, 지수 변동성에 대비한 보수적 관점이 필요합니다."
        }
    },
    {
        "date": "2026-03-03",
        "overview": "[긴급 시황] 중동 발 '포효하는 사자' 작전의 여파로 코스피가 7.24% 급락하며 사상 초유의 패닉 장세를 연출했습니다. 삼성전자와 SK하이닉스가 9~10%대 하락하며 지수를 끌어내린 반면, 두산에너빌리티(외인 1.2조 순매수)와 방산주는 독보적인 강세를 보였습니다. 미 증시는 AI 대장주 엔비디아와 국방 AI 팔란티어를 중심으로 방어력을 보여주며 혼조세를 기록했습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "12",
                "status": "Extreme Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.3%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,485.20",
                "status": "▲ 26.70"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "99.80",
                "status": "▲ 1.60"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "70.50",
                "status": "▲ 5.00"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "195,100원",
                "return": "+37.71%",
                "advice": "HOLD",
                "reason": "1. **현재 상황**: 지수 폭락과 함께 20만 원 선 일시 이탈. 외국인의 기록적인 매도세 집중.\n2. **대응 전략**: 평단 대비 여전히 안정권이나, 단기 바닥 확인 전까지 신규 매수 자제. 지정학적 리스크 완화 시 가장 먼저 반등할 종목.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "956,000원",
                "return": "+61.27%",
                "advice": "WATCH",
                "reason": "1. **현재 상황**: 100만 원 선 이탈하며 하방 변동성 확대. 5일선과 이격 과다.\n2. **대응 전략**: AI 펀더멘털은 견조하나 대외 리스크가 압도적. 90만 원 초반대 지지력 테스트 관찰.",
                "image": null
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "96,900원",
                "return": "+4.53%",
                "advice": "BUY",
                "reason": "1. **현재 상황**: 하락장 속 홀로 빛나는 보석. 외국인이 1.2조 원을 쓸어 담으며 저가 매수세 유입.\n2. **대응 전략**: SMR 및 AI 전력 수요가 지정학적 불안을 압도하는 모습. 추세 추종 유효.",
                "image": null
            },
            {
                "name": "Nvidia",
                "avgPrice": "189.0620달러",
                "currentPrice": "194.50달러",
                "return": "+2.88%",
                "advice": "BUY",
                "reason": "1. **현재 상황**: 미 증시 하락 압력 속에서도 3% 반등하며 기술주 대장주의 위용 과시.\n2. **대응 전략**: 180달러 중반 지지 확인. AI 인프라 투자의 지속성은 매크로와 무관하게 전개 중.",
                "image": null
            },
            {
                "name": "Palantir Tech",
                "avgPrice": "166.51달러",
                "currentPrice": "166.51달러",
                "return": "0.00%",
                "advice": "STRONG BUY",
                "reason": "1. **현재 상황**: 중동 전쟁 고조로 국방 AI 수요 폭발. '전쟁 헤지용 성장주'로 급부상하며 6% 급등.\n2. **대응 전략**: 수익 극대화 구간 진입. 리스크 강화 시 더욱 빛을 발할 포트폴리오의 방패.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "PLUS K 방산",
                "currentPrice": "62,500원",
                "outlook": "매우 긍정적",
                "advice": "BUY",
                "reason": "지수가 무너질 때 오르는 전형적인 리스크 헤지 종목. 실적과 모멘텀 최상."
            },
            {
                "name": "테슬라",
                "currentPrice": "$403.32",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "400달러를 수성 중이나 장기 하락 채널 상단 저항에 부딪힌 모습."
            }
        ],
        "strategy": {
            "position": "Defensive",
            "title": "공포가 지배하는 시장, 요새를 지켜라",
            "description": "코스피의 7% 급락은 차트 분석이 무의미한 단계임을 시사합니다. 하지만 두산에너빌리티와 미 증시의 팔란티어처럼 '강한 놈은 살아남는다'는 법칙도 확인되었습니다. 현 시점에서는 과매도 종목의 손절보다는, 수익금이 큰 삼성전자/현대차로 버티며 방산/원전/미 국방테크 등 '강한 수급' 종목으로의 일시적 피난이 유리합니다. 공포의 절정은 곧 기회의 시작입니다."
        }
    },
    {
        "date": "2026-02-28",
        "overview": "[긴급 시황] 이란-이스라엘 전면전 발발에 따른 글로벌 시장 충격 진단입니다. 2월 28일 주말 사이 발생한 미-이스라엘의 '포효하는 사자' 작전과 이란의 대규모 미사일 보복으로 인해 국제 유가와 금값이 폭등하고 있습니다. 안전자산으로의 자금 쏠림이 극대화되는 가운데, 다음 주 월요일 국내외 증시는 강력한 하방 압력을 받을 것으로 예상됩니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "24",
                "status": "Extreme Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.3%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,458.50",
                "status": "▲ 15.36"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "98.20",
                "status": "▲ 0.70"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "65.50",
                "status": "▲ 0.50"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "216,500원",
                "return": "+52.81%",
                "advice": "HOLD",
                "reason": "1. **주간 총평**: 외국인 매도 공세 속에서 21만원선을 지켜낸 점은 긍정적이나 주말 지정학적 리스크 고조로 월요일 하방 압력 예상.\n2. **대응 전략**: 21만원 이탈 시 단기 수익 실현 고려. 추가 하락 시 월요일 오후장 저가 매수 타이밍 포착.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "1,061,000원",
                "return": "+78.98%",
                "advice": "WATCH",
                "reason": "1. **주간 총평**: 110만원 고점 형성 후 깊은 조정. 엔비디아 후폭풍이 아직 진행 중.\n2. **대응 전략**: 100만원 라운드 피겨 지지가 관건. 월요일 장중 변동성 확대 대비.",
                "image": null
            },
            {
                "name": "Cipher Mining",
                "avgPrice": "18.4650달러",
                "currentPrice": "15.60달러",
                "return": "-15.52%",
                "advice": "HOLD",
                "reason": "1. **주간 총평**: 비트코인 급락(-6%)에 따른 센티먼트 악화. 다만 HPC(고성능 컴퓨팅)로의 사업 전환은 긍정적인 평가.\n2. **대응 전략**: 코인 가격 연동성이 여전히 높음. 추가 매수보다는 비트코인 6만 달러 지지 여부 확인 필요.",
                "image": null
            },
            {
                "name": "Nvidia",
                "avgPrice": "189.0620달러",
                "currentPrice": "176.69달러",
                "return": "-6.54%",
                "advice": "BUY",
                "reason": "1. **주간 총평**: 장기 성장 동력은 여전하지만 단기 수급이 꼬인 상태. $170 중반대는 매력적인 구간.\n2. **대응 전략**: 공격적인 투자자라면 분할 매수 시작. $170 하회 시 비중 축소.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "테슬라",
                "currentPrice": "$245.00",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "전기차 시장 회복 조침 및 자율주행 데이터 축적 가속화. 250달러 돌파 시 강력 매수 신호."
            },
            {
                "name": "금/은",
                "currentPrice": "$2,800(Gold)",
                "outlook": "매우 긍정적",
                "advice": "BUY",
                "reason": "지정학적 불안 고조로 안전자산 선호 현상 심화. 포트폴리오 헤지용으로 적합.",
                "reportPath": "analysis/middle-east-war-2026.html"
            }
        ],
        "strategy": {
            "position": "Defensive",
            "title": "중동 전쟁 발발, 안전자산으로의 대피",
            "description": "2월의 마지막 주말은 최악의 시나리오로 흘러가고 있습니다. 이란-이스라엘-미국이 얽힌 전면전 양상은 단순한 변동성을 넘어 글로벌 공급망과 에너지 가격의 패러다임 변화를 가속화할 것입니다. 월요일 개장 시 갭하락 출발은 기정사실화되었으므로, 성급한 추격 매수보다는 시장이 안정을 찾는 화요일 이후를 노리는 보수적인 접근이 필요합니다. 금/은 비중 확대 및 현금 30% 이상 확보를 강력히 권장합니다."
        },
        "foreignInvestorTrend": {
            "market_flow": [
                {
                    "investor": "개인",
                    "summary": "최신 순매수 금액 -6,409억",
                    "top_stocks": [
                        {
                            "name": "03-17 -6,409억"
                        },
                        {
                            "name": "03-16 +8,032억"
                        },
                        {
                            "name": "03-13 +32,649억"
                        }
                    ]
                },
                {
                    "investor": "외국인",
                    "summary": "최신 순매수 금액 -2,771억",
                    "top_stocks": [
                        {
                            "name": "03-17 -2,771억"
                        },
                        {
                            "name": "03-16 -8,494억"
                        },
                        {
                            "name": "03-13 -18,352억"
                        }
                    ]
                },
                {
                    "investor": "기관",
                    "summary": "최신 순매수 금액 +9,238억",
                    "top_stocks": [
                        {
                            "name": "03-17 +9,238억"
                        },
                        {
                            "name": "03-16 -178억"
                        },
                        {
                            "name": "03-13 -14,601억"
                        }
                    ]
                }
            ],
            "daily_rows": [
                {
                    "date": "2026-03-17",
                    "individualsNetBuying": -640896067020,
                    "foreignersNetBuying": -277149255959,
                    "institutionsNetBuying": 923761871536
                },
                {
                    "date": "2026-03-16",
                    "individualsNetBuying": 803187650987,
                    "foreignersNetBuying": -849428115809,
                    "institutionsNetBuying": -17819435253
                },
                {
                    "date": "2026-03-13",
                    "individualsNetBuying": 3264927245543,
                    "foreignersNetBuying": -1835192446457,
                    "institutionsNetBuying": -1460057398481
                },
                {
                    "date": "2026-03-12",
                    "individualsNetBuying": 3107270402663,
                    "foreignersNetBuying": -3000306446659,
                    "institutionsNetBuying": -240066022765
                },
                {
                    "date": "2026-03-11",
                    "individualsNetBuying": -388616227228,
                    "foreignersNetBuying": -309999872287,
                    "institutionsNetBuying": 718859878626
                }
            ],
            "top_foreign": [
                {
                    "Rank": 1,
                    "Name": "03-17 -2,771억"
                },
                {
                    "Rank": 2,
                    "Name": "03-16 -8,494억"
                },
                {
                    "Rank": 3,
                    "Name": "03-13 -18,352억"
                },
                {
                    "Rank": 4,
                    "Name": "03-12 -30,003억"
                },
                {
                    "Rank": 5,
                    "Name": "03-11 -3,100억"
                }
            ],
            "source": "Toss Invest",
            "fetchedAt": "2026-03-18 02:16:03"
        }
    },
    {
        "date": "2026-02-27",
        "overview": "[마감 시황] 코스피가 외국인의 역대급 순매도(약 6.8조원)에 1% 하락하며 6,244선으로 마감했습니다. 엔비디아의 실적 발표 이후 기술주 전반의 차익 실현 매물과 이스라엘-이란 간 지정학적 긴장 고조가 시장을 압박했습니다. 반면 현대차는 실적 기대감에 10% 이상 급등하며 사상 최고가를 경신했고, 방산 및 전력 설비 섹터는 상대적 강세를 보였습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "43",
                "status": "Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,441.14",
                "status": "▲ 1.36"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "97.20",
                "status": "▲ 0.30"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "64.50",
                "status": "▲ 0.80"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "216,500원",
                "return": "+52.81%",
                "advice": "HOLD",
                "reason": "1. **현재 주가 위치**: 5일선 아래로 소폭 이격 발생. 외국인 매도세 집중되며 단기 조정 국면.\n2. **매매 관점**: 정배열 추세는 유지 중이나 21만원선 지지 여부 확인 필요. 5일선 회복 전까지는 신규 매수 보류.\n3. **주요 라인**: 지지 210,000원 / 저항 225,000원.\n4. **매매 동향**: 외국인 대량 매도 vs 개인/기관 방어.\n5. **💡 총평**: 평단가 대비 수익권이 넉넉하므로 일시적 변동성에 일히일비하지 말고 홀딩 권장.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "1,061,000원",
                "return": "+78.98%",
                "advice": "WATCH",
                "reason": "1. **현재 주가 위치**: 5일선 강하게 이탈(-3.46%). 엔비디아 발 AI 차익 실현 매물의 직격탄.\n2. **매매 관점**: 단기 과열 해소 과정. 100만원 라운드 피겨 지지력 테스트 예상. 추가 하락 시 비중 축소 고려.\n3. **주요 라인**: 지지 1,000,000원 / 저항 1,120,000원.\n4. **매매 동향**: 외국인 기관 동반 매도.\n5. **💡 총평**: 가장 드라마틱한 수익률을 보여주고 있으나, 단기 추세 꺾임에 주의가 필요한 시점.",
                "image": null
            },
            {
                "name": "Hyundai Motor",
                "avgPrice": "498,500원",
                "currentPrice": "674,000원",
                "return": "+35.21%",
                "advice": "STRONG BUY",
                "reason": "1. **현재 주가 위치**: 5일선 타고 급등하며 사상 최고가 돌파. 완벽한 정배열 상승 추세.\n2. **매매 관점**: 65만원 지지 확인하며 추가 상승 기대. 모빌리티 혁신 기대감이 수급 주도.\n3. **주요 라인**: 지지 650,000원 / 저항 없음 (신고가 영역).\n4. **매매 동향**: 외국인 기관 쌍끌이 매수.\n5. **💡 총평**: 포트폴리오의 새로운 대장주로 부상. 수익 축하드립니다!",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "70,770원",
                "return": "+17.44%",
                "advice": "BUY",
                "reason": "1. **현재 주가 위치**: 5일선 위 안착하며 직전 고점 돌파 시도. 지정학적 리스크가 모멘텀으로 작용.\n2. **매매 관점**: 7만원선 안정적 지지 시 추가 매수 유효. 수주 공백 없는 섹터.\n3. **주요 라인**: 지지 69,000원 / 저항 75,000원.\n4. **💡 총평**: 시장 하방 압력에도 굴하지 않는 강한 체력 보유. 든든한 방패 역할을 하고 있습니다.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "34,700원",
                "return": "+31.08%",
                "advice": "HOLD",
                "reason": "1. **현재 주가 위치**: AI 거품 논란에도 전력 인프라 실질 수요는 견조. 박스권 상단 돌파 시도.\n2. **매매 관점**: 33,000원 지지 시 홀딩. 전력망 확충 이슈는 장기 테마.\n3. **💡 총평**: AI 섹터 내에서 가장 안정적인 흐름. 꾸준한 우상향 기대.",
                "image": null
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "106,300원",
                "return": "+14.67%",
                "advice": "BUY",
                "reason": "1. **현재 주가 위치**: 10만원선 안착 성공. SMR 글로벌 수주 기대감 지속.\n2. **매매 관점**: 눌림목 시 적극 매수 추천. 원전 르네상스 수혜.\n3. **💡 총평**: 10만원이라는 큰 산을 넘었습니다. 이제는 앞자리가 달라진 주가에 익숙해질 시간.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "엔비디아",
                "currentPrice": "$176.69",
                "outlook": "주의",
                "advice": "WATCH",
                "reason": "실적 발표 후 재료 소멸 및 고점 부담에 따른 깊은 조정. $170 지지력 확인 필수."
            },
            {
                "name": "팔란티어 테크",
                "currentPrice": "$137.19",
                "outlook": "중립",
                "advice": "HOLD",
                "reason": "기술주 동반 하락 속에서 상대적으로 선방 중. AI 소프트웨어 수요는 여전히 강력."
            }
        ],
        "strategy": {
            "position": "Growth",
            "title": "기술주 조정과 가치주의 귀환",
            "description": "외국인의 기록적인 매도세는 코스피 전반에 심리적 부담을 주었으나, 현대차와 방산주처럼 실적이 뒷받침되는 종목으로의 쏠림 현상은 더욱 심화되었습니다. 반도체 비중이 높다면 일시적 리스크 관리가 필요하나, 장기 성장성은 훼손되지 않았습니다. 현금 비중을 조금씩 늘리며 현대차와 같은 주도주의 눌림목을 노리는 전략이 유효합니다."
        }
    },
    {
        "date": "2026-02-13",
        "overview": "[장전 시황] 전일 코스피의 사상 최고치 경신(5,522p) 여진이 지속될 것으로 전망됩니다. 미국 증시의 견조한 흐름과 반도체 섹터의 강한 모멘텀은 금일에도 긍정적인 영향을 미칠 것입니다. 다만 단기 급등에 따른 차익 실현 매물 소화 과정이 나타날 수 있으며, 외국인 수급의 지속 여부가 관건입니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "80",
                "status": "Extreme Greed"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,440.00",
                "status": "▼ 2.00"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "96.40",
                "status": "▼ 0.10"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "63.00",
                "status": "-"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "171,600원",
                "return": "+21.12%",
                "advice": "BUY",
                "reason": "1. **전망**: 외국인 대량 매수 이후 추가 상승 기대. 17만원 안착 시 18만원 도달 가능성.\n2. **전략**: 조정 시 적극 매수 기회.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "888,000원",
                "return": "+49.79%",
                "advice": "HOLD",
                "reason": "1. **전망**: 90만원 돌파 테스트 예상. 역사적 신고가 부근 매물 소화.\n2. **전략**: 보유 관점 유지. 추세 추종.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "65,200원",
                "return": "+8.19%",
                "advice": "BUY",
                "reason": "1. **전망**: 소외주 순환매 시 반등 가능성.\n2. **전략**: 65,000원 지지 확인 필요.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "27,400원",
                "return": "+3.50%",
                "advice": "HOLD",
                "reason": "1. **전망**: AI 인프라 확장에 따른 수혜는 중장기적으로 유효.\n2. **전략**: 박스권 등락 예상.",
                "image": null
            },
            {
                "name": "현대차",
                "avgPrice": "498,500원",
                "currentPrice": "482,000원",
                "return": "-3.31%",
                "advice": "BUY",
                "reason": "1. **전망**: 과매도 구간 인식에 따른 저가 매수세 유입 기대.\n2. **전략**: 분할 매수 적기.",
                "image": null
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "95,000원",
                "return": "+2.48%",
                "advice": "BUY",
                "reason": "1. **전망**: 급등 후 숨고르기 국면. SMR 수주 기대감은 여전.\n2. **전략**: 눌림목 매수 유효.",
                "image": null
            }
        ],
        "watchlist": [],
        "strategy": {
            "position": "Monitor",
            "title": "숨고르기 vs 추가 상승",
            "description": "사상 최고치 경신 이후의 시장 반응을 면밀히 관찰해야 합니다. 외국인 수급이 지속된다면 5,600선 도전도 가능합니다. 다만 금요일장 특성상 차익 실현 욕구가 강해질 수 있으므로 변동성에 유의하십시오."
        },
        "foreignInvestorTrend": {
            "held_stocks": [
                {
                    "code": "005930",
                    "name": "삼성전자",
                    "data": [
                        {
                            "Date": "2026.02.12",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": 13526444,
                            "Foreigner Ratio": "51.51%"
                        },
                        {
                            "Date": "2026.02.11",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": 3681106,
                            "Foreigner Ratio": "51.28%"
                        },
                        {
                            "Date": "2026.02.10",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": 1837045,
                            "Foreigner Ratio": "51.22%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": 510164,
                            "Foreigner Ratio": "51.19%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": -5705438,
                            "Foreigner Ratio": "51.18%"
                        }
                    ]
                },
                {
                    "code": "000660",
                    "name": "SK하이닉스",
                    "data": [
                        {
                            "Date": "2026.02.12",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": 652529,
                            "Foreigner Ratio": "52.92%"
                        },
                        {
                            "Date": "2026.02.11",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -426872,
                            "Foreigner Ratio": "52.83%"
                        },
                        {
                            "Date": "2026.02.10",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": 75362,
                            "Foreigner Ratio": "52.87%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -162083,
                            "Foreigner Ratio": "52.86%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -1176821,
                            "Foreigner Ratio": "52.61%"
                        }
                    ]
                },
                {
                    "code": "005380",
                    "name": "현대차",
                    "data": [
                        {
                            "Date": "2026.02.12",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -287264,
                            "Foreigner Ratio": "30.57%"
                        },
                        {
                            "Date": "2026.02.11",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": 322101,
                            "Foreigner Ratio": "30.71%"
                        },
                        {
                            "Date": "2026.02.10",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -466772,
                            "Foreigner Ratio": "30.52%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -324379,
                            "Foreigner Ratio": "30.79%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -301512,
                            "Foreigner Ratio": "30.96%"
                        }
                    ]
                },
                {
                    "code": "034020",
                    "name": "두산에너빌리티",
                    "data": [
                        {
                            "Date": "2026.02.12",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": -1616474,
                            "Foreigner Ratio": "23.71%"
                        },
                        {
                            "Date": "2026.02.11",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": 1068466,
                            "Foreigner Ratio": "23.96%"
                        },
                        {
                            "Date": "2026.02.10",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": 288391,
                            "Foreigner Ratio": "23.76%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": 2963511,
                            "Foreigner Ratio": "23.74%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": -1393259,
                            "Foreigner Ratio": "23.24%"
                        }
                    ]
                },
                {
                    "code": "479620",
                    "name": "KODEX AI전력핵심설비",
                    "data": [
                        {
                            "Date": "2026.02.12",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": -9,
                            "Foreigner Ratio": "0.12%"
                        },
                        {
                            "Date": "2026.02.11",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": 548,
                            "Foreigner Ratio": "0.12%"
                        },
                        {
                            "Date": "2026.02.10",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": 178,
                            "Foreigner Ratio": "0.09%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": -934,
                            "Foreigner Ratio": "0.08%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": 1411,
                            "Foreigner Ratio": "0.12%"
                        }
                    ]
                },
                {
                    "code": "455850",
                    "name": "PLUS K방산",
                    "data": [
                        {
                            "Date": "2026.02.12",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": -100367,
                            "Foreigner Ratio": "0.91%"
                        },
                        {
                            "Date": "2026.02.11",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 12408,
                            "Foreigner Ratio": "1.21%"
                        },
                        {
                            "Date": "2026.02.10",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 57799,
                            "Foreigner Ratio": "1.19%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 275171,
                            "Foreigner Ratio": "1.03%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 31972,
                            "Foreigner Ratio": "0.28%"
                        }
                    ]
                }
            ],
            "top_foreign": [
                {
                    "Rank": 1,
                    "Name": "SK하이닉스"
                },
                {
                    "Rank": 2,
                    "Name": "KODEX 레버리지"
                },
                {
                    "Rank": 3,
                    "Name": "현대차"
                },
                {
                    "Rank": 4,
                    "Name": "KB금융"
                },
                {
                    "Rank": 5,
                    "Name": "LG에너지솔루션"
                },
                {
                    "Rank": 6,
                    "Name": "삼성전자우"
                },
                {
                    "Rank": 7,
                    "Name": "두산에너빌리티"
                }
            ]
        }
    },
    {
        "date": "2026-02-12",
        "overview": "코스피가 사상 최고치인 5,522.27포인트(+3.13%)를 기록하며 역사적인 하루를 보냈습니다. 미국 마이크론의 10% 급등 영향으로 삼성전자(+2.26%)와 SK하이닉스(+3.26%) 등 반도체 대형주가 폭등하며 지수 상승을 주도했습니다. 외국인은 이날 하루에만 3조원을 순매수하며 강력한 매수세를 보였습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "78",
                "status": "Extreme Greed"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,442.00",
                "status": "▼ 13.00"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "96.50",
                "status": "▼ 0.30"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "63.00",
                "status": "-"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "171,600원",
                "return": "+21.12%",
                "advice": "STRONG BUY",
                "reason": "1. **주가 흐름**: 외국인 1,300만주 폭풍 매수로 17만원 돌파. HBM4 양산 소식 호재.\n2. **대응 전략**: 역사적 신고가 랠리 동참. 강력 매수 추천.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "888,000원",
                "return": "+49.79%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 마이크론 호실적 연동되며 3%대 급등. 90만원 돌파 시도.\n2. **대응 전략**: AI 메모리 대장주 지위 공고. 수익 극대화 구간.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "65,200원",
                "return": "+8.19%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 시장 수급이 반도체로 쏠리며 소폭 쉬어가는 흐름. 외국인 매도.\n2. **대응 전략**: 주도주 변화에 따른 기간 조정 가능성. 추세는 여전히 유효.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "27,400원",
                "return": "+3.50%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 보합권 등락. 반도체 랠리 소외.\n2. **대응 전략**: AI 확산 -> 전력 수요 공식 유효. 순환매 기다림 필요.",
                "image": null
            },
            {
                "name": "현대차",
                "avgPrice": "498,500원",
                "currentPrice": "482,000원",
                "return": "-3.31%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 외국인 매도 전환으로 소폭 하락. 밸류업 수혜 기대감은 상존.\n2. **대응 전략**: 48만원 지지력 테스트. 저피비알(Low P/B) 매력 유효.",
                "image": null
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "95,000원",
                "return": "+2.48%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 단기 급등에 따른 차익 실현 매물(외국인 -160만주) 출회.\n2. **대응 전략**: 건전한 조정. 20일선 지지 확인 후 재매수 관점.",
                "image": null
            }
        ],
        "watchlist": [],
        "strategy": {
            "position": "Aggressive",
            "title": "역사적 신고가 경신과 반도체 슈퍼사이클",
            "description": "코스피가 5,500 시대를 열었습니다. 반도체 슈퍼사이클과 AI 혁명이 시장을 주도하고 있습니다. 특히 삼성전자의 HBM4 양산 뉴스는 강력한 모멘텀입니다. 주저할 때가 아닙니다. 반도체 비중을 최대로 유지하십시오."
        }
    },
    {
        "date": "2026-02-11",
        "overview": "코스피가 외국인과 기관의 동반 매수세에 힘입어 1.00% 상승한 5,354.49포인트로 마감하며 3거래일 연속 상승세를 이어갔습니다. 특히 자동차와 금융, 로봇 섹터의 강세가 두드러졌으며, 삼성전자도 1.21% 상승하며 지수 상승을 견인했습니다. 환율은 안정적인 흐름을 보이고 있습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "58",
                "status": "Greed"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,455.00",
                "status": "▼ 4.50"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "96.80",
                "status": "▼ 0.10"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "63.50",
                "status": "-"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "167,800원",
                "return": "+18.44%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 외국인의 매수세가 유입되며 1.21% 상승 마감. 5일선 위 안착.\n2. **대응 전략**: 반도체 업황 회복 기대감 유효. 추가 상승 시 비중 확대 고려.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "860,000원",
                "return": "+45.07%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 외국인의 차익 실현 매물 출회로 소폭 조정 받았으나 상승 추세 유지.\n2. **대응 전략**: HBM 리더십 견고. 단기 조정은 매수 기회.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "66,000원",
                "return": "+9.51%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 지정학적 리스크 지속으로 방산 섹터 매수세 유입.\n2. **대응 전략**: 신고가 경신 기대감. 추세 추종 전략 유효.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "27,500원",
                "return": "+3.88%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 전력 기기 수요 증가 전망에 상승세 지속.\n2. **대응 전략**: AI 데이터센터발 전력망 호황 수혜 지속 예상.",
                "image": null
            },
            {
                "name": "현대차",
                "avgPrice": "498,500원",
                "currentPrice": "485,000원",
                "return": "-2.70%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 외국인 매수세 유입으로 반등 성공. 자동차 섹터 전반적 강세.\n2. **대응 전략**: 밸류에이션 매력 부각. 49만원선 돌파 시 탄력 강화 예상.",
                "image": null
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "97,000원",
                "return": "+4.63%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 외국인 대량 매수(100만주) 유입으로 강세.\n2. **대응 전략**: 수급 개선 뚜렷. SMR 모멘텀 지속.",
                "image": null
            }
        ],
        "watchlist": [],
        "strategy": {
            "position": "Growth",
            "title": "외국인 귀환과 코스피 반등",
            "description": "외국인과 기관의 쌍끌이 매수로 코스피가 5350선에 안착했습니다. 반도체와 자동차 등 주도 섹터의 흐름이 양호하며, 환율 안정도 긍정적입니다. 주도주 중심의 포트폴리오 유지가 유리합니다."
        }
    },
    {
        "date": "2026-02-10",
        "overview": "국내 증시는 삼성전자와 SK하이닉스 등 반도체 및 관련 섹터의 강세가 지속되며 긍정적인 흐름을 유지하고 있습니다. 특히 두산에너빌리티는 글로벌 SMR 시장 확대 및 수주 기대감으로 급등하며 새로운 주도주로 부상했습니다. 환율은 안정세를 보이고 있으며, 시장 공포 심리 또한 중립 수준을 유지하고 있어 추가 상승에 대한 기대감을 높이고 있습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "48",
                "status": "Neutral"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,459.78",
                "status": "▼ 0.22"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "96.90",
                "status": "▼ 0.43"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "63.70",
                "status": "▼ 0.13"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "166,400원",
                "return": "+17.45%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 외국인의 매수세 전환과 함께 16만원 중반대 안착, 5일선 위에서 견고한 흐름 유지.\n2. **대응 전략**: 시총 1,000조 시대의 주도주로서 굳건한 위상 확인. 단기 급등 피로감은 있으나 추세 훼손 전까지 홀딩 유효.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "887,000원",
                "return": "+49.63%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 5일 이동평균선 '매수' 신호 및 외국인/기관의 엇갈린 수급 속에서 개인의 저가 매수세가 하단을 지지.\n2. **대응 전략**: HBM 호황에 따른 실적 기대감 유효. 역사적 신고가 경신을 앞두고 있어 섣부른 매도보다는 수익 극대화 전략 필요.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "65,515원",
                "return": "+8.71%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 외국인 매도세에도 불구하고 개인/기관 매수세로 65,000원대 지지력 확보.\n2. **대응 전략**: 글로벌 지정학적 이슈 지속으로 방산 섹터의 매력도는 여전히 높음. 조정 시 분할 매수 관점 유효.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "27,210원",
                "return": "+2.79%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 전력 인프라 슈퍼사이클 진입 기대감으로 견조한 흐름. 5일선 지지력 테스트 중.\n2. **대응 전략**: AI 데이터센터발 전력 수요 급증은 거스를 수 없는 대세. 중장기적 관점에서 비중 확대 권장.",
                "image": null
            },
            {
                "name": "현대차",
                "avgPrice": "498,500원",
                "currentPrice": "478,000원",
                "return": "-4.11%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 52주 최고가 대비 조정 받았으나, 최근 개인 및 기관의 쌍끌이 매수세 유입.\n2. **대응 전략**: PER 10배 수준의 밸류에이션 매력과 하이브리드 경쟁력 부각. 47만원대 지지 확인 시 저가 매수 기회.",
                "image": null,
                "reportPath": "analysis/hyundai-future-mobility.html"
            },
            {
                "name": "두산에너빌리티",
                "avgPrice": "92,700원",
                "currentPrice": "95,400원",
                "return": "+2.91%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 외국인과 기관의 강력한 매수세 유입으로 7% 이상 급등하며 상승 추세 가속화.\n2. **대응 전략**: SMR 및 원전 수주 모멘텀 본격화. 5일선 이격 과열권이나 수급이 워낙 강해 추가 상승 여력 충분. 홀딩 추천.",
                "image": null,
                "reportPath": "analysis/doosan-enerbility-smr.html"
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "18.4650달러",
                "currentPrice": "15.05달러",
                "return": "-18.49%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 비트코인 변동성 확대 및 유상증자 이슈로 약세. 5일선 하회하며 단기 추세 약화.\n2. **대응 전략**: 평단가 조정으로 손실폭이 축소되었습니다(-18%). AI 코로케이션 사업 확장은 긍정적이나 단기 불확실성 존재. 비트코인 반등 확인 전까지는 관망 필요.",
                "image": null
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "189.86달러",
                "return": "+0.42%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 강력한 실적과 AI 투자 지속에 힘입어 상승세 지속. 주요 이동평균선 정배열 상태.\n2. **대응 전략**: 압도적인 AI 점유율과 긍정적 시장 분위기 고려 시 조정은 여전히 매수 기회. 목표가 상향 추세.",
                "image": null
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "166.5100달러",
                "currentPrice": "139.50달러",
                "return": "-16.22%",
                "advice": "WATCH",
                "reason": "1. **주가 흐름**: 매출 호조에도 불구하고 기술적 지표 혼조세. 5일선 부근 공방 지속.\n2. **대응 전략**: 평단가 수정으로 손실률이 -16%대로 개선되었습니다. 성장성은 유효하나 밸류에이션 부담 공존. 140달러 안착 여부 확인 후 추매 고려.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "테슬라",
                "currentPrice": "182.00달러",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "기술주 반등 및 로보택시 기대감 유효.",
                "image": null,
                "reportPath": "analysis/ev-market-tesla-hyundai.html"
            },
            {
                "name": "금/은",
                "currentPrice": "Gold Trend",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "글로벌 불확실성 지속에 따른 안전자산 수요.",
                "image": null
            },
            {
                "name": "달러 인덱스",
                "currentPrice": "96.90",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "하락 안정화 추세.",
                "image": null
            }
        ],
        "strategy": {
            "buy": "현대차, KODEX AI 전력핵심설비, 엔비디아",
            "sellConsider": "없음",
            "summary": "시장은 AI와 전력 인프라, 그리고 원전(SMR)이라는 확실한 성장 테마를 중심으로 재편되고 있습니다. 두산에너빌리티의 급등은 이러한 흐름을 방증합니다. 반도체 투톱(삼성전자, SK하이닉스)의 견조한 흐름 속에 현대차와 같은 저평가 우량주에 대한 관심도 필요합니다. 미국 기술주의 경우 엔비디아 중심의 비중 유지가 유리해 보이며, 변동성이 큰 종목(사이퍼 마이닝 등)은 리스크 관리에 유의하시기 바랍니다."
        },
        "foreignInvestorTrend": {
            "held_stocks": [
                {
                    "code": "005930",
                    "name": "삼성전자",
                    "data": [
                        {
                            "Date": "2026.02.10",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": 1837045,
                            "Foreigner Ratio": "51.22%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": 510164,
                            "Foreigner Ratio": "51.19%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": -5705438,
                            "Foreigner Ratio": "51.18%"
                        },
                        {
                            "Date": "2026.02.05",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": -16017134,
                            "Foreigner Ratio": "51.30%"
                        },
                        {
                            "Date": "2026.02.04",
                            "Code": "005930",
                            "Name": "삼성전자",
                            "Foreigner Net Buy": -5647362,
                            "Foreigner Ratio": "51.62%"
                        }
                    ]
                },
                {
                    "code": "000660",
                    "name": "SK하이닉스",
                    "data": [
                        {
                            "Date": "2026.02.10",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": 75362,
                            "Foreigner Ratio": "52.87%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -162083,
                            "Foreigner Ratio": "52.86%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -1176821,
                            "Foreigner Ratio": "52.61%"
                        },
                        {
                            "Date": "2026.02.05",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -1611758,
                            "Foreigner Ratio": "52.77%"
                        },
                        {
                            "Date": "2026.02.04",
                            "Code": "000660",
                            "Name": "SK하이닉스",
                            "Foreigner Net Buy": -920115,
                            "Foreigner Ratio": "53.01%"
                        }
                    ]
                },
                {
                    "code": "005380",
                    "name": "현대차",
                    "data": [
                        {
                            "Date": "2026.02.10",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -466772,
                            "Foreigner Ratio": "30.52%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -324379,
                            "Foreigner Ratio": "30.79%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -301512,
                            "Foreigner Ratio": "30.96%"
                        },
                        {
                            "Date": "2026.02.05",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -53882,
                            "Foreigner Ratio": "31.09%"
                        },
                        {
                            "Date": "2026.02.04",
                            "Code": "005380",
                            "Name": "현대차",
                            "Foreigner Net Buy": -25253,
                            "Foreigner Ratio": "31.13%"
                        }
                    ]
                },
                {
                    "code": "034020",
                    "name": "두산에너빌리티",
                    "data": [
                        {
                            "Date": "2026.02.10",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": 288391,
                            "Foreigner Ratio": "23.76%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": 2963511,
                            "Foreigner Ratio": "23.74%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": -1393259,
                            "Foreigner Ratio": "23.24%"
                        },
                        {
                            "Date": "2026.02.05",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": -2206897,
                            "Foreigner Ratio": "23.56%"
                        },
                        {
                            "Date": "2026.02.04",
                            "Code": "034020",
                            "Name": "두산에너빌리티",
                            "Foreigner Net Buy": 3537763,
                            "Foreigner Ratio": "24.04%"
                        }
                    ]
                },
                {
                    "code": "479620",
                    "name": "KODEX AI전력핵심설비",
                    "data": [
                        {
                            "Date": "2026.02.10",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": 178,
                            "Foreigner Ratio": "0.09%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": -934,
                            "Foreigner Ratio": "0.08%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": 1411,
                            "Foreigner Ratio": "0.12%"
                        },
                        {
                            "Date": "2026.02.05",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": -1437,
                            "Foreigner Ratio": "0.06%"
                        },
                        {
                            "Date": "2026.02.04",
                            "Code": "479620",
                            "Name": "KODEX AI전력핵심설비",
                            "Foreigner Net Buy": 1425,
                            "Foreigner Ratio": "0.12%"
                        }
                    ]
                },
                {
                    "code": "455850",
                    "name": "PLUS K방산",
                    "data": [
                        {
                            "Date": "2026.02.10",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 57799,
                            "Foreigner Ratio": "1.19%"
                        },
                        {
                            "Date": "2026.02.09",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 275171,
                            "Foreigner Ratio": "1.03%"
                        },
                        {
                            "Date": "2026.02.06",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": 31972,
                            "Foreigner Ratio": "0.28%"
                        },
                        {
                            "Date": "2026.02.05",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": -198033,
                            "Foreigner Ratio": "0.16%"
                        },
                        {
                            "Date": "2026.02.04",
                            "Code": "455850",
                            "Name": "PLUS K방산",
                            "Foreigner Net Buy": -6473,
                            "Foreigner Ratio": "0.78%"
                        }
                    ]
                }
            ],
            "top_foreign": [
                {
                    "Rank": 1,
                    "Name": "삼성전자"
                },
                {
                    "Rank": 2,
                    "Name": "SK하이닉스"
                },
                {
                    "Rank": 3,
                    "Name": "대한항공"
                },
                {
                    "Rank": 4,
                    "Name": "대주전자재료"
                },
                {
                    "Rank": 5,
                    "Name": "신한지주"
                },
                {
                    "Rank": 6,
                    "Name": "SK스퀘어"
                },
                {
                    "Rank": 7,
                    "Name": "한미약품"
                }
            ]
        }
    },
    {
        "date": "2026-02-09",
        "overview": "국내 증시는 AI 반도체 섹터의 강세가 지속되며 긍정적인 흐름을 보이고 있습니다. 삼성전자가 시총 1,000조 시대를 열며 시장을 주도하고 있고, SK하이닉스 또한 견고한 상승세를 유지 중입니다. 환율은 소폭 하락하여 안정세를 찾고 있으며, 공포 심리는 중립 수준으로 완화되었습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "45",
                "status": "Neutral"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,460.00",
                "status": "▼ 2.50"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "97.33",
                "status": "▼ 0.17"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "63.83",
                "status": "▲ 7.73"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "166,400원",
                "return": "+17.45%",
                "advice": "BUY",
                "reason": "1. **주간 리뷰**: AI 반도체 수요 폭발과 주주환원 정책에 힘입어 시총 1,000조원 돌파하며 시장 주도.\n2. **기술적 분석**: 5일선 위에서 강한 상승 추세 유지. 외국인과 기관의 동반 매수세가 긍정적.\n3. **대응 전략**: 상승 피로감이 있을 수 있으나, 5일선 지지 시 매수 관점 유효. 장기 보유 권장.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "870,000원",
                "return": "+46.76%",
                "advice": "HOLD",
                "reason": "1. **주간 리뷰**: AI 서버 수요 증가와 HBM 시장 리더십 유지로 역대급 실적 기대감 반영.\n2. **기술적 분석**: 5일선 상회하며 정배열 상승 흐름. 단기 급등에 따른 이격도 부담은 존재.\n3. **대응 전략**: 추세가 꺾이지 않았으므로 보유 지속. 신규 진입은 조정 시 고려.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "65,515원",
                "return": "+8.71%",
                "advice": "HOLD",
                "reason": "1. **주간 리뷰**: 외국인 매도세로 인한 단기 조정 있었으나, 펀더멘털은 여전히 견고함.\n2. **대응 전략**: 글로벌 지정학적 리스크 지속으로 방산 섹터 관심 필요. 현 구간 보유 유효.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "27,210원",
                "return": "+2.79%",
                "advice": "BUY",
                "reason": "1. **주간 리뷰**: 단기 하락 조정 있었으나, AI 데이터센터 전력 수요라는 메가 트렌드는 변함 없음.\n2. **대응 전략**: 개인 투자자 중심의 저가 매수세 유입. 중장기적 관점에서 분할 매수 접근 유효.",
                "image": null
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "20.8410달러",
                "currentPrice": "13.50달러",
                "return": "-35.22%",
                "advice": "HOLD",
                "reason": "1. **시장 동향**: (지난 리포트 기준 유지) 비트코인 지지선 테스트 중.\n2. **대응 전략**: 크립토 시장 변동성 주시 필요.",
                "image": null
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "176.50달러",
                "return": "-6.64%",
                "advice": "BUY",
                "reason": "1. **시장 동향**: (지난 리포트 기준 유지) 저가 매수세 유입 확인.\n2. **매수 관점**: AI 대장주로서의 매력 여전.",
                "image": null
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "180.1010달러",
                "currentPrice": "138.20달러",
                "return": "-23.27%",
                "advice": "BUY",
                "reason": "1. **시장 동향**: (지난 리포트 기준 유지) 낙폭 과대에 따른 반발 매수 기대.\n2. **대응 전략**: 실적 기반의 반등 모색 구간.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "테슬라",
                "currentPrice": "182.00달러",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "기술주 반등 기대감 유효.",
                "image": null,
                "reportPath": "analysis/ev-market-tesla-hyundai.html"
            },
            {
                "name": "현대차",
                "currentPrice": "245,000원",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "밸류에이션 매력 지속.",
                "image": null,
                "reportPath": "analysis/ev-market-tesla-hyundai.html"
            },
            {
                "name": "금/은",
                "currentPrice": "Gold Trend",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "안전 자산 선호 심리.",
                "image": null
            },
            {
                "name": "달러 인덱스",
                "currentPrice": "97.33",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "소폭 하락 안정세.",
                "image": null
            }
        ],
        "strategy": {
            "buy": "삼성전자, KODEX AI 전력핵심설비",
            "sellConsider": "없음",
            "summary": "국내 시장은 삼성전자와 SK하이닉스 등 반도체 투톱이 이끄는 강세장이 연출되고 있습니다. 특히 삼성전자의 상승세가 두드러지며, 관련 밸류체인 및 전력 인프라(AI 전력설비)에도 긍정적인 낙수 효과가 기대됩니다. 미국장은 혼조세이나 국내 반도체 섹터의 독립적인 강세 흐름에 주목하여 비중을 조절하는 것이 좋습니다."
        }
    },
    {
        "date": "2026-02-07",
        "overview": "미국 증시는 '검은 금요일'의 충격을 딛고 저가 매수세가 유입되며 혼조세로 마감했습니다. 엔비디아와 테슬라 등 빅테크 기업들이 반등에 성공하며 기술적 지지선을 지켜냈습니다. 다만, 케빈 워시 발 '긴축 공포'가 여전히 시장을 짓누르고 있어 변동성은 지속될 전망입니다. 주말 간 암호화폐 시장의 움직임이 다음 주 시장의 선행 지표가 될 것입니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "28",
                "status": "Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,462.50",
                "status": "▼ 2.50"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "97.50",
                "status": "▼ 0.14"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "56.10",
                "status": "▼ 0.30"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "153,800원",
                "return": "+8.56%",
                "advice": "HOLD",
                "reason": "1. **주간 리뷰**: 외국인의 기록적인 매도세로 15만원대 초반까지 밀렸으나, 주말을 앞두고 추가 하락은 제한적이었습니다.\n2. **기술적 분석**: 5일선 이격이 과도하게 벌어져 있어 다음 주 초 기술적 반등이 기대됩니다.\n3. **대응 전략**: 15만원 이탈 시에는 비중 축소를 고려해야 하나, 현재는 과매도 구간으로 판단되므로 홀딩 유효합니다.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "798,000원",
                "return": "+34.61%",
                "advice": "HOLD",
                "reason": "1. **주간 리뷰**: '70만닉스'라는 오명을 썼으나 HBM 펀더멘털은 견고합니다. 엔비디아의 반등이 다음 주 긍정적인 영향을 줄 것입니다.\n2. **기술적 분석**: 120일선 지지력을 테스트 중입니다. 80만원 회복이 급선무입니다.\n3. **대응 전략**: 섣부른 매수보다는 80만원 안착 여부를 확인하고 대응하는 것이 좋습니다.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "66,225원",
                "return": "+9.89%",
                "advice": "BUY",
                "reason": "1. **주간 리뷰**: 시장 전체의 투심 악화로 동반 하락했으나, 하락폭은 제한적이었습니다.\n2. **대응 전략**: 지정학적 리스크는 여전하므로 조정 시 매수 관점 유효합니다.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "26,500원",
                "return": "+0.11%",
                "advice": "BUY",
                "reason": "1. **주간 리뷰**: 평단 부근에서 등락을 거듭하고 있습니다.\n2. **대응 전략**: AI 인프라 확장은 거스를 수 없는 대세입니다. 평단 아래에서는 분할 매수로 모아가십시오.",
                "image": null
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "20.8410달러",
                "currentPrice": "13.50달러",
                "return": "-35.22%",
                "advice": "HOLD",
                "reason": "1. **시장 동향**: 비트코인이 90K 선을 지지하며 반등을 모색 중입니다. 동사 주가도 $13.50으로 소폭 회복했습니다.\n2. **대응 전략**: 여전히 깊은 손실 구간이나, 크립토 윈터가 아닌 일시적 조정으로 판단됩니다. 반등 시 비중 조절이 필요합니다.",
                "image": null
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "176.50달러",
                "return": "-6.64%",
                "advice": "BUY",
                "reason": "1. **시장 동향**: 금요일 장에서 +2.7% 반등하며 170달러 지지선을 확인시켜주었습니다.\n2. **매수 관점**: 저가 매수세가 강력하게 유입되었습니다. 공포 구간에서의 분할 매수는 유효한 전략임이 증명되고 있습니다.",
                "image": null
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "180.1010달러",
                "currentPrice": "138.20달러",
                "return": "-23.27%",
                "advice": "BUY",
                "reason": "1. **시장 동향**: 무려 +7.0% 급반등하며 낙폭 과대 인식을 확산시켰습니다.\n2. **대응 전략**: 130달러 아래에서의 매수 기회는 짧았습니다. 변동성을 이용한 트레이딩이 유효합니다.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "테슬라",
                "currentPrice": "182.00달러",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "기술주 반등을 주도하며 +4.0% 상승 마감. 로보택시 기대감 유효.",
                "image": null,
                "reportPath": "analysis/ev-market-tesla-hyundai.html"
            },
            {
                "name": "현대차",
                "currentPrice": "245,000원",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "밸류에이션 매력 및 하이브리드 호조. 월요일 반등 기대.",
                "image": null,
                "reportPath": "analysis/ev-market-tesla-hyundai.html"
            },
            {
                "name": "금/은",
                "currentPrice": "Gold $5,030",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "불확실성 시대의 필수 헷지 자산.",
                "image": null
            },
            {
                "name": "달러 인덱스",
                "currentPrice": "97.50",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "급등세 진정 국면.",
                "image": null
            }
        ],
        "strategy": {
            "buy": "엔비디아, 테슬라, KODEX AI 전력핵심설비",
            "sellConsider": "없음",
            "summary": "검은 금요일의 공포는 하루 만에 '저가 매수 기회'로 바뀌었습니다. 엔비디아와 테슬라의 반등은 기술주 랠리가 아직 끝나지 않았음을 시사합니다. 주말 동안의 뉴스를 주시하되, 과도한 공포보다는 우량주에 대한 선별적 매수 접근이 유리한 시점입니다. 포트폴리오의 중심을 흔들리지 말고 지키십시오."
        }
    },
    {
        "date": "2026-02-06",
        "overview": "미국 AI 빅테크 기업 관련 우려와 함께 외국인 투자자들의 역대급 매도세가 이어지며 코스피가 5,000선 아래로 붕괴되었습니다. 삼성전자와 SK하이닉스 등 반도체 대장주가 급락세를 주도했으며, 이로 인해 매도 사이드카가 발동되는 등 시장 변동성이 극대화되었습니다. 공포 심리가 확산되었으나 개인 투자자들의 저가 매수세가 지수 하단을 방어하고 있는 상황입니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "35",
                "status": "Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,465.00",
                "status": "▲ 7.56"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "97.64",
                "status": "▲ 0.00"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "56.40",
                "status": "▲ 0.63"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "153,800원",
                "return": "+8.56%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 외국인의 대규모 매도 폭탄으로 3% 이상 급락하며 15만원대 초반까지 밀렸습니다. 5일선을 하향 이탈하며 단기 추세가 훼손되었습니다.\n2. **매수/매도 관점**: 15만원 지지 여부가 중요합니다. 추가 하락 시 14만원 중반대까지 열어두어야 합니다.\n3. **매매 동향**: 외국인은 연일 대량 매도 중이나, 개인이 이를 전량 받아내고 있습니다. 수급 주체가 개인으로 바뀐 점은 주의가 필요합니다.\n4. **💡 총평**: 공포 구간이나, 펀더멘털 훼손보다는 수급 이슈입니다. 관망하며 15만원 지지력을 확인하세요.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "798,000원",
                "return": "+34.61%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 80만원 선이 붕괴되며 '70만닉스'로 회귀했습니다. 5% 넘는 급락세로 투자 심리가 위축되었습니다.\n2. **매수/매도 관점**: 단기 낙폭 과대 구간입니다. 기술적 반등이 나올 자리까지 밀렸으므로 투매보다는 보유가 유리합니다.\n3. **매매 동향**: 외국인 매도세가 집중되고 있으나 기관의 방어 매수세가 일부 유입되고 있습니다.\n4. **💡 총평**: 변동성이 극심합니다. 멘탈 관리가 필요한 시점입니다.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "66,225원",
                "return": "+9.89%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 전일 대비 **6.96%** 급락하며 큰 폭의 조정을 받았습니다. 주요 구성 종목인 한화시스템, 현대로템 등이 약세를 보이며 ETF 가격을 끌어내렸습니다.\n2. **매수/매도 관점**: 5일선과 20일선을 모두 하향 이탈한 상태이나, 중장기 수출 모멘텀은 유효하므로 과도한 매도는 자제할 필요가 있습니다.\n3. **매매 동향**: 방산 섹터 전반에 차익 실현 매물이 쏟아졌으나, 이는 펀더멘털 훼손보다는 시장 전체의 투심 악화 영향이 큽니다.\n4. **💡 총평**: 많이 아픈 하루였으나, K-방산의 성장 스토리는 끝나지 않았습니다. 흔들리지 말고 보유하십시오.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "26,500원",
                "return": "+0.11%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 시장 급락에 동조하며 조정받았으나 평단 부근에서 지지받고 있습니다.\n2. **매수/매도 관점**: AI 인프라 펀더멘털은 견고합니다. 평단 위협 시 추가 매수 기회입니다.\n3. **매매 동향**: 기관의 저가 매수세 유입이 포착됩니다.\n4. **💡 총평**: 공포에 사서 환희에 팔 준비를 해야 할 종목입니다.",
                "image": null
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "20.8410달러",
                "currentPrice": "13.16달러",
                "return": "-36.85%",
                "advice": "HOLD",
                "reason": "1. **주가 흐름**: 10% 이상 폭락하며 신저가 흐름을 보이고 있습니다.\n2. **매수/매도 관점**: 추가 하락 가능성이 열려있습니다. 섣불리 물타기보다는 바닥 확인이 우선입니다.\n3. **매매 동향**: 부정적 뉴스(자금 조달 이슈)로 인한 투심 악화가 지속되고 있습니다.\n4. **💡 총평**: 인내심의 한계를 시험하는 구간입니다. 보수적 접근이 필요합니다.",
                "image": null
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "171.87달러",
                "return": "-9.09%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 1.4% 하락하며 조정세를 이어가고 있습니다.\n2. **매수/매도 관점**: 170달러 초반의 지지력을 테스트 중입니다. 분할 매수로 대응하기 좋은 가격대입니다.\n3. **매매 동향**: 서학개미들의 저가 매수세가 지속 유입 중입니다.\n4. **💡 총평**: AI 대장주의 조정은 언제나 기회였습니다.",
                "image": null
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "180.1010달러",
                "currentPrice": "129.15달러",
                "return": "-28.29%",
                "advice": "BUY",
                "reason": "1. **주가 흐름**: 6.8% 급락하며 하락폭을 키웠습니다.\n2. **매수/매도 관점**: 단기 낙폭이 과도합니다. RSI 등 보조지표상 과매도 구간 진입이 예상됩니다.\n3. **매매 동향**: 차익 실현 매물이 쏟아지고 있으나 성장성은 유효합니다.\n4. **💡 총평**: 공포를 이겨낼 용기가 있다면 지금이 기회일 수 있습니다.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "금/은",
                "currentPrice": "Gold $5,015 / Silver $89",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "증시 폭락 속 안전자산 매력 부각. 헷지 차원에서 필수 보유.",
                "image": null
            },
            {
                "name": "엔비디아",
                "currentPrice": "171.87달러",
                "outlook": "긍정적",
                "advice": "STRONG BUY",
                "reason": "170달러 선에서의 반등을 기대하며 적극 매수 관점 유지.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "currentPrice": "798,000원",
                "outlook": "관망",
                "advice": "WATCH",
                "reason": "80만원 붕괴로 심리적 지지선 이탈. 수급 안정 시까지 관망 권장.",
                "image": null
            },
            {
                "name": "달러 인덱스",
                "currentPrice": "97.64",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "환율 상승 압력 지속. 시장 변동성 지표로 활용.",
                "image": null
            }
        ],
        "strategy": {
            "buy": "엔비디아 (분할 매수), KODEX AI 전력핵심설비 (저가 매수)",
            "sellConsider": "사이퍼 마이닝 (리스크 관리 필요)",
            "summary": "역대급 외국인 매도세로 인한 '블랙 프라이데이'가 연출되고 있습니다. 코스피 5,000선 붕괴와 반도체 섹터의 급락은 공포스럽지만, 과도한 투매는 늘 반등의 씨앗이 됩니다. 지금은 뇌동매매를 멈추고 현금을 확보하거나, 확실한 주도주(엔비디아, 전력설비)의 저점 매수 기회를 노리는 차분함이 필요합니다."
        }
    },
    {
        "date": "2026-02-05",
        "overview": "미국 기술주 급락의 여파로 코스피는 하락 출발하며 약세 흐름을 보였습니다. 5,300선 안착에 실패하며 5,200선 중반으로 밀렸고, 전일 급등했던 반도체 대장주들에 대한 외국인과 기관의 차익 실현 매물이 출회되었습니다. 공포 지수는 'Fear' 단계를 유지하고 있으며, 암호화폐 시장은 'Extreme Fear'로 투자 심리가 매우 위축된 상태입니다. 반면 금/은 등 귀금속 섹터가 상대적으로 견조한 흐름을 보이며 안전 자산 선호 심리가 고개를 들고 있습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "41",
                "status": "Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,457.44",
                "status": "▲ 5.29"
            },
            "dollarIndex": {
                "label": "달러 인덱스",
                "value": "97.64",
                "status": "▲ 0.06"
            },
            "goldSiverRatio": {
                "label": "금/은 비율",
                "value": "55.77",
                "status": "▼ 1.52"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "164,100원",
                "return": "+15.82%",
                "advice": "HOLD",
                "reason": "1. **현재 주가 위치와 5일선 흐름**: 전일 급등 후 3%대 조정을 받으며 16만원 중반대로 내려왔습니다. 5일선 이격 과열을 해소하는 과정입니다.\n2. **매수/매도 관점**: 16만원 초반은 강력한 지지 구간입니다. 아직 추세가 꺾인 것은 아닙니다.\n3. **주요 가격 라인**: 지지선 160,000원, 저항선 170,000원.\n4. **매매 동향 파악**: 최근 1주일간 개인은 매도 우위였으나 오늘 저가 매수 유입, 외국인/기관은 단기 차익 실현 매물을 쏟아내며 순매도로 전환했습니다. 1달 누적으로는 여전히 외국인 수급이 개선세입니다.\n5. **💡 총평**: 급등에 따른 피로감 해소 국면입니다. 편안하게 보유하시기 바랍니다.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "880,000원",
                "return": "+48.44%",
                "advice": "HOLD",
                "reason": "1. **현재 주가 위치와 5일선 흐름**: 미국 기술주 하락에 동조하며 90만원을 다시 하회했습니다. 5일선 위에 머물러 있어 상승 추세는 유효합니다.\n2. **매수/매도 관점**: 85만원 부근까지의 조정은 건전한 눌림목으로 판단됩니다.\n3. **주요 가격 라인**: 1차 지지 870,000원.\n4. **매매 동향 파악**: 외국인의 매도세가 거세지만, 이는 차익 실현 성격이 짙습니다. 기관은 연기금 중심으로 방어적인 매수세를 보이고 있습니다.\n5. **💡 총평**: HBM 펀더멘털은 이상 없습니다. 변동성을 즐기시기 바랍니다.",
                "image": null
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "70,100원",
                "return": "+16.32%",
                "advice": "HOLD",
                "reason": "1. **현재 주가 위치**: 지수 하락장에서도 강보합을 유지하며 방어주 매력을 뽐내고 있습니다.\n2. **매수/매도 관점**: 추세가 매우 훌륭합니다. 지속 보유입니다.\n4. **매매 동향 파악**: 외국인의 꾸준한 매수세가 1개월 째 지속 중입니다. 수급 빈집털이가 진행 중인 알짜 섹터입니다.\n5. **💡 총평**: 시장 흔들릴 때 든든한 버팀목입니다.",
                "image": null
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "27,900원",
                "return": "+5.39%",
                "advice": "BUY",
                "reason": "1. **현재 주가 위치와 5일선 흐름**: 5일선을 살짝 이탈했으나 20일선 지지가 확실합니다.\n2. **매수/매도 관점**: 27,000원 초반은 적극 매수 구간입니다.\n4. **매매 동향 파악**: 최근 1주 기관 순매수가 지속되고 있습니다. 스마트 머니가 모이는 곳입니다.\n5. **💡 총평**: 조정 시 매수 기회입니다.",
                "image": null
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "20.8410달러",
                "currentPrice": "15.50달러",
                "return": "-25.62%",
                "advice": "HOLD",
                "reason": "1. **상태**: 크립토 공포 장세 지속으로 변동성이 확대되었습니다.\n4. **매매 동향**: 비트코인 현물 ETF 자금 유출이 관측되며 투심이 악화되었습니다.\n5. **💡 총평**: 인내심이 필요한 구간입니다.",
                "image": null
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "174.50달러",
                "return": "-7.70%",
                "advice": "BUY",
                "reason": "1. **상태**: 매크로 이슈로 인한 가격 조정입니다.\n4. **매매 동향**: 서학개미들의 저가 매수세가 강력하게 유입되고 있습니다.\n5. **💡 총평**: 쫄지 말고 모아가야 할 때입니다.",
                "image": null
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "180.1010달러",
                "currentPrice": "152.20달러",
                "return": "-15.49%",
                "advice": "BUY",
                "reason": "1. **상태**: 고점 대비 조정폭 확대되나 성장 스토리는 유효합니다.\n4. **매매 동향**: 단기 과열 해소 중입니다.\n5. **💡 총평**: 성장성은 변함 없습니다.",
                "image": null
            }
        ],
        "watchlist": [
            {
                "name": "금/은",
                "currentPrice": "Gold $5,020 / Silver $90",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "경기 불확실성이 커질수록 빛나는 자산입니다. 금/은 비율 55.77로 은의 가치가 상대적으로 고평가 상태이나, 유동성 장세 기대감이 반영되었습니다.",
                "image": null
            },
            {
                "name": "달러 인덱스",
                "currentPrice": "97.64",
                "outlook": "중립",
                "advice": "WATCH",
                "reason": "큰 변동 없이 안정적인 흐름입니다. 환율 방어의 척도로만 참고하세요.",
                "image": null
            },
            {
                "name": "엔비디아",
                "currentPrice": "174.50달러",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "AI 주도주로서의 지위는 견고합니다. 170달러 초반은 매력적인 진입 가격입니다.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "currentPrice": "880,000원",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "눌림목 매수 유효.",
                "image": null
            }
        ],
        "strategy": {
            "buy": "KODEX AI 전력핵심설비, 엔비디아 (조정 시 분할 매수)",
            "sellConsider": "없음",
            "summary": "숨고르기 장세입니다. 외국인의 차익 실현은 자연스러운 현상이니 공포를 가질 필요는 없습니다. 오히려 AI 전력 설비와 같은 확실한 테마의 눌림목을 활용하고, 포트폴리오의 헷지 수단으로 금/은 관심을 가지는 전략이 유효합니다."
        }
    },
    {
        "date": "2026-02-04",
        "overview": "어제의 폭발적인 반등 이후 시장은 잠시 숨고르기에 들어갔습니다. 코스피는 상방 압력을 유지하며 0.71% 상승 마감했으나, 삼성전자와 SK하이닉스 등 주요 반도체 종목은 전일 급등에 따른 단기 차익 실현 매물로 인해 소폭 하락세를 보였습니다. 공포 지수(Fear & Greed Index)가 41로 다시 하락하며 투자 심리는 여전히 신중한 상태를 유지하고 있습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "41",
                "status": "Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,452.15",
                "status": "▲ 3.15"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "164,600원",
                "return": "+16.18%",
                "advice": "HOLD",
                "reason": "1. **차익 실현 매물 출현**: 전일 11% 이상의 급등 이후 단기 차익 실현 물량이 나오며 1.7% 하락했습니다.\n2. **추세 유지**: 5일선 위에서 견조한 조정을 보이고 있어 추세 훼손으로 보기는 어렵습니다.\n3. **💡 대응**: 외인 수급이 완전히 이탈한 것이 아니므로 **보유(HOLD)** 의견을 유지합니다.",
                "image": "report/images/2026-02-04/삼성전자.png"
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "891,000원",
                "return": "+50.30%",
                "advice": "HOLD",
                "reason": "1. **반도체 섹터 동반 조정**: 엔비디아의 애프터마켓 하락 영향으로 국내 반도체 대장주인 하이닉스도 소폭 조정을 받았습니다.\n2. **강력한 펀더멘털**: HBM 수요에 대한 기대감은 여전히 유효하며, 90만원 하회는 일시적 진통으로 판단됩니다.\n3. **💡 대응**: 중장기 성장성이 뚜렷하므로 기존 물량 **보유(HOLD)**를 권장합니다.",
                "image": "report/images/2026-02-04/SK하이닉스.png"
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "70,065원",
                "return": "+16.26%",
                "advice": "HOLD",
                "reason": "1. **방산 섹터 강세**: 지수 조정 중에도 방산주는 독자적인 수주 모멘텀으로 상승세를 이어가고 있습니다.\n2. **안정적 상승 채널**: 저점을 높여가는 전형적인 우상향 패턴을 보이고 있습니다.\n3. **💡 대응**: 추세가 매우 견고하므로 수익 극대화 전략을 위해 **보유(HOLD)** 합니다.",
                "image": "report/images/2026-02-04/PLUSK방산.png"
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "28,685원",
                "return": "+8.36%",
                "advice": "BUY",
                "reason": "1. **전력 인프라 수요 급증**: AI 데이터센터 증설에 따른 전력 인프라 수혜가 본격화되며 신고가 흐름을 보이고 있습니다.\n2. **기관 매수세 유입**: 최근 기관의 꾸준한 순매수가 유입되며 하방 경직성을 확보했습니다.\n3. **💡 대응**: AI 열풍의 실질적 수혜지로서 눌림목 발생 시 적극적인 **매수(BUY)** 관점을 유지합니다.",
                "image": "report/images/2026-02-04/KODEXAI전력핵심설비.png"
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "20.8410달러",
                "currentPrice": "16.14달러",
                "return": "-22.56%",
                "advice": "HOLD",
                "reason": "1. **비트코인 변동성**: 비트코인 가격 조정과 함께 채굴주들의 변동성이 확대되었습니다.\n2. **낙폭 과대**: 단기적으로 과도한 하락세이나, 장기적인 해시레이트 경쟁력은 유효합니다.\n3. **💡 대응**: 추가 하락보다는 바닥 다지기 과정으로 보이며, 관망하며 **보유(HOLD)** 합니다.",
                "image": "report/images/2026-02-04/사이퍼마이닝.png"
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "179.54달러",
                "return": "-5.04%",
                "advice": "STRONG BUY",
                "reason": "1. **프리미엄 조정**: 강력한 실적 가이던스에도 불구하고 매크로 불확실성에 따른 일시적 조정입니다.\n2. **AI 독점력**: 경쟁사 대비 압도적인 시장 점유율과 CUDA 생태계의 우위는 변함이 없습니다.\n3. **💡 대응**: $180 이하 가격대는 장기 투자자에게 매력적인 진입 시점입니다. **적극 매수(STRONG BUY)** 추천합니다.",
                "image": "report/images/2026-02-04/엔비디아.png"
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "180.1010달러",
                "currentPrice": "156.40달러",
                "return": "-13.16%",
                "advice": "BUY",
                "reason": "1. **성장통**: 가파른 상승 이후 기간 조정 국면에 진입했습니다.\n2. **B2B 확장성**: 정부 사업 위주에서 민간 기업용 AIP 도입 가속화로 펀더멘털은 강화 중입니다.\n3. **💡 대응**: 단기 변동성에 일희일비하기보다 AIP 플랫폼의 확산 속도에 주목하며 **매수(BUY)** 관점을 유지합니다.",
                "image": "report/images/2026-02-04/팔란티어테크.png"
            }
        ],
        "watchlist": [
            {
                "name": "엔비디아",
                "currentPrice": "179.54달러",
                "outlook": "매우 긍정적",
                "advice": "STRONG BUY",
                "reason": "AI 반도체의 독점적 지위가 유지되는 한, 단기 조정은 언제나 기회입니다."
            },
            {
                "name": "SK하이닉스",
                "currentPrice": "891,000원",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "HBM 시장에서의 압도적 지위를 바탕으로 실적 개선세가 뚜렷하며, 기술적 조정은 좋은 매수 기회입니다."
            }
        ],
        "strategy": {
            "buy": "엔비디아, KODEX AI 전력핵심설비",
            "sellConsider": "없음",
            "summary": "어제의 폭등 이후 시장은 '공포' 단계로 재진입하며 속도 조절에 나섰습니다. 무리한 추격 매수보다는 포트폴리오의 질적 개선에 집중할 때입니다. 반도체의 일시적 조정 속에서도 방산 및 전력 인프라 섹터의 강세는 주목할 만하며, AI 테크주에 편중된 포트폴리오라면 리스크 분산이 필요합니다."
        }
    },
    {
        "date": "2026-02-03",
        "overview": "2026년 2월 3일, 국내외 시장은 '워시 쇼크'의 극심한 공포를 단 하루 만에 극복하며 기록적인 반등을 기록했습니다. 코스피는 삼성전자와 SK하이닉스의 10% 내외 급등에 힘입어 6.83% 상승 마감했으며, 환율 또한 1,450원선으로 안착하며 안정을 찾았습니다. 미국 프리마켓 역시 팔란티어 등의 강세가 이어지며 글로벌 투심이 공포(Fear)에서 중립(Neutral)으로 빠르게 회복되는 양상입니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "52",
                "status": "Neutral"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,450.3",
                "status": "▼ 10.2"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "141,675원",
                "currentPrice": "167,500원",
                "return": "+18.2%",
                "advice": "HOLD",
                "reason": "1. **역대급 반등 성취**: 하루 만에 **11.37%** 급등하며 16만원대 중반까지 수직 상승했습니다. 전일의 투매가 과도했음을 증명하는 강력한 쇼트 커버링이 유입된 것으로 분석됩니다.\n2. **주요 이평선 회복**: 5일선 및 20일선을 단숨에 돌파하며 기술적 추세를 복구했습니다.\n3. **💡 대응**: 수익권 진입에 성공했습니다. 급격한 상승 후 숨 고르기가 있을 수 있으나, 외국인 수급이 개선되고 있어 **보유(HOLD)** 전략을 유지합니다.",
                "image": "report/images/2026-02-03/삼성전자.png"
            },
            {
                "name": "SK하이닉스",
                "avgPrice": "592,800원",
                "currentPrice": "907,000원",
                "return": "+53.0%",
                "advice": "HOLD",
                "reason": "1. **90만원 탈환**: 9% 이상의 급등으로 다시 90만원 고지를 밟았습니다. HBM 등 AI 반도체 수요에 대한 신뢰가 다시 확인되며 업종 내 대장주로서의 면모를 과시했습니다.\n2. **추세 복귀**: 전일의 변동성을 완전히 흡수하는 장대양봉이 출현했습니다.\n3. **💡 대응**: 압도적인 수익률을 유지 중입니다. 시장의 중심주인 만큼 비중 축소보다는 **보유**를 추천합니다.",
                "image": "report/images/2026-02-03/SK하이닉스.png"
            },
            {
                "name": "PLUS K 방산",
                "avgPrice": "60,264원",
                "currentPrice": "69,500원",
                "return": "+15.3%",
                "advice": "HOLD",
                "reason": "1. **방산 테마 강세**: 국내 방산업종의 수주 모멘텀이 이어지는 가운데 시장 반등과 함께 **6.70%** 상승했습니다.\n2. **💡 대응**: 꾸준한 우상향 곡선을 그리는 종목으로, 지정학적 리스크 완화 시 일부 조정 가능성은 있으나 펀더멘털은 견고합니다.",
                "image": "report/images/2026-02-03/PLUSK방산.png"
            },
            {
                "name": "KODEX AI 전력핵심설비",
                "avgPrice": "26,472원",
                "currentPrice": "28,065원",
                "return": "+6.0%",
                "advice": "HOLD",
                "reason": "1. **인프라 테마 복구**: AI 데이터센터 관련 전력 인프라 수요 기대감이 여전합니다. **8.94%** 급등하며 박스권 상단 돌파를 시도 중입니다.\n2. **💡 대응**: AI 섹터의 필수 인프라로서 장기 보유를 권장합니다.",
                "image": "report/images/2026-02-03/KODEXAI전력핵심설비.png"
            },
            {
                "name": "사이퍼 마이닝",
                "avgPrice": "20.8410달러",
                "currentPrice": "16.11달러",
                "return": "-22.7%",
                "advice": "ADD",
                "reason": "1. **비트코인 연동 변동성**: 비트코인 상승세 대비 채굴주들의 반등폭이 다소 제한적이었으나 프리마켓에서 회복세를 보이고 있습니다.\n2. **💡 대응**: 평단 대비 손실 중이나, 가상자산 시장의 중장기 강세론이 유효하다면 오히려 **물타기(ADD)** 전략을 고려할 시점입니다.",
                "image": "report/images/2026-02-03/사이퍼마이닝.png"
            },
            {
                "name": "엔비디아",
                "avgPrice": "189.0620달러",
                "currentPrice": "186.34달러",
                "return": "-1.4%",
                "advice": "BUY",
                "reason": "1. **평단 부근 안착**: 소폭 손실 중이나 미국 본장 개장 전 프리마켓에서 긍정적인 흐름입니다. AI 칩 수요는 여전히 견조합니다.\n2. **💡 대응**: 현재가는 매력적인 매수 구간입니다. **추가 매수** 또는 **신규 진입**이 유효합니다.",
                "image": "report/images/2026-02-03/엔비디아.png"
            },
            {
                "name": "팔란티어 테크",
                "avgPrice": "180.1010달러",
                "currentPrice": "163.72달러",
                "return": "-9.1%",
                "advice": "BUY",
                "reason": "1. **프리마켓 폭등**: 10% 이상의 프리마켓 상승세를 보이며 강력한 실적 기대감 또는 수주 소식이 반영되는 중입니다.\n2. **💡 대응**: 평단에 빠르게 근접하고 있습니다. 본장에서의 강한 거래량을 동반한 돌파 여부를 주시하며 **추가 매수** 관점을 유지합니다.",
                "image": "report/images/2026-02-03/팔란티어테크.png"
            }
        ],
        "watchlist": [
            {
                "name": "엔비디아",
                "currentPrice": "186.34달러",
                "outlook": "매우 긍정적",
                "advice": "STRONG BUY",
                "reason": "AI 반도체의 독점적 지위가 유지되는 한, 단기 조정은 언제나 기회입니다."
            }
        ],
        "strategy": {
            "buy": "엔비디아, 사이퍼 마이닝 (낙폭 과대 종목 중심의 비중 확대)",
            "sellConsider": "없음 (글로벌 투심 회복 구간)",
            "summary": "공포를 이겨낸 보상이 돌아오고 있습니다. 국내 대형주(반도체)는 강력한 V자 반등을 완성했고, 이제 미국 기술주들의 랠리를 기대할 차례입니다. 현재 포트폴리오는 대부분 수익권이거나 회복 중이므로, 손실 중인 미국 성장주들에 대한 적극적인 대응(ADD/BUY) 전략을 권고합니다."
        }
    },
    {
        "date": "2026-02-02",
        "overview": "2026년 2월 2일, 글로벌 금융시장은 이른바 **'워시 쇼크(Warsh Shock)'**로 인해 대혼란에 빠졌습니다. 케빈 워시(Kevin Warsh) 전 연준 이사의 차기 연준 의장 지명 소식에 코스피는 **5% 이상 급락**하며 매도 사이드카가 발동되었고, 환율은 **1,460원**을 돌파하는 등 극심한 변동성을 보이고 있습니다.",
        "indicators": {
            "fearAndGreed": {
                "label": "Fear & Greed",
                "value": "15",
                "status": "Extreme Fear"
            },
            "cpiKorea": {
                "label": "한국 CPI",
                "value": "2.8%",
                "status": "YoY"
            },
            "cpiUS": {
                "label": "미국 CPI",
                "value": "3.4%",
                "status": "YoY"
            },
            "exchangeRate": {
                "label": "원/달러 환율",
                "value": "1,460.5",
                "status": "▲ 25.5"
            }
        },
        "holdings": [
            {
                "name": "삼성전자",
                "avgPrice": "65,000원",
                "currentPrice": "151,200원",
                "return": "+132.6%",
                "advice": "HOLD",
                "reason": "1. **현재 주가 위치와 5일선 흐름**: 워시 쇼크의 직격탄을 맞으며 오늘 **-5.79%** 급락했습니다. 단기적으로 5일선을 강하게 이탈하며 하락 추세로 전환되었습니다.\n\n2. **매수/매도 관점 분석**: 시장 전체의 투매 현상이 나타나고 있어 현재는 **HOLD(관망)**가 최선입니다. 미국 금리 추이와 환율 안정을 확인한 후 대응해야 합니다.\n\n3. **주요 가격 라인**: 15만원 지지선이 위태롭습니다. 하향 돌파 시 14만 5천원까지 열려 있으며, 반등 시 16만원이 강한 저항선이 될 것입니다.\n\n4. **💡 총평**: 케빈 워시의 매파적 성향에 대한 공포가 시장을 지배하고 있습니다. 하지만 과도한 공포는 늘 기회를 동반합니다. 기보유자께서는 패닉 셀링보다는 시장의 진정세를 기다리는 인내심이 필요한 시점입니다.",
                "image": "report/images/2026-02-02/삼성전자.png"
            }
        ],
        "watchlist": [
            {
                "name": "엔비디아",
                "currentPrice": "191.33달러",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "나스닥 하락과 함께 조정을 받고 있으나 인공지능(AI) 펀더멘털은 여전합니다. 오히려 워시 쇼크로 인한 조정은 우량주 비중 확대의 기회입니다.",
                "image": null
            },
            {
                "name": "SK하이닉스",
                "currentPrice": "832,000원",
                "outlook": "긍정적",
                "advice": "BUY",
                "reason": "외국인 매도세가 집중되며 장중 8% 넘게 급락했습니다. 1450원대 환율 부담이 크지만, HBM 수요는 견조하므로 80만원 초반대라면 기술적 반등을 노린 매수가 유효합니다.",
                "image": null
            }
        ],
        "strategy": {
            "buy": "엔비디아, SK하이닉스 (단기 낙폭 과대 시 분할 매수)",
            "sellConsider": "금, 암호화폐 (변동성 극대화 구간)",
            "summary": "**워시 쇼크**로 인행 안전자산(금, 은)과 위험자산(주식, 코인)이 동시에 폭락하는 이례적인 상황입니다. 연준의 통화정책 불확실성이 해소될 때까지 보수적인 관점을 유지하되, 삼성전자와 같은 핵심 우량주에 대해서는 극심한 공포 속에서 나타나는 저가 매수 기회를 노려야 합니다."
        }
    }
];

const ANALYSIS_REPORTS = [
    {
        "id": "genesis-mission",
        "title": "미국 '제네시스 미션(Genesis Mission)' 행정명령 상세 분석",
        "date": "2026-03-21",
        "summary": "AI 판 '맨해튼 프로젝트'로 불리는 트럼프 행정부의 국가 AI 과학 혁신 이니셔티브와 시장 영향을 심층 분석합니다.",
        "tags": ["제네시스미션", "AI패권", "트럼프정책", "반도체"],
        "link": "analysis/genesis-mission.html",
        "thumbnail": null
    },
    {
        "id": "middle-east-war-2026",
        "title": "제5차 중동 전쟁의 서막? 이란-이스라엘 충돌과 시장 긴급 진단",
        "date": "2026-02-28",
        "summary": "2026년 2월 28일, 이스라엘과 미국의 '포효하는 사자' 작전 개시로 인한 유가 급등, 안전자산 쏠림, 그리고 글로벌 증시의 리스크 분석.",
        "tags": ["중동전쟁", "유가급등", "지정학적리스크", "안전자산"],
        "link": "analysis/middle-east-war-2026.html",
        "thumbnail": null
    },
    {
        "id": "hyundai-future-mobility",
        "title": "현대차: 47만원의 비밀 (하이브리드 & SDV)",
        "date": "2026-02-10",
        "summary": "PBR 1배를 향한 주주환원 정책과 하이브리드 캐시카우, 그리고 인도 IPO 모멘텀을 심층 분석합니다.",
        "tags": ["자동차", "하이브리드", "주주환원"],
        "link": "analysis/hyundai-future-mobility.html",
        "thumbnail": null
    },
    {
        "id": "doosan-enerbility-smr",
        "title": "두산에너빌리티: 원전의 르네상스",
        "date": "2026-02-10",
        "summary": "AI 데이터센터 전력난의 해결사로 떠오른 SMR과 체코 원전 수주에 따른 글로벌 파운드리 경쟁력을 분석합니다.",
        "tags": ["원전", "SMR", "전력인프라"],
        "link": "analysis/doosan-enerbility-smr.html",
        "thumbnail": null
    },
        {
        "id": "foreign-sector-flow",
        "title": "코스피 매매 동향: 오늘 시장의 주도 자금은 어디인가?",
        "date": "2026-02-07",
        "summary": "코스피 시장에서 투자 주체별 매수·매도 흐름과 업종별 자금 이동을 한눈에 정리한 매매 동향 리포트입니다.",
        "tags": ["코스피", "매매동향", "수급분석"],
        "link": "analysis/foreign-sector-flow.html",
        "thumbnail": null
    },
    {
        "id": "ev-tesla-hyundai",
        "title": "EV 시장의 진검승부: 테슬라 vs 현대차",
        "date": "2026-02-07",
        "summary": "전기차 캐즘 속에서 테슬라의 AI 로보택시 비전과 현대차의 하이브리드 유연성 전략을 비교 분석합니다.",
        "tags": ["전기차", "자율주행", "하이브리드"],
        "link": "analysis/ev-market-tesla-hyundai.html",
        "thumbnail": null
    },
    {
        "id": "ai-semiconductor",
        "title": "AI 반도체 전쟁: 엔비디아 vs SK하이닉스",
        "date": "2026-02-06",
        "summary": "AI 반도체 시장의 경쟁 구도와 HBM 메모리의 중요성, 그리고 향후 전망을 다룹니다.",
        "tags": ["반도체", "AI", "HBM"],
        "link": "analysis/ai-semiconductor.html",
        "thumbnail": null
    },
    {
        "id": "k-defense",
        "title": "K-방산의 글로벌 도약",
        "date": "2026-02-04",
        "summary": "지정학적 리스크 확대에 따른 국내 방산 기업들의 수출 모멘텀과 성장 가능성을 분석합니다.",
        "tags": ["방산", "수출"],
        "link": "analysis/k-defense.html",
        "thumbnail": null
    }
];

export const COMPANY_ANALYSIS_ITEMS = [
    {
        name: "삼성전자",
        ticker: "005930.KS",
        summary: "메모리, 파운드리, 모바일, 디스플레이를 아우르는 사업 포트폴리오와 AI 반도체 사이클 속 실적 회복 가능성을 정리한 기업 분석입니다.",
        tags: ["반도체", "파운드리", "HBM", "AI"],
        link: "analysis/samsung-electronics.html"
    },
    {
        name: "SK하이닉스",
        ticker: "000660.KS",
        summary: "HBM 주도권과 메모리 업황 개선, AI 수요 확대에 따른 실적 레버리지와 밸류에이션 포인트를 정리한 기업 분석입니다.",
        tags: ["반도체", "HBM", "DRAM", "AI"],
        link: "analysis/sk-hynix.html"
    },
    {
        name: "엔비디아",
        ticker: "NVDA",
        summary: "AI 가속기 시장 지배력, CUDA 생태계, 데이터센터 수요 지속성, 높은 기대가 반영된 밸류에이션 부담을 함께 정리한 기업 분석입니다.",
        tags: ["AI", "GPU", "데이터센터", "플랫폼"],
        link: "analysis/nvidia.html"
    },
    {
        name: "현대차",
        ticker: "005380.KS",
        summary: "하이브리드 경쟁력, 주주환원 정책, 글로벌 생산 포트폴리오와 SDV 전환 가능성을 중심으로 정리한 기업 분석입니다.",
        tags: ["자동차", "하이브리드", "주주환원", "SDV"],
        link: "analysis/hyundai-motor.html"
    },
    {
        name: "LG전자",
        ticker: "066570.KS",
        summary: "가전 중심의 안정적 현금흐름 위에 전장과 냉난방공조 성장이 더해지는 사업 재평가 가능성을 정리한 기업 분석입니다.",
        tags: ["가전", "전장", "HVAC", "B2B"],
        link: "analysis/lg-electronics.html"
    },
    {
        name: "팔란티어",
        ticker: "PLTR",
        summary: "정부·국방 기반의 안정적 매출 위에 AIP 중심 민간 확장이 더해지는 소프트웨어 플랫폼 기업으로서의 투자 포인트를 정리한 기업 분석입니다.",
        tags: ["AI", "소프트웨어", "플랫폼", "데이터"],
        link: "analysis/palantir.html"
    }
];

export const DEEP_DIVE_ITEMS = [
    {
        name: "테슬라 (Tesla Terafab)",
        ticker: "TSLA",
        date: "2026-03-21",
        opinion: "BUY",
        summary: "자체 AI 칩 100~200B개 달성 목표의 테라 팹 프로젝트. 반도체 내재화를 통한 마진 확대 및 AI 파운드리 플랫폼으로의 밸류 리레이팅 기대.",
        tags: ["Terafab", "원가 절감", "xAI 연합", "파운드리 독립"],
        link: "analysis/tesla-terafab-deep-dive.html"
    },
    {
        name: "팔란티어",
        ticker: "PLTR",
        date: "2026-03-22",
        opinion: "BUY",
        summary: "AIP(AI Platform)를 통한 기업용 AI 운영체제의 패권 장악. Rule of 40 score 118%, 미국 상업 매출 +115%, FCF 마진 57% — 2026년은 이익 폭발의 원년이다.",
        tags: ["AI 플랫폼", "Rule of 40: 118%", "FCF 57%", "국방 AI", "Ontology"],
        kpis: { revenue: "$7.18B", growth: "+61%", ruleOf40: "118%", fcfMargin: "57%" },
        link: "analysis/palantir-deep-dive.html"
    },
    {
        name: "엔비디아",
        ticker: "NVDA",
        date: "2026-03-22",
        opinion: "HOLD",
        summary: "Blackwell 슈퍼사이클 진입 및 데이터센터 패권 유지. 매출 총이익률 75% 방어 시 강력한 FCF 창출 여력이 지속됩니다.",
        tags: ["Blackwell", "CUDA 생태계", "데이터센터", "Gross Margin 74%"],
        link: "analysis/nvidia-deep-dive.html"
    },
    {
        name: "SK하이닉스",
        ticker: "000660.KS",
        date: "2026-03-22",
        opinion: "BUY",
        summary: "HBM3E 및 HBM4 시장 독점력 유지. AI 메모리 사이클의 최대 수혜주로, 이익 레버리지가 극대화되는 구간입니다.",
        tags: ["HBM 독점", "영업이익률 극대화", "엔비디아 연합"],
        link: "analysis/sk-hynix-deep-dive.html"
    },
    {
        name: "삼성전자",
        ticker: "005930.KS",
        date: "2026-03-22",
        opinion: "HOLD",
        summary: "메모리 업황의 캐시카우 역할은 지속되나, HBM 퀄 테스트 지연 및 파운드리 적자에 대한 체질 개선 확인이 선행되어야 합니다.",
        tags: ["HBM 퀄", "레거시 메모리", "파운드리 적자", "배당 매력"],
        link: "analysis/samsung-electronics-deep-dive.html"
    },
    {
        name: "현대차",
        ticker: "005380.KS",
        date: "2026-03-22",
        opinion: "BUY",
        summary: "피크아웃 우려를 종식시키는 눈부신 하이브리드(HEV) 믹스와 압도적인 주주환원율(TSR). 밸류업 프로그램의 최선호주.",
        tags: ["하이브리드(HEV)", "주주환원율 35%", "SDV 전환", "인도 IPO"],
        link: "analysis/hyundai-motor-deep-dive.html"
    },
    {
        name: "LG전자",
        ticker: "066570.KS",
        date: "2026-03-22",
        opinion: "BUY",
        summary: "백색 가전의 안정성 위에 B2B(VS 전장부품, 냉난방공조 HVAC) 성장이 더해지는 체질 개선. AI 데이터센터 쿨링이라는 새로운 트리거.",
        tags: ["VS전장", "HVAC(공조)", "AI 데이터센터", "WebOS 플랫폼"],
        link: "analysis/lg-electronics-deep-dive.html"
    }
];

export const COMPANY_DETAIL_LIBRARY = {
    samsung: {
        name: "삼성전자", ticker: "005930.KS", subtitle: "메모리 업황 회복과 HBM 추격, 파운드리 체질 개선을 함께 봐야 하는 종합 반도체 기업",
        business: "메모리, 파운드리, 모바일, 디스플레이, 가전까지 포트폴리오가 넓어 업황 변동을 흡수할 체력이 강합니다.",
        thesis: "메모리 가격 반등과 HBM 성과가 숫자로 확인되면 대형 우량주에서 성장주 성격이 일부 붙을 수 있습니다.",
        risks: "HBM 인증 지연, 파운드리 적자 지속, 메모리 업황 둔화가 핵심 리스크입니다."
    },
    skhynix: {
        name: "SK하이닉스", ticker: "000660.KS", subtitle: "HBM 리더십을 앞세운 AI 메모리 사이클의 핵심 수혜주",
        business: "DRAM과 NAND 중심의 메모리 기업이며, 현재 투자 포인트는 사실상 HBM 지배력입니다.",
        thesis: "AI 서버 증설과 HBM 믹스 개선이 이어지면 이익 레버리지가 가장 크게 열릴 수 있습니다.",
        risks: "경쟁사 증설, 고객사 발주 둔화, 메모리 가격 조정이 부담입니다."
    },
    nvidia: {
        name: "엔비디아", ticker: "NVDA", subtitle: "CUDA 생태계와 GPU 독점력을 가진 AI 인프라 표준 기업",
        business: "GPU 판매를 넘어 AI 데이터센터 인프라와 개발자 생태계 전체를 지배하는 플랫폼 기업입니다.",
        thesis: "좋은 회사인 것은 분명하지만 이제는 성장 지속성과 현재 밸류에이션 정당화가 더 중요합니다.",
        risks: "빅테크 자체 칩 확대, 고객 CAPEX 피크아웃, 높은 기대치가 부담입니다."
    },
    hyundai: {
        name: "현대차", ticker: "005380.KS", subtitle: "하이브리드와 주주환원으로 할인 축소를 노리는 완성차 대표주",
        business: "완성차, 금융, 브랜드, 글로벌 생산 네트워크를 가진 종합 모빌리티 기업입니다.",
        thesis: "북미 고수익 믹스와 하이브리드 강세가 밸류에이션 할인 축소의 핵심입니다.",
        risks: "미국 정책 변화, 관세, 인센티브 경쟁이 부담입니다."
    },
    lge: {
        name: "LG전자", ticker: "066570.KS", subtitle: "가전 캐시카우 위에 전장과 HVAC 성장이 더해지는 복합 기업",
        business: "생활가전과 TV가 안정성을 제공하고, 전장과 냉난방공조가 성장축을 담당합니다.",
        thesis: "전장과 HVAC 비중 확대가 실적으로 확인되면 단순 가전주 할인에서 벗어날 수 있습니다.",
        risks: "소비 경기 둔화, TV 부진, 전장 수익성 지연이 리스크입니다."
    },
    palantir: {
        name: "팔란티어", ticker: "PLTR", subtitle: "정부 기반 안정성과 AIP 민간 확장이 공존하는 AI 소프트웨어 플랫폼",
        business: "데이터 통합과 의사결정 운영체제를 제공하는 소프트웨어 플랫폼 기업입니다.",
        thesis: "민간 매출 성장과 수익성 개선이 이어질수록 고밸류가 정당화될 수 있습니다.",
        risks: "높은 기대치, 대형 계약 변동성, 스톡보상 부담이 핵심입니다."
    },
    kia: {
        name: "기아", ticker: "000270.KS", subtitle: "현대차 그룹 내 고수익 믹스와 브랜드 개선을 이끄는 핵심 완성차",
        business: "SUV와 RV 중심 포트폴리오, 북미 판매력, 전동화 전환 대응력이 강점입니다.",
        thesis: "현대차와 유사하게 하이브리드·고수익 믹스가 실적을 방어하며 주주환원 기대가 유효합니다.",
        risks: "관세, 경쟁 심화, 환율 민감도가 부담입니다."
    },
    mobis: {
        name: "현대모비스", ticker: "012330.KS", subtitle: "전장과 모듈 중심으로 현대차 그룹 가치사슬의 핵심을 담당하는 부품주",
        business: "모듈, 핵심 부품, 전장, AS부품 사업을 통해 안정성과 성장성을 함께 가집니다.",
        thesis: "전장 비중 확대와 AS부품의 안정적 이익이 재평가 포인트입니다.",
        risks: "완성차 생산 변동, 전동화 투자 부담, 고객 집중도가 리스크입니다."
    },
    doosan: {
        name: "두산에너빌리티", ticker: "034020.KS", subtitle: "원전과 발전 설비, AI 전력 수요 기대가 동시에 붙는 전력 인프라 대표주",
        business: "원전, 가스터빈, 발전 설비와 관련 EPC 역량을 가진 중후장대 산업주입니다.",
        thesis: "원전 르네상스와 전력 인프라 투자 확대가 장기 수주 스토리를 강화합니다.",
        risks: "대형 프로젝트 지연, 원가 부담, 정책 변수에 민감합니다."
    },
    hyosungheavy: {
        name: "효성중공업", ticker: "298040.KS", subtitle: "변압기와 전력기기 수요 확대의 대표 수혜주",
        business: "변압기, 차단기 등 전력기기와 중공업 사업을 영위합니다.",
        thesis: "글로벌 전력망 투자 확대와 북미 중심 수요가 실적 가시성을 높입니다.",
        risks: "원가 변동과 수주 타이밍 변동성이 리스크입니다."
    },
    lselectric: {
        name: "LS ELECTRIC", ticker: "010120.KS", subtitle: "자동화와 전력기기를 동시에 갖춘 스마트 전력 인프라 기업",
        business: "전력기기, 자동화, 스마트팩토리 솔루션을 제공하는 산업재 기업입니다.",
        thesis: "AI 전력 수요와 공장 자동화 흐름이 함께 작동하는 점이 강점입니다.",
        risks: "설비투자 둔화와 글로벌 경기 민감도가 부담입니다."
    },
    hanwhaaero: {
        name: "한화에어로스페이스", ticker: "012450.KS", subtitle: "방산 수출과 항공엔진 역량을 동시에 가진 방산 대장주",
        business: "지상무기, 우주항공, 엔진 사업까지 보유한 종합 방산 기업입니다.",
        thesis: "유럽·중동 수출 확대와 장기 수주가 밸류에이션 상향을 지지합니다.",
        risks: "급등 후 밸류 부담, 대형 수주 변동성이 있습니다."
    },
    lignex1: {
        name: "LIG넥스원", ticker: "079550.KS", subtitle: "유도무기와 정밀타격체계 중심의 첨단 방산주",
        business: "유도무기, 감시정찰, 항공전자 분야에서 경쟁력을 가진 방산 기업입니다.",
        thesis: "첨단 무기 수요와 수출 확대가 실적 성장 동력입니다.",
        risks: "프로젝트 일정과 정책 변수에 민감합니다."
    },
    hyundairotem: {
        name: "현대로템", ticker: "064350.KS", subtitle: "방산과 철도, 플랜트를 아우르는 수출형 산업재 기업",
        business: "K2 전차, 철도차량, 플랜트 장비를 생산합니다.",
        thesis: "방산 수출 비중 확대가 실적 체질 개선의 핵심입니다.",
        risks: "수주 공백과 원가 통제가 중요합니다."
    },
    lgenergy: {
        name: "LG에너지솔루션", ticker: "373220.KS", subtitle: "글로벌 배터리 셀 탑티어지만 단기 수요 둔화 영향을 받는 대장주",
        business: "전기차용 배터리 셀과 ESS용 배터리를 공급하는 글로벌 배터리 기업입니다.",
        thesis: "장기 성장성은 강하지만 단기적으로는 수요 회복 시점이 중요합니다.",
        risks: "EV 수요 둔화, 가격 경쟁, 보조금 정책 변화가 부담입니다."
    },
    poscofuture: {
        name: "포스코퓨처엠", ticker: "003670.KS", subtitle: "양극재와 음극재 중심의 배터리 소재 대표주",
        business: "배터리 소재 밸류체인에서 핵심인 양극재·음극재를 담당합니다.",
        thesis: "전기차 수요 회복 시 소재 레버리지가 크게 나타날 수 있습니다.",
        risks: "메탈 가격 변동과 고객사 수요 둔화가 리스크입니다."
    },
    ecoprobm: {
        name: "에코프로비엠", ticker: "247540.KQ", subtitle: "고니켈 양극재 강점을 가진 2차전지 소재 핵심주",
        business: "양극재 중심 사업을 영위하며 국내 2차전지 투자심리의 바로미터 역할을 합니다.",
        thesis: "수요 회복이 오면 주가 탄력은 크지만 변동성도 매우 큽니다.",
        risks: "실적 추정치 하향과 밸류 부담이 큽니다."
    },
    naver: {
        name: "네이버", ticker: "035420.KS", subtitle: "검색·광고·커머스 기반 위에 AI 서비스 확장을 더하는 국내 플랫폼 대장주",
        business: "검색 광고, 커머스, 콘텐츠, 클라우드와 AI 서비스가 핵심입니다.",
        thesis: "본업 회복과 AI 수익화가 함께 확인되면 재평가 여지가 있습니다.",
        risks: "광고 경기 둔화, 경쟁 심화, AI 투자비 부담이 있습니다."
    },
    kakao: {
        name: "카카오", ticker: "035720.KS", subtitle: "플랫폼 자산은 많지만 구조조정과 수익성 회복이 중요한 플랫폼주",
        business: "메신저, 콘텐츠, 모빌리티, 금융 등 다양한 플랫폼 자산을 보유합니다.",
        thesis: "사업 재편과 비용 통제가 숫자로 확인되면 할인 축소가 가능합니다.",
        risks: "규제, 구조조정 지연, 광고·콘텐츠 부진이 리스크입니다."
    },
    samsungbio: {
        name: "삼성바이오로직스", ticker: "207940.KS", subtitle: "CDMO 수주 경쟁력을 바탕으로 실적 가시성이 높은 대형 바이오주",
        business: "바이오의약품 위탁개발생산(CDMO) 사업이 핵심입니다.",
        thesis: "수주와 증설이 실적 성장으로 이어지는 구조가 명확합니다.",
        risks: "증설 이후 가동률과 수주 속도가 중요합니다."
    },
    celltrion: {
        name: "셀트리온", ticker: "068270.KS", subtitle: "바이오시밀러 중심으로 실적과 신제품 모멘텀을 함께 보는 대표 바이오주",
        business: "바이오시밀러 개발과 판매가 핵심 사업입니다.",
        thesis: "신제품 확대와 유통 구조 안정화가 관건입니다.",
        risks: "약가 경쟁, 규제, 실적 변동성이 부담입니다."
    },
    alteogen: {
        name: "알테오젠", ticker: "196170.KQ", subtitle: "기술수출 기대와 플랫폼 가치가 핵심인 고변동성 바이오주",
        business: "바이오 플랫폼과 기술수출 기대가 투자 포인트인 기업입니다.",
        thesis: "대형 기술이전이나 임상 성과가 나올 때 밸류 확장이 큽니다.",
        risks: "이벤트 지연 시 변동성이 매우 커집니다."
    },
    hdship: {
        name: "HD한국조선해양", ticker: "009540.KS", subtitle: "조선 업황 회복의 대표 지주형 플레이어",
        business: "LNG선, 특수선, 엔진, 조선 자회사를 거느린 조선 지주사입니다.",
        thesis: "고선가와 수주잔고가 이익 개선으로 이어질 가능성이 높습니다.",
        risks: "원가 반영과 인력·납기 문제가 변수입니다."
    },
    hanwhaocean: {
        name: "한화오션", ticker: "042660.KS", subtitle: "조선·해양과 방산 스토리가 함께 붙는 복합 플레이어",
        business: "조선과 해양플랜트, 특수선 역량을 가진 대형 조선사입니다.",
        thesis: "방산과 특수선 기대가 일반 조선주 대비 차별화 요소입니다.",
        risks: "원가 통제와 수주 공백 리스크가 있습니다."
    },
    samsungheavy: {
        name: "삼성중공업", ticker: "010140.KS", subtitle: "고부가가치 선박 중심으로 턴어라운드를 노리는 조선주",
        business: "해양플랜트와 LNG선 중심 포트폴리오를 보유한 조선사입니다.",
        thesis: "고선가 수주가 손익에 반영되면 실적 개선 폭이 커질 수 있습니다.",
        risks: "해양플랜트 변동성과 원가 부담이 큽니다."
    }
};

export const SECTOR_ANALYSIS_ITEMS = [
    {
        name: "반도체",
        performance: "+8.4%",
        flow: "강세",
        flowOfFunds: "외국인 중심 선호",
        valuation: "높지만 정당화 구간",
        leaders: ["삼성전자", "SK하이닉스", "엔비디아"],
        summary: "AI 서버 투자와 HBM 수요가 계속 핵심 모멘텀입니다. 단기 변동성은 크지만 업황 회복과 기술 경쟁력이 동시에 붙는 구간이라 시장의 중심 섹터 역할을 이어가고 있습니다.",
        drivers: "HBM 공급 부족, 데이터센터 CAPEX 지속, 메모리 가격 반등 기대가 섹터를 지지합니다.",
        watchPoint: "AI 투자 피크아웃 신호, HBM 증설 속도, 엔비디아 가이던스가 가장 중요합니다.",
        view: "강세 지속",
        link: "analysis/sector-semiconductors.html"
    },
    {
        name: "자동차",
        performance: "+5.1%",
        flow: "강세",
        flowOfFunds: "기관·가치 자금 유입",
        valuation: "여전히 저평가 매력",
        leaders: ["현대차", "기아", "현대모비스"],
        summary: "전기차 캐즘 국면에서도 하이브리드와 북미 고수익 믹스가 버팀목이 되고 있습니다. 실적 안정성과 주주환원 기대가 같이 붙는 섹터입니다.",
        drivers: "하이브리드 판매 호조, 주주환원 정책, 북미 판매 믹스 개선이 밸류에이션 할인 축소를 유도합니다.",
        watchPoint: "미국 정책 변화, 관세 이슈, 인센티브 경쟁 심화 여부를 봐야 합니다.",
        view: "눌림목 매수",
        link: "analysis/sector-autos.html"
    },
    {
        name: "전력",
        performance: "+7.3%",
        flow: "강세",
        flowOfFunds: "테마와 실적 자금 동시 유입",
        valuation: "중립 이상",
        leaders: ["두산에너빌리티", "효성중공업", "LS ELECTRIC"],
        summary: "AI 데이터센터 증설이 전력 인프라 투자로 연결되면서 구조적 수혜 기대가 커졌습니다. 단순 테마가 아니라 실제 수주와 설비 투자로 이어질 가능성이 높은 점이 강점입니다.",
        drivers: "AI 전력 수요, 전력망 투자, 원전 및 변압기·송배전 설비 발주 기대가 섹터를 밀고 있습니다.",
        watchPoint: "실제 수주 공시와 CAPEX 확대가 숫자로 확인되는지 중요합니다.",
        view: "강세 지속",
        link: "analysis/sector-power-infra.html"
    },
    {
        name: "방산",
        performance: "+6.8%",
        flow: "강세",
        flowOfFunds: "지정학 리스크 수혜 자금 유입",
        valuation: "높아졌지만 모멘텀 유지",
        leaders: ["한화에어로스페이스", "LIG넥스원", "현대로템"],
        summary: "전쟁과 지정학 긴장이 이어질수록 방산 수출 기대가 유지됩니다. 실적 기반 수주 산업이라는 점에서 단순 뉴스 테마보다 지속성이 있는 편입니다.",
        drivers: "유럽과 중동 지역 안보 우려, 장기 수주 계약, 정책 지원이 긍정적으로 작용합니다.",
        watchPoint: "단기 급등 이후 밸류에이션 부담과 실제 수주 속도의 괴리를 확인해야 합니다.",
        view: "추세 추종",
        link: "analysis/sector-defense.html"
    },
    {
        name: "2차전지",
        performance: "-2.7%",
        flow: "약세",
        flowOfFunds: "단기 이탈 우세",
        valuation: "조정 중",
        leaders: ["LG에너지솔루션", "포스코퓨처엠", "에코프로비엠"],
        summary: "장기 성장 산업임은 분명하지만, 단기적으로는 수요 둔화와 가격 경쟁 우려가 주가에 부담을 주는 구간입니다. 실적 추정치 하향에 민감하게 반응하고 있습니다.",
        drivers: "EV 수요 둔화, 메탈 가격 변동, 북미 보조금 정책 불확실성이 부담입니다.",
        watchPoint: "전기차 판매 회복과 재고 조정 마무리 시점이 핵심입니다.",
        view: "관망",
        link: "analysis/sector-batteries.html"
    },
    {
        name: "인터넷",
        performance: "+3.4%",
        flow: "중립",
        flowOfFunds: "선별적 유입",
        valuation: "종목별 차별화",
        leaders: ["네이버", "카카오", "팔란티어"],
        summary: "광고와 커머스, AI 서비스 기대가 섞여 있는 섹터입니다. 플랫폼 본업 회복과 AI 수익화 스토리가 확인되는 기업에만 자금이 붙는 선별 장세가 나타나고 있습니다.",
        drivers: "광고 경기 회복 기대, AI 서비스 출시, 플랫폼 비용 통제가 핵심 동력입니다.",
        watchPoint: "실제 매출 기여가 없는 AI 기대만으로는 주가 지속성이 약할 수 있습니다.",
        view: "선별 매수",
        link: "analysis/sector-internet.html"
    },
    {
        name: "바이오",
        performance: "+1.9%",
        flow: "중립",
        flowOfFunds: "이벤트 드리븐",
        valuation: "변동성 높음",
        leaders: ["삼성바이오로직스", "셀트리온", "알테오젠"],
        summary: "실적 기반 대형 바이오와 임상 기대 중소형 바이오의 온도차가 큰 섹터입니다. 대형주는 방어적이고, 중소형은 뉴스 이벤트에 크게 흔들립니다.",
        drivers: "임상 결과, 수주, 기술수출 기대가 단기 수급을 좌우합니다.",
        watchPoint: "이벤트 이후 실적 가시성으로 이어지는지 확인이 필요합니다.",
        view: "종목 장세",
        link: "analysis/sector-biotech.html"
    },
    {
        name: "조선",
        performance: "+4.6%",
        flow: "강세",
        flowOfFunds: "실적 기대 자금 유입",
        valuation: "상향 재평가 구간",
        leaders: ["HD한국조선해양", "한화오션", "삼성중공업"],
        summary: "수주 잔고와 선가 상승이 동시에 뒷받침되면서 업황 가시성이 높은 섹터입니다. 방산, LNG, 친환경 선박 이슈까지 겹치며 중장기 스토리가 좋아졌습니다.",
        drivers: "고선가 유지, LNG선 발주, 방산·특수선 기대가 섹터를 지지합니다.",
        watchPoint: "원가 반영 구간이 끝나며 실제 마진 개선이 얼마나 빠르게 나타나는지가 중요합니다.",
        view: "강세 지속",
        link: "analysis/sector-shipbuilding.html"
    }
];

export const EXTERNAL_SHOCK_EVENTS = [
    {
        date: "2026-03-21",
        category: "거시경제",
        title: "글로벌 사모대출 리스크 점검",
        summary: "사모펀드 환매 중단 및 자산 가치 재평가 리스크 발생. 고금리 장기화에 따른 그레이 스완(Grey Swan) 부각.",
        marketImpact: "시스템 리스크 전이 가능성으로 증시 상단 제한 요인. 금융 위기로 번질지 단기 노이즈에 그칠지 모니터링 필요.",
        watchPoint: "사모대출 환매 지연 연쇄 발생 및 크레딧(채권/부동산) 시장 스프레드 확대 여부.",
        sources: [
            { label: "전문가 리포트 보기", url: "analysis/private-equity-risk-2026.html" }
        ]
    },
    {
        date: "2026-03-21",
        category: "지정학",
        title: "중동 지정학적 관계도 및 에너지 딜레마",
        summary: "천궁-II 수출을 매개로 한 UAE-한국 에너지 동맹 강화 대비, 이란-중국 간의 전략적 딜레마 확대.",
        marketImpact: "글로벌 에너지 공급망 재편의 핵심 키워드 활성화. 대한민국 방산 및 원전 수혜 확실시.",
        watchPoint: "호르무즈 해협 봉쇄 가능성 및 주변국의 개입 확전 여부 점검.",
        sources: [
            { label: "지정학 상세 분석 보기", url: "analysis/middle-east-geopolitics-2026.html" }
        ]
    },
    {
        date: "2025-11-24",
        category: "정책",
        title: "미국 '제네시스 미션(Genesis Mission)' 행정명령 서명",
        summary: "트럼프 당선인이 AI를 활용한 과학 기술 혁신 가속화를 위해 '제네시스 미션' 행정명령에 서명했다. AI 판 '맨해튼 프로젝트'로 불린다.",
        marketImpact: "AI 인프라(엔비디아, 반도체), 에너지(원전), 소브린 AI 등 관련 섹터에 장기적인 국가적 모멘텀을 제공할 것으로 기대된다.",
        watchPoint: "에너지부(DOE) 주도의 17개 국립연구소 AI 플랫폼 구축 및 민간 기업(NVIDIA, OpenAI 등)과의 협업 수준.",
        sources: [
            { label: "White House", url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2025/11/24/executive-order-on-the-genesis-mission/" }
        ]
    },
    {
        date: "2026-03-17",
        category: "유가",
        title: "중동 전쟁 장기화 우려로 유가 재상승",
        summary: "미국 증시는 다소 안정을 찾았지만, 이란 전쟁 여파가 길어질 수 있다는 경계감으로 국제유가가 다시 상승했다.",
        marketImpact: "에너지 가격 부담이 다시 부각되며 인플레이션 재자극 우려와 운송·화학 업종 부담이 확대됐다.",
        watchPoint: "전쟁 장기화 여부와 유가 100달러 안착 여부를 확인해야 한다.",
        sources: [
            { label: "AP", url: "https://apnews.com/article/stocks-markets-trump-tariffs-oil-prices-iran-d4f7eaeeb5f412df2f1c81f7c1f45727" }
        ]
    },
    {
        date: "2026-03-11",
        category: "정책",
        title: "IEA, 사상 최대 규모 비상 비축유 방출 결정",
        summary: "국제에너지기구가 중동 전쟁에 따른 공급 충격에 대응하기 위해 4억 배럴 규모의 비축유를 방출하기로 했다.",
        marketImpact: "유가 급등을 진정시키려는 정책 대응이 본격화되면서 에너지 쇼크가 실물경제로 번지는 속도를 늦추려는 신호로 해석됐다.",
        watchPoint: "비축유 방출만으로 공급 부족 우려가 꺾일지, 실제 물류 차질이 완화되는지가 중요하다.",
        sources: [
            { label: "IEA", url: "https://www.iea.org/news/iea-countries-agree-largest-ever-emergency-oil-stocks-release" }
        ]
    },
    {
        date: "2026-03-09",
        category: "전쟁",
        title: "이란 전쟁 충격으로 브렌트유 급등",
        summary: "미국의 이란 공습 이후 전쟁 우려가 심화되며 브렌트유가 장중 배럴당 119.50달러까지 치솟았다.",
        marketImpact: "전형적인 리스크오프 장세가 나타났고 항공·소비주가 압박을 받는 반면 에너지주는 강세를 보였다.",
        watchPoint: "호르무즈 해협과 중동 원유 수송 차질 여부가 다음 단계 충격을 좌우한다.",
        sources: [
            { label: "AP", url: "https://apnews.com/article/stocks-markets-oil-prices-iran-war-trump-federal-reserve-c0e5320042c964d7d7060fc5a27262f9" }
        ]
    },
    {
        date: "2026-03-04",
        category: "환율",
        title: "이란 리스크 확대로 원화 급락, 17년 만의 저점",
        summary: "이란 관련 군사 충돌 우려가 커지자 코스피가 급락했고 원/달러 환율은 원화 약세로 17년 만의 저점을 기록했다.",
        marketImpact: "한국 시장에서는 외국인 이탈 압력과 수입물가 부담이 동시에 커졌고, 안전자산 선호가 달러로 집중됐다.",
        watchPoint: "전쟁 리스크 완화 전까지 원화 변동성이 높은 상태가 이어질 수 있다.",
        sources: [
            { label: "Reuters", url: "https://www.reuters.com/world/asia-pacific/skorean-stocks-plunge-won-hits-17-year-low-bonds-fall-amid-iran-conflict-2026-03-04/" }
        ]
    },
    {
        date: "2026-02-21",
        category: "정치 이벤트",
        title: "트럼프, 법원 제동 뒤 글로벌 관세 인상 방침 재확인",
        summary: "미 대법원의 일부 관세 무효 판단 이후에도 트럼프 대통령은 10% 기본관세를 15% 수준으로 올릴 수 있다고 밝혔다.",
        marketImpact: "무역정책 불확실성이 다시 확대되며 달러와 미국 내 보호무역 리스크가 시장 변수로 부상했다.",
        watchPoint: "추가 행정명령과 품목별 조사 착수 여부가 후속 충격의 강도를 결정한다.",
        sources: [
            { label: "AP", url: "https://apnews.com/article/trump-tariffs-trade-supreme-court-europe-iran-9e9a44db1d4f245f13a1e8b33f2c2f4d" }
        ]
    },
    {
        date: "2026-02-20",
        category: "규제",
        title: "미 대법원, 긴급권한 기반 관세 조치에 제동",
        summary: "미국 대법원이 트럼프 대통령의 일부 긴급권한 기반 관세 조치를 무효화하면서 관세 정책의 법적 불확실성이 커졌다.",
        marketImpact: "단기적으로는 관세 완화 기대가 있었지만, 이후 백악관이 다른 통상 권한을 활용하겠다고 밝히며 정책 혼선이 확대됐다.",
        watchPoint: "사법 판단 이후 행정부가 어떤 법적 수단으로 관세를 재추진하는지 확인해야 한다.",
        sources: [
            { label: "AP", url: "https://apnews.com/article/trump-tariffs-trade-supreme-court-europe-iran-9e9a44db1d4f245f13a1e8b33f2c2f4d" },
            { label: "White House", url: "https://www.whitehouse.gov/fact-sheets/2026/02/fact-sheet-president-donald-j-trump-ends-certain-tariff-actions-to-protect-the-national-security-of-the-united-states/" }
        ]
    },
    {
        date: "2026-02-05",
        category: "정책",
        title: "ECB, 기준금리 동결로 유럽 통화정책 신중론 유지",
        summary: "ECB는 2월 회의에서 기준금리를 유지하며 물가와 성장 흐름을 더 확인하겠다는 신중한 태도를 보였다.",
        marketImpact: "유럽 경기 둔화 우려와 인플레이션 관리가 동시에 부각되며 글로벌 금리 인하 기대가 부분적으로 조정됐다.",
        watchPoint: "유럽 경기 둔화가 심해질 경우 금리 인하 재개 기대가 다시 커질 수 있다.",
        sources: [
            { label: "ECB", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~61e6960d87.en.html" }
        ]
    },
    {
        date: "2026-01-30",
        category: "정책",
        title: "연준 월러 이사, 1월 인하 가능성 언급하며 내부 시각차 노출",
        summary: "크리스토퍼 월러 이사는 1월 회의에서 25bp 인하가 적절했을 수 있다고 밝히며 연준 내부의 정책 시각차를 드러냈다.",
        marketImpact: "시장에서는 연준의 향후 인하 속도에 대한 해석이 엇갈렸고, 금리 민감 자산 변동성이 확대됐다.",
        watchPoint: "연준 위원 간 발언 차이가 실제 점도표 변화로 이어지는지 봐야 한다.",
        sources: [
            { label: "Federal Reserve", url: "https://www.federalreserve.gov/newsevents/speech/waller20260130a.htm" }
        ]
    },
    {
        date: "2026-01-28",
        category: "정책",
        title: "연준, 1월 FOMC에서 금리 동결",
        summary: "미 연준은 1월 FOMC에서 기준금리를 동결하며 물가와 고용 흐름을 더 지켜보겠다는 입장을 유지했다.",
        marketImpact: "시장에서는 빠른 인하 기대가 일부 후퇴했고, 장단기 금리와 달러 방향성에 다시 민감해졌다.",
        watchPoint: "이후 발표되는 물가와 고용 지표가 연준 스탠스를 얼마나 바꿀지가 핵심이다.",
        sources: [
            { label: "Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm" }
        ]
    },
    {
        date: "2026-01-17",
        category: "정치 이벤트",
        title: "트럼프, 그린란드 문제를 둘러싸고 유럽 8개국에 관세 위협",
        summary: "트럼프 대통령이 그린란드 접근 문제와 관련해 유럽 8개국에 10% 관세를 거론하며 대서양 무역 긴장을 키웠다.",
        marketImpact: "대서양 무역 갈등 가능성이 커지며 유럽 자산과 통상 민감 업종 전반에 부담이 생겼다.",
        watchPoint: "실제 관세 발표로 이어질지, 외교 협상으로 완화될지 확인이 필요하다.",
        sources: [
            { label: "AP", url: "https://www.wdbj7.com/2026/01/17/trump-threatens-10-tariffs-8-european-countries-over-greenland-dispute/" }
        ]
    },
    {
        date: "2026-01-13",
        category: "정책",
        title: "트럼프, 이란 거래국 대상 25% 관세 카드 거론",
        summary: "트럼프 대통령이 이란과 거래하는 국가들에 대해 25% 관세를 부과할 수 있다고 밝히며 중동 리스크와 통상 리스크를 동시에 자극했다.",
        marketImpact: "관세와 지정학 리스크가 겹치며 에너지, 운송, 달러 흐름에 대한 경계가 커졌다.",
        watchPoint: "실제 관세 시행 여부와 이란 제재 강화가 원유 공급망에 미치는 영향을 봐야 한다.",
        sources: [
            { label: "AP", url: "https://www.wbap.com/news/trump-threatens-25-tariffs-on-countries-doing-business-with-iran/" }
        ]
    },
    {
        date: "2026-03-10",
        category: "정책",
        title: "노동조합법 개정안(노란 봉투법) 전격 시행",
        summary: "사용자 범위 확대와 손해배상 청구 제한을 골자로 하는 노란 봉투법이 시행되었다. 하청 부문의 원청 상대 교섭 요구가 급증하고 있다.",
        marketImpact: "노사 리스크 증대로 제조 및 건설업종의 경영 불확실성이 커졌으며, 인건비 상승 및 생산 차질 우려가 반영되고 있다.",
        watchPoint: "원청 기업들의 사용자성 인정 여부를 둘러싼 법적 분쟁 및 노동위원회의 판정 결과.",
        sources: [
            { label: "서울경제", url: "https://www.sedaily.com/" }
        ]
    },
    {
        date: "2026-03-10",
        category: "정책",
        title: "한국 '상법 개정안' 시행 로드맵 가속화",
        summary: "이사의 충실의무를 주주로 확대하는 상법 개정안이 안착 중인 가운데, 집중투표제 의무화 등 추가 지배구조 개선안이 발표되었다.",
        marketImpact: "지배구조 투명성 제고로 코리아 디스카운트 해소 기대감이 커지며 지주사 및 저PBR 종목에 긍정적 수급이 유입되고 있다.",
        watchPoint: "2026년 9월 시행 예정인 자산 2조원 이상 기업의 집중투표제 의무화 및 독립이사 선임 비중 상향 영향.",
        sources: [
            { label: "법률신문", url: "https://www.lawtimes.co.kr/" }
        ]
    },
    {
        date: "2025-11-24",
        category: "정책",
        title: "미국 '제네시스 미션(Genesis Mission)' 행정명령 서명",
        summary: "트럼프 대통령이 AI를 활용한 과학 기술 혁신 가속화를 위해 '제네시스 미션' 행정명령에 서명했다. AI 판 '맨해튼 프로젝트'로 불린다.",
        marketImpact: "AI 인프라(엔비디아, 반도체), 에너지(원전), 소브린 AI 등 관련 섹터에 국가적 모멘텀을 제공할 것으로 기대된다.",
        watchPoint: "에너지부(DOE) 주도의 17개 국립연구소 AI 플랫폼 구축 및 민간 기업(NVIDIA, OpenAI 등)과의 협업 수준.",
        sources: [
            { label: "White House", url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2025/11/24/executive-order-on-the-genesis-mission/" }
        ]
    }
];

export const EXTERNAL_POLICY_DATA = {
    genesisMission: {
        title: "US Genesis Mission (제네시스 미션)",
        subtitle: "AI 기반 과학 연구 가속화를 위한 미국의 국가적 이니셔티브",
        signedDate: "2025-11-24",
        objective: "AI를 활용하여 과학적 발견의 속도를 맨해튼 프로젝트 수준으로 끌어올리고, 향후 10년 내 미국의 연구 생산성을 2배로 증대",
        keyPillars: [
            {
                title: "통합 AI 플랫폼 구축",
                desc: "17개 국립 연구소의 연방 과학 데이터를 통합하여 과학 전용 기초 모델(Foundation Models) 개발"
            },
            {
                title: "에너지부(DOE) 주도",
                desc: "수십 년간 축적된 과학 데이터와 슈퍼컴퓨팅 인프라를 AI 에이전트 개발에 투입"
            },
            {
                title: "민관 협력(PPP)",
                desc: "NVIDIA, OpenAI, MS, AWS, Google, AMD 등 선도 기업과의 파트너십 강화"
            }
        ],
        focusAreas: [
            "AI 반도체 및 마이크로일렉트로닉스",
            "원자력(핵분열 및 핵융합) 및 에너지 자립",
            "생명공학 및 신약 개발 가속화",
            "우주 탐사 및 양자 정보 과학"
        ],
        marketImplications: [
            { sector: "AI 인프라", impact: "NVIDIA, AMD 등 AI 칩 수요의 국가적 뒷받침" },
            { sector: "에너지/원전", impact: "AI 데이터센터 및 연구 인프라를 위한 전력 수요 급증으로 가속화" },
            { sector: "데이터/SW", impact: "Palantir 등 국방/과학용 AI 플랫폼 기업의 실질적 수혜" }
        ],
        schedule: [
            { term: "60일 이내", task: "20대 과학 기술 과제 식별 (✅ 완료 - $293M 펀딩 공고)" },
            { term: "120일 이내", task: "초기 데이터 및 모델 자산 식별 (⏳ 진행중 - 3월 말 완료 예정)" },
            { term: "270일 이내", task: "핵심 과제 초기 운영 능력(IOC) 시연 (⌛ 예정 - 2026.08)" }
        ],
        reportPath: "analysis/genesis-mission.html"
    },
    commercialCode: {
        title: "Korea Commercial Code Amendment",
        subtitle: "코리아 디스카운트 해소를 위한 상법 개정 및 지배구조 혁신",
        signedDate: "2025-07-22 (공포/시행)",
        objective: "이사의 충실 의무를 회사에서 주주로 확대하고, 독립적 이사회 구성을 통해 소액주주 권익 보호 및 기업 가치 제고(Value-up)",
        keyPillars: [
            {
                title: "이사 충실의무 확대",
                desc: "대상: 회사 → 회사 및 주주 전체. 소액주주의 희생을 방지하는 법적 근거 마련 (1차 완료)"
            },
            {
                title: "이사회 독립성 강화",
                desc: "독립이사 선임 비중 확대 및 집중투표제 의무화로 대주주 견제 장치 마련 (2차 진행)"
            },
            {
                title: "거래 투명성 및 과세 개편",
                desc: "합병 가액 합리화, 공개매수 제도 개선, 배당소득 분리과세 등 실질적 주주 이익 보호 (3~4차)"
            }
        ],
        stages: [
            { 
                step: "1차", 
                title: "이사 충실의무 개정", 
                status: "완료", 
                details: "상법 제382조의3 개정. 이사가 주주 전체의 이익을 보호할 의무 명시. (2025.07 시행)" 
            },
            { 
                step: "2차", 
                title: "이사회 거버넌스 개혁", 
                status: "진행중", 
                details: "집중투표제 의무화(자산 2조↑), 감사위원 분리선출 확대, 독립이사 1/3 이상 선임. (2026.09 시행)" 
            },
            { 
                step: "3차", 
                title: "사법 질서 및 절차 개선", 
                status: "준비중", 
                details: "디스커버리 제도(증거조사) 도입 논의, 경영진 배임죄 부담 완화 및 실효적 견제 균형. (2026 하반기)" 
            },
            { 
                step: "4차", 
                title: "주주 환원 및 세제 개편", 
                status: "입법 추진", 
                details: "배당소득 분리과세, 합병 가액 합리화(공정가치 평가), 공개매수 제도 개선(의무공개매수). (2027 목표)" 
            }
        ],
        marketImplications: [
            { sector: "저PBR/금융", impact: "자산 가치 대비 저평가된 기업들의 주주환원 확대 압력 증가" },
            { sector: "지주사", impact: "계열사 간 합병/분할 시 대주주 위주 의사결정 견제 장치 강화" },
            { sector: "코리아 밸류업", impact: "지배구조 투명성 확보로 글로벌 패시브 자금의 장기 유입 기반 마련" }
        ],
        risks: [
            {
                title: "소송 리스크 및 경영 위축",
                desc: "경영 판단에 대한 주주들의 손해배상 청구 및 배임 혐의 고소 남발(남소) 우려로 인한 보수적 경영 회귀"
            },
            {
                title: "단기 수익 추구 압박",
                desc: "행동주의 펀드 등이 '주주 이익'을 명분으로 과도한 배당이나 자사주 소각을 요구하며 장기 R&D 투자 저해 가능성"
            },
            {
                title: "이해관계 상충의 딜레마",
                desc: "대주주와 소액주주, 혹은 주주 간 이해관계가 충돌할 경우 어떤 결정을 내려도 법적 책임에서 자유롭기 어려움"
            }
        ]
    },
    yellowEnvelope: {
        title: "Yellow Envelope Act (노란 봉투법)",
        subtitle: "사용자 범위 확대와 파업 손배 제한을 통한 노동권 강화",
        signedDate: "2026-03-10 (전면 시행)",
        objective: "실질적 지배력을 가진 원청의 사용자 책임 강화 및 정당한 쟁의행위에 대한 과도한 손해배상 청구 제한",
        keyPillars: [
            {
                title: "사용자 정의 확대",
                desc: "근로계약 체결 여부와 상관없이 근로조건을 실질적·구체적으로 지배하는 자(원청)를 사용자로 간주"
            },
            {
                title: "쟁의행위 범위 확대",
                desc: "임금 외에도 구조조정, 해고자 복직 등 경영상 결정 사항도 단체교섭 및 파업의 대상으로 포함"
            },
            {
                title: "손해배상 책임 제한",
                desc: "파업으로 인한 손실에 대해 개별 조합원의 기여도에 따라 배상 책임을 제한하여 연대책임 방지"
            }
        ],
        marketImplications: [
            { sector: "자동차/조선", impact: "하청 노조의 원청 상대 직접 교섭 요구 급증 및 파업 리스크 상시화" },
            { sector: "건설/유통", impact: "다단계 하도급 구조를 가진 산업 전반의 노무 관리비 및 법률 비용 증가" },
            { sector: "제조업 전반", impact: "경영 판단의 유연성 저하로 인한 장기 투자 및 고용 위축 우려" }
        ],
        risks: [
            {
                title: "산업 현장의 혼란 가중",
                desc: "누가 '실질적 사용자'인지에 대한 기준 모호로 인해 현장의 노사 갈등 및 법적 분쟁 폭증"
            },
            {
                title: "해외 자본 유출 우려",
                desc: "강성 노조 리스크 및 경영 불확실성 증대로 해외 자본의 리쇼어링 기피 및 탈한국 가속화 가능성"
            },
            {
                title: "공급망 단절 리스크",
                desc: "특정 하청 노조의 파업이 원청 전체 생산 라인을 멈추는 비효율성 초래"
            }
        ],
        recentStatus: {
            asOf: "2026-03-19 (시행 10일차)",
            summary: "하청 노조의 교섭 요구 폭증 및 원청의 무응답 대치 국면",
            stats: [
                "683개 하청 노조가 287개 원청 사업장에 교섭 요구",
                "실제 교섭 절차 착수한 원청은 13곳 (CJ대한통운, 한국공항공사 등 주요 사업장 중심)",
                "274개 사업장은 '사용자성' 검토를 이유로 대치 중",
                "법무법인 상대 '원청 사용자성' 자문 수요 평시 대비 3배 이상 급증"
            ]
        },
        sources: [
            { label: "서울경제: 하청 노조 교섭 요구 봇물", url: "https://www.sedaily.com/" },
            { label: "연합뉴스TV: 시행 열흘만 683건 요구", url: "https://www.yna.co.kr/" },
            { label: "인베스트조선: 로펌 자문 폭주", url: "https://www.investchosun.com/" }
        ]
    }
};

