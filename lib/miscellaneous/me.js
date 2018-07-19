/**
 * Me
 * @module SageOne
 */
module.exports = {
    /**
     * @method getMe
     * Retrieves me
     * Reference: https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/me
     */
    getMe() {
        return this.makeCoreRequest('me');
    },
};
