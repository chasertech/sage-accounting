module.exports = {
    /**
     * @method getJournalCodeTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches journal code types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_code_types Sage API}
     * @param {Object} [options]
     */
    getJournalCodeTypes(options) {
        return this.makeRequest('GET', 'journal_code_types', options);
    },

    /**
     * @method getJournalCodeType
     * @memberof SageOne
     * @instance
     * @description
     * Fetcges a journal code type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_code_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getJournalCodeType(key, options) {
        const resource = `journal_code_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
