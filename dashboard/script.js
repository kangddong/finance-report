document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('date-selector');

    if (typeof REPORTS_HISTORY !== 'undefined' && REPORTS_HISTORY.length > 0) {
        // 셀렉트 박스 옵션 동적으로 채우기
        selector.innerHTML = ''; // 기존 옵션 제거
        REPORTS_HISTORY.forEach((report, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = report.date.replace(/-/g, '. ');
            selector.appendChild(option);
        });

        // 가장 최신 데이터(배열의 첫 번째)를 기본값으로 설정
        const latestIndex = 0;
        selector.value = latestIndex;
        renderDashboard(REPORTS_HISTORY[latestIndex]);

        // 날짜 선택 이벤트 리스너
        selector.addEventListener('change', (e) => {
            const selectedIndex = e.target.value;
            renderDashboard(REPORTS_HISTORY[selectedIndex]);

            // 변경 시 간단한 애니메이션 효과
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.animation = 'none';
                card.offsetHeight; // 트리거 리플로우
                card.style.animation = 'fadeInUp 0.5s ease-out backwards';
            });
        });
    } else {
        const errorMsg = '보고서 데이터가 없습니다. 먼저 리포트를 생성해 주세요.';
        document.getElementById('report-overview').textContent = errorMsg;
        document.getElementById('report-overview').style.color = '#fb7185';
    }

    // --- Finance Wordbook Initialization ---
    if (typeof FINANCE_WORDS !== 'undefined') {
        const wordbookContainer = document.getElementById('wordbook-container');
        const modal = document.getElementById('word-definition-modal');
        const closeModal = document.querySelector('.close-modal');
        const modalTerm = document.getElementById('modal-term');
        const modalCategory = document.getElementById('modal-category');
        const modalDef = document.getElementById('modal-definition');

        // Render Capsules
        FINANCE_WORDS.forEach(word => {
            const capsule = document.createElement('div');
            capsule.className = 'word-capsule';
            capsule.textContent = word.term.split('(')[0].trim(); // Show only term name

            // Add tooltip or click event
            capsule.addEventListener('click', () => {
                modalTerm.textContent = word.term;
                modalCategory.textContent = word.category;
                modalDef.textContent = word.definition;
                modal.classList.add('active');
            });

            wordbookContainer.appendChild(capsule);
        });

        // Close Modal Events
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // --- Target Price Calculator Logic ---
    const epsInput = document.getElementById('calc-eps');
    const perInput = document.getElementById('calc-per');
    const resultValue = document.getElementById('calc-result-value');

    function calculateTargetPrice() {
        const eps = parseFloat(epsInput.value);
        const per = parseFloat(perInput.value);

        if (!isNaN(eps) && !isNaN(per)) {
            const targetPrice = eps * per;
            resultValue.textContent = targetPrice.toLocaleString() + '원';
            resultValue.style.color = '#fbbf24'; // Reset color
        } else {
            resultValue.textContent = '0원';
            resultValue.style.color = 'var(--text-secondary)';
        }
    }

    if (epsInput && perInput) {
        epsInput.addEventListener('input', calculateTargetPrice);
        perInput.addEventListener('input', calculateTargetPrice);
    }

    // --- Section Navigation System ---
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.nav-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.getAttribute('data-section');

            // Update buttons
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update sections
            sections.forEach(sec => sec.classList.remove('active'));
            document.getElementById(`section-${sectionId}`).classList.add('active');
        });
    });
});

function renderDashboard(data) {
    // 헤더 개요 업데이트 (Markdown bold 지원)
    document.getElementById('report-overview').innerHTML = parseMarkdown(data.overview);

    // 지표 렌더링
    renderIndicators(data.indicators);
    renderCompanyAnalysisGrid();
    renderSectorAnalysis();
    renderExternalShocks();

    // 보유 종목 렌더링
    const holdingsList = document.querySelector('#holdings-list');
    holdingsList.innerHTML = '';

    if (data.holdings && data.holdings.length > 0) {
        data.holdings.forEach(stock => {
            const isUp = stock.return && stock.return.startsWith('+');
            const hasReport = stock.reportPath ? true : false;
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
                        ${parseMarkdown(stock.reason)}
                    </div>
                </div>
            `;

            if (hasReport) {
                const link = document.createElement('a');
                link.href = stock.reportPath;
                link.style.textDecoration = 'none';
                link.style.color = 'inherit'; // Fix: Inherit text color to avoid default link color
                link.style.display = 'block'; // Block level for full width
                link.innerHTML = cardContent;
                holdingsList.appendChild(link);
            } else {
                holdingsList.innerHTML += cardContent;
            }
        });
    } else {
        holdingsList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">보유 종목 데이터가 없습니다.</p>';
    }

    // 관심 종목 렌더링
    const watchlistList = document.querySelector('#watchlist-list');
    watchlistList.innerHTML = '';

    if (data.watchlist && data.watchlist.length > 0) {
        data.watchlist.forEach(stock => {
            const hasReport = stock.reportPath ? true : false;
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
                        ${parseMarkdown(stock.reason)}
                    </div>
                </div>
            `;

            if (hasReport) {
                const link = document.createElement('a');
                link.href = stock.reportPath;
                link.style.textDecoration = 'none';
                link.style.color = 'inherit'; // Fix: Inherit color
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

    // 외국인 수급 렌더링
    const foreignList = document.querySelector('#foreign-trend-list');
    const topList = document.querySelector('#foreign-top-list');
    foreignList.innerHTML = '';
    topList.innerHTML = '';

    if (data.foreignInvestorTrend && data.foreignInvestorTrend.daily_rows && data.foreignInvestorTrend.daily_rows.length > 0) {
        const rows = data.foreignInvestorTrend.daily_rows;
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

        if (data.foreignInvestorTrend.top_foreign && data.foreignInvestorTrend.top_foreign.length > 0) {
            data.foreignInvestorTrend.top_foreign.forEach(item => {
                const tag = document.createElement('div');
                tag.className = 'tag-item';
                tag.innerHTML = `<span class="rank">${item.Rank}</span> ${item.Name}`;
                topList.appendChild(tag);
            });
        } else {
            topList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">순위 데이터가 없습니다.</p>';
        }
    } else if (data.foreignInvestorTrend && data.foreignInvestorTrend.market_flow && data.foreignInvestorTrend.market_flow.length > 0) {
        data.foreignInvestorTrend.market_flow.forEach(flow => {
            const stockNames = (flow.top_stocks || []).map(stock => stock.name).join(', ');
            foreignList.innerHTML += `
                <div class="stock-item" style="padding: 1rem;">
                    <div class="stock-info">
                        <div class="name" style="font-size: 1.1rem;">${flow.investor}</div>
                        <div class="price" style="font-size: 0.85rem;">${flow.summary || '순매수 상위 종목 기준'}</div>
                    </div>
                    <div class="reason-text" style="margin-top: 0.75rem;">${stockNames || '데이터가 없습니다.'}</div>
                </div>
            `;
        });
    } else {
        foreignList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">코스피 매매 동향 데이터를 분석 중입니다...</p>';
        topList.innerHTML = '';
    }

    const adviceText = document.querySelector('.advice-text');
    if (data.strategy) {
        adviceText.innerHTML = `
            <p style="margin-bottom: 1rem;"><strong>📌 매수 추천:</strong> ${data.strategy.buy || '없음'}</p>
            <p style="margin-bottom: 1rem;"><strong>⚠️ 매도 고려:</strong> ${data.strategy.sellConsider || '없음'}</p>
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
                ${parseMarkdown(data.strategy.summary)}
            </div>
        `;
    } else {
        adviceText.innerHTML = '<p style="color: var(--text-secondary);">전략 분석 데이터가 없습니다.</p>';
    }
}

function renderCompanyAnalysisGrid() {
    const grid = document.getElementById('company-analysis-grid');
    if (!grid) return;

    const analyses = (typeof COMPANY_ANALYSIS_ITEMS !== 'undefined') ? COMPANY_ANALYSIS_ITEMS : [];
    grid.innerHTML = '';

    if (!analyses.length) {
        grid.innerHTML = '<p style="color: var(--text-secondary);">등록된 기업 분석이 없습니다.</p>';
        return;
    }

    analyses.forEach((item) => {
        const link = document.createElement('a');
        link.href = item.link;
        link.className = 'company-analysis-link';

        const tagsHtml = (item.tags || [])
            .map((tag) => `<span class="company-analysis-tag">#${tag}</span>`)
            .join('');

        link.innerHTML = `
            <article class="company-analysis-card">
                <div class="company-analysis-header">
                    <div>
                        <div class="company-analysis-name">${item.name}</div>
                        <div class="company-analysis-ticker">${item.ticker || ''}</div>
                    </div>
                    <span class="badge buy">분석 보기</span>
                </div>
                <p class="company-analysis-summary">${item.summary}</p>
                <div class="company-analysis-tags">${tagsHtml}</div>
                <div class="company-analysis-cta">상세 페이지로 이동 →</div>
            </article>
        `;

        grid.appendChild(link);
    });
}

function renderExternalShocks() {
    const summary = document.getElementById('external-shocks-summary');
    const timeline = document.getElementById('external-shocks-timeline');
    if (!summary || !timeline) return;

    const events = (typeof EXTERNAL_SHOCK_EVENTS !== 'undefined') ? EXTERNAL_SHOCK_EVENTS : [];
    summary.innerHTML = '';
    timeline.innerHTML = '';

    if (!events.length) {
        summary.innerHTML = '<p style="color: var(--text-secondary);">등록된 외부 충격 이벤트가 없습니다.</p>';
        timeline.innerHTML = '';
        return;
    }

    const categories = [...new Set(events.map((event) => event.category))];
    const dateRange = `${events[events.length - 1].date} ~ ${events[0].date}`;
    const stats = [
        { label: '수집 기간', value: dateRange },
        { label: '총 이벤트', value: `${events.length}건` },
        { label: '카테고리', value: `${categories.length}개` },
        { label: '최신 업데이트', value: events[0].date }
    ];

    summary.innerHTML = stats.map((item) => `
        <div class="external-shock-stat">
            <div class="external-shock-stat-label">${item.label}</div>
            <div class="external-shock-stat-value">${item.value}</div>
        </div>
    `).join('');

    timeline.innerHTML = events.map((event) => {
        const sources = (event.sources || []).map((source) => `
            <a class="shock-source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>
        `).join('');

        return `
            <article class="shock-card">
                <div class="shock-meta">
                    <div class="shock-date">${event.date}</div>
                    <div class="shock-category">${event.category}</div>
                </div>
                <div class="shock-title">${event.title}</div>
                <div class="shock-body">
                    <div class="shock-line"><strong>핵심 내용:</strong> ${event.summary}</div>
                    <div class="shock-line"><strong>시장 영향:</strong> ${event.marketImpact}</div>
                    <div class="shock-line"><strong>체크포인트:</strong> ${event.watchPoint}</div>
                    <div class="shock-sources">${sources}</div>
                </div>
            </article>
        `;
    }).join('');
}

function renderSectorAnalysis() {
    const summary = document.getElementById('sector-analysis-summary');
    const list = document.getElementById('sector-analysis-list');
    if (!summary || !list) return;

    const sectors = (typeof SECTOR_ANALYSIS_ITEMS !== 'undefined') ? SECTOR_ANALYSIS_ITEMS : [];
    summary.innerHTML = '';
    list.innerHTML = '';

    if (!sectors.length) {
        summary.innerHTML = '<p style="color: var(--text-secondary);">등록된 섹터 분석이 없습니다.</p>';
        return;
    }

    const strongSector = sectors.find((item) => item.flow === '강세');
    const weakSector = sectors.find((item) => item.flow === '약세');
    const summaryItems = [
        { label: '추적 섹터', value: `${sectors.length}개` },
        { label: '가장 강한 섹터', value: strongSector ? strongSector.name : '-' },
        { label: '가장 약한 섹터', value: weakSector ? weakSector.name : '-' },
        { label: '핵심 키워드', value: '수급 · 정책 · 실적' }
    ];

    summary.innerHTML = summaryItems.map((item) => `
        <div class="sector-summary-card">
            <div class="sector-summary-label">${item.label}</div>
            <div class="sector-summary-value">${item.value}</div>
        </div>
    `).join('');

    list.innerHTML = sectors.map((sector) => {
        const leaders = (sector.leaders || []).map((item) => `<span class="sector-meta-pill">${item}</span>`).join('');
        const performanceClass = sector.performance && sector.performance.startsWith('-') ? 'down' : 'up';

        return `
            <a href="${sector.link || '#'}" class="sector-link">
                <article class="sector-card">
                    <div class="sector-card-header">
                        <div>
                            <div class="sector-name">${sector.name}</div>
                            <div class="sector-meta">
                                <span class="sector-meta-pill">흐름: ${sector.flow}</span>
                                <span class="sector-meta-pill">수급: ${sector.flowOfFunds}</span>
                                <span class="sector-meta-pill">밸류에이션: ${sector.valuation}</span>
                            </div>
                        </div>
                        <div style="text-align: right;">
                            <div class="sector-performance ${performanceClass}">${sector.performance || '-'}</div>
                            <div class="sector-score">${sector.view}</div>
                        </div>
                    </div>
                    <div class="sector-reason">${sector.summary}</div>
                    <div class="sector-meta">${leaders}</div>
                    <div class="sector-detail-grid">
                        <div class="sector-detail-box"><strong>상승/하락 이유:</strong> ${sector.drivers}</div>
                        <div class="sector-detail-box"><strong>체크포인트:</strong> ${sector.watchPoint}</div>
                    </div>
                </article>
            </a>
        `;
    }).join('');
}

function parseMarkdown(text) {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function renderIndicators(indicators) {
    const container = document.getElementById('market-indicators');
    if (!indicators) {
        container.style.display = 'none';
        return;
    }
    container.style.display = 'grid';
    container.innerHTML = '';

    Object.values(indicators).forEach(item => {
        const isCPI = item.label.includes('CPI');
        const isGoldSilver = item.label.includes('금/은');
        const isDollarIndex = item.label.includes('달러 인덱스');
        const statusClass = item.status.toLowerCase().includes('fear') ? 'extreme-fear' : (item.status.includes('▲') ? 'up' : '');

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
