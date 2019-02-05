module.exports = {
    /**
     * @method getLedgerEntries
     * @memberof SageOne
     * @instance
     * @description
     * Fetches ledger entries.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_entries Sage API}
     * @param {Object} [options]
     */
    getLedgerEntries(options) {
        return this.makeRequest('GET', 'ledger_entries', options);
    },

    /**
     * @method getLedgerEntry
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one ledger entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_entries Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getLedgerEntry(key, options) {
        const resource = `ledger_entries/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
