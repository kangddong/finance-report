import { 
    COMPANY_ANALYSIS_ITEMS, 
    DEEP_DIVE_ITEMS, 
    SECTOR_ANALYSIS_ITEMS 
} from '../db.js';
import { parseMarkdown } from '../utils/markdown.js';

export function renderCompanyAnalysisGrid() {
    const grid = document.getElementById('company-analysis-grid');
    if (!grid) return;

    const analyses = COMPANY_ANALYSIS_ITEMS || [];
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
                <div class="company-analysis-summary rich-text">${parseMarkdown(item.summary)}</div>
                <div class="company-analysis-tags">${tagsHtml}</div>
                <div class="company-analysis-cta">상세 페이지로 이동 →</div>
            </article>
        `;

        grid.appendChild(link);
    });
}

export function renderDeepDiveGrid() {
    const grid = document.getElementById('deep-dive-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    DEEP_DIVE_ITEMS.forEach(item => {
        const opinionClass = item.opinion === 'BUY' ? 'status-buy' : 
                            (item.opinion === 'SELL' ? 'status-sell' : 'status-hold');
                             
        const link = document.createElement('a');
        link.href = item.link;
        link.className = 'company-analysis-card';
        link.style.textDecoration = 'none';

        link.innerHTML = `
            <article>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                    <div>
                        <h3 class="company-name" style="margin-bottom: 0.2rem;">${item.name}</h3>
                        <span style="font-size: 0.85rem; color: var(--text-secondary);">${item.ticker}</span>
                    </div>
                    <span class="status-tag ${opinionClass}">${item.opinion}</span>
                </div>
                <div style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
                    📅 ${item.date} 작성
                </div>
                <div class="company-summary rich-text" style="margin-top: 1rem;">${parseMarkdown(item.summary)}</div>
                <div class="company-tags" style="margin-bottom: 2rem;">
                    ${(item.tags || []).map(t => `<span class="company-tag" style="background: rgba(129, 140, 248, 0.15); color: #c4b5fd;">${t}</span>`).join('')}
                </div>
                <div class="company-analysis-cta" style="color: var(--accent-purple);">🔬 딥다이브 리포트 보기 →</div>
            </article>
        `;

        grid.appendChild(link);
    });
}

export function renderSectorAnalysis() {
    const summary = document.getElementById('sector-analysis-summary');
    const list = document.getElementById('sector-analysis-list');
    if (!summary || !list) return;

    const sectors = SECTOR_ANALYSIS_ITEMS || [];
    const companyAnalyses = COMPANY_ANALYSIS_ITEMS || [];
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
                <div class="sector-reason rich-text">${parseMarkdown(sector.summary)}</div>
                <div class="sector-meta" style="margin-top: 0.5rem;">
                    <span style="font-size: 0.85rem; color: var(--text-secondary); margin-right: 0.5rem; display: flex; align-items: center;">관련종목:</span>
                    ${leadersHtml}
                </div>
                <div class="sector-detail-grid">
                    <div class="sector-detail-box rich-text"><strong>상승/하락 이유:</strong> ${parseMarkdown(sector.drivers)}</div>
                    <div class="sector-detail-box rich-text"><strong>체크포인트:</strong> ${parseMarkdown(sector.watchPoint)}</div>
                </div>
            </article>
        `;
    }).join('');
}

export function initAnalysisSections() {
    const compTabBtns = document.querySelectorAll('.comp-tab-btn');
    const compGeneralView = document.getElementById('comp-general-view');
    const compDeepdiveView = document.getElementById('comp-deepdive-view');
    const compSectorView = document.getElementById('comp-sector-view');

    compTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-comp-tab');

            compTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (compGeneralView) compGeneralView.style.display = 'none';
            if (compDeepdiveView) compDeepdiveView.style.display = 'none';
            if (compSectorView) compSectorView.style.display = 'none';

            if (tab === 'general' && compGeneralView) {
                compGeneralView.style.display = 'block';
            } else if (tab === 'deepdive' && compDeepdiveView) {
                compDeepdiveView.style.display = 'block';
            } else if (tab === 'sector' && compSectorView) {
                compSectorView.style.display = 'block';
            }
        });
    });
}
