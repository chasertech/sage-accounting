module.exports = {
    getBankAccountTypes(options) {
        return this.makeRequest('GET', 'bank_account_types', options);
    },

    getBankAccountType(key, options) {
        const resource = `bank_account_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
