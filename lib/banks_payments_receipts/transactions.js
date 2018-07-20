module.exports = {
    /**
     * Fetches bank accounts.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/transactions
     */
    getTransactions(options) {
        return this.makeRequest('GET', 'transactions', options);
    },

    /**
     * Fetches a transaction
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/transactions
     * @param {string} key
     * @param {Object} options
     */
    getTransaction(key, options) {
        const resource = `transactions/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
