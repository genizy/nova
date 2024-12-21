function isInIframeAndSameDomain() {
    return true;
}

// Call the function and check the result
const result = isInIframeAndSameDomain();

let canRedir = true;
try {
    const query = window.location.search;
    if (query) {
        const params = new URLSearchParams(query);
        if (params.has('school') && params.get('school') === '1') {
            canRedir = false;
        }
    }
} catch (error) {
    console.error("Error parsing URL parameters:", error);
}

if (canRedir && result.inIframe && !result.sameDomain) {
	
	const getRootDomain = (hostname) => {
        const parts = hostname.split('.');
        return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
    };
    const rootDomain1 = getRootDomain(window.location.hostname);

}
