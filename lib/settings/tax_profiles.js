module.exports = {
    /**
     * @method getTaxProfiles
     * @memberof SageOne
     * @instance
     * @description
     * Fetches tax profiles.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_profiles Sage API}
     * @param {Object} [options]
     */
    getTaxProfiles(options) {
        return this.makeRequest('GET', 'tax_profiles', options);
    },

    /**
     * @method getTaxProfile
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a tax profile.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_profiles Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTaxProfile(key, options) {
        const resource = `tax_profiles/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method updateTaxProfile
     * @memberof SageOne
     * @instance
     * @description
     * Updates a tax profile.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/tax_profiles Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateTaxProfile(key, fields) {
        const resource = `tax_profiles/${key}`;
        return this.makeRequest('PUT', resource, { tax_profile: fields });
    },
};
