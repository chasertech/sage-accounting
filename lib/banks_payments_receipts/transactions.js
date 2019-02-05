module.exports = {
    /**
     * @method getTransactions
     * @memberof SageOne
     * @instance
     * @description
     * Fetches transactions.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/transactions Sage API}
     * @param {Object} options
     */
    getTransactions(options) {
        return this.makeRequest('GET', 'transactions', options);
    },

    /**
     * @method getTransaction
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a transaction
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/transactions Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getTransaction(key, options) {
        const resource = `transactions/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
