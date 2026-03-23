/**
 * @file db.js
 * @description REPORTS_HISTORY 데이터에 접근하기 위한 통합 인터페이스 모듈입니다.
 */

import { 
    REPORTS_HISTORY, 
    COMPANY_ANALYSIS_ITEMS, 
    SECTOR_ANALYSIS_ITEMS, 
    EXTERNAL_SHOCK_ITEMS, 
    TRADING_FLOW_ITEMS,
    DEEP_DIVE_ITEMS,
    ANALYSIS_REPORTS,
    COMPANY_DETAIL_LIBRARY,
    EXTERNAL_SHOCK_EVENTS,
    EXTERNAL_POLICY_DATA
} from './data.js';

import { FINANCE_WORDS } from '../finance_word_data.js';

// Central Database Hub for the entire Dashboard
export { 
    REPORTS_HISTORY,
    COMPANY_ANALYSIS_ITEMS, 
    SECTOR_ANALYSIS_ITEMS, 
    EXTERNAL_SHOCK_ITEMS, 
    TRADING_FLOW_ITEMS,
    DEEP_DIVE_ITEMS,
    ANALYSIS_REPORTS,
    COMPANY_DETAIL_LIBRARY,
    EXTERNAL_SHOCK_EVENTS,
    EXTERNAL_POLICY_DATA,
    FINANCE_WORDS
};


/**
 * 모든 리포트 히스토리를 반환합니다.
 * @returns {Array} 리포트 배열
 */
export function getAllReports() {
    return REPORTS_HISTORY;
}

/**
 * 가장 최신 리포트를 반환합니다.
 * @returns {Object|null} 최신 리포트 객체
 */
export function getLatestReport() {
    return REPORTS_HISTORY.length > 0 ? REPORTS_HISTORY[0] : null;
}

/**
 * 특정 날짜의 리포트를 반환합니다.
 * @param {string} date YYYY-MM-DD 형식의 날짜
 * @returns {Object|null} 해당 날짜의 리포트
 */
export function getReportByDate(date) {
    return REPORTS_HISTORY.find(report => report.date === date) || null;
}

/**
 * 리포트에서 사용 가능한 모든 날짜 목록을 반환합니다.
 * @returns {Array<string>} 날짜 배열
 */
export function getAvailableDates() {
    return REPORTS_HISTORY.map(report => report.date);
}

/**
 * 특정 종목의 매수/보유 의견을 포함한 최신 정보를 검색합니다.
 * @param {string} stockName 종목명
 * @returns {Object|null} 종목 정보
 */
export function getStockInfo(stockName) {
    const latest = getLatestReport();
    if (!latest) return null;
    
    // 보유종목에서 검색
    const holding = latest.holdings.find(h => h.name.includes(stockName));
    if (holding) return holding;
    
    // 관심종목에서 검색
    if (latest.watchlist) {
        const watched = latest.watchlist.find(w => w.name.includes(stockName));
        if (watched) return watched;
    }
    
    return null;
}
