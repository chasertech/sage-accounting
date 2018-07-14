module.exports = {
    getTaxSchemes(options) {
        return this.makeRequest('GET', 'tax_schemes', options);
    },

    getTaxScheme(key, options) {
        const resource = `tax_schemes/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
