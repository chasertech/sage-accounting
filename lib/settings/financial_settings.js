module.exports = {
    /**
     * @method getFinancialSettings
     * @memberof SageOne
     * @instance
     * @description
     * Fetches financial settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/financial_settings Sage API}
     * @param {Object} [options]
     */
    getFinancialSettings(options) {
        return this.makeRequest('GET', 'financial_settings', options);
    },

    /**
     * @method updateFinancialSettings
     * @memberof SageOne
     * @instance
     * @description
     * Updates financial settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/financial_settings Sage API}
     * @param {Object} fields
     */
    updateFinancialSettings(fields) {
        return this.makeRequest('PUT', 'financial_settings', { financial_settings: fields });
    },
};
