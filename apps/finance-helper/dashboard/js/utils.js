function getLatestReport(history) {
    if (!history || history.length === 0) return null;
    return history.reduce((latest, current) => {
        return new Date(current.date) > new Date(latest.date) ? current : latest;
    }, history[0]);
}

function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}
