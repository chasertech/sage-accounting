module.exports = {
    /**
     * @method getCurrencies
     * @memberof SageOne
     * @instance
     * @description
     * Fetches currencies.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/currencies Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCurrencies(options) {
        return this.makeRequest('GET', 'currencies', options);
    },

    /**
     * @method getCurrency
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a currency.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/currencies Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCurrency(key, options) {
        const resource = `currencies/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
