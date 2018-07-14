module.exports = {
    /**
    * Fetches bank deposits.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_deposits
    * @param {Object} options
    */
    getBankDeposits(options) {
        return this.makeRequest('GET', 'bank_deposits', options);
    },

    /**
    * Fetches a bank deposit.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_deposits
    * @param {string} key
    * @param {Object} options
    */
    getBankDeposit(key, options) {
        const resource = `bank_deposits/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
    * Creates a bank deposit.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_deposits
    * @param {Object} fields
    */
    createBankDeposit(fields) {
        if (!fields.from_bank_account_id || !fields.to_bank_account_id ||
        !fields.date || !fields.reference || !fields.cash_amount) {
            throw new Error('Fields "from_bank_account_id", "to_bank_account_id", "date", "reference" and "cash_amount" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_deposits_bank_deposit');
        }
        return this.makeRequest('POST', 'bank_deposits', { bank_deposit: fields });
    },

    /**
    * Updates a bank deposit.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_deposits
    * @param {string} key
    * @param {Object} fields
    */
    updateBankDeposit(key, fields) {
        const resource = `bank_deposits/${key}`;
        return this.makeRequest('PUT', resource, { bank_deposit: fields });
    },

    /**
    * Deletes a bank deposit.
    * For information on possible params:
    * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_deposits
    * @param {string} key
    */
    deleteBankDeposit(key) {
        const resource = `bank_deposits/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
