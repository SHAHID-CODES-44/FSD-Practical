const GetCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
}

module.exports = GetCurrentDateTime;