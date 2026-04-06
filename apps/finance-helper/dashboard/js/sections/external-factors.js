import { parseMarkdown } from '../utils/markdown.js';
import { EXTERNAL_SHOCK_EVENTS, EXTERNAL_POLICY_DATA } from '../db.js';

export function renderExternalFactors() {
    const summary = document.getElementById('external-shocks-summary');
    const timeline = document.getElementById('external-shocks-timeline');
    if (!summary || !timeline) return;

    const events = EXTERNAL_SHOCK_EVENTS || [];
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
                    <div class="shock-line rich-text"><strong>핵심 내용:</strong> ${parseMarkdown(event.summary)}</div>
                    <div class="shock-line rich-text"><strong>시장 영향:</strong> ${parseMarkdown(event.marketImpact)}</div>
                    <div class="shock-line rich-text"><strong>체크포인트:</strong> ${parseMarkdown(event.watchPoint)}</div>
                    <div class="shock-sources">${sources}</div>
                </div>
            </article>
        `;
    }).join('');
}

export function switchToPolicyTab(policyKey) {
    const policyBtn = document.querySelector('button[data-shock-tab="policy"]');
    if (policyBtn) policyBtn.click();
    
    setTimeout(() => {
        const el = document.getElementById(`policy-${policyKey}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('highlight-policy');
            setTimeout(() => el.classList.remove('highlight-policy'), 2000);
        }
    }, 100);
}

export function renderPolicyStance(policyData) {
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

                <div class="policy-chair-info">
                    <div class="chair-avatar-container">
                        <img src="${chair.image}" alt="${chair.name}" class="chair-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="chair-fallback" style="display: none;">${chair.name.split(' ').map(n => n[0]).join('')}</div>
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
                    <div class="rich-text">${parseMarkdown(data.summary)}</div>
                </div>
            </div>
        </div>
    `;
    };

    container.innerHTML = `
        ${renderCard('미국 연준 (Fed / FOMC)', fed, 'fed')}
        ${renderCard('한국은행 (BOK)', bok, 'bok')}
    `;

    strategyBox.innerHTML = `<div class="rich-text">${parseMarkdown(policyData.strategy || '데이터 분석 중입니다.')}</div>`;
}

export function renderPolicyPage() {
    const container = document.getElementById('policy-content');
    if (!container) return;

    let gridHtml = '<div id="policy-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1rem;">';
    Object.entries(EXTERNAL_POLICY_DATA).forEach(([key, pm]) => {
        gridHtml += `
            <div class="policy-pillar-card clickable-shock" onclick="showPolicyDetail('${key}')" style="cursor: pointer; transition: transform 0.2s; border: 1px solid rgba(129, 140, 248, 0.3);">
                <div class="step-badge" style="margin-bottom: 1rem; display: inline-block; padding: 0.2rem 0.6rem; background: rgba(56, 189, 248, 0.1); color: #38bdf8; border-radius: 12px; font-size: 0.8rem;">${pm.signedDate}</div>
                <h3 style="color: var(--accent-blue); margin-top: 0; margin-bottom: 0.5rem; font-size: 1.1rem;">${pm.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">${pm.subtitle}</p>
                <div style="font-size: 0.85rem; padding: 0.75rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
                    <div style="color: #cbd5e1; margin-bottom: 4px;"><strong>핵심 목표:</strong></div>
                    <div style="color: #94a3b8;">${pm.objective}</div>
                </div>
                <div style="margin-top: 1rem; color: var(--accent-blue); font-size: 0.85rem; text-align: right;">상세 보기 →</div>
            </div>
        `;
    });
    gridHtml += '</div>';

    let detailsContainerHtml = '<div id="policy-detail-view" style="display: none;"></div>';
    container.innerHTML = gridHtml + detailsContainerHtml;
}

export function showPolicyDetail(key) {
    const pm = EXTERNAL_POLICY_DATA[key];
    if (!pm) return;

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

    let html = `
        <div style="margin-bottom: 2rem;">
            <button onclick="hidePolicyDetail()" style="background: none; border: 1px solid rgba(255,255,255,0.2); color: white; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                ← 처음으로 돌아가기 (그리드 뷰)
            </button>
        </div>
        <div class="policy-main-card" id="policy-${key}" style="margin-bottom: 0;">
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
                        <span class="source-label" style="font-weight: 700;">심층 분석 리포트 보러가기 →</span>
                    </a>
                </div>
            ` : ''}

            <div class="disclaimer-box" style="margin-top: 2rem;">
                <strong>💡 ${insightTitle}:</strong><br><br>
                ${insightText}
            </div>
        </div>
    `;

    document.getElementById('policy-grid').style.display = 'none';
    const detailView = document.getElementById('policy-detail-view');
    detailView.innerHTML = html;
    detailView.style.display = 'block';
    
    document.getElementById('section-external-factors').scrollIntoView({behavior: 'smooth', block: 'start'});
}

export function hidePolicyDetail() {
    document.getElementById('policy-detail-view').style.display = 'none';
    document.getElementById('policy-grid').style.display = 'grid';
    document.getElementById('section-external-factors').scrollIntoView({behavior: 'smooth', block: 'start'});
}

export function initExternalFactors() {
    const shockTabBtns = document.querySelectorAll('.shock-tab-btn');
    const timelineView = document.getElementById('shock-timeline-view');
    const policyView = document.getElementById('shock-policy-view');

    shockTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-shock-tab');

            shockTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (tab === 'timeline') {
                if (timelineView) timelineView.style.display = 'block';
                if (policyView) policyView.style.display = 'none';
            } else {
                if (timelineView) timelineView.style.display = 'none';
                if (policyView) policyView.style.display = 'block';
                renderPolicyPage();
            }
        });
    });
}

// Expose to window for HTML onclick handlers
window.switchToPolicyTab = switchToPolicyTab;
window.showPolicyDetail = showPolicyDetail;
window.hidePolicyDetail = hidePolicyDetail;
