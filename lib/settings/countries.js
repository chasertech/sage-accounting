module.exports = {
    /**
     * @method getCountries
     * @memberof SageOne
     * @instance
     * @description
     * Fetches countries.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/countries Sage API}
     * @param {Object} [options]
     */
    getCountries(options) {
        return this.makeRequest('GET', 'countries', options);
    },

    /**
     * @method getCountry
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a country.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/countries Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCountry(key, options) {
        const resource = `countries/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
