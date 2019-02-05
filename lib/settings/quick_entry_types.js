module.exports = {
    /**
     * @method getQuickEntryTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches quick entry types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/quick_entry_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getQuickEntryTypes(options) {
        return this.makeRequest('GET', 'quick_entry_types', options);
    },

    /**
     * @method getQuickEntryType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a quick entry type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/quick_entry_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getQuickEntryType(key, options) {
        const resource = `quick_entry_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
