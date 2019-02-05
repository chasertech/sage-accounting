module.exports = {
    /**
     * @method getCoaAccounts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches coa accounts.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_accounts Sage API}
     * @param {Object} [options]
     */
    getCoaAccounts(options) {
        return this.makeRequest('GET', 'coa_accounts', options);
    },

    /**
     * @method getCoaAccounts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one coa account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_accounts Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCoaAccount(key, options) {
        const resource = `coa_accounts/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
