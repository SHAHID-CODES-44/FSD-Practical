function formatLog(message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${message}`;
}

module.exports = {formatLog};