import { parseMarkdown } from '../utils/markdown.js';
import { renderCompanyAnalysisGrid, renderDeepDiveGrid, renderSectorAnalysis } from './analysis.js';
import { renderExternalFactors, renderPolicyStance } from './external-factors.js';

let currentSession = 'kr';

function getIndicatorStatusClass(status = '') {
    const normalized = String(status).toLowerCase();
    if (normalized.includes('fear')) return 'extreme-fear';
    if (normalized.includes('+') || normalized.includes('상승') || normalized.includes('강세')) return 'up';
    if (normalized.includes('-') || normalized.includes('하락') || normalized.includes('공포')) return 'down';
    return '';
}

export function renderIndicators(indicators) {
    const container = document.getElementById('market-indicators');
    if (!container) return;

    if (!indicators || !Object.keys(indicators).length) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'grid';
    container.innerHTML = '';

    Object.values(indicators).forEach((item) => {
        const label = item?.label || 'Indicator';
        const card = document.createElement('div');
        card.className = 'indicator-card';
        card.innerHTML = `
            <div class="indicator-label">${label}</div>
            <div class="indicator-value">${item?.value || 'N/A'}</div>
            <div class="indicator-status ${getIndicatorStatusClass(item?.status)}">${item?.status || '대기'}</div>
        `;
        container.appendChild(card);
    });
}

export function renderHoldings(holdings) {
    const holdingsList = document.getElementById('holdings-list');
    if (!holdingsList) return;
    holdingsList.innerHTML = '';

    if (!holdings?.length) {
        holdingsList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">표시할 보유 종목이 없습니다.</p>';
        return;
    }

    holdings.forEach((stock) => {
        const isUp = String(stock?.return || '').startsWith('+');
        const hasReport = Boolean(stock?.reportPath);
        const content = `
            <div class="stock-item" ${hasReport ? 'style="cursor: pointer;"' : ''}>
                <div class="stock-info">
                    <div class="name">${stock.name} ${hasReport ? '<span style="font-size: 0.8rem; color: var(--accent-blue);">리포트</span>' : ''}</div>
                    <div class="price">평단: ${stock.avgPrice || '-'} / 현재: ${stock.currentPrice || '-'}</div>
                </div>
                <div class="stock-status">
                    <div class="return ${isUp ? 'up' : 'down'}">${stock.return || '-'}</div>
                    <span class="badge ${String(stock.advice || '').includes('HOLD') ? 'hold' : 'buy'}">${stock.advice || 'WATCH'}</span>
                </div>
                <div class="reason-text">${parseMarkdown(stock.reason || '')}</div>
            </div>
        `;

        if (hasReport) {
            const link = document.createElement('a');
            link.href = stock.reportPath;
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
            link.style.display = 'block';
            link.innerHTML = content;
            holdingsList.appendChild(link);
            return;
        }

        holdingsList.insertAdjacentHTML('beforeend', content);
    });
}

export function renderWatchlist(watchlist) {
    const watchlistList = document.getElementById('watchlist-list');
    if (!watchlistList) return;
    watchlistList.innerHTML = '';

    if (!watchlist?.length) {
        watchlistList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">표시할 관심 종목이 없습니다.</p>';
        return;
    }

    watchlist.forEach((stock) => {
        const hasReport = Boolean(stock?.reportPath);
        const content = `
            <div class="stock-item" ${hasReport ? 'style="cursor: pointer;"' : ''}>
                <div class="stock-info">
                    <div class="name">${stock.name} ${hasReport ? '<span style="font-size: 0.8rem; color: var(--accent-blue);">리포트</span>' : ''}</div>
                    <div class="price">현재가: ${stock.currentPrice || '-'} / 전망: ${stock.outlook || '-'}</div>
                </div>
                <div class="stock-status">
                    <span class="badge buy">${stock.advice || 'WATCH'}</span>
                </div>
                <div class="reason-text">${parseMarkdown(stock.reason || '')}</div>
            </div>
        `;

        if (hasReport) {
            const link = document.createElement('a');
            link.href = stock.reportPath;
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';
            link.style.display = 'block';
            link.innerHTML = content;
            watchlistList.appendChild(link);
            return;
        }

        watchlistList.insertAdjacentHTML('beforeend', content);
    });
}

export function renderForeignTrend(trend) {
    const foreignList = document.getElementById('foreign-trend-list');
    const topList = document.getElementById('foreign-top-list');
    if (!foreignList || !topList) return;

    foreignList.innerHTML = '';
    topList.innerHTML = '';

    if (!trend?.daily_rows?.length) {
        foreignList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">외국인 수급 데이터가 없습니다.</p>';
        topList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">상위 순매수 데이터가 없습니다.</p>';
        return;
    }

    const rows = trend.daily_rows;
    const latest = rows[0];
    const seriesMap = {
        individualsNetBuying: '개인',
        foreignersNetBuying: '외국인',
        institutionsNetBuying: '기관'
    };

    const maxAbs = Math.max(...rows.flatMap((row) => [
        Math.abs(row.individualsNetBuying || 0),
        Math.abs(row.foreignersNetBuying || 0),
        Math.abs(row.institutionsNetBuying || 0)
    ]), 1);

    const formatAmount = (value) => {
        const eok = Math.round((value || 0) / 100000000);
        const sign = eok > 0 ? '+' : '';
        return `${sign}${eok.toLocaleString()}억`;
    };

    const amountClass = (value) => value >= 0 ? 'up' : 'down';
    const widthPercent = (value) => `${Math.max(4, Math.round((Math.abs(value) / maxAbs) * 100))}%`;

    const summaryItems = [
        ['개인', latest.individualsNetBuying],
        ['외국인', latest.foreignersNetBuying],
        ['기관', latest.institutionsNetBuying]
    ];

    foreignList.innerHTML = `
        <div class="flow-summary-grid">
            ${summaryItems.map(([label, value]) => `
                <div class="flow-summary-card">
                    <div class="flow-summary-label">${label}</div>
                    <div class="flow-summary-value ${amountClass(value)}">${formatAmount(value)}</div>
                    <div class="flow-summary-sub">${latest.date.substring(5)} 기준</div>
                </div>
            `).join('')}
        </div>
        <div class="flow-toggle">
            ${Object.entries(seriesMap).map(([field, label], index) => `
                <button class="flow-toggle-btn ${index === 1 ? 'active' : ''}" data-flow-series="${field}">${label}</button>
            `).join('')}
        </div>
        <div class="flow-focus-title" id="flow-focus-title">외국인 최근 5영업일</div>
        <div class="flow-chart" id="flow-chart-mount"></div>
        <div class="flow-table-wrap">
            <table class="flow-table">
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>개인</th>
                        <th>외국인</th>
                        <th>기관</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.map((row) => `
                        <tr>
                            <td>${row.date}</td>
                            <td class="${amountClass(row.individualsNetBuying)}">${formatAmount(row.individualsNetBuying)}</td>
                            <td class="${amountClass(row.foreignersNetBuying)}">${formatAmount(row.foreignersNetBuying)}</td>
                            <td class="${amountClass(row.institutionsNetBuying)}">${formatAmount(row.institutionsNetBuying)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    const chartMount = foreignList.querySelector('#flow-chart-mount');
    const focusTitle = foreignList.querySelector('#flow-focus-title');
    const toggleButtons = foreignList.querySelectorAll('.flow-toggle-btn');

    const renderSingleSeries = (field) => {
        focusTitle.textContent = `${seriesMap[field]} 최근 5영업일`;
        chartMount.innerHTML = rows.map((row) => `
            <div class="flow-chart-row">
                <div class="flow-date">${row.date.substring(5)}</div>
                <div class="flow-bars">
                    <div class="flow-bar-line">
                        <div class="flow-bar-label">${seriesMap[field]}</div>
                        <div class="flow-bar-track"><div class="flow-bar-fill ${amountClass(row[field])}" style="width:${widthPercent(row[field])}"></div></div>
                        <div class="flow-bar-value ${amountClass(row[field])}">${formatAmount(row[field])}</div>
                    </div>
                </div>
            </div>
        `).join('');
    };

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            toggleButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            renderSingleSeries(button.dataset.flowSeries);
        });
    });

    renderSingleSeries('foreignersNetBuying');

    if (trend.top_foreign?.length) {
        trend.top_foreign.forEach((item) => {
            const tag = document.createElement('div');
            tag.className = 'tag-item';
            tag.innerHTML = `<span class="rank">${item.Rank}</span> ${item.Name}`;
            topList.appendChild(tag);
        });
    } else {
        topList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">상위 순매수 데이터가 없습니다.</p>';
    }
}

function renderStrategy(strategy) {
    const adviceText = document.getElementById('strategy-content');
    if (!adviceText) return;

    if (!strategy) {
        adviceText.innerHTML = '<p style="color: var(--text-secondary);">전략 데이터가 없습니다.</p>';
        return;
    }

    adviceText.innerHTML = `
        <p style="margin-bottom: 1rem;"><strong>매수 아이디어:</strong> ${strategy.buy || '없음'}</p>
        <p style="margin-bottom: 1rem;"><strong>매도/축소 고려:</strong> ${strategy.sellConsider || '없음'}</p>
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
            ${parseMarkdown(strategy.summary || strategy.description || '')}
        </div>
    `;
}

function updateSessionTabState(session) {
    document.querySelectorAll('.session-tab-btn').forEach((button) => {
        button.classList.toggle('active', button.dataset.session === session);
    });
}

function renderSessionContent(data, session) {
    const sessionData = data?.sessionData?.[session];
    if (!sessionData) return;

    renderHoldings(sessionData.holdings || []);
    renderWatchlist(sessionData.watchlist || []);
    renderStrategy(sessionData.strategy);
    updateSessionTabState(session);
}

export function initSessionTabs(data) {
    const tabButtons = document.querySelectorAll('.session-tab-btn');
    if (!tabButtons.length) return;

    const availableSessions = Object.entries(data?.sessionData || {})
        .filter(([, sessionData]) => {
            return (sessionData.holdings?.length || 0) > 0 ||
                (sessionData.watchlist?.length || 0) > 0 ||
                Boolean(sessionData.strategy);
        })
        .map(([session]) => session);

    if (!availableSessions.includes(currentSession)) {
        currentSession = availableSessions[0] || 'kr';
    }

    tabButtons.forEach((button) => {
        const enabled = availableSessions.includes(button.dataset.session);
        button.disabled = !enabled;
        button.classList.toggle('is-disabled', !enabled);

        if (!button.dataset.boundSessionTab) {
            button.addEventListener('click', () => {
                if (button.disabled) return;
                currentSession = button.dataset.session;
                renderSessionContent(data, currentSession);
            });
            button.dataset.boundSessionTab = 'true';
        }
    });

    renderSessionContent(data, currentSession);
}

export function renderDashboard(data) {
    if (!data) return;

    const overviewEl = document.getElementById('report-overview');
    if (overviewEl) {
        overviewEl.innerHTML = parseMarkdown(data.overview || '');
    }

    renderIndicators(data.indicators);
    renderForeignTrend(data.foreignInvestorTrend);
    initSessionTabs(data);

    renderCompanyAnalysisGrid();
    renderDeepDiveGrid();
    renderSectorAnalysis();
    renderExternalFactors();
    renderPolicyStance(data.policyStance);
}
