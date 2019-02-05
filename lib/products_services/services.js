module.exports = {
    /**
     * @method getServices
     * @memberof SageOne
     * @instance
     * @description
     * Fetches services.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services Sage API}
     * @param {Object} [options]
     */
    getServices(options) {
        return this.makeRequest('GET', 'services', options);
    },

    /**
     * @method getService
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one service.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getService(key, options) {
        const resource = `services/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createService
     * @memberof SageOne
     * @instance
     * @description
     * Creates one service.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services Sage API}
     * @param {Object} fields
     */
    createService(fields) {
        if (!fields.description || !fields.sales_ledger_account_id) {
            throw new Error('Fields "description" and "sales_ledger_account_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services_service');
        }
        return this.makeRequest('POST', 'services', { service: fields });
    },

    /**
     * @method updateService
     * @memberof SageOne
     * @instance
     * @description
     * Updates a service.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/services Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateService(key, fields) {
        const resource = `services/${key}`;
        return this.makeRequest('PUT', resource, { service: fields });
    },

    /**
     * @method deleteService
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a service.
     * @param {string} key
     */
    deleteService(key) {
        const resource = `services/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
