module.exports = {
    /**
     * @method getTaxTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches tax types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_types Sage API}
     * @param {Object} [options]
     */
    getTaxTypes(options) {
        return this.makeRequest('GET', 'tax_types', options);
    },

    /**
     * @method getTaxType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a tax type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTaxType(key, options) {
        const resource = `tax_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
