module.exports = {
    /**
     * @method getCountryGroups
     * @memberof SageOne
     * @instance
     * @description
     * Fetches country groups.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/country_groups Sage API}
     * @param {Object} [options]
     */
    getCountryGroups(options) {
        return this.makeRequest('GET', 'country_groups', options);
    },

    /**
     * @method getCountryGroup
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a country group.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/country_groups Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCountryGroup(key, options) {
        const resource = `country_groups/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
