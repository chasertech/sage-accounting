module.exports = {
    /**
     * @method getBankOpeningBalances
     * @memberof SageOne
     * @instance
     * @description
     * Fetches bank opening balances.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances Sage API}
     * @param {Object} [options]
     */
    getBankOpeningBalances(options) {
        return this.makeRequest('GET', 'bank_opening_balances', options);
    },

    /**
     * @method getBankOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a bank opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getBankOpeningBalance(key, options) {
        const resource = `bank_opening_balances/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createBankOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Creates a bank opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances Sage API}
     * @param {Object} fields
     */
    createBankOpeningBalance(fields) {
        if (!fields.bank_account_id || !fields.date ||
            !fields.debit || !fields.credit) {
            throw new Error('Fields "bank_account_id", "date", "debit" and "credit" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances_bank_opening_balance');
        }
        return this.makeRequest('POST', 'bank_opening_balances', { bank_opening_balance: fields });
    },

    /**
     * @method updateBankOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Updates a bank opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateBankOpeningBalance(key, fields) {
        const resource = `bank_opening_balances/${key}`;
        return this.makeRequest('PUT', resource, { bank_opening_balance: fields });
    },

    /**
     * @method deleteBankOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a bank opening balance.
     * @param {string} key
     */
    deleteBankOpeningBalance(key) {
        const resource = `bank_opening_balances/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
