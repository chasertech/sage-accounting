module.exports = {
    getCountriesOfRegistration(options) {
        return this.makeRequest('GET', 'countries_of_registration', options);
    },

    getCountryOfRegistration(key, options) {
        const resource = `countries_of_registration/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
