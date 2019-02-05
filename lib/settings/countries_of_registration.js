module.exports = {
    /**
     * @method getCountriesOfRegistration
     * @memberof SageOne
     * @instance
     * @description
     * Fetches countries of registration.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/countries_of_registration Sage API}
     * @param {Object} [options]
     */
    getCountriesOfRegistration(options) {
        return this.makeRequest('GET', 'countries_of_registration', options);
    },

    /**
     * @method getCountryOfRegistration
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a country of registration.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/countries_of_registration Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCountryOfRegistration(key, options) {
        const resource = `countries_of_registration/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
