
const FINANCE_WORDS = [
    // 1. 거시경제 (Macro)
    { term: "GDP (국내총생산)", category: "Macro", definition: "한 나라의 영역 내에서 가계, 기업, 정부 등 모든 경제주체가 일정기간 동안 생산한 재화 및 서비스의 부가가치를 시장가격으로 평가하여 합산한 것." },
    { term: "CPI (소비자물가지수)", category: "Macro", definition: "일반 도시 가구가 소비생활을 영위하기 위해 구입하는 소비재와 서비스의 가격변동을 나타내는 지수로, 인플레이션을 측정하는 대표적인 지표." },
    { term: "FOMC (연방공개시장위원회)", category: "Macro", definition: "미국 연방준비제도(Fed) 산하의 위원회로, 미국의 기준금리 및 통화정책을 결정하는 최고 의사결정 기구." },
    { term: "금리 역전", category: "Macro", definition: "장기 금리가 단기 금리보다 낮아지는 현상으로, 통상적으로 경기 침체의 전조로 해석됨." },

    // 2. 펀더멘털 & 기업분석 (Fundamental)
    { term: "펀더멘털 (Fundamental)", category: "Fundamental", definition: "기업이나 경제의 기초 체력. 매출, 순이익, 재무건전성 등 기업의 내재 가치를 의미." },
    { term: "가이던스 (Guidance)", category: "Fundamental", definition: "상장 기업이 투자자들에게 제시하는 향후 매출, 영업이익 등의 실적 전망치." },
    { term: "경제적 해자 (Moat)", category: "Fundamental", definition: "경쟁사로부터 기업의 이익을 보호해주는 높은 진입장벽이나 독점적 경쟁 우위 (예: 강력한 브랜드, 특허 조술)." },
    { term: "컨센서스 (Consensus)", category: "Fundamental", definition: "시장 전문가(애널리스트)들의 실적 추정치 평균값. 실제 실적이 이를 상회하면 '어닝 서프라이즈', 하회하면 '어닝 쇼크'." },

    // 3. 재무 투자 지표 (Indicators)
    { term: "EPS (주당순이익)", category: "Indicators", definition: "Earning Per Share. 기업이 벌어들인 순이익을 발행 주식 수로 나눈 값. 1주당 얼마의 이익을 냈는지 나타냄." },
    { term: "PER (주가수익비율)", category: "Indicators", definition: "Price Earning Ratio. 주가를 주당순이익(EPS)으로 나눈 값. 주가가 1주당 수익의 몇 배가 되는지 나타내는 지표 (낮을수록 저평가)." },
    { term: "PBR (주가순자산비율)", category: "Indicators", definition: "Price Book-value Ratio. 주가를 주당순자산(BPS)으로 나눈 값. 기업의 자산 가치 대비 주가 수준을 평가 (1 미만이면 자산가치보다 저평가)." },
    { term: "ROE (자기자본이익률)", category: "Indicators", definition: "Return On Equity. 투입한 자기자본이 얼마만큼의 이익을 냈는지 나타내는 수익성 지표 (높을수록 좋음)." },

    // 4. 수익성 지표 (Profitability)
    { term: "매출액 (Revenue)", category: "Profitability", definition: "기업이 제품이나 서비스를 판매하고 얻은 총 금액. 기업의 외형 성장을 나타냄." },
    { term: "영업이익 (Operating Income)", category: "Profitability", definition: "매출액에서 매출원가와 판관비를 뺀 금액. 기업 본연의 영업 활동으로 벌어들인 이익." },
    { term: "순이익 (Net Income)", category: "Profitability", definition: "영업이익에서 영업외수익/비용, 법인세 등을 가감한 최종 이익. 주주에게 귀속되는 이익." },
    { term: "영업이익률 (OPM)", category: "Profitability", definition: "Operating Profit Margin. 매출액 대비 영업이익의 비율. 기업의 수익성을 나타내는 핵심 지표." }
];
