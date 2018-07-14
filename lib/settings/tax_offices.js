module.exports = {
    getTaxOffices(options) {
        return this.makeRequest('GET', 'tax_offices', options);
    },

    getTaxOffice(key, options) {
        const resource = `tax_offices/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
