/**
 * @file data.js
 * @description 주식 분석 리포트의 히스토리를 저장하는 파일입니다.
 * sync-dashboard 스킬에 의해 자동으로 업데이트됩니다.
 */

const REPORTS_HISTORY = [
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
        "title": "외국인 매매 동향: 지금 어디로 돈이 흐르는가?",
        "date": "2026-02-07",
        "summary": "최근 외국인 매도세 속에서도 매수 우위를 보이는 '방산/바이오' 섹터와 매도 집중 섹터인 '반도체/2차전지'의 수급 현황을 분석합니다.",
        "tags": ["수급분석", "외국인", "섹터전략"],
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
