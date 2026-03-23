export function initTools() {
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
            hedgeResult.style.color = '#fb7185';
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
}
