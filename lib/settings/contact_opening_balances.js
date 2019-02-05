/**
     * @method getContactOpeningBalanceType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact opening balance types
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
module.exports = {
    /**
     * @method getContactOpeningBalances
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contact opening balances.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance Sage API}
     * @param {Object} [options]
     */
    getContactOpeningBalances(options) {
        return this.makeRequest('GET', 'contact_opening_balances', options);
    },

    /**
     * @method getContactOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getContactOpeningBalance(key, options) {
        const resource = `contact_opening_balances/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createContactOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Creates a contact opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance Sage API}
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
     * @method updateContactOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Creates a contact opening balance.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_opening_balances_contact_opening_balance Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateContactOpeningBalance(key, fields) {
        const resource = `contact_opening_balances/${key}`;
        return this.makeRequest('PUT', resource, { contact_opening_balance: fields });
    },

    /**
     * @method updateContactOpeningBalance
     * @memberof SageOne
     * @instance
     * @description
     * Deletes one contact opening balance.
     * @param {string} key
     */
    deleteContactOpeningBalance(key) {
        const resource = `contact_opening_balances/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
