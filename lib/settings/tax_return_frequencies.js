module.exports = {
    getTaxReturnFrequencies(options) {
        return this.makeRequest('GET', 'tax_return_frequencies', options);
    },

    getTaxReturnFrequency(key, options) {
        const resource = `tax_return_frequencies/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
