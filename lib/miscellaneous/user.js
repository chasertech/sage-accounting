module.exports = {
    /**
     * @method getUser
     * @memberof SageOne
     * @instance
     * @description
     * Retrieves the user
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/user Sage API}
     */
    getUser() {
        return this.makeCoreRequest('user');
    },
};
