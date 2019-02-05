module.exports = {
    /**
     * @method getContactOpeningBalanceTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contact opening balance types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balance_types Sage API}
     * @param {Object} [options]
     */
    getContactOpeningBalanceTypes(options) {
        return this.makeRequest('GET', 'contact_opening_balance_types', options);
    },

    /**
     * @method getContactOpeningBalanceType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact opening balance types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balance_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getContactOpeningBalanceType(key, options) {
        const resource = `contact_opening_balance_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
