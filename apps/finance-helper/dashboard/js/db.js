/**
 * db.js — Central Data Access Interface (Hub)
 *
 * All UI modules import data through this module, never accessing
 * raw JSON files directly.  Data is loaded once via fetch() and
 * cached in module-scope variables that the exported helpers expose.
 *
 * Usage:
 *   import { ready, getAllReports, ... } from '../db.js';
 *   await ready();   // ensures data is loaded before first access
 */

// ── Module-level cache ──────────────────────────────────────────
let REPORTS_HISTORY        = [];
let COMPANY_ANALYSIS_ITEMS = [];
let SECTOR_ANALYSIS_ITEMS  = [];
let DEEP_DIVE_ITEMS        = [];
let ANALYSIS_REPORTS       = [];
let COMPANY_DETAIL_LIBRARY = {};
let EXTERNAL_SHOCK_EVENTS  = [];
let EXTERNAL_POLICY_DATA   = {};
let FINANCE_WORDS          = [];
let SUPABASE_INDICATOR_SNAPSHOT_DATE = '';
let SUPABASE_INDICATOR_OVERRIDES = {};
let SUPABASE_INDICATORS_BY_DATE = {};

// ── Bootstrap ───────────────────────────────────────────────────
let _loadPromise = null;

function inferSupabaseSnapshotDate(indicators = {}) {
    const dates = Object.values(indicators)
        .map((indicator) => indicator?.sourceDate)
        .filter(Boolean)
        .sort((a, b) => new Date(b) - new Date(a));

    return dates[0] || '';
}

function normalizeSupabaseIndicatorSnapshot(payload = {}) {
    const indicators = payload.indicators || payload.latestIndicators || {};
    const byDate = payload.byDate || {};
    return {
        date: payload.date || inferSupabaseSnapshotDate(indicators),
        indicators,
        byDate,
    };
}

function getSupabaseIndicatorsForDate(date) {
    if (!date) return {};
    return SUPABASE_INDICATORS_BY_DATE[date] || {};
}

async function _load() {
    const [dataRes, wordsRes, supabaseIndicatorsRes] = await Promise.all([
        fetch('data.json').catch(() => fetch('../data.json')),
        fetch('finance_word_data.json').catch(() => fetch('../finance_word_data.json')),
        fetch('generated/supabase-indicators.json')
            .catch(() => fetch('../generated/supabase-indicators.json'))
            .catch(() => null)
    ]);

    if (!dataRes.ok)  throw new Error('Failed to load data.json');
    if (!wordsRes.ok) throw new Error('Failed to load finance_word_data.json');

    const data      = await dataRes.json();
    const wordsData = await wordsRes.json();
    const supabaseIndicatorSnapshot = normalizeSupabaseIndicatorSnapshot(
        supabaseIndicatorsRes && supabaseIndicatorsRes.ok
            ? await supabaseIndicatorsRes.json()
            : {}
    );

    // Fallback + sort
    REPORTS_HISTORY        = (data.REPORTS_HISTORY        || []).sort((a, b) => new Date(b.date) - new Date(a.date));
    ANALYSIS_REPORTS       = (data.ANALYSIS_REPORTS       || []).sort((a, b) => new Date(b.date) - new Date(a.date));
    COMPANY_ANALYSIS_ITEMS = data.COMPANY_ANALYSIS_ITEMS  || [];
    SECTOR_ANALYSIS_ITEMS  = data.SECTOR_ANALYSIS_ITEMS   || [];
    DEEP_DIVE_ITEMS        = data.DEEP_DIVE_ITEMS         || [];
    COMPANY_DETAIL_LIBRARY = data.COMPANY_DETAIL_LIBRARY  || {};
    EXTERNAL_SHOCK_EVENTS  = data.EXTERNAL_SHOCK_EVENTS   || [];
    EXTERNAL_POLICY_DATA   = data.EXTERNAL_POLICY_DATA    || {};
    FINANCE_WORDS          = wordsData;
    SUPABASE_INDICATOR_SNAPSHOT_DATE = supabaseIndicatorSnapshot.date || '';
    SUPABASE_INDICATOR_OVERRIDES = supabaseIndicatorSnapshot.indicators || {};
    SUPABASE_INDICATORS_BY_DATE = supabaseIndicatorSnapshot.byDate || {};

    REPORTS_HISTORY = REPORTS_HISTORY.map((report) => ({
        ...report,
        indicators: getSupabaseIndicatorsForDate(report.date),
    }));
}

/**
 * Await this before accessing any data.
 * Multiple calls are safe — the fetch runs only once.
 */
export function ready() {
    if (!_loadPromise) _loadPromise = _load();
    return _loadPromise;
}

// ── Re-exports (read-only references) ───────────────────────────
// These getters always reflect the latest cached values.
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

// ── Query helpers ───────────────────────────────────────────────
export function getAllReports() {
    return REPORTS_HISTORY;
}

export function getLatestReport() {
    return REPORTS_HISTORY.length > 0 ? REPORTS_HISTORY[0] : null;
}

export function getLatestIndicatorsSnapshot() {
    const latest = getLatestReport();
    if (!latest) {
        return {
            date: SUPABASE_INDICATOR_SNAPSHOT_DATE,
            indicators: SUPABASE_INDICATOR_OVERRIDES,
        };
    }
    return {
        date: SUPABASE_INDICATOR_SNAPSHOT_DATE || latest.date,
        indicators: getSupabaseIndicatorsForDate(SUPABASE_INDICATOR_SNAPSHOT_DATE) || SUPABASE_INDICATOR_OVERRIDES
    };
}

export function getIndicatorsSnapshotByDate(date) {
    if (!date) return getLatestIndicatorsSnapshot();

    const report = getReportByDate(date);
    const indicators = report?.indicators || getSupabaseIndicatorsForDate(date) || {};

    return {
        date,
        indicators,
    };
}

export function getAvailableIndicatorDates() {
    return REPORTS_HISTORY
        .filter((report) => report?.date && report?.indicators && Object.keys(report.indicators).length > 0)
        .map((report) => report.date);
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

// ── Market session helpers ──────────────────────────────────────
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
