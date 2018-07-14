module.exports = {
    getLedgerAccountTypes(options) {
        return this.makeRequest('GET', 'ledger_account_types', options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_account_types_journal_code
    getLedgerAccountType(key, options) {
        const resource = `ledger_account_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
