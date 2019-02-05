module.exports = {
    /**
     * @method getBankReconciliations
     * @memberof SageOne
     * @instance
     * @description
     * Fetches bank reconciliations.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations Sage API}
     * @param {Object} options
     */
    getBankReconciliations(options) {
        return this.makeRequest('GET', 'bank_reconciliations', options);
    },

    /**
     * @method getBankReconciliations
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a bank reconciliation.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getBankReconciliation(key, options) {
        const resource = `bank_reconciliations/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method getBankReconciliations
     * @memberof SageOne
     * @instance
     * @description
     * Creates a bank reconciliation.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations Sage API}
     * @param {Object} fields
     */
    createBankReconciliation(fields = {}) {
        if (!fields.bank_account_id) {
            throw new Error('Field "bank_account_id" is mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations_bank_reconciliation');
        }
        return this.makeRequest('POST', 'bank_reconciliations', { bank_reconciliation: fields });
    },

    /**
     * @method getBankReconciliations
     * @memberof SageOne
     * @instance
     * @description
     * Updates a bank reconciliation.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateBankReconciliation(key, fields) {
        const resource = `bank_reconciliations/${key}`;
        return this.makeRequest('PUT', resource, { bank_reconciliation: fields });
    },
};
