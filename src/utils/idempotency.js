function idempotencyCheck(emailKey, history) {
    if (history.has(emailKey)) {
        return true;
    }
    history.set(emailKey, true);
    return false;
}

module.exports = { idempotencyCheck };
