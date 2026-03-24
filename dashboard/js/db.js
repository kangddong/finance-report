import {
    REPORTS_HISTORY,
    COMPANY_ANALYSIS_ITEMS,
    SECTOR_ANALYSIS_ITEMS,
    DEEP_DIVE_ITEMS,
    ANALYSIS_REPORTS,
    COMPANY_DETAIL_LIBRARY,
    EXTERNAL_SHOCK_EVENTS,
    EXTERNAL_POLICY_DATA
} from '../data.js';

import { FINANCE_WORDS } from '../finance_word_data.js?t=1';

export {
    REPORTS_HISTORY,
    COMPANY_ANALYSIS_ITEMS,
    SECTOR_ANALYSIS_ITEMS,
    DEEP_DIVE_ITEMS,
    ANALYSIS_REPORTS,
    COMPANY_DETAIL_LIBRARY,
    EXTERNAL_SHOCK_EVENTS,
    EXTERNAL_POLICY_DATA,
    FINANCE_WORDS
};

export function getAllReports() {
    return REPORTS_HISTORY;
}

export function getLatestReport() {
    return REPORTS_HISTORY.length > 0 ? REPORTS_HISTORY[0] : null;
}

export function getLatestIndicatorsSnapshot() {
    const latest = getLatestReport();
    if (!latest) return null;

    return {
        date: latest.date,
        indicators: latest.indicators || {}
    };
}

export function getReportByDate(date) {
    return REPORTS_HISTORY.find((report) => report.date === date) || null;
}

export function getAvailableDates() {
    return REPORTS_HISTORY.map((report) => report.date);
}

export function getStockInfo(stockName) {
    const latest = getLatestReport();
    if (!latest) return null;

    const holding = (latest.holdings || []).find((item) => item.name?.includes(stockName));
    if (holding) return holding;

    const watched = (latest.watchlist || []).find((item) => item.name?.includes(stockName));
    return watched || null;
}

function isKoreanText(text = '') {
    return Array.from(text).some((char) => {
        const code = char.charCodeAt(0);
        return code >= 0xac00 && code <= 0xd7a3;
    });
}

function splitItemsByMarket(items = []) {
    return items.reduce((acc, item) => {
        const priceText = `${item?.avgPrice || ''} ${item?.currentPrice || ''}`.toLowerCase();
        let market = 'us';

        if (priceText.includes('$') || priceText.includes('달러')) {
            market = 'us';
        } else if (priceText.includes('원')) {
            market = 'kr';
        } else if (isKoreanText(item?.name || '')) {
            market = 'kr';
        }

        acc[market].push(item);
        return acc;
    }, { kr: [], us: [] });
}

function normalizeSessionStrategy(strategy, market) {
    if (!strategy) return null;

    if (typeof strategy === 'string') {
        return {
            buy: market === 'kr' ? strategy : '',
            sellConsider: '',
            summary: strategy
        };
    }

    return strategy;
}

export function getMarketSessionData(report, market = 'kr') {
    if (!report) {
        return {
            holdings: [],
            watchlist: [],
            strategy: null
        };
    }

    const sessionKey = market === 'us' ? 'usSession' : 'krSession';
    const sessionData = report[sessionKey];
    if (sessionData) {
        return {
            holdings: sessionData.holdings || [],
            watchlist: sessionData.watchlist || [],
            strategy: normalizeSessionStrategy(sessionData.strategy || report.strategy, market)
        };
    }

    const holdingsByMarket = splitItemsByMarket(report.holdings || []);
    const watchlistByMarket = splitItemsByMarket(report.watchlist || []);

    return {
        holdings: holdingsByMarket[market] || [],
        watchlist: watchlistByMarket[market] || [],
        strategy: normalizeSessionStrategy(report.strategy, market)
    };
}
