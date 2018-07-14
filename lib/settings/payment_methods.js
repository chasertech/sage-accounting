module.exports = {
    getPaymentMethods(options) {
        return this.makeRequest('GET', 'payment_methods', options);
    },

    getPaymentMethod(key, options) {
        const resource = `payment_methods/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
