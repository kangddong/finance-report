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
});

function renderDashboard(data) {
    // 헤더 개요 업데이트 (Markdown bold 지원)
    document.getElementById('report-overview').innerHTML = parseMarkdown(data.overview);

    // 지표 렌더링
    renderIndicators(data.indicators);

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

    if (data.foreignInvestorTrend) {
        // 1. Held Stocks Trend
        if (data.foreignInvestorTrend.held_stocks && data.foreignInvestorTrend.held_stocks.length > 0) {
            data.foreignInvestorTrend.held_stocks.forEach(stock => {
                // Get latest day data
                const latest = stock.data[0];
                const prev = stock.data[1];
                if (!latest) return;

                const isBuy = latest['Foreigner Net Buy'] > 0;
                const buyAmount = Math.abs(latest['Foreigner Net Buy']).toLocaleString();
                const statusText = isBuy ? `<span style="color: var(--up-color);">+${buyAmount}</span>` : `<span style="color: var(--down-color);">-${buyAmount}</span>`;

                const cardContent = `
                    <div class="stock-item" style="padding: 1rem;">
                        <div class="stock-info">
                            <div class="name" style="font-size: 1.1rem;">${stock.name}</div>
                            <div class="price" style="font-size: 0.85rem;">소진율: ${latest['Foreigner Ratio']}</div>
                        </div>
                        <div class="stock-status" style="justify-content: center;">
                            <div class="return" style="font-size: 1rem;">${statusText}</div>
                            <div style="font-size: 0.7rem; color: var(--text-secondary);">${latest.Date.substring(5)} 기준</div>
                        </div>
                    </div>
                `;
                foreignList.innerHTML += cardContent;
            });
        } else {
            foreignList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">보유 종목 수급 데이터가 없습니다.</p>';
        }

        // 2. Top Foreign Buy
        if (data.foreignInvestorTrend.top_foreign && data.foreignInvestorTrend.top_foreign.length > 0) {
            data.foreignInvestorTrend.top_foreign.forEach(item => {
                const tag = document.createElement('div');
                tag.className = 'tag-item';
                tag.innerHTML = `<span class="rank">${item.Rank}</span> ${item.Name}`;
                topList.appendChild(tag);
            });
        } else {
            topList.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">순위 데이터 없음</p>';
        }

    } else {
        foreignList.innerHTML = '<p style="color: var(--text-secondary); padding: 1rem;">수급 데이터를 분석 중입니다...</p>';
    }

    // 종합 조언 렌더링
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
