module.exports = {
    getTaxRates(options) {
        return this.makeRequest('GET', 'tax_rates', options);
    },

    getTaxRate(key, options) {
        const resource = `tax_rates/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    createTaxRate(fields) {
        return this.makeRequest('POST', 'tax_rates', { tax_rate: fields });
    },

    updateTaxRate(key, fields) {
        const resource = `tax_rates/${key}`;
        return this.makeRequest('PUT', resource, { tax_rate: fields });
    },

    deleteTaxRate(key) {
        const resource = `tax_rates/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
