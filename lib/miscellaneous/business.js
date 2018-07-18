/**
 * Business
 * @module SageOne
 */
module.exports = {
    /**
     * @method getBusiness
     * Retrieves organisation data
     * Reference: https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/business
     */
    getBusiness() {
        return this.makeCoreRequest('business');
    },
};
