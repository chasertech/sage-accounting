module.exports = {
    getCountryGroups(options) {
        return this.makeRequest('GET', 'country_groups', options);
    },

    getCountryGroup(key, options) {
        const resource = `country_groups/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
