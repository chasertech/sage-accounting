/**
 * Business Types
 * @module SageOne
 */
module.exports = {
    /**
     * Fetches business types.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_types
     * @param {Object} options
     */
    getBusinessTypes(options) {
        return this.makeRequest('GET', 'business_types', options);
    },

    /**
     * Fetches one business type.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_types
     * @param {string} key
     * @param {Object} options
     */
    getBusinessType(key, options) {
        const resource = `business_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
