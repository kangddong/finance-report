document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('content');
    try {
        const { data } = await loadDashboardData();
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const library = data.COMPANY_DETAIL_LIBRARY || {};
        const company = id ? library[id] : null;

        if (!company) {
            root.innerHTML = '<p class="not-found">해당 기업 분석 데이터를 찾을 수 없습니다.</p>';
            return;
        }
        
        document.title = `${company.name} 기업 분석 | Premium Finance`;
        root.innerHTML = `
            <div class="ticker">${company.ticker || ''}</div>
            <h1>${company.name} 기업 분석</h1>
            <p class="sub">${company.subtitle || ''}</p>
            <section>
                <h2>기업 개요</h2>
                <p>${company.business || ''}</p>
            </section>
            <section>
                <h2>투자 포인트</h2>
                <p>${company.thesis || ''}</p>
            </section>
            <section>
                <h2>리스크</h2>
                <p>${company.risks || ''}</p>
            </section>
        `;
    } catch (err) {
        root.innerHTML = `<p class="not-found" style="color:#ef4444; font-weight:600;">데이터 로딩 실패: 로컬 서버에서 실행 중인지, data.json 파일이 존재하는지 확인해주세요.</p>`;
        console.error(err);
    }
});
