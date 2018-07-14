module.exports = {
    getBankOpeningBalances(options) {
        return this.makeRequest('GET', 'bank_opening_balances', options);
    },

    getBankOpeningBalance(key, options) {
        const resource = `bank_opening_balances/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances_bank_opening_balance
    createBankOpeningBalance(fields) {
        if (!fields.bank_account_id || !fields.date ||
            !fields.debit || !fields.credit) {
            throw new Error('Fields "bank_account_id", "date", "debit" and "credit" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_opening_balances_bank_opening_balance');
        }
        return this.makeRequest('POST', 'bank_opening_balances', { bank_opening_balance: fields });
    },

    updateBankOpeningBalance(key, fields) {
        const resource = `bank_opening_balances/${key}`;
        return this.makeRequest('PUT', resource, { bank_opening_balance: fields });
    },

    deleteBankOpeningBalance(key) {
        const resource = `bank_opening_balances/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
