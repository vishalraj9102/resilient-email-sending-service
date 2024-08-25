let lastSent = 0;

function rateLimit() {
    const now = Date.now();
    const rateLimitPeriod = 100; // Reduced period for testing
    if (now - lastSent > rateLimitPeriod) {
        lastSent = now;
        return Promise.resolve(true);
    } else {
        return Promise.reject(new Error('Rate limit exceeded'));
    }
}

module.exports = { rateLimit };
