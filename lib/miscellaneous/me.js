module.exports = {
    /**
     * @method getMe
     * @memberof SageOne
     * @instance
     * @description
     * Retrieves me
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/me Sage API}
     */
    getMe() {
        return this.makeCoreRequest('me');
    },
};
