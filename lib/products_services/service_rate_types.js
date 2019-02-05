module.exports = {
    /**
     * @method getServiceRateTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches service rate types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/service_rate_types Sage API}
     * @param {Object} [options]
     */
    getServiceRateTypes(options) {
        return this.makeRequest('GET', 'service_rate_types', options);
    },

    /**
     * @method getServiceRateType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a service rate type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/service_rate_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getServiceRateType(key, options) {
        const resource = `service_rate_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createServiceRateType
     * @memberof SageOne
     * @instance
     * @description
     * Creates one service rate type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/service_rate_types Sage API}
     * @param {Object} fields
     */
    createServiceRateType(fields) {
        if (!fields.name || fields.active === undefined) {
            throw new Error('Fields "active" and "active" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/service_rate_types_service_rate_type');
        }
        return this.makeRequest('POST', 'service_rate_types', { service_rate_type: fields });
    },

    /**
     * @method updateServiceRateType
     * @memberof SageOne
     * @instance
     * @description
     * Updates a service rate type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/service_rate_types Sage API}
     * @param {string} key
     * @param {Object} options
     */
    updateServiceRateType(key, fields) {
        const resource = `service_rate_types/${key}`;
        return this.makeRequest('PUT', resource, { service_rate_type: fields });
    },

    /**
     * @method deleteServiceRateType
     * @memberof SageOne
     * @instance
     * @description
     * Deletes one service rate type.
     * @param {string} key
     */
    deleteServiceRateType(key) {
        const resource = `service_rate_types/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
