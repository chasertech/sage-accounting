/**
 * Business Activity Types
 * @module SageOne
 */
module.exports = {
    /**
     * Fetches business activity types.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_activity_types
     * @param {Object} options
     */
    getBusinessActivityTypes(options) {
        return this.makeRequest('GET', 'business_activity_types', options);
    },

    /**
     * Fetches one business activity type.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_activity_types
     * @param {string} key
     * @param {Object} options
     */
    getBusinessActivityType(key, options) {
        const resource = `business_activity_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
