/**
 * User
 * @module SageOne
 */
module.exports = {
    /**
     * @method getUser
     * Retrieves the user
     * Reference: https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/user
     */
    getUser() {
        return this.makeCoreRequest('user');
    },
};
