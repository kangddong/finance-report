document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('date-selector');

    if (typeof REPORTS_HISTORY !== 'undefined' && REPORTS_HISTORY.length > 0) {
        // Build Date Selector
        selector.innerHTML = ''; 
        REPORTS_HISTORY.forEach((report, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = report.date.replace(/-/g, '. ');
            selector.appendChild(option);
        });

        // Default to latest
        selector.value = 0;
        if (typeof renderDashboard === 'function') {
            renderDashboard(REPORTS_HISTORY[0]);
        }

        // Date selector event
        selector.addEventListener('change', (e) => {
            const selectedIndex = e.target.value;
            if (typeof renderDashboard === 'function') {
                renderDashboard(REPORTS_HISTORY[selectedIndex]);
            }

            // Animation effect
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.animation = 'none';
                card.offsetHeight; 
                card.style.animation = 'fadeInUp 0.5s ease-out backwards';
            });
        });
    } else {
        const errorMsg = '보고서 데이터가 없습니다. 먼저 리포트를 생성해 주세요.';
        const overview = document.getElementById('report-overview');
        if (overview) {
            overview.textContent = errorMsg;
            overview.style.color = '#fb7185';
        }
    }

    // --- Initialize Modules ---
    if (typeof initWordbook === 'function') initWordbook();
    if (typeof initRecommender === 'function') initRecommender();
    if (typeof initExternalFactors === 'function') initExternalFactors();
    if (typeof initAnalysisSections === 'function') initAnalysisSections();
    if (typeof initTools === 'function') initTools();

    // --- Sidebar Navigation System ---
    const sideNavBtns = document.querySelectorAll('.side-nav-btn');
    const sections = document.querySelectorAll('.nav-section');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const mobileToggle = document.getElementById('mobile-toggle');

    function showSection(sectionId) {
        // Update buttons
        sideNavBtns.forEach(b => {
            if (b.getAttribute('data-section') === sectionId) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        // Update sections
        sections.forEach(sec => sec.classList.remove('active'));
        const targetSection = document.getElementById(`section-${sectionId}`);
        if (targetSection) targetSection.classList.add('active');

        // Scroll to top of content
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    sideNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.getAttribute('data-section');
            showSection(sectionId);

            // Close sidebar on mobile after clicking
            if (window.innerWidth <= 1024 && sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Mobile Sidebar Toggle
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    if (sidebarOverlay && sidebar) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
});
