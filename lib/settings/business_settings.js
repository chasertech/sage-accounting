module.exports = {
    getBusinessSettings(options) {
        return this.makeRequest('GET', 'business_settings', options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/business_settings_business_settings
    updateBusinessSettings(fields) {
        return this.makeRequest('PUT', 'business_settings', { business_settings: fields });
    },
};
