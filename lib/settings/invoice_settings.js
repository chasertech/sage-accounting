module.exports = {
    /**
     * @method getInvoiceSettings
     * @memberof SageOne
     * @instance
     * @description
     * Fetches invoice settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/invoice_settings Sage API}
     * @param {Object} [options]
     */
    getInvoiceSettings(options) {
        return this.makeRequest('GET', 'invoice_settings', options);
    },

    /**
     * @method updateInvoiceSettings
     * @memberof SageOne
     * @instance
     * @description
     * Updates invoice settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/invoice_settings Sage API}
     * @param {Object} fields
     */
    updateInvoiceSettings(fields) {
        return this.makeRequest('PUT', 'invoice_settings', { invoice_settings: fields });
    },
};
