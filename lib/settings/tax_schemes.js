module.exports = {
    /**
     * @method getTaxSchemes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches tax schemes.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_schemes Sage API}
     * @param {Object} [options]
     */
    getTaxSchemes(options) {
        return this.makeRequest('GET', 'tax_schemes', options);
    },

    /**
     * @method getTaxScheme
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a tax scheme.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_schemes Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTaxScheme(key, options) {
        const resource = `tax_schemes/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
