document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('reports-container');
    try {
        const { data } = await loadDashboardData();
        const reports = data.ANALYSIS_REPORTS || [];

        if (reports.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 1.2rem; padding: 3rem;">등록된 분석 리포트가 없습니다.</p>';
            return;
        }

        reports.forEach(report => {
            const card = document.createElement('div');
            card.className = 'report-card';

            let thumbnailContent = `<span style="font-size:3rem;">📄</span>`;
            if (report.thumbnail) {
                thumbnailContent = `<img src="${report.thumbnail}" alt="${report.title}" style="width:100%; height:100%; object-fit:cover;">`;
            } else if (report.tags && report.tags.includes('전기차')) {
                thumbnailContent = `<span style="font-size:3rem;">⚡️</span>`;
            } else if (report.tags && report.tags.includes('반도체')) {
                thumbnailContent = `<span style="font-size:3rem;">💾</span>`;
            }

            const tagsHtml = report.tags ? report.tags.map(tag => `<span class="tag">#${tag}</span>`).join('') : '';

            card.innerHTML = `
                <div class="report-thumbnail">
                    ${thumbnailContent}
                </div>
                <div class="report-content">
                    <div class="report-date">${report.date}</div>
                    <h3 class="report-title">${report.title}</h3>
                    <p class="report-summary">${report.summary}</p>
                    <div class="report-tags">
                        ${tagsHtml}
                    </div>
                    <a href="${report.link}" class="read-more-btn" style="text-align: center; display: block;">Read Analysis →</a>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ef4444; font-size: 1.2rem; font-weight: 600; padding: 3rem;">데이터 로딩 실패: 로컬 서버에서 실행 중인지, data.json 파일이 존재하는지 확인해주세요.</p>';
        console.error(err);
    }
});
