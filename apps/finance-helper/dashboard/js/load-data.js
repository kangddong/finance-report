/**
 * Fetches dashboard data from local JSON files and handles schema validation.
 * @returns {Promise<{data: Object, wordsData: Array}>}
 */
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

/**
 * Helper to fetch with a fallback URL if the first attempt fails (e.g. 404).
 */
async function fetchWithFallback(primary, secondary) {
    try {
        const resp = await fetch(primary);
        if (resp.ok) return resp;
    } catch (e) {}
    return fetch(secondary).catch(() => null);
}

async function loadDashboardData() {
    try {
        const [response, wordsResponse, supabaseIndicatorsResponse] = await Promise.all([
            fetchWithFallback('data.json', '../data.json'),
            fetchWithFallback('finance_word_data.json', '../finance_word_data.json'),
            fetchWithFallback('generated/supabase-indicators.json', '../generated/supabase-indicators.json')
        ]);
        
        if (!response.ok) throw new Error('Failed to load data.json');
        if (!wordsResponse.ok) throw new Error('Failed to load finance_word_data.json');
        
        const data = await response.json();
        const wordsData = await wordsResponse.json();
        const supabaseIndicatorSnapshot = normalizeSupabaseIndicatorSnapshot(
            supabaseIndicatorsResponse && supabaseIndicatorsResponse.ok
                ? await supabaseIndicatorsResponse.json()
                : {}
        );

        // Data Validation (Fallback logic)
        if (!data.REPORTS_HISTORY) data.REPORTS_HISTORY = [];
        if (!data.ANALYSIS_REPORTS) data.ANALYSIS_REPORTS = [];
        if (!data.COMPANY_DETAIL_LIBRARY) data.COMPANY_DETAIL_LIBRARY = {};
        
        // Sorting logic centralized
        data.REPORTS_HISTORY.sort((a, b) => new Date(b.date) - new Date(a.date));
        data.ANALYSIS_REPORTS.sort((a, b) => new Date(b.date) - new Date(a.date));

        const indicatorsByDate = supabaseIndicatorSnapshot.byDate || {};
        data.REPORTS_HISTORY = data.REPORTS_HISTORY.map((report) => ({
            ...report,
            indicators: indicatorsByDate[report.date] || {},
        }));

        // Ensure optional top-level keys have safe defaults
        data.COMPANY_ANALYSIS_ITEMS  = data.COMPANY_ANALYSIS_ITEMS  || [];
        data.DEEP_DIVE_ITEMS         = data.DEEP_DIVE_ITEMS         || [];
        data.SECTOR_ANALYSIS_ITEMS   = data.SECTOR_ANALYSIS_ITEMS   || [];
        data.EXTERNAL_SHOCK_EVENTS   = data.EXTERNAL_SHOCK_EVENTS   || [];
        data.EXTERNAL_POLICY_DATA    = data.EXTERNAL_POLICY_DATA    || {};
        
        return { data, wordsData };
    } catch (error) {
        console.error("Data Loading Error:", error);
        throw error;
    }
}
