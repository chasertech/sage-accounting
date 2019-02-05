module.exports = {
    /**
     * @method getTransactionTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches transaction types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/transaction_types Sage API}
     * @param {Object} [options]
     */
    getTransactionTypes(options) {
        return this.makeRequest('GET', 'transaction_types', options);
    },

    /**
     * @method getTaxType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a transaction type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/transaction_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getTransactionType(key, options) {
        const resource = `transaction_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
