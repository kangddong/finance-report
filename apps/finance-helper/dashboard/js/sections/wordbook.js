import { FINANCE_WORDS } from '../db.js';

export function initWordbook() {
    const wordbookContainer = document.getElementById('wordbook-container');
    const modal = document.getElementById('word-definition-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTerm = document.getElementById('modal-term');
    const modalCategory = document.getElementById('modal-category');
    const modalDef = document.getElementById('modal-definition');

    if (!wordbookContainer) return;

    // Render Capsules
    FINANCE_WORDS.forEach(word => {
        const capsule = document.createElement('div');
        capsule.className = 'word-capsule';
        capsule.textContent = word.term.split('(')[0].trim();

        capsule.addEventListener('click', () => {
            modalTerm.textContent = word.term;
            modalCategory.textContent = word.category;
            modalDef.textContent = word.definition;
            modal.classList.add('active');
        });

        wordbookContainer.appendChild(capsule);
    });

    // Close Modal Events
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}
