module.exports = {
    /**
     * @method getBusinessSettings
     * @memberof SageOne
     * @instance
     * @description
     * Fetches business settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_settings Sage API}
     * @param {Object} [options]
     */
    getBusinessSettings(options) {
        return this.makeRequest('GET', 'business_settings', options);
    },

    /**
     * @method updateBusinessSettings
     * @memberof SageOne
     * @instance
     * @description
     * Updates business settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_settings Sage API}
     * @param {Object} fields
     */
    updateBusinessSettings(fields) {
        return this.makeRequest('PUT', 'business_settings', { business_settings: fields });
    },
};
