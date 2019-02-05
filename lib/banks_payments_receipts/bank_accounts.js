module.exports = {
    /**
     * @method getBankAccounts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches bank accounts.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts Sage API}
     * @param {Object} [options]
     */
    getBankAccounts(options) {
        return this.makeRequest('GET', 'bank_accounts', options);
    },

    /**
     * @method getBankAccount
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a bank account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getBankAccount(key, options) {
        const resource = `bank_accounts/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createBankAccount
     * @memberof SageOne
     * @instance
     * @description
     * Creates a bank account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts Sage API}
     * @param {Object} fields
     */
    createBankAccount(fields) {
        if (!fields.bank_account_type_id || !fields.bank_account_details) {
            throw new Error('Fields "bank_account_type_id" and "bank_account_details" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts_bank_account');
        }
        return this.makeRequest('POST', 'bank_accounts', { bank_account: fields });
    },

    /**
     * @method updateBankAccount
     * @memberof SageOne
     * @instance
     * @description
     * Updates a bank account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateBankAccount(key, fields) {
        const resource = `bank_accounts/${key}`;
        return this.makeRequest('PUT', resource, { bank_account: fields });
    },

    /**
     * @method deleteBankAccount
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a bank account.
     * @param {string} key
     */
    deleteBankAccount(key) {
        const resource = `bank_accounts/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
