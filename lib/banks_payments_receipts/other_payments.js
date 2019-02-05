module.exports = {
    /**
     * @method getOtherPayments
     * @memberof SageOne
     * @instance
     * @description
     * Fetches other payments.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments Sage API}
     * @param {Object} options
     */
    getOtherPayments(options) {
        return this.makeRequest('GET', 'other_payments', options);
    },

    /**
     * @method getOtherPayment
     * @memberof SageOne
     * @instance
     * @description
     * Fetches an other payment.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getOtherPayment(key, options) {
        const resource = `other_payments/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates an other payment.
     * @method createOtherPayment
     * @memberof SageOne
     * @instance
     * @description
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments Sage API}
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
     * @method updateOtherPayment
     * @memberof SageOne
     * @instance
     * @description
     * Updates an other payment.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/other_payments Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateOtherPayment(key, fields) {
        const resource = `other_payments/${key}`;
        return this.makeRequest('PUT', resource, { other_payment: fields });
    },

    /**
     * @method deleteOtherPayment
     * @memberof SageOne
     * @instance
     * @description
     * Deletes an other payment.
     * @param {string} key
     */
    deleteOtherPayment(key) {
        const resource = `other_payments/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
