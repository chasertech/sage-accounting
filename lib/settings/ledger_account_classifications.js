module.exports = {
    /**
     * @method getLedgerAccountClassifications
     * @memberof SageOne
     * @instance
     * @description
     * Fetches ledger account classifications.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_classifications Sage API}
     * @param {Object} [options]
     */
    getLedgerAccountClassifications(options) {
        return this.makeRequest('GET', 'ledger_account_classifications', options);
    },

    /**
     * @method getLedgerAccountClassification
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a ledger account classification.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_classifications Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getLedgerAccountClassification(key, options) {
        const resource = `ledger_account_classifications/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
