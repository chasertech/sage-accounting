module.exports = {
    /**
     * @method getBusinessTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches business types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_types Sage API}
     * @param {Object} options
     */
    getBusinessTypes(options) {
        return this.makeRequest('GET', 'business_types', options);
    },

    /**
     * @method getBusinessType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one business type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_types Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getBusinessType(key, options) {
        const resource = `business_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
