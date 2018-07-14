module.exports = {
    /**
     * Fetches bank transfers.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments
     * @param {Object} options
     */
    getOtherPayments(options) {
        return this.makeRequest('GET', 'other_payments', options);
    },

    /**
     * Fetches a bank transfer.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments
     * @param {string} key
     * @param {Object} options
     */
    getOtherPayment(key, options) {
        const resource = `other_payments/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates a bank reconciliation.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments
     * @param {Object} fields
     */
    createOtherPayment(fields) {
        if (!fields.transaction_type_id || !fields.date ||
        !fields.total_amount || !fields.payment_lines) {
            throw new Error('Fields "transaction_type_id", "date", "total_amount" and "payment_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments_other_payment');
        }

        return this.makeRequest('POST', 'other_payments', { other_payment: fields });
    },

    /**
     * Updates a bank reconciliation.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments
     * @param {string} key
     * @param {Object} fields
     */
    updateOtherPayment(key, fields) {
        const resource = `other_payments/${key}`;
        return this.makeRequest('PUT', resource, { other_payment: fields });
    },

    /**
     * Deletes a bank deposit.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments
     * @param {string} key
     */
    deleteOtherPayment(key) {
        const resource = `other_payments/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
