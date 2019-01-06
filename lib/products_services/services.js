/**
 * Services
 * @module SageOne
 */
module.exports = {
    /**
     * Fetches service rate types.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services
     * @param {Object} options
     */
    getServices(options) {
        return this.makeRequest('GET', 'services', options);
    },

    /**
     * Fetches one service rate type.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services
     * @param {string} key
     * @param {Object} options
     */
    getService(key, options) {
        const resource = `services/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one service rate type.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services
     * @param {Object} fields
     */
    createService(fields) {
        if (!fields.description || !fields.sales_ledger_account_id) {
            throw new Error('Fields "description" and "sales_ledger_account_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services_service');
        }
        return this.makeRequest('POST', 'services', { service: fields });
    },

    /**
     * Updates one service rate type.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services
     * @param {string} key
     * @param {Object} options
     */
    updateService(key, fields) {
        const resource = `services/${key}`;
        return this.makeRequest('PUT', resource, { service: fields });
    },

    /**
     * Deletes one service rate type.
     * @param {string} key
     */
    deleteService(key) {
        const resource = `services/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
