module.exports = {
    // https://developer.columbus.sage.com/docs#/uki/sageone/core/v3/business
    getBusiness() {
        return this.makeCoreRequest('business');
    }
}
