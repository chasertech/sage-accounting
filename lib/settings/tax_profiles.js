module.exports = {
    getTaxProfiles(options) {
        return this.makeRequest('GET', 'tax_profiles', options);
    },

    getTaxProfile(key, options) {
        const resource = `tax_profiles/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    updateTaxProfile(key, fields) {
        const resource = `tax_profiles/${key}`;
        return this.makeRequest('PUT', resource, { tax_profile: fields });
    }
};
