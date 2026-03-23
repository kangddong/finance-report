const RECOMMENDER_DATA = {
    balanced: {
        title: "추천 최적화 비중: \"Balanced Growth\"",
        logic: "<strong>삼성전자/하이닉스</strong>의 회복과 <strong>엔비디아</strong>의 성장을 핵심으로 두되, 중동 리스크에 강한 <strong>방산/팔란티어</strong>와 정책 수혜주인 <strong>두산에너빌리티</strong>를 적절히 섞어 하락장에서도 견디는 포트폴리오를 지향합니다.",
        pillars: [
            { label: "AI/반도체 코어 (삼성전자, Hynix, NVDA)", weight: 45, class: "ai", desc: "Main Growth Pillar" },
            { label: "국방/에너지 헤지 (팔란티어, 방산, 두산)", weight: 35, class: "defense", desc: "Defensive Shield" },
            { label: "미래 모멘텀 & 현금 (테슬라, Cash)", weight: 20, class: "cash", desc: "Future Ammo" }
        ],
        stocks: [
            { category: "Core: 반도체 듀오", tags: ["삼성전자", "SK하이닉스"], color: "rgba(79, 70, 229, 0.2)" },
            { category: "Growth: AI 마스터", tags: ["NVIDIA"], color: "rgba(129, 140, 248, 0.2)" },
            { category: "Shield: 국방/데이터 AI", tags: ["Palantir", "K-방산"], color: "rgba(244, 63, 94, 0.2)" },
            { category: "Utility: 원전/에너지", tags: ["두산에너빌리티"], color: "rgba(14, 165, 233, 0.2)" },
            { category: "Option: 차세대 모빌리티", tags: ["테슬라"], color: "rgba(156, 163, 175, 0.2)" }
        ],
        advice: [
            "<strong>하이닉스:</strong> 100만원 선 지지 시 비중 유지",
            "<strong>팔란티어:</strong> 국방 수요 증대 시 비중 확대 권장",
            "<strong>테슬라:</strong> $400 저항 돌파 전까지는 현금 비중으로 간주"
        ]
    },
    stability: {
        title: "추천 최적화 비중: \"Stability First\"",
        logic: "원금 보존과 리스크 관리에 집중합니다. 변동성이 큰 IT/성장주 비중을 줄이고, 지연된 지정학적 리스크에 강한 <strong>방산</strong>과 배당 성향이 강한 <strong>삼성전자</strong>, 그리고 현금 비중을 높게 유지합니다.",
        pillars: [
            { label: "방어/헤지 (팔란티어, 방산, 두산)", weight: 50, class: "defense", desc: "Main Shield" },
            { label: "안정적 대형주 (삼성전자, 하이닉스)", weight: 25, class: "ai", desc: "Safe Core" },
            { label: "현금 및 안전자산 (Cash)", weight: 25, class: "cash", desc: "Liquidity" }
        ],
        stocks: [
            { category: "Shield: 국방/데이터 AI", tags: ["Palantir", "K-방산"], color: "rgba(244, 63, 94, 0.2)" },
            { category: "Utility: 원전/에너지", tags: ["두산에너빌리티"], color: "rgba(14, 165, 233, 0.2)" },
            { category: "Stable: 우량주", tags: ["삼성전자"], color: "rgba(79, 70, 229, 0.2)" },
            { category: "Liquidity: 현금 비중", tags: ["CASH"], color: "rgba(156, 163, 175, 0.2)" }
        ],
        advice: [
            "<strong>K-방산:</strong> 포트폴리오의 중추로 활용하여 하락장 방어",
            "<strong>삼성전자:</strong> 배당 및 장기 보유 관점 유지",
            "<strong>신규 매수:</strong> 지수 급락 시에만 현금의 일부 집행"
        ]
    },
    aggressive: {
        title: "추천 최적화 비중: \"Maximum Momentum\"",
        logic: "성장성이 가장 높은 섹터에 집중 투자합니다. <strong>엔비디아</strong>와 <strong>하이닉스</strong>의 AI 주도권을 극대화하고, 변동성이 크지만 업사이드가 열린 <strong>팔란티어</strong>와 <strong>테슬라</strong>에 공격적으로 배분합니다.",
        pillars: [
            { label: "AI/반도체 집중 (NVDA, SK Hynix)", weight: 60, class: "ai", desc: "Growth Engine" },
            { label: "하이테크 모멘텀 (Palantir, Tesla)", weight: 30, class: "defense", desc: "High Beta" },
            { label: "헤지/기회 포착 (두산, Cash)", weight: 10, class: "cash", desc: "Tactical" }
        ],
        stocks: [
            { category: "Engine: AI 대장", tags: ["NVIDIA", "SK하이닉스"], color: "rgba(79, 70, 229, 0.2)" },
            { category: "Momentum: 테크 리더", tags: ["Palantir", "테슬라"], color: "rgba(129, 140, 248, 0.2)" },
            { category: "Satellite: 원전/에너지", tags: ["두산에너빌리티"], color: "rgba(14, 165, 233, 0.2)" },
            { category: "Alpha: 관심 종목", tags: ["K-방산"], color: "rgba(244, 63, 94, 0.2)" }
        ],
        advice: [
            "<strong>NVDA/Hynix:</strong> 업황 피크 아웃 전까지 공격적 보유",
            "<strong>테슬라:</strong> $420 돌파 시 비중 대폭 확대",
            "<strong>리스크:</strong> 레버리지 사용 자제 및 추세 이탈 시 칼같은 손절"
        ]
    },
    'core-satellite': {
        title: "추천 최적화 비중: \"Core & Satellite\"",
        logic: "수익의 기반이 되는 우량주(Core)를 넓게 가져가고, 개별 알파 수익을 위해 변동성 종목(Satellite)을 섞습니다. 삼성전자와 하이닉스로 시장 수익률을 추종하며, 나머지는 테크/에너지 테마로 초과 수익을 노립니다.",
        pillars: [
            { label: "Core 자산 (삼성전자, SK하이닉스)", weight: 70, class: "ai", desc: "Index Follower" },
            { label: "Satellite 자산 (NVDA, PLTR, 테슬라)", weight: 20, class: "defense", desc: "Alpha Seeker" },
            { label: "Tactical 자산 (두산, 방산, Cash)", weight: 10, class: "cash", desc: "Thematic" }
        ],
        stocks: [
            { category: "Core: 시장 대장주", tags: ["삼성전자", "SK하이닉스"], color: "rgba(79, 70, 229, 0.2)" },
            { category: "Satellite: AI/테크", tags: ["NVIDIA", "Palantir"], color: "rgba(129, 140, 248, 0.2)" },
            { category: "Satellite: 모빌리티/에너지", tags: ["테슬라", "두산에너빌리티"], color: "rgba(14, 165, 233, 0.2)" },
            { category: "Alpha: 기회 포착", tags: ["PLUS K 방산"], color: "rgba(244, 63, 94, 0.2)" }
        ],
        advice: [
            "<strong>코어 비중:</strong> 최소 70% 유지하여 전체 자산 안정성 확보",
            "<strong>리벨런싱:</strong> 새틀라이트 자산의 수익이 커질 경우 코어로 전이",
            "<strong>전략:</strong> 지루하더라도 원칙을 지키는 투자가 핵심"
        ]
    }
};

function renderRecommender(type) {
    const config = RECOMMENDER_DATA[type];
    const container = document.getElementById('recommender-content');
    if (!container || !config) return;

    const barsHtml = config.pillars.map(p => `
        <div class="sector-bar-wrapper">
            <div class="sector-bar-header"><span>${p.label}</span> <span>${p.weight}%</span></div>
            <div class="sector-bar-outer"><div class="sector-bar-inner ${p.class}" style="width: ${p.weight}%;">${p.desc}</div></div>
        </div>
    `).join('');

    const stocksHtml = config.stocks.map(s => `
        <li>
            <span>${s.category}</span>
            <div class="asset-tags">
                ${s.tags.map(t => `<span class="asset-tag" style="background: ${s.color};">${t}</span>`).join('')}
            </div>
        </li>
    `).join('');

    const adviceHtml = config.advice.map(a => `<li>${a}</li>`).join('');

    container.innerHTML = `
        <div class="recommender-card">
            <div class="section-label">Tailored Allocation</div>
            <h3 class="portfolio-type-title">${config.title}</h3>
            
            <div class="sector-mix-visual">
                ${barsHtml}
            </div>

            <div class="recommender-logic-box">
                <h4>💡 맞춤형 구성 로직</h4>
                <p class="portfolio-type-desc" style="font-size: 0.85rem; margin-bottom: 0;">
                    ${config.logic}
                </p>
            </div>
        </div>

        <div class="recommender-card">
            <div class="section-label">Asset Guide</div>
            <div class="recommender-asset-guide">
                <div class="asset-list-section">
                    <h4>🎯 주요 투자 종목</h4>
                    <ul class="asset-category-list">
                        ${stocksHtml}
                    </ul>
                </div>
                <div class="asset-advice-section">
                    <h4>📢 종목별 대응 조언</h4>
                    <ul class="asset-advice-list">
                        ${adviceHtml}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function initRecommender() {
    const recBtns = document.querySelectorAll('.rec-sel-btn');
    recBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            recBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRecommender(btn.getAttribute('data-rec-type'));
        });
    });
    renderRecommender('balanced');
}
