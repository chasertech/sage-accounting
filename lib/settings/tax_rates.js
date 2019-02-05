module.exports = {
    /**
     * @method getTaxRates
     * @memberof SageOne
     * @instance
     * @description
     * Fetches tax rates.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_rates Sage API}
     * @param {Object} [options]
     */
    getTaxRates(options) {
        return this.makeRequest('GET', 'tax_rates', options);
    },

    /**
     * @method getTaxRate
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a tax rate.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_rates Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTaxRate(key, options) {
        const resource = `tax_rates/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createTaxRate
     * @memberof SageOne
     * @instance
     * @description
     * Creates a tax rate.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_rates Sage API}
     * @param {Object} fields
     */
    createTaxRate(fields) {
        return this.makeRequest('POST', 'tax_rates', { tax_rate: fields });
    },

    /**
     * @method updateTaxRate
     * @memberof SageOne
     * @instance
     * @description
     * Updates a tax rate.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_rates Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateTaxRate(key, fields) {
        const resource = `tax_rates/${key}`;
        return this.makeRequest('PUT', resource, { tax_rate: fields });
    },

    /**
     * @method deleteTaxRate
     * @memberof SageOne
     * @instance
     * @description
     * Updates a tax rate.
     * @param {string} key
     */
    deleteTaxRate(key) {
        const resource = `tax_rates/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
