module.exports = {
    /**

     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance
     * @param {Object} options
     */
    getContactOpeningBalances(options) {
        return this.makeRequest('GET', 'contact_opening_balances', options);
    },

    /**

     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance
     * @param {string} key
     * @param {Object} options
     */
    getContactOpeningBalance(key, options) {
        const resource = `contact_opening_balances/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**

     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance
     * @param {Object} fields
     */
    createContactOpeningBalance(fields) {
        if (!fields.contact_opening_balance_type_id || !fields.date || !fields.contact_id ||
            !fields.reference || !fields.total_amount) {
            throw new Error('Fields "contact_opening_balance_type_id", "date", "contact_id", "reference" and "total_amount" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance_contact');
        }
        return this.makeRequest('POST', 'contact_opening_balances', { contact_opening_balance: fields });
    },

    /**

     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance
     * @param {string} key
     * @param {Object} options
     */
    updateContactOpeningBalance(key, fields) {
        const resource = `contact_opening_balances/${key}`;
        return this.makeRequest('PUT', resource, { contact_opening_balance: fields });
    },

    /**
     * Deletes one contact.
     * @param {string} key
     */
    deleteContactOpeningBalance(key) {
        const resource = `contact_opening_balances/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
