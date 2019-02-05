module.exports = {
    /**
     * @method getLedgerAccountOpeningBalances
     * @memberof SageOne
     * @instance
     * @description
     * Fetches ledger account opening balances.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances Sage API}
     * @param {Object} [options]
     */
    getLedgerAccountOpeningBalances(options) {
        return this.makeRequest('GET', 'ledger_account_opening_balances', options);
    },

    /**
     * @method getLedgerAccountOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a ledger account opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getLedgerAccountOpeningBalance(key, options) {
        const resource = `ledger_account_opening_balances/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createLedgerAccountOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Creates a ledger account opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances Sage API}
     * @param {Object} fields
     */
    createLedgerAccountOpeningBalance(fields) {
        if (!fields.ledger_account_id || !fields.debit || !fields.credit) {
            throw new Error('Fields "ledger_account_id", "debit" and "credit" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances_ledger_account_opening_balance');
        }
        return this.makeRequest('POST', 'ledger_account_opening_balances', { ledger_account_opening_balance: fields });
    },

    /**
     * @method updateLedgerAccountOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Updates a ledger account opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateLedgerAccountOpeningBalance(key, fields) {
        const resource = `ledger_account_opening_balances/${key}`;
        return this.makeRequest('PUT', resource, { ledger_account_opening_balance: fields });
    },

    /**
     * @method deleteLedgerAccountOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a ledger account opening balance.
     * @param {string} key
     * @param {Object} [options]
     */
    deleteLedgerAccountOpeningBalance(key) {
        const resource = `ledger_account_opening_balances/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
