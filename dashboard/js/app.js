import { renderDashboard } from './sections/dashboard.js';
import { initLearnSections } from './sections/learn.js';
import { initRecommender } from './sections/recommender.js';
import { initWordbook } from './sections/wordbook.js';
import { initTools } from './sections/tools.js';
import { initAnalysisSections } from './sections/analysis.js';
import { initExternalFactors } from './sections/external-factors.js';
import { getAllReports, getMarketSessionData } from './db.js';

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('date-selector');

    const reports = getAllReports();

    if (reports && reports.length > 0) {
        reports.forEach((report) => {
            report.sessionData = {
                kr: getMarketSessionData(report, 'kr'),
                us: getMarketSessionData(report, 'us')
            };
        });

        // Build Date Selector
        if (selector) {
            selector.innerHTML = ''; 
            reports.forEach((report, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = report.date.replace(/-/g, '. ');
                selector.appendChild(option);
            });

            // Default to latest
            selector.value = 0;
            renderDashboard(reports[0]);

            // Date selector event
            selector.addEventListener('change', (e) => {
                const selectedIndex = e.target.value;
                renderDashboard(reports[selectedIndex]);

                // Animation effect
                const cards = document.querySelectorAll('.card');
                cards.forEach(card => {
                    card.style.animation = 'none';
                    card.offsetHeight; 
                    card.style.animation = 'fadeInUp 0.5s ease-out backwards';
                });
            });
        } else {
            // If selector not found, just render the latest
            renderDashboard(reports[0]);
        }
    } else {
        const errorMsg = '보고서 데이터가 없습니다. 먼저 리포트를 생성해 주세요.';
        const overview = document.getElementById('report-overview');
        if (overview) {
            overview.textContent = errorMsg;
            overview.style.color = '#fb7185';
        }
    }

    // Initialize all sections
    initLearnSections();
    initRecommender();
    initWordbook();
    initTools();
    initAnalysisSections();
    initExternalFactors();

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
