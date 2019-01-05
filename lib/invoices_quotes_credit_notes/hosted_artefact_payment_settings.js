/**
 * Hosted Artefact Payment Setting
 * @module SageOne
 */
module.exports = {
    /**
     * @method getHostedArtefactPaymentSettings
     * Fetches hosted artefact payment settings.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings
     * @param {Object} [options]
     * @returns {Promise}
     */
    getHostedArtefactPaymentSettings(options) {
        return this.makeRequest('GET', 'hosted_artefact_payment_settings', options);
    },

    /**
     * @method getHostedArtefactPaymentSetting
     * Fetches one hosted artefact payment setting.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getHostedArtefactPaymentSetting(key, options) {
        const resource = `hosted_artefact_payment_settings/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createHostedArtefactPaymentSetting
     * Creates a hosted artefact payment setting.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/hosted_artefact_payment_settings
     * @param {Object} fields
     * @returns {Promise}
     */
    createHostedArtefactPaymentSetting(fields) {
        return this.makeRequest('POST', 'hosted_artefact_payment_settings', { hosted_artefact_payment_setting: fields });
    },

    /**
     * @method updateHostedArtefactPaymentSetting
     * Updates a hosted artefact payment setting.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateHostedArtefactPaymentSetting(key, fields) {
        const resource = `hosted_artefact_payment_settings/${key}`;
        return this.makeRequest('PUT', resource, { hosted_artefact_payment_setting: fields });
    },

    /**
     * @method deleteHostedArtefactPaymentSetting
     * Deletes a hosted artefact payment setting.
     * @param {String} key
     * @returns {Promise}
     */
    deleteHostedArtefactPaymentSetting(key) {
        const resource = `hosted_artefact_payment_settings/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
