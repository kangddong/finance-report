import { getLatestIndicatorsSnapshot } from '../db.js';

const INDICATOR_GROUPS = [
    {
        id: 'premarket',
        title: '장 전 루틴',
        copy: '미국 선물, 한국 야간 선물, 환율, 변동성, 금리로 오늘 시초가와 리스크 톤을 먼저 잡습니다.',
        badge: 'critical',
        badgeLabel: 'Core',
        note: '코스피 야간선물이 -1% 이하이면 다음 날 갭하락 가능성을 우선 경계합니다.',
        items: [
            { key: 'esFutures', ticker: 'ES1!', meaning: '미국 대형주 전반 방향' },
            { key: 'nqFutures', ticker: 'NQ1!', meaning: '기술주 방향, 코스피 동조 핵심' },
            { key: 'ymFutures', ticker: 'YM1!', meaning: '경기민감주 흐름' },
            { key: 'rtyFutures', ticker: 'RTY1!', meaning: '중소형주 risk-on/off' },
            { key: 'kospiNightFutures', ticker: 'KOSPI200 Night', meaning: '다음 날 코스피 시초가 예측 핵심' },
            { key: 'kosdaqNightFutures', ticker: 'KOSDAQ Night', meaning: '중소형주와 성장주 흐름' },
            { key: 'exchangeRate', ticker: 'KRW/USD', meaning: '외국인 수급 압력' },
            { key: 'dollarIndex', ticker: 'DXY', meaning: '달러 강세 여부' },
            { key: 'usdJpy', ticker: 'USD/JPY', meaning: '엔 캐리와 아시아 증시 압박 신호' },
            { key: 'usdCnh', ticker: 'USD/CNH', meaning: '중국발 환율 리스크' },
            { key: 'vix', ticker: 'VIX', meaning: '20 이하는 안정, 30 이상은 공포' },
            { key: 'move', ticker: 'MOVE', meaning: '채권시장 패닉 여부' },
            { key: 'vkospi', ticker: 'VKOSPI', meaning: '국내 투자심리' },
            { key: 'vxn', ticker: 'VXN', meaning: '기술주 변동성' },
            { key: 'us10y', ticker: 'US10Y', meaning: '4.5% 이상이면 성장주 부담' },
            { key: 'us2y', ticker: 'US02Y', meaning: '금리 인하 기대 반영' },
            { key: 'yieldSpread', ticker: '10Y-2Y', meaning: '역전 시 경기침체 경계' },
            { key: 'kr3y', ticker: 'KR 3Y', meaning: '한은 정책 방향 반영' }
        ]
    },
    {
        id: 'intraday',
        title: '장 중 루틴',
        copy: '수급과 거래대금, 업종 주도력으로 오늘 시장이 실제로 어디에 돈이 붙는지 확인합니다.',
        badge: 'important',
        badgeLabel: 'Monitor',
        note: '코스피 거래대금이 낮고 외국인 순매수가 둔화되면 지수보다 종목 변동성이 더 크게 나타날 수 있습니다.',
        items: [
            { key: 'programTrading', ticker: 'Program', meaning: '차익/비차익으로 기관 흐름 확인' },
            { key: 'foreignNetBuyingLive', ticker: 'Foreign Live', meaning: '외국인 실시간 순매수' },
            { key: 'kospiTurnover', ticker: 'KOSPI Turnover', meaning: '시장 체력 확인' },
            { key: 'sectorBreadth', ticker: 'Sector Breadth', meaning: '주도 업종 파악' },
            { key: 'sox', ticker: 'SOX', meaning: '반도체 업종 센티먼트' },
            { key: 'fearAndGreed', ticker: 'CNN', meaning: '글로벌 위험선호 요약' }
        ]
    },
    {
        id: 'assets',
        title: '원자재와 안전자산',
        copy: '인플레이션과 지정학, 리스크오프 전환을 읽기 위한 보조 축입니다.',
        badge: 'optional',
        badgeLabel: 'Context',
        note: '금/은 비율이 높아지고 WTI가 급등하면 방어적 대응을 우선 검토합니다.',
        items: [
            { key: 'wti', ticker: 'WTI', meaning: '인플레 압박과 에너지 섹터' },
            { key: 'gold', ticker: 'Gold', meaning: '안전자산 선호도' },
            { key: 'goldSilverRatio', ticker: 'Gold/Silver', meaning: '60 이하는 risk-on, 80 이상은 극도 공포' },
            { key: 'copper', ticker: 'Copper', meaning: '경기 선행 지표' },
            { key: 'bitcoin', ticker: 'BTC', meaning: '리스크 자산 선호도' }
        ]
    }
];

const PRIORITY_ROWS = [
    ['초필수', '코스피 야간선물', '매일', '-1% 이하 = 갭하락 경계'],
    ['초필수', 'NQ / ES 선물', '매일', '국장 시초가 동조 확인'],
    ['초필수', '원/달러 환율', '매일', '1,400 돌파 = 외인 압력'],
    ['초필수', 'VIX', '매일', '20 이상 경계, 30 이상 공포'],
    ['초필수', 'Fear & Greed', '매일', '리스크 톤 요약'],
    ['중요', 'VKOSPI', '매일', '국내 투심'],
    ['중요', 'DXY', '매일', '달러 강세 = 신흥국 부담'],
    ['중요', 'US10Y', '매일', '4.5% 이상 = 성장주 부담'],
    ['중요', '외국인 실시간 순매수', '장 중', '수급 방향 확인'],
    ['중요', 'SOX', '전일/장중', '반도체 체감 방향'],
    ['특수', 'MOVE', '채권 불안 시', '채권 패닉 확인'],
    ['특수', 'USD/JPY', '엔 변동 확대 시', '엔 캐리 청산 경계'],
    ['특수', 'WTI', '지정학 리스크 시', '유가 급등 여부'],
    ['특수', '금/은 비율', '리스크오프 시', '극단 심리 확인']
];

function normalizeKey(key) {
    if (key === 'goldSilverRatio') return ['goldSilverRatio', 'goldSiverRatio'];
    return [key];
}

function getIndicator(indicators, key) {
    const matchedKey = normalizeKey(key).find((candidate) => indicators?.[candidate]);
    return matchedKey ? indicators[matchedKey] : null;
}

function getStatusTone(status = '') {
    const normalized = String(status).toLowerCase();
    if (!normalized || normalized === 'n/a') return 'neutral';
    if (
        normalized.includes('fear') ||
        normalized.includes('공포') ||
        normalized.includes('경계') ||
        normalized.includes('하락') ||
        normalized.includes('-')
    ) {
        return 'down';
    }
    if (
        normalized.includes('greed') ||
        normalized.includes('안정') ||
        normalized.includes('강세') ||
        normalized.includes('상승') ||
        normalized.includes('+')
    ) {
        return 'up';
    }
    if (normalized.includes('주의') || normalized.includes('warning')) {
        return 'warning';
    }
    return 'neutral';
}

function createCard(item, indicators) {
    const indicator = getIndicator(indicators, item.key);
    const label = indicator?.label || item.key;
    const value = indicator?.value || 'N/A';
    const status = indicator?.status || '데이터 대기';
    const meaning = item.meaning;

    return `
        <article class="indicator-detail-card">
            <div class="indicator-detail-label">${label}</div>
            <div class="indicator-detail-ticker">${item.ticker}</div>
            <div class="indicator-detail-value">${value}</div>
            <div class="indicator-detail-status ${getStatusTone(status)}">${status}</div>
            <div class="indicator-detail-meaning">${meaning}</div>
        </article>
    `;
}

function renderSummary(container, indicators) {
    const summaryItems = [
        ['오늘 리스크', getIndicator(indicators, 'fearAndGreed')],
        ['VIX', getIndicator(indicators, 'vix')],
        ['코스피 야간선물', getIndicator(indicators, 'kospiNightFutures')],
        ['원/달러', getIndicator(indicators, 'exchangeRate')]
    ];

    container.innerHTML = summaryItems.map(([title, item]) => `
        <div class="indicator-summary-chip">
            <strong>${title}</strong>
            <span>${item?.value || 'N/A'}</span>
        </div>
    `).join('');
}

function renderGroups(container, indicators) {
    container.innerHTML = INDICATOR_GROUPS.map((group) => `
        <section class="indicator-section">
            <div class="indicator-section-header">
                <div>
                    <div class="indicator-section-title">${group.title}</div>
                    <div class="indicator-section-copy">${group.copy}</div>
                </div>
                <span class="indicator-badge ${group.badge}">${group.badgeLabel}</span>
            </div>
            <div class="indicator-card-grid">
                ${group.items.map((item) => createCard(item, indicators)).join('')}
            </div>
            <div class="indicator-note-box">${group.note}</div>
        </section>
    `).join('');
}

function renderPriorityTable(container) {
    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>우선순위</th>
                    <th>지표</th>
                    <th>확인 타이밍</th>
                    <th>기준</th>
                </tr>
            </thead>
            <tbody>
                ${PRIORITY_ROWS.map((row) => `
                    <tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

export function initIndicatorsPage() {
    const snapshot = getLatestIndicatorsSnapshot();
    const indicators = snapshot?.indicators || {};

    renderSummary(document.getElementById('indicator-summary-grid'), indicators);
    renderGroups(document.getElementById('indicator-page-layout'), indicators);
    renderPriorityTable(document.getElementById('indicator-priority-table'));

    const lastUpdated = document.getElementById('indicator-last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = snapshot?.date
            ? `최종 업데이트: ${snapshot.date}`
            : '최신 리포트에 지수 데이터가 없습니다.';
    }
}
