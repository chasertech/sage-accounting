module.exports = {
    /**
     * @method getHostedArtefactPaymentSettings
     * @memberof SageOne
     * @instance
     * @description
     * Fetches hosted artefact payment settings.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings Sage API}
     * @param {Object} [options]
     */
    getHostedArtefactPaymentSettings(options) {
        return this.makeRequest('GET', 'hosted_artefact_payment_settings', options);
    },

    /**
     * @method getHostedArtefactPaymentSetting
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a hosted artefact payment setting.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getHostedArtefactPaymentSetting(key, options) {
        const resource = `hosted_artefact_payment_settings/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createHostedArtefactPaymentSetting
     * @memberof SageOne
     * @instance
     * @description
     * Creates a hosted artefact payment setting.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings Sage API}
     * @param {Object} fields
     */
    createHostedArtefactPaymentSetting(fields) {
        return this.makeRequest('POST', 'hosted_artefact_payment_settings', { hosted_artefact_payment_setting: fields });
    },

    /**
     * @method updateHostedArtefactPaymentSetting
     * @memberof SageOne
     * @instance
     * @description
     * Updates a hosted artefact payment setting.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateHostedArtefactPaymentSetting(key, fields) {
        const resource = `hosted_artefact_payment_settings/${key}`;
        return this.makeRequest('PUT', resource, { hosted_artefact_payment_setting: fields });
    },

    /**
     * @method deleteHostedArtefactPaymentSetting
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a hosted artefact payment setting.
     * @param {string} key
     */
    deleteHostedArtefactPaymentSetting(key) {
        const resource = `hosted_artefact_payment_settings/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
