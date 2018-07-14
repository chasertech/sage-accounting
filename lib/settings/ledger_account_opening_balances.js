module.exports = {
    getLedgerAccountOpeningBalances(options) {
        return this.makeRequest('GET', 'ledger_account_opening_balances', options);
    },

    getLedgerAccountOpeningBalance(key, options) {
        const resource = `ledger_account_opening_balances/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    //https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances_ledger_account_opening_balance
    createLedgerAccountOpeningBalance(fields) {
        if (!fields.ledger_account_id || !fields.debit || !fields.credit) {
            throw new Error('Fields "ledger_account_id", "debit" and "credit" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_opening_balances_ledger_account_opening_balance');
        }
        return this.makeRequest('POST', 'ledger_account_opening_balances', { ledger_account_opening_balance: fields });
    },

    updateLedgerAccountOpeningBalance(key, fields) {
        const resource = `ledger_account_opening_balances/${key}`;
        return this.makeRequest('PUT', resource, { ledger_account_opening_balance: fields });
    },

    deleteLedgerAccountOpeningBalance(key) {
        const resource = `ledger_account_opening_balances/${key}`;
        return this.makeRequest('DELETE', resource);
    },
}
