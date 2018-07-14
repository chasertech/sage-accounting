module.exports = {
    /**
    * Fetches bank reconciliations.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations
    * @param {Object} options
    */
    getBankReconciliations(options) {
        return this.makeRequest('GET', 'bank_reconciliations', options);
    },

    /**
    * Fetches a bank reconciliation.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations
    * @param {string} key
    * @param {Object} options
    */
    getBankReconciliation(key, options) {
        const resource = `bank_reconciliations/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
    * Creates a bank reconciliation.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations
    * @param {Object} fields
    */
    createBankReconciliation(fields) {
        if (!fields.bank_account_id) {
            throw new Error('Field "bank_account_id" is mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations_bank_reconciliation');
        }
        return this.makeRequest('POST', 'bank_reconciliations', { bank_reconciliation: fields });
    },

    /**
    * Updates a bank reconciliation.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_reconciliations
    * @param {string} key
    * @param {Object} fields
    */
    updateBankReconciliation(key, fields) {
        const resource = `bank_reconciliations/${key}`;
        return this.makeRequest('PUT', resource, { bank_reconciliation: fields });
    },
};
