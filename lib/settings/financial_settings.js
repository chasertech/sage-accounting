module.exports = {
    getFinancialSettings(options) {
        return this.makeRequest('GET', 'financial_settings', options);
    },

    updateFinancialSettings(fields) {
        return this.makeRequest('PUT', 'financial_settings', { financial_settings: fields });
    },
};
