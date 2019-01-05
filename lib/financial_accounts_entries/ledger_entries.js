/**
 * Ledger Entries
 * @module SageOne
 */
module.exports = {
    /**
     * @method getLedgerEntries
     * Fetches ledger entries.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_entries
     * @param {Object} [options]
     * @returns {Promise}
     */
    getLedgerEntries(options) {
        return this.makeRequest('GET', 'ledger_entries', options);
    },

    /**
     * @method getLedgerEntry
     * Fetches one ledger entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_entries
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getLedgerEntry(key, options) {
        const resource = `ledger_entries/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
