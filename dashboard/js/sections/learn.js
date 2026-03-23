const BOND_GUIDE_DATA = {
    terms: [
        { name: "표면금리 (Coupon Rate)", desc: "채권 증서에 적힌 확정 이자율입니다. 채권의 액면가에 곱해져 매달 혹은 매분기 지급됩니다." },
        { name: "만기수수료율 (YTM)", desc: "현재 가격에 채권을 사서 만기까지 보유했을 때 얻게 되는 연평균 수익률입니다. 실질적인 투자 지표입니다." },
        { name: "듀레이션 (Duration)", desc: "금리 변화에 따른 채권 가격의 <strong>민감도</strong>입니다. 만기가 길수록, 표면금리가 낮을수록 듀레이션이 길어집니다." },
        { name: "신용등급 (Credit Rating)", desc: "발행자가 원금과 이자를 갚을 능력을 평가한 것입니다. (AAA ~ D). 등급이 낮을수록 이자가 높습니다(하이일드 채권)." }
    ],
    strategy: [
        "<strong>주식 하락의 헤지:</strong> 경기 불황으로 주식이 급락할 때, 보통 금리가 내리며 채권 가격이 방어해 줍니다.",
        "<strong>현금 흐름 창출:</strong> 배당과 마찬가지로 정기적인 이자(쿠폰) 수익을 제공합니다.",
        "<strong>장단기 금리 역전 체크:</strong> 단기 금리가 장기 금리보다 높아지면 보통 1~2년 내 경기 침체의 신호로 해석됩니다."
    ]
};

const INVESTMENT_MASTERS = [
    {
        id: "WB",
        name: "워런 버핏",
        enName: "Warren Buffett",
        title: "오마하의 현인 · Berkshire Hathaway",
        avatarGradient: "linear-gradient(135deg, #667eea, #764ba2)",
        quote: "남들이 탐욕스러울 때 두려워하고, 남들이 두려워할 때 탐욕스러워라.",
        tags: [
            { label: "가치투자", class: "value" },
            { label: "초장기 보유", class: "long-term" },
            { label: "경제적 해자", class: "moat" }
        ],
        principles: [
            "<strong>능력의 원(Circle of Competence):</strong> 내가 이해하는 사업에만 투자한다",
            "<strong>안전마진(Margin of Safety):</strong> 내재가치 대비 충분히 싸게 산다",
            "<strong>복리의 마법:</strong> 시간이 최고의 동맹이다. 좋은 기업을 사서 영원히 보유한다",
            "<strong>Rule #1:</strong> 돈을 잃지 마라. Rule #2: Rule #1을 잊지 마라"
        ],
        stats: [
            { label: "연평균 수익률 (60년)", value: "~20%" },
            { label: "순자산", value: "$1,400억+" }
        ]
    },
    {
        id: "PL",
        name: "피터 린치",
        enName: "Peter Lynch",
        title: "마젤란 펀드의 전설 · Fidelity",
        avatarGradient: "linear-gradient(135deg, #f093fb, #f5576c)",
        quote: "당신이 가장 잘 아는 분야에서 투자 기회를 찾아라.",
        tags: [
            { label: "성장주 발굴", class: "growth" },
            { label: "생활 속 투자", class: "practical" },
            { label: "철저한 리서치", class: "research" }
        ],
        principles: [
            "<strong>일상 속 텐배거:</strong> 쇼핑몰, 식당, 일상에서 성장 기업을 찾아라",
            "<strong>6가지 분류법:</strong> 저성장주, 대형우량주, 고성장주, 경기순환주, 자산주, 턴어라운드주",
            "<strong>PEG Ratio:</strong> PER만 보지 말고, 이익 성장률 대비 밸류에이션을 봐라",
            "<strong>\"자기가 뭘 사는지 알아라\":</strong> 설명할 수 없는 기업에 투자하지 마라"
        ],
        stats: [
            { label: "연평균 수익률 (13년)", value: "29.2%" },
            { label: "마젤란 펀드 운용 규모", value: "$140억" }
        ]
    },
    {
        id: "JL",
        name: "제시 리버모어",
        enName: "Jesse Livermore",
        title: "월가의 전설적 투기꾼",
        avatarGradient: "linear-gradient(135deg, #fa709a, #fee140)",
        quote: "시장은 절대 틀리지 않는다. 틀리는 것은 사람의 의견이다.",
        tags: [
            { label: "추세 매매", class: "momentum" },
            { label: "타이밍", class: "timing" },
            { label: "리스크 관리", class: "risk" }
        ],
        principles: [
            "<strong>추세를 따르라:</strong> 큰 흐름을 읽고, 그 방향으로만 매매한다",
            "<strong>피라미딩:</strong> 수익이 나는 포지션에만 추가 매수한다",
            "<strong>손절의 미학:</strong> 빠르게 손절하고, 수익은 길게 가져간다",
            "<strong>인내:</strong> \"돈을 벌어준 건 내 판단이 아니라 가만히 앉아 있었던 것이다\""
        ],
        stats: [
            { label: "1929년 대공황 수익", value: "$1억+" },
            { label: "활동 시기", value: "1877~1940" }
        ]
    },
    {
        id: "GS",
        name: "조지 소로스",
        enName: "George Soros",
        title: "영란은행을 무너뜨린 남자",
        avatarGradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        quote: "중요한 것은 맞고 틀리는 게 아니라, 맞을 때 얼마를 버느냐이다.",
        tags: [
            { label: "글로벌 매크로", class: "macro" },
            { label: "반사성 이론", class: "contrarian" },
            { label: "레버리지", class: "leverage" }
        ],
        principles: [
            "<strong>반사성 이론:</strong> 시장 참여자의 인식이 펀더멘털을 변화시키고, 그것이 다시 인식을 바꾼다",
            "<strong>비대칭 베팅:</strong> 확률이 높을 때 압도적으로 크게 베팅한다",
            "<strong>가설 → 검증:</strong> 투자는 가설을 세우고 시장이 검증하는 과학적 과정이다",
            "<strong>생존 우선:</strong> 틀렸다면 즉시 인정하고 포지션을 정리한다"
        ],
        stats: [
            { label: "1992 파운드 공매도 수익", value: "$10억" },
            { label: "순자산", value: "$86억" }
        ]
    },
    {
        id: "RD",
        name: "레이 달리오",
        enName: "Ray Dalio",
        title: "올웨더 포트폴리오의 창시자 · Bridgewater",
        avatarGradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
        quote: "고통 + 반성 = 진보 (Pain + Reflection = Progress)",
        tags: [
            { label: "올웨더", class: "allweather" },
            { label: "시스템 투자", class: "systematic" },
            { label: "극한 분산", class: "diversify" }
        ],
        principles: [
            "<strong>올웨더 전략:</strong> 어떤 경제 환경에서도 살아남는 '리스크 패리티' 포트폴리오",
            "<strong>경제 기계:</strong> 경제는 단기 부채 사이클과 장기 부채 사이클의 반복이다",
            "<strong>원칙(Principles):</strong> 의사결정은 감정이 아닌 원칙과 알고리즘에 기반해야 한다",
            "<strong>상관관계 낮은 15가지 자산:</strong> 분산의 성배(Holy Grail of Investing)"
        ],
        stats: [
            { label: "Bridgewater 운용 규모", value: "$1,500억+" },
            { label: "올웨더 연평균 수익률", value: "12%" }
        ]
    },
    {
        id: "BG",
        name: "벤저민 그레이엄",
        enName: "Benjamin Graham",
        title: "가치투자의 아버지 · 버핏의 스승",
        avatarGradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
        quote: "주식시장은 단기적으로 투표기이지만, 장기적으로는 저울이다.",
        tags: [
            { label: "가치투자 원조", class: "value" },
            { label: "안전마진", class: "safety" },
            { label: "이성적 판단", class: "rational" }
        ],
        principles: [
            "<strong>미스터 마켓:</strong> 시장은 매일 가격을 제시하는 조울증 환자다. 그에게 휘둘리지 마라",
            "<strong>안전마진:</strong> 내재가치보다 30~50% 할인된 가격에서만 매수한다",
            "<strong>투자 vs 투기:</strong> 원금의 안전과 적절한 수익을 보장하는 것만이 '투자'다",
            "<strong>청산가치 분석:</strong> 기업의 순유동자산(NCAV)만으로도 투자 판단이 가능하다"
        ],
        stats: [
            { label: "연평균 수익률", value: "~20%" },
            { label: "《증권분석》 출간", value: "1934" }
        ]
    },
    {
        id: "AK",
        name: "앙드레 코스톨라니",
        enName: "André Kostolany",
        title: "유럽의 투자 철학자",
        avatarGradient: "linear-gradient(135deg, #c471f5, #fa71cd)",
        quote: "수면제를 먹고 몇 년 뒤에 깨어나라. 그러면 부자가 되어 있을 것이다.",
        tags: [
            { label: "역발상", class: "contrarian" },
            { label: "인내", class: "patience" },
            { label: "군중 심리", class: "psychology" }
        ],
        principles: [
            "<strong>달걀 이론:</strong> 주식시장은 '소신파 → 부화뇌동파'로 자금이 이동하는 순환 구조",
            "<strong>4G 원칙:</strong> 돈(Geld), 생각(Gedanken), 인내(Geduld), 운(Glück)",
            "<strong>주인과 개:</strong> 경제(주인)와 주가(개)는 같이 산책하지만 개가 더 왔다 갔다 한다",
            "<strong>확신에 투자:</strong> 소문에 사지 말고 본인의 확신에 투자하라"
        ],
        stats: [
            { label: "투자 경력", value: "80년" },
            { label: "생몰 연도", value: "1906~1999" }
        ]
    },
    {
        id: "CM",
        name: "찰리 멍거",
        enName: "Charlie Munger",
        title: "버핏의 파트너 · 사고의 거인",
        avatarGradient: "linear-gradient(135deg, #30cfd0, #330867)",
        quote: "현명한 사람은 문제를 해결하고, 더 현명한 사람은 문제를 피한다.",
        tags: [
            { label: "격자형 사고", class: "mental" },
            { label: "고품질 집중", class: "quality" },
            { label: "역산법", class: "inversion" }
        ],
        principles: [
            "<strong>격자형 정신 모델:</strong> 다양한 학문(심리학, 물리학, 경제학 등)의 프레임으로 투자를 분석",
            "<strong>역산법(Inversion):</strong> '어떻게 성공할까'보다 '어떻게 망할까'를 먼저 생각하라",
            "<strong>적정 가격의 좋은 기업:</strong> 싸구려 기업보다 좋은 기업을 적정 가격에 사라",
            "<strong>Sit on your ass:</strong> 좋은 기회가 올 때까지 기다렸다가 크게 베팅한다"
        ],
        stats: [
            { label: "연평균 수익률", value: "19.8%" },
            { label: "순자산", value: "$26억" }
        ]
    }
];

function renderBondGuide() {
    const termContainer = document.getElementById('bond-terms-container');
    const strategyContainer = document.getElementById('bond-strategy-container');
    
    if (termContainer) {
        termContainer.innerHTML = BOND_GUIDE_DATA.terms.map(t => `
            <div class="term-item">
                <div class="term-name">${t.name}</div>
                <p>${t.desc}</p>
            </div>
        `).join('');
    }

    if (strategyContainer) {
        strategyContainer.innerHTML = `
            <ul class="recommender-list" style="margin-top: 0.5rem;">
                ${BOND_GUIDE_DATA.strategy.map(s => `<li>${s}</li>`).join('')}
            </ul>
        `;
    }
}

function renderMasters() {
    const container = document.getElementById('masters-container');
    if (!container) return;

    container.innerHTML = INVESTMENT_MASTERS.map(m => `
        <div class="master-card">
            <div class="master-header">
                <div class="master-avatar" style="background: ${m.avatarGradient};">${m.id}</div>
                <div class="master-info">
                    <h3>${m.name} <span class="master-en">${m.enName}</span></h3>
                    <span class="master-title">${m.title}</span>
                </div>
            </div>
            <blockquote class="master-quote">"${m.quote}"</blockquote>
            <div class="master-philosophy">
                ${m.tags.map(t => `<div class="philosophy-tag ${t.class}">${t.label}</div>`).join('')}
            </div>
            <ul class="master-principles">
                ${m.principles.map(p => `<li>${p}</li>`).join('')}
            </ul>
            <div class="master-stats">
                ${m.stats.map(s => `<div class="stat-item"><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></div>`).join('')}
            </div>
        </div>
    `).join('');
}

const PORTFOLIO_TYPES_DATA = [
    {
        id: "stability",
        badge: "안정형",
        title: "1. 안정형",
        desc: "원금 변동을 최대한 줄이고, 수익보다 방어와 현금흐름을 더 중시하는 타입입니다. 보통 주식 비중이 낮고 채권·현금 비중이 높습니다.",
        target: ["가까운 시기(1~3년 내) 쓸 돈이 있다", "큰 하락을 견디기 어렵다", "투자보다 “보존”이 우선이다"],
        example: "Vanguard 보수형",
        allocation: [
            { type: "equity", label: "주식", weight: 30 },
            { type: "bond", label: "채권", weight: 55 },
            { type: "cash", label: "현금", weight: 15 }
        ],
        range: "주식 20~40 / 채권 40~70 / 현금 10~20"
    },
    {
        id: "balanced",
        badge: "균형형",
        title: "2. 균형형",
        desc: "가장 대표적인 “정석형”입니다. 성장도 챙기고 방어도 챙기려는 구조고, 흔히 말하는 60/40 포트폴리오가 여기에 해당합니다.",
        target: ["장기투자는 하고 싶지만 변동성이 너무 크면 힘들다", "자산 배분의 기본형을 원한다", "“공격형까지는 아니고, 예금형도 아니다”"],
        example: "대표 포트폴리오",
        allocation: [
            { type: "equity", label: "주식", weight: 60 },
            { type: "bond", label: "채권", weight: 35 },
            { type: "cash", label: "현금", weight: 5 }
        ],
        range: "주식 50~70 / 채권 25~45 / 현금 0~10"
    },
    {
        id: "aggressive",
        badge: "공격형",
        title: "3. 공격형",
        desc: "자산 증식이 최우선이고, 중간의 큰 변동성을 감수하는 타입입니다. 수익 기대치가 높은 대신, 하락장에서 버틸 수 있는 멘탈이 핵심입니다.",
        target: ["투자기간이 길다", "월급/현금흐름이 따로 있어 버틸 수 있다", "단기 하락보다 장기 복리를 더 중시한다"],
        example: "Vanguard 공격형",
        allocation: [
            { type: "equity", label: "주식", weight: 80 },
            { type: "bond", label: "채권", weight: 20 }
        ],
        range: "주식 70~90 / 채권 10~30 / 현금 0~10"
    },
    {
        id: "index",
        badge: "인덱스형",
        title: "4. 초간단 인덱스형",
        desc: "대표적으로 '3펀드 포트폴리오'가 유명합니다. 종목을 고르는 게 아니라 시장 전체를 사는 단순하지만 강한 구조입니다.",
        setup: ["자국 전체 주식시장", "해외 전체 주식시장", "전체 채권시장"],
        pros: "단순하고 관리가 쉬우며, 과도한 종목 선택 실수를 줄이고 장기 투자와 궁합이 매우 좋습니다.",
        example: "Bogleheads 3-Fund",
        allocation: [
            { type: "equity", label: "전체 주식", weight: 60 },
            { type: "bond", label: "전체 채권", weight: 40 }
        ]
    },
    {
        id: "allinone",
        badge: "올인원형",
        title: "5. 올인원형",
        desc: "직접 비중 조절하기 귀찮거나 리밸런싱을 자동화하고 싶은 사람에게 맞습니다. 한 상품 안에 수천 개 주식·채권이 이미 섞여 있습니다.",
        pros: "관리 난이도 최하, 실수 방지 효과가 높습니다. (Vanguard Target Retirement 등)",
        cons: "세밀한 커스터마이징이 제한적이며 직접 설계하는 재미는 적습니다.",
        example: "Target Date Fund",
        allocation: [
            { type: "equity", label: "글로벌 주식", weight: 50 },
            { type: "bond", label: "자산배분", weight: 50 }
        ]
    },
    {
        id: "core",
        badge: "코어-새틀라이트",
        title: "6. 코어-새틀라이트형",
        desc: "해당 방식은 실무적으로 많이 쓰입니다. 핵심 자산(Core)은 넓게 분산하고, 일부(Satellite)만 테마나 개별주에 배치합니다.",
        setup: ["<strong>70~90% (Core):</strong> 광범위 인덱스, 채권 등", "<strong>10~30% (Satellite):</strong> 반도체, AI, 배당, 금, 리츠 등"],
        pros: "중심은 안정적으로 가져가면서 확신 있는 아이디어는 별도로 반영 가능합니다.",
        example: "전략적 배분",
        allocation: [
            { type: "equity", label: "Core (지수)", weight: 80 },
            { type: "commodity", label: "Satellite (테마)", weight: 20 }
        ]
    },
    {
        id: "permanent",
        badge: "올웨더/영구",
        title: "7. 영구 포트폴리오",
        desc: "해리 브라운이 제안한 방식으로, 어떤 경제 상황(성장, 침체, 인플레이션, 디플레이션)에서도 살아남도록 설계된 초분산 전략입니다.",
        setup: ["주식 (성장기 대응)", "장기채권 (금리 하락기 대응)", "현금 (침체기 대응)", "금 (인플레이션 대응)"],
        example: "Permanent Portfolio",
        allocation: [
            { type: "equity", label: "주식", weight: 25 },
            { type: "bond", label: "채권", weight: 25 },
            { type: "cash", label: "현금", weight: 25 },
            { type: "gold", label: "금", weight: 25 }
        ],
        range: "주식 25 / 채권 25 / 현금 25 / 금 25"
    },
    {
        id: "income",
        badge: "인컴형",
        title: "8. 인컴형",
        desc: "자산 성장보다 현금흐름이 중요한 사람에게 맞습니다. 배당주, 배당 ETF, 채권, 우선주, 리츠 등을 조합합니다.",
        target: ["생활비 보완이 중요하다", "심리적으로 “들어오는 돈”이 중요하다", "은퇴 준비나 현금흐름 관리가 목적이다"],
        cons: "분배금이 높다고 무조건 좋은 건 아니며, 성장성이 떨어질 수 있습니다. 세금과 총수익률을 같이 고려해야 합니다."
    }
];

function renderPortfolios() {
    const container = document.getElementById('portfolio-container');
    if (!container) return;

    container.innerHTML = PORTFOLIO_TYPES_DATA.map(p => `
        <div class="portfolio-item-card">
            <div class="portfolio-type-badge ${p.id}">${p.badge}</div>
            <h3 class="portfolio-type-title">${p.title}</h3>
            <p class="portfolio-type-desc">${p.desc}</p>
            
            ${p.target ? `
                <div class="portfolio-info-box">
                    <strong>🎯 이 유형이 맞는 사람:</strong>
                    <ul>${p.target.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
            ` : ''}

            ${p.setup ? `
                <div class="portfolio-info-box">
                    <strong>📐 구성 요성:</strong>
                    <ul>${p.setup.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
            ` : ''}

            ${p.pros ? `
                <div class="portfolio-info-box">
                    <strong>✨ 장점:</strong>
                    <p>${p.pros}</p>
                </div>
            ` : ''}

            ${p.cons ? `
                <div class="portfolio-info-box">
                    <strong>⚠️ 주의/단점:</strong>
                    <p>${p.cons}</p>
                </div>
            ` : ''}

            ${p.allocation ? `
                <div class="portfolio-allocation-box">
                    <strong>📊 구성 예시 (${p.example || ''}):</strong>
                    <div class="allocation-legend">
                        ${p.allocation.map(a => `<div class="legend-item"><span class="legend-dot ${a.type}"></span> ${a.label} ${a.weight}%</div>`).join('')}
                    </div>
                    <div class="allocation-bar">
                        ${p.allocation.map(a => `<div class="bar-segment ${a.type}" style="width: ${a.weight}%;"></div>`).join('')}
                    </div>
                    ${p.range ? `<p class="allocation-text">${p.range}</p>` : ''}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function initLearnSections() {
    renderPortfolios();
    renderBondGuide();
    renderMasters();
}

