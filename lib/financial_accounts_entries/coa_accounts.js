/**
 * Coa Accounts
 * @module SageOne
 */
module.exports = {
    /**
     * @method getCoaAccounts
     * Fetches coa accounts.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_accounts
     * @param {Object} [options]
     * @returns {Promise}
     */
    getCoaAccounts(options) {
        return this.makeRequest('GET', 'coa_accounts', options);
    },

    /**
     * @method getCoaAccounts
     * Fetches one coa account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_accounts
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getCoaAccount(key, options) {
        const resource = `coa_accounts/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
