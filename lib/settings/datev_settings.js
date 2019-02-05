module.exports = {
    /**
     * @method getDatevSettings
     * @memberof SageOne
     * @instance
     * @description
     * Fetches datev settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/datev_settings Sage API}
     * @param {Object} [options]
     */
    getDatevSettings(options) {
        return this.makeRequest('GET', 'datev_settings', options);
    },

    /**
     * @method updateDatevSettings
     * @memberof SageOne
     * @instance
     * @description
     * Updates datev settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/datev_settings Sage API}
     * @param {Object} [fields]
     */
    updateDatevSettings(fields) {
        return this.makeRequest('PUT', 'datev_settings', { datev_settings: fields });
    },
};
