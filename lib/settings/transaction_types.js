module.exports = {
    getTransactionTypes(options) {
        return this.makeRequest('GET', 'transaction_types', options);
    },

    getTransactionType(key, options) {
        const resource = `transaction_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
