function renderIndicators(indicators) {
    const container = document.getElementById('market-indicators');
    if (!indicators || !container) {
        if (container) container.style.display = 'none';
        return;
    }
    container.style.display = 'grid';
    container.innerHTML = '';

    Object.values(indicators).forEach(item => {
        const isCPI = item.label.includes('CPI');
        const isGoldSilver = item.label.includes('금/은');
        const isDollarIndex = item.label.includes('달러 인덱스');
        const statusClass = item.status.toLowerCase().includes('fear') ? 'extreme-fear' : 
                          (item.status.includes('▲') ? 'up' : (item.status.includes('▼') ? 'down' : ''));

        const cardContent = `
            <div class="indicator-label">${item.label} ${isCPI || isGoldSilver || isDollarIndex
                ? '<span style="font-size:0.6rem; opacity:0.6;">(Guide ↗)</span>' : ''}</div>
            <div class="indicator-value">${item.value}</div>
            <div class="indicator-status ${statusClass}">${item.status}</div>
        `;

        if (isCPI) {
            const link = document.createElement('a');
            link.href = 'cpi-guide.html';
            link.className = 'indicator-card cpi-link';
            link.style.textDecoration = 'none';
            link.innerHTML = cardContent;
            container.appendChild(link);
        } else if (isGoldSilver) {
            const link = document.createElement('a');
            link.href = 'gold-silver-guide.html';
            link.className = 'indicator-card gold-silver-link';
            link.style.textDecoration = 'none';
            link.innerHTML = cardContent;
            container.appendChild(link);
        } else if (isDollarIndex) {
            const link = document.createElement('a');
            link.href = 'dollar-index-guide.html';
            link.className = 'indicator-card dollar-index-link';
            link.style.textDecoration = 'none';
            link.innerHTML = cardContent;
            container.appendChild(link);
        } else {
            const card = document.createElement('div');
            card.className = 'indicator-card';
            card.innerHTML = cardContent;
            container.appendChild(card);
        }
    });
}

function renderHoldings(holdings) {
    const holdingsList = document.querySelector('#holdings-list');
    if (!holdingsList) return;
    holdingsList.innerHTML = '';

    if (holdings && holdings.length > 0) {
        holdings.forEach(stock => {
            const isUp = stock.return && stock.return.startsWith('+');
            const hasReport = !!stock.reportPath;
            const cardContent = `
                <div class="stock-item" ${hasReport ? 'style="cursor: pointer;"' : ''}>
                    <div class="stock-info">
                        <div class="name">${stock.name} ${hasReport ? '<span style="font-size: 0.8rem; color: var(--accent-blue);">↗</span>' : ''}</div>
                        <div class="price">평단: ${stock.avgPrice} / 현재: ${stock.currentPrice}</div>
                    </div>
                    <div class="stock-status">
                        <div class="return ${isUp ? 'up' : 'down'}">${stock.return}</div>
                        <span class="badge ${stock.advice && stock.advice.includes('HOLD') ? 'hold' : 'buy'}">${stock.advice}</span>
                    </div>
                    <div class="reason-text">
                        ${typeof parseMarkdown === 'function' ? parseMarkdown(stock.reason) : stock.reason}
                    </div>
                </div>
            `;

            if (hasReport) {
                const link = document.createElement('a');
                link.href = stock.reportPath;
                link.style.textDecoration = 'none';
                link.style.color = 'inherit';
                link.style.display = 'block';
                link.innerHTML = cardContent;
                holdingsList.appendChild(link);
            } else {
                holdingsList.innerHTML += cardContent;
            }
        });
    } else {
        holdingsList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">보유 종목 데이터가 없습니다.</p>';
    }
}

function renderWatchlist(watchlist) {
    const watchlistList = document.querySelector('#watchlist-list');
    if (!watchlistList) return;
    watchlistList.innerHTML = '';

    if (watchlist && watchlist.length > 0) {
        watchlist.forEach(stock => {
            const hasReport = !!stock.reportPath;
            const cardContent = `
                <div class="stock-item" ${hasReport ? 'style="cursor: pointer;"' : ''}>
                    <div class="stock-info">
                        <div class="name">${stock.name} ${hasReport ? '<span style="font-size: 0.8rem; color: var(--accent-blue);">↗</span>' : ''}</div>
                        <div class="price">현재가: ${stock.currentPrice} / 전망: ${stock.outlook}</div>
                    </div>
                    <div class="stock-status">
                        <span class="badge buy">${stock.advice}</span>
                    </div>
                    <div class="reason-text">
                        ${typeof parseMarkdown === 'function' ? parseMarkdown(stock.reason) : stock.reason}
                    </div>
                </div>
            `;

            if (hasReport) {
                const link = document.createElement('a');
                link.href = stock.reportPath;
                link.style.textDecoration = 'none';
                link.style.color = 'inherit';
                link.style.display = 'block';
                link.innerHTML = cardContent;
                watchlistList.appendChild(link);
            } else {
                watchlistList.innerHTML += cardContent;
            }
        });
    } else {
        watchlistList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">관심 종목 데이터가 없습니다.</p>';
    }
}

function renderForeignTrend(trend) {
    const foreignList = document.querySelector('#foreign-trend-list');
    const topList = document.querySelector('#foreign-top-list');
    if (!foreignList || !topList) return;
    foreignList.innerHTML = '';
    topList.innerHTML = '';

    if (trend && trend.daily_rows && trend.daily_rows.length > 0) {
        const rows = trend.daily_rows;
        const latest = rows[0];
        const seriesMap = {
            individualsNetBuying: '개인',
            foreignersNetBuying: '외국인',
            institutionsNetBuying: '기관'
        };
        const maxAbs = Math.max(...rows.flatMap(row => [
            Math.abs(row.individualsNetBuying || 0),
            Math.abs(row.foreignersNetBuying || 0),
            Math.abs(row.institutionsNetBuying || 0)
        ]), 1);

        const formatAmount = (value) => {
            const eok = Math.round(value / 100000000);
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

        const summaryHtml = summaryItems.map(([label, value]) => `
            <div class="flow-summary-card">
                <div class="flow-summary-label">${label}</div>
                <div class="flow-summary-value ${amountClass(value)}">${formatAmount(value)}</div>
                <div class="flow-summary-sub">${latest.date.substring(5)} 기준</div>
            </div>
        `).join('');

        const tableRows = rows.map(row => `
            <tr>
                <td>${row.date}</td>
                <td class="${amountClass(row.individualsNetBuying)}">${formatAmount(row.individualsNetBuying)}</td>
                <td class="${amountClass(row.foreignersNetBuying)}">${formatAmount(row.foreignersNetBuying)}</td>
                <td class="${amountClass(row.institutionsNetBuying)}">${formatAmount(row.institutionsNetBuying)}</td>
            </tr>
        `).join('');

        const toggleHtml = Object.entries(seriesMap).map(([field, label], index) => `
            <button class="flow-toggle-btn ${index === 1 ? 'active' : ''}" data-flow-series="${field}">${label}</button>
        `).join('');

        foreignList.innerHTML = `
            <div class="flow-summary-grid">${summaryHtml}</div>
            <div class="flow-toggle">${toggleHtml}</div>
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
                    <tbody>${tableRows}</tbody>
                </table>
            </div>
        `;

        const chartMount = foreignList.querySelector('#flow-chart-mount');
        const focusTitle = foreignList.querySelector('#flow-focus-title');
        const toggleButtons = foreignList.querySelectorAll('.flow-toggle-btn');

        const renderSingleSeries = (field) => {
            focusTitle.textContent = `${seriesMap[field]} 최근 5영업일`;
            chartMount.innerHTML = rows.map(row => `
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

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderSingleSeries(button.dataset.flowSeries);
            });
        });

        renderSingleSeries('foreignersNetBuying');

        if (trend.top_foreign && trend.top_foreign.length > 0) {
            trend.top_foreign.forEach(item => {
                const tag = document.createElement('div');
                tag.className = 'tag-item';
                tag.innerHTML = `<span class="rank">${item.Rank}</span> ${item.Name}`;
                topList.appendChild(tag);
            });
        } else {
            topList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">순위 데이터가 없습니다.</p>';
        }
    } else {
        foreignList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">데이터를 불러오는 중입니다...</p>';
    }
}

function renderDashboard(data) {
    if (!data) return;

    // Header Overview
    const overviewEl = document.getElementById('report-overview');
    if (overviewEl) {
        overviewEl.innerHTML = typeof parseMarkdown === 'function' ? parseMarkdown(data.overview) : data.overview;
    }

    // Call sub-renders
    if (typeof renderIndicators === 'function') renderIndicators(data.indicators);
    if (typeof renderHoldings === 'function') renderHoldings(data.holdings);
    if (typeof renderWatchlist === 'function') renderWatchlist(data.watchlist);
    if (typeof renderForeignTrend === 'function') renderForeignTrend(data.foreignInvestorTrend);
    
    // Global components
    if (typeof renderCompanyAnalysisGrid === 'function') renderCompanyAnalysisGrid();
    if (typeof renderDeepDiveGrid === 'function') renderDeepDiveGrid();
    if (typeof renderSectorAnalysis === 'function') renderSectorAnalysis();
    if (typeof renderExternalFactors === 'function') renderExternalFactors();
    if (typeof renderPolicyStance === 'function') renderPolicyStance(data.policyStance);

    // Strategy Section
    const adviceText = document.querySelector('.advice-text');
    if (adviceText) {
        if (data.strategy) {
            adviceText.innerHTML = `
                <p style="margin-bottom: 1rem;"><strong>📌 매수 추천:</strong> ${data.strategy.buy || '없음'}</p>
                <p style="margin-bottom: 1rem;"><strong>⚠️ 매도 고려:</strong> ${data.strategy.sellConsider || '없음'}</p>
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    ${typeof parseMarkdown === 'function' ? parseMarkdown(data.strategy.summary) : data.strategy.summary}
                </div>
            `;
        } else {
            adviceText.innerHTML = '<p style="color: var(--text-secondary);">전략 분석 데이터가 없습니다.</p>';
        }
    }
}
