/**
 * Business Relationships
 * @module SageOne
 */
module.exports = {
    /**
     * @method getBusinessRelationships
     * Retrieves businesses available for the current user
     * Reference: https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/business_relationships
     */
    getBusinessRelationships() {
        return this.makeCoreRequest('business_relationships');
    },
};
