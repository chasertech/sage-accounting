module.exports = {
    getCorrectiveReasonCodes(options) {
        return this.makeRequest('GET', 'corrective_reason_codes', options);
    },

    getCorrectiveReasonCode(key, options) {
        const resource = `corrective_reason_codes/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
