module.exports = {
    /**
     * @method getContactPayments
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contact payments.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments Sage API}
     * @param {Object} options
     */
    getContactPayments(options) {
        return this.makeRequest('GET', 'contact_payments', options);
    },

    /**
     * @method getContactPayment
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact payment.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getContactPayment(key, options) {
        const resource = `contact_payments/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createContactPayment
     * @memberof SageOne
     * @instance
     * @description
     * Creates a contact payment.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments Sage API}
     * @param {Object} fields
     */
    createContactPayment(fields) {
        if (!fields.transaction_type_id || !fields.contact_id ||
            !fields.bank_account_id || !fields.date || !fields.total_amount) {
            throw new Error('Fields "transaction_type_id", "contact_id", "bank_account_id", "date" and "total_amount" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments_contact_payment');
        }
        return this.makeRequest('POST', 'contact_payments', { contact_payment: fields });
    },

    /**
     * @method updateContactPayment
     * @memberof SageOne
     * @instance
     * @description
     * Updates a contact payment.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments Sage API}
     * @param {string} key
     * @param {Object} options
     */
    updateContactPayment(key, fields) {
        const resource = `contact_payments/${key}`;
        return this.makeRequest('PUT', resource, { contact_payment: fields });
    },

    /**
     * @method deleteContactPayment
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a contact payment.
     * @param {string} key
     */
    deleteContactPayment(key) {
        const resource = `contact_payments/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
