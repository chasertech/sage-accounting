module.exports = {
    /**
     * @method getTaxOffices
     * @memberof SageOne
     * @instance
     * @description
     * Fetches tax offices.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_offices Sage API}
     * @param {Object} [options]
     */
    getTaxOffices(options) {
        return this.makeRequest('GET', 'tax_offices', options);
    },

    /**
     * @method getTaxOffice
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a tax office.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_offices Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTaxOffice(key, options) {
        const resource = `tax_offices/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
