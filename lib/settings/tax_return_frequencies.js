module.exports = {
    /**
     * @method getTaxReturnFrequencies
     * @memberof SageOne
     * @instance
     * @description
     * Fetches tax return frequencies.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_return_frequencies Sage API}
     * @param {Object} [options]
     */
    getTaxReturnFrequencies(options) {
        return this.makeRequest('GET', 'tax_return_frequencies', options);
    },

    /**
     * @method getTaxReturnFrequency
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a tax return frequency.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_return_frequencies Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTaxReturnFrequency(key, options) {
        const resource = `tax_return_frequencies/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
