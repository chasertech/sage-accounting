module.exports = {
    /**
     * @method getBankTransfers
     * @memberof SageOne
     * @instance
     * @description
     * Fetches bank transfers.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_transfers Sage API}
     * @param {Object} options
     */
    getBankTransfers(options) {
        return this.makeRequest('GET', 'bank_transfers', options);
    },

    /**
     * @method getBankTransfer
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a bank transfer.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_transfers Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getBankTransfer(key, options) {
        const resource = `bank_transfers/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createBankTransfer
     * @memberof SageOne
     * @instance
     * @description
     * Creates a bank reconciliation.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_transfers Sage API}
     * @param {Object} fields
     */
    createBankTransfer(fields) {
        if (!fields.from_bank_account_id || !fields.to_bank_account_id ||
         !fields.date || !fields.amount) {
            throw new Error('Fields "from_bank_account_id", "to_bank_account_id", "date" and "amount" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_transfers_bank_transfer');
        }

        return this.makeRequest('POST', 'bank_transfers', { bank_transfer: fields });
    },

    /**
     * @method updateBankTransfer
     * @memberof SageOne
     * @instance
     * @description
     * Updates a bank reconciliation.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/bank_transfers Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateBankTransfer(key, fields) {
        const resource = `bank_transfers/${key}`;
        return this.makeRequest('PUT', resource, { bank_transfer: fields });
    },

    /**
     * * @method deleteBankTransfer
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a bank deposit.
     * @param {string} key
     */
    deleteBankTransfer(key) {
        const resource = `bank_transfers/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
