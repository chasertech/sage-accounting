module.exports = {
    /**
     * @method getPaymentMethods
     * @memberof SageOne
     * @instance
     * @description
     * Fetches payment methods.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/payment_methods Sage API}
     * @param {Object} [options]
     */
    getPaymentMethods(options) {
        return this.makeRequest('GET', 'payment_methods', options);
    },

    /**
     * @method getPaymentMethod
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a payment method.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/payment_methods Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getPaymentMethod(key, options) {
        const resource = `payment_methods/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
