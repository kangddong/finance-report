import { ready } from './db.js';
import { initIndicatorsPage } from './sections/indicators-page.js';

document.addEventListener('DOMContentLoaded', async () => {
    await ready();
    initIndicatorsPage();
});
