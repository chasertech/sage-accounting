module.exports = {
    /**
     * @method getBusiness
     * @memberof SageOne
     * @instance
     * @description
     * Retrieves organisation data
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/business Sage API}
     */
    getBusiness() {
        return this.makeCoreRequest('business');
    },
};
