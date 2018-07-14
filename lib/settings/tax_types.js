module.exports = {
    getTaxTypes(options) {
        return this.makeRequest('GET', 'tax_types', options);
    },

    getTaxType(key, options) {
        const resource = `tax_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
