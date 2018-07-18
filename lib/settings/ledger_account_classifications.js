module.exports = {
    getLedgerAccountClassifications(options) {
        return this.makeRequest('GET', 'ledger_account_classifications', options);
    },

    getLedgerAccountClassification(key, options) {
        const resource = `ledger_account_classifications/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
