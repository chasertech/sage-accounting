module.exports = {
    /**
     * @method getEmailSettings
     * @memberof SageOne
     * @instance
     * @description
     * Fetches email settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/email_settings Sage API}
     * @param {Object} [options]
     */
    getEmailSettings(options) {
        return this.makeRequest('GET', 'email_settings', options);
    },

    /**
     * @method updateEmailSettings
     * @memberof SageOne
     * @instance
     * @description
     * Updates email settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/email_settings Sage API}
     * @param {Object} fields
     */
    updateEmailSettings(fields) {
        return this.makeRequest('PUT', 'email_settings', { email_settings: fields });
    },
};
