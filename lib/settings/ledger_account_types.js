module.exports = {
    /**
     * @method getLedgerAccountTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches ledger account types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_types Sage API}
     * @param {Object} [options]
     */
    getLedgerAccountTypes(options) {
        return this.makeRequest('GET', 'ledger_account_types', options);
    },

    /**
     * @method getLedgerAccountType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a ledger account type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getLedgerAccountType(key, options) {
        const resource = `ledger_account_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
