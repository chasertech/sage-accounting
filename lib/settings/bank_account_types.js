module.exports = {
    /**
     * @method getBankAccountTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches bank account types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_account_types Sage API}
     * @param {Object} [options]
     */
    getBankAccountTypes(options) {
        return this.makeRequest('GET', 'bank_account_types', options);
    },

    /**
     * @method getBankAccountType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a bank account type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_account_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getBankAccountType(key, options) {
        const resource = `bank_account_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
