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
            resultValue.style.color = '#fbbf24';
        } else {
            resultValue.textContent = '0원';
            resultValue.style.color = 'var(--text-secondary)';
        }
    }

    if (epsInput && perInput) {
        epsInput.addEventListener('input', calculateTargetPrice);
        perInput.addEventListener('input', calculateTargetPrice);
    }

    // --- Hedge Calculator Logic ---
    const hedgePortfolio = document.getElementById('hedge-portfolio');
    const hedgeRatio = document.getElementById('hedge-ratio');
    const hedgeBeta = document.getElementById('hedge-beta');
    const hedgeResult = document.getElementById('hedge-result-value');

    function calculateHedge() {
        const portfolio = parseFloat(hedgePortfolio.value);
        const ratio = parseFloat(hedgeRatio.value) / 100;
        const beta = Math.abs(parseFloat(hedgeBeta.value));

        if (!isNaN(portfolio) && !isNaN(ratio) && !isNaN(beta) && beta !== 0) {
            const requiredHedge = (portfolio * ratio) / beta;
            hedgeResult.textContent = requiredHedge.toLocaleString(undefined, { maximumFractionDigits: 0 });
            hedgeResult.style.color = '#fb7185'; // Hedge is defensive/protective red-ish
        } else {
            hedgeResult.textContent = '0';
            hedgeResult.style.color = 'var(--text-secondary)';
        }
    }

    if (hedgePortfolio && hedgeRatio && hedgeBeta) {
        hedgePortfolio.addEventListener('input', calculateHedge);
        hedgeRatio.addEventListener('input', calculateHedge);
        hedgeBeta.addEventListener('input', calculateHedge);
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
            const targetSection = document.getElementById(`section-${sectionId}`);
            if (targetSection) targetSection.classList.add('active');
        });
    });

    // Recommender System Logic
    const recBtns = document.querySelectorAll('.rec-sel-btn');
    recBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            recBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRecommender(btn.getAttribute('data-rec-type'));
        });
    });

    // Initial render for recommender
    renderRecommender('balanced');

    // --- External Factors Sub-tab Logic ---
    const shockTabBtns = document.querySelectorAll('.shock-tab-btn');
    const timelineView = document.getElementById('shock-timeline-view');
    const policyView = document.getElementById('shock-policy-view');

    shockTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-shock-tab');

            // Update buttons
            shockTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle views
            if (tab === 'timeline') {
                timelineView.style.display = 'block';
                policyView.style.display = 'none';
            } else {
                timelineView.style.display = 'none';
                policyView.style.display = 'block';
                renderPolicyPage();
            }
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
    renderExternalFactors();
    renderPolicyStance(data.policyStance);

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

function renderExternalFactors() {
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
            <a class="shock-source-link" href="${source.url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${source.label}</a>
        `).join('');

        const isGenesis = event.title.includes('제네시스 미션');
        const isCommCode = event.title.includes('상법 개정');
        const clickableClass = (isGenesis || isCommCode) ? 'clickable-shock' : '';
        const policyKey = isGenesis ? 'genesisMission' : (isCommCode ? 'commercialCode' : '');
        const clickAttr = policyKey ? `onclick="switchToPolicyTab('${policyKey}')"` : '';

        return `
            <article class="shock-card ${clickableClass}" ${clickAttr} id="event-${event.date}">
                <div class="shock-meta">
                    <div class="shock-date">${event.date}</div>
                    <div class="shock-category">${event.category}</div>
                </div>
                <div class="shock-title">${event.title} ${(isGenesis || isCommCode) ? ' <span style="font-size:0.7rem; color:var(--accent-blue);">(상세 분석 보기 ↗)</span>' : ''}</div>
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

function switchToPolicyTab(policyKey) {
    const policyBtn = document.querySelector('button[data-shock-tab="policy"]');
    if (policyBtn) policyBtn.click();
    
    // Smooth scroll to the policy section after a short delay to ensure rendering
    setTimeout(() => {
        const el = document.getElementById(`policy-${policyKey}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('highlight-policy');
            setTimeout(() => el.classList.remove('highlight-policy'), 2000);
        }
    }, 100);
}

function renderSectorAnalysis() {
    const summary = document.getElementById('sector-analysis-summary');
    const list = document.getElementById('sector-analysis-list');
    if (!summary || !list) return;

    const sectors = (typeof SECTOR_ANALYSIS_ITEMS !== 'undefined') ? SECTOR_ANALYSIS_ITEMS : [];
    const companyAnalyses = (typeof COMPANY_ANALYSIS_ITEMS !== 'undefined') ? COMPANY_ANALYSIS_ITEMS : [];
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
        const leadersHtml = (sector.leaders || []).map((leaderName) => {
            const analysis = companyAnalyses.find(a => a.name === leaderName);
            if (analysis) {
                return `<a href="${analysis.link}" class="sector-meta-pill leader-link" title="${leaderName} 기업 분석 보기">${leaderName} ↗</a>`;
            }
            return `<span class="sector-meta-pill">${leaderName}</span>`;
        }).join('');

        const performanceClass = sector.performance && sector.performance.startsWith('-') ? 'down' : 'up';

        return `
            <article class="sector-card">
                <div class="sector-card-header">
                    <div>
                        <a href="${sector.link || '#'}" class="sector-name-link">
                            <div class="sector-name">${sector.name} <span style="font-size: 0.8rem; opacity: 0.6;">(Report ↗)</span></div>
                        </a>
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
                <div class="sector-meta" style="margin-top: 0.5rem;">
                    <span style="font-size: 0.85rem; color: var(--text-secondary); margin-right: 0.5rem; display: flex; align-items: center;">관련종목:</span>
                    ${leadersHtml}
                </div>
                <div class="sector-detail-grid">
                    <div class="sector-detail-box"><strong>상승/하락 이유:</strong> ${sector.drivers}</div>
                    <div class="sector-detail-box"><strong>체크포인트:</strong> ${sector.watchPoint}</div>
                </div>
            </article>
        `;
    }).join('');
}

function renderPolicyStance(policyData) {
    const container = document.getElementById('policy-data-container');
    const strategyBox = document.getElementById('policy-strategy-content');
    if (!container || !strategyBox) return;

    if (!policyData) {
        container.innerHTML = '<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 2rem;">해당 날짜의 정책 기조 데이터가 없습니다.</p>';
        strategyBox.innerHTML = '<p style="color: var(--text-secondary);">데이터를 분석 중입니다...</p>';
        return;
    }

    const fed = policyData.fed;
    const bok = policyData.bok;

    const CHAIR_DATA = {
        fed: {
            name: "제롬 파월 (Jerome Powell)",
            title: "제16대 연준 의장",
            image: "images/profiles/powell.png",
            link: "fed-chair-detail.html",
            next: {
                name: "케빈 워시 (Kevin Warsh)",
                title: "차기 의장 지명자",
                image: "images/profiles/warsh.png",
                link: "fed-warsh-detail.html"
            }
        },
        bok: {
            name: "이창용 (Rhee Chang-yong)",
            title: "제26대 한은 총재",
            image: "images/profiles/rhee.png",
            link: "bok-governor-detail.html"
        }
    };

    const renderCard = (title, data, type) => {
        const chair = CHAIR_DATA[type];
        return `
        <div class="policy-card ${type}">
            <div class="policy-header">
                <span class="flag">${type === 'fed' ? '🇺🇸' : '🇰🇷'}</span>
                <div class="policy-name">${title}</div>
            </div>
            <div class="policy-status-container">
                <div class="policy-row">
                    <span class="policy-label">현재 금리</span>
                    <span class="policy-value">${data.rate}</span>
                </div>
                <div class="policy-row">
                    <span class="policy-label">정책 기조</span>
                    <span class="policy-badge ${data.stance.toLowerCase()}">${data.stance}</span>
                </div>
                <div class="policy-row">
                    <span class="policy-label">차기 회의</span>
                    <span class="policy-value">${data.nextMeeting}</span>
                </div>

                <!-- Chair Info Section -->
                <div class="policy-chair-info">
                    <div class="chair-avatar-container">
                        <img src="${chair.image}" alt="${chair.name}" class="chair-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="chair-fallback" style="display: none;">
                            ${chair.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                    <div class="chair-meta">
                        <div class="chair-label">${chair.title}</div>
                        <div class="chair-name" style="font-size: 1.1rem; font-weight: 700;">${chair.name}</div>
                        <a href="${chair.link}" class="chair-link">상세 프로필 보기 →</a>
                    </div>
                </div>

                ${chair.next ? `
                <div class="policy-chair-info next-chair" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    <div class="chair-avatar-container" style="width: 48px; height: 48px; border-color: #f59e0b;">
                        <img src="${chair.next.image}" alt="${chair.next.name}" class="chair-avatar">
                    </div>
                    <div class="chair-meta">
                        <div class="chair-label" style="color: #f59e0b;">${chair.next.title}</div>
                        <div class="chair-name" style="font-size: 0.95rem;">${chair.next.name}</div>
                        <a href="${chair.next.link}" class="chair-link" style="color: #f59e0b; opacity: 0.8;">상세 프로필 보기 →</a>
                    </div>
                </div>
                ` : ''}

                <div class="policy-summary">
                    ${parseMarkdown(data.summary)}
                </div>
            </div>
        </div>
    `;
    };

    container.innerHTML = `
        ${renderCard('미국 연준 (Fed / FOMC)', fed, 'fed')}
        ${renderCard('한국은행 (BOK)', bok, 'bok')}
    `;

    strategyBox.innerHTML = parseMarkdown(policyData.strategy || '한/미 정책 금리 차이와 국내 외인 수급 영향을 지속적으로 모니터링해야 합니다.');
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

// --- Recommender System Data & Functions ---
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
            "<strong>리밸런싱:</strong> 새틀라이트 자산의 수익이 커질 경우 코어로 전이",
            "<strong>전략:</strong> 지루하더라도 원칙을 지키는 투자가 핵심"
        ]
    }
};

function renderRecommender(type) {
    const config = RECOMMENDER_DATA[type];
    const container = document.getElementById('recommender-content');
    if (!container || !config) return;

    // Build Visual Bars
    const barsHtml = config.pillars.map(p => `
        <div class="sector-bar-wrapper">
            <div class="sector-bar-header"><span>${p.label}</span> <span>${p.weight}%</span></div>
            <div class="sector-bar-outer"><div class="sector-bar-inner ${p.class}" style="width: ${p.weight}%;">${p.desc}</div></div>
        </div>
    `).join('');

    // Build Stocks List
    const stocksHtml = config.stocks.map(s => `
        <li>
            <span>${s.category}</span>
            <div class="asset-tags">
                ${s.tags.map(t => `<span class="asset-tag" style="background: ${s.color};">${t}</span>`).join('')}
            </div>
        </li>
    `).join('');

    // Build Advice List
    const adviceHtml = config.advice.map(a => `<li>${a}</li>`).join('');

    container.innerHTML = `
        <!-- Recommended Mix Card -->
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

        <!-- Asset Guide Card -->
        <div class="recommender-card">
            <div class="section-label">Stock Breakdown</div>
            <h3 class="portfolio-type-title">종목별 포지셔닝 가이드</h3>
            
            <ul class="recommender-list">
                ${stocksHtml}
            </ul>

            <div class="portfolio-info-box" style="margin-top: 1.5rem;">
                <strong>🎯 종목별 대응 핵심:</strong>
                <ul style="font-size: 0.85rem;">
                    ${adviceHtml}
                </ul>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="recommender-card full-width">
            <div class="disclaimer-box">
                <span style="font-size: 1.5rem;">⚠️</span>
                <div>
                    <strong>해당 구성은 사용자의 현재 관심 종목 리스트를 바탕으로 시뮬레이션된 결과입니다.</strong><br>
                    실제 매수에 앞서 개별 종목의 최신 실적 리포트와 뉴스플로우를 반드시 재확인하시기 바랍니다. 
                    분산 투자는 리스크를 낮추지만 손실을 완전히 방지하지는 못합니다.
                </div>
            </div>
        </div>
    `;
}

function renderPolicyPage() {
    const container = document.getElementById('policy-content');
    if (!container || typeof EXTERNAL_POLICY_DATA === 'undefined') return;

    container.innerHTML = Object.entries(EXTERNAL_POLICY_DATA).map(([key, pm]) => {
        const pillarsHtml = pm.keyPillars.map(p => `
            <div class="policy-pillar-card">
                <h4>${p.title}</h4>
                <p>${p.desc}</p>
            </div>
        `).join('');

        const focusHtml = pm.focusAreas ? pm.focusAreas.map(f => `<li>${f}</li>`).join('') : '';

        const stagesHtml = pm.stages ? `
            <div class="policy-roadmap">
                ${pm.stages.map(s => `
                    <div class="roadmap-step ${s.status === '완료' ? 'completed' : (s.status === '진행중' ? 'active' : '')}">
                        <div class="step-badge">${s.step}</div>
                        <div class="step-content">
                            <div class="step-header">
                                <span class="step-title">${s.title}</span>
                                <span class="step-status-tag">${s.status}</span>
                            </div>
                            <div class="step-details">${s.details}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : '';

        const marketHtml = pm.marketImplications.map(m => `
            <div class="policy-impact-item">
                <span class="impact-sector">${m.sector}</span>
                <span class="impact-desc">${m.impact}</span>
            </div>
        `).join('');

        const scheduleHtml = pm.schedule ? pm.schedule.map(s => `
            <div class="schedule-row">
                <span class="schedule-term">${s.term}</span>
                <span class="schedule-task">${s.task}</span>
            </div>
        `).join('') : '';

        const isGenesis = key === 'genesisMission';
        const insightTitle = isGenesis ? "Researcher Insight & Deep Dive: Genesis Mission" : "Researcher Insight & Deep Dive: Value-up Korea";
        const insightText = isGenesis ? 
            `제네시스 미션은 단순한 기술 지원을 넘어 **'AI를 통한 과학적 패권 유지'**를 목표로 합니다. <br>
            1. **데이터의 국가 자산화:** 구글이나 오픈AI가 가진 웹 데이터가 아닌, 수십 년간 축적된 연방 정부의 핵물리학, 기상, 재료공학 데이터를 AI 학습의 핵심 원천으로 사용합니다. <br>
            2. **에너지-AI 결합:** 이 미션이 에너지부(DOE) 주도인 이유는 AI 연산에 필요한 막대한 전력을 해결(원전 활용 등)함과 동시에, 에너지를 만드는 기술 자체를 AI로 혁신하겠다는 의도입니다. <br>
            3. **투자 관점:** 이는 반도체(Chip), 인프라(Grid/Nuclear), 그리고 국방 데이터 분석 소프트웨어 전반에 걸친 10년 단위의 거대한 국가적 자본 투입(CAPEX) 사이클의 시작점으로 해석해야 합니다.` :
            `상법 개정은 단순회 회계적인 밸류업을 넘어, 한국 자본시장의 **'Rule of the Game'**이 바뀌는 사건입니다. <br>
            1. **지배구조 리스크 해소:** 이사의 의무가 주주로 확대됨에 따라, 대주주 위주의 불공정 합병이나 물적분할 후 재상장 같은 코리아 디스카운트의 고질적 원인이 법적 견제를 받게 됩니다. <br>
            2. **수급의 질적 변화:** 거버넌스 투명성이 확보되면 장기 투자 성격의 글로벌 연기금 및 패시브 자금이 한국 시장에 안착할 수 있는 명분이 생깁니다. <br>
            3. **투자 전략:** 배당 성향이 낮거나 자산 가치가 높음에도 만성적 저평가를 받던 지주사 및 금융주들에 대한 재평가(Re-rating)를 준비해야 하는 시점입니다.`;

        return `
            <div class="policy-main-card" id="policy-${key}" style="margin-bottom: 3rem;">
                <div class="section-label">Strategic Policy Analysis</div>
                <h2 class="policy-title">${pm.title}</h2>
                <p class="policy-subtitle">${pm.subtitle}</p>
                
                <div class="policy-meta-grid">
                    <div class="policy-meta-item">
                        <span class="label">서명/시행일</span>
                        <span class="value">${pm.signedDate}</span>
                    </div>
                    <div class="policy-meta-item">
                        <span class="label">핵심 목표</span>
                        <span class="value">${pm.objective}</span>
                    </div>
                </div>

                <div class="policy-grid-three">
                    ${pillarsHtml}
                </div>

                ${stagesHtml ? `
                    <div class="policy-sub-section" style="margin-top: 2rem;">
                        <h3>🗺️ 개정 로드맵 (1차 ~ 4차)</h3>
                        ${stagesHtml}
                    </div>
                ` : ''}

                <div class="policy-section-split">
                    ${pm.focusAreas ? `
                        <div class="policy-sub-section">
                            <h3>🎯 핵심 집중 분야</h3>
                            <ul class="policy-list">
                                ${focusHtml}
                            </ul>
                        </div>
                    ` : ''}
                    <div class="policy-sub-section" style="${!pm.focusAreas ? 'grid-column: span 2;' : ''}">
                        <h3>📈 시장 영향 및 수혜</h3>
                        <div class="policy-impact-list">
                            ${marketHtml}
                        </div>
                    </div>
                </div>

                ${pm.risks ? `
                    <div class="policy-sub-section" style="margin-top: 2rem;">
                        <h3 style="color: #fca5a5;">⚠️ 주요 우려 사항 및 리스크 (재계 반발)</h3>
                        <div class="policy-grid-three">
                            ${pm.risks.map(r => `
                                <div class="policy-pillar-card" style="border-color: rgba(239, 68, 68, 0.2); background: rgba(239, 68, 68, 0.02);">
                                    <h4 style="color: #fca5a5;">${r.title}</h4>
                                    <p style="font-size: 0.85rem;">${r.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${pm.recentStatus ? `
                    <div class="policy-sub-section" style="margin-top: 2rem;">
                         <h3 style="color: #6ee7b7;">📡 실시간 시행 동향 (Pulse)</h3>
                         <div class="policy-status-box">
                             <div class="status-meta">
                                 <span class="status-date">${pm.recentStatus.asOf}</span>
                                 <span class="status-summary">${pm.recentStatus.summary}</span>
                             </div>
                             <ul class="status-list">
                                 ${pm.recentStatus.stats.map(s => `<li>${s}</li>`).join('')}
                             </ul>
                         </div>
                    </div>
                ` : ''}

                ${pm.schedule ? `
                    <div class="policy-sub-section" style="margin-top: 2rem;">
                        <h3>📅 추진 일정</h3>
                        <div class="policy-schedule-box">
                            ${scheduleHtml}
                        </div>
                    </div>
                ` : ''}

                ${pm.sources ? `
                    <div class="policy-sub-section" style="margin-top: 2rem;">
                        <h3>🔗 관련 기사 및 뉴스</h3>
                        <div class="policy-sources-grid">
                            ${pm.sources.map(src => `
                                <a href="${src.url}" target="_blank" class="policy-source-item">
                                    <span class="source-icon">📰</span>
                                    <span class="source-label">${src.label}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                ${pm.reportPath ? `
                    <div class="policy-sub-section" style="margin-top: 2rem;">
                        <a href="${pm.reportPath}" class="policy-source-item" style="background: var(--accent-blue); color: white; border: none; justify-content: center; padding: 1.25rem;">
                            <span class="source-icon">📊</span>
                            <span class="source-label" style="font-weight: 700;">제네시스 미션 심층 분석 리포트 보러가기 →</span>
                        </a>
                    </div>
                ` : ''}

                <div class="disclaimer-box" style="margin-top: 2rem;">
                    <strong>💡 ${insightTitle}:</strong><br><br>
                    ${insightText}
                </div>
            </div>
        `;
    }).join('<hr style="border:0; border-top:1px solid rgba(255,255,255,0.05); margin: 2rem 0;">');
}
