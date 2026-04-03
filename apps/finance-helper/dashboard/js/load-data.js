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
    return {
        date: payload.date || inferSupabaseSnapshotDate(indicators),
        indicators,
    };
}

async function loadDashboardData() {
    try {
        const [response, wordsResponse, supabaseIndicatorsResponse] = await Promise.all([
            fetch('data.json').catch(() => fetch('../data.json')),
            fetch('finance_word_data.json').catch(() => fetch('../finance_word_data.json')),
            fetch('generated/supabase-indicators.json')
                .catch(() => fetch('../generated/supabase-indicators.json'))
                .catch(() => null)
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

        const latestIndicators = supabaseIndicatorSnapshot.indicators || {};
        if (data.REPORTS_HISTORY.length > 0 && Object.keys(latestIndicators).length > 0) {
            data.REPORTS_HISTORY[0] = {
                ...data.REPORTS_HISTORY[0],
                indicators: {
                    ...(data.REPORTS_HISTORY[0].indicators || {}),
                    ...latestIndicators,
                },
            };
        }

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
