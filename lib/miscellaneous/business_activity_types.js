module.exports = {
    /**
     * @method getBusinessActivityTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches business activity types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_activity_types Sage API}
     * @param {Object} options
     */
    getBusinessActivityTypes(options) {
        return this.makeRequest('GET', 'business_activity_types', options);
    },

    /**
     * @method getBusinessActivityType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one business activity type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_activity_types Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getBusinessActivityType(key, options) {
        const resource = `business_activity_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
