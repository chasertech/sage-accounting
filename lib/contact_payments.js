module.exports = {
    getContactPayments(options) {
        return this.makeRequest('GET', 'contact_payments', options);
    },

    getContactPayment(key, options) {
        const resource = `contact_payments/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments_contact_payment
    createContactPayment(fields) {
        if (!fields.transaction_type_id || !fields.contact_id ||
            !fields.bank_account_id || !fields.date || !fields.total_amount) {
            throw new Error('Fields "transaction_type_id", "contact_id", "bank_account_id", "date" and "total_amount" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments_contact_payment');
        }
        return this.makeRequest('POST', 'contact_payments', { contact_payment: fields });
    },

    updateContactPayment(key, fields) {
        if (!fields.transaction_type_id || !fields.contact_id ||
            !fields.bank_account_id || !fields.date || !fields.total_amount) {
            throw new Error('Fields "transaction_type_id", "contact_id", "bank_account_id", "date" and "total_amount" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_payments_contact_payment');
        }
        const resource = `contact_payments/${key}`;
        return this.makeRequest('PUT', resource, { contact_payment: fields });
    },

    deleteContactPayment(key) {
        const resource = `contact_payments/${key}`;
        return this.makeRequest('PUT', resource);
    },
};
