module.exports = {
    /**
     * @method getBusinessRelationships
     * @memberof SageOne
     * @instance
     * @description
     * Retrieves businesses available for the current user
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/business_relationships Sage API}
     */
    getBusinessRelationships() {
        return this.makeCoreRequest('business_relationships');
    },
};
