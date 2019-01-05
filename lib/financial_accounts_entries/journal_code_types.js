/**
 * Journal Code Types
 * @module SageOne
 */
module.exports = {
    /**
     * @method getJournalCodeTypes
     * Fetches journal code types.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_code_types
     * @param {Object} [options]
     * @returns {Promise}
     */
    getJournalCodeTypes(options) {
        return this.makeRequest('GET', 'journal_code_types', options);
    },

    /**
     * @method getJournalCodeType
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_code_types
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getJournalCodeType(key, options) {
        const resource = `journal_code_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
