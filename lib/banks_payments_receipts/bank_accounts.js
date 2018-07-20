module.exports = {
    /**
     * Fetches bank accounts.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts
     * @param {Object} options
     */
    getBankAccounts(options) {
        return this.makeRequest('GET', 'bank_accounts', options);
    },

    /**
     * Fetches a bank account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts
     * @param {string} key
     * @param {Object} options
     */
    getBankAccount(key, options) {
        const resource = `bank_accounts/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates a bank account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts
     * @param {Object} fields
     */
    createBankAccount(fields) {
        if (!fields.bank_account_type_id || !fields.bank_account_details) {
            throw new Error('Fields "bank_account_type_id" and "bank_account_details" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts_bank_account');
        }
        return this.makeRequest('POST', 'bank_accounts', { bank_account: fields });
    },

    /**
     * Updates a bank account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts
     * @param {string} key
     * @param {Object} fields
     */
    updateBankAccount(key, fields) {
        const resource = `bank_accounts/${key}`;
        return this.makeRequest('PUT', resource, { bank_account: fields });
    },

    /**
     * Deletes a bank account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_accounts
     * @param {string} key
     */
    deleteBankAccount(key) {
        const resource = `bank_accounts/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
