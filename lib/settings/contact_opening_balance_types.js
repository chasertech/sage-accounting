module.exports = {
    getContactOpeningBalanceTypes(options) {
        return this.makeRequest('GET', 'contact_opening_balance_types', options);
    },

    getContactOpeningBalanceType(key, options) {
        const resource = `contact_opening_balance_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
