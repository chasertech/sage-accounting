module.exports = {
    getCountries(options) {
        return this.makeRequest('GET', 'countries', options);
    },

    getCountry(key, options) {
        const resource = `countries/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
