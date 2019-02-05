module.exports = {
    /**
     * @method getLedgerAccounts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches ledger accounts.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts Sage API}
     * @param {Object} [options]
     */
    getLedgerAccounts(options) {
        return this.makeRequest('GET', 'ledger_accounts', options);
    },

    /**
     * @method getLedgerAccount
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one ledger account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getLedgerAccount(key, options) {
        const resource = `ledger_accounts/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createLedgerAccount
     * @memberof SageOne
     * @instance
     * @description
     * Creates a ledger account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts Sage API}
     * @param {Object} fields
     */
    createLedgerAccount(fields) {
        const ledgerAccount = {
            ...fields,
            included_in_chart: !!fields.included_in_chart,
        };
        if (!ledgerAccount.ledger_account_type_id || !ledgerAccount.name ||
            !ledgerAccount.display_name || !ledgerAccount.nominal_code) {
            throw new Error('Fields "ledger_account_type_id", "name", "display_name" and "nominal_code" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts_ledger_account');
        }

        return this.makeRequest('POST', 'ledger_accounts', { ledger_account: fields });
    },

    /**
     * @method updateLedgerAccount
     * @memberof SageOne
     * @instance
     * @description
     * Updates a ledger account.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateLedgerAccount(key, fields) {
        const resource = `ledger_accounts/${key}`;
        return this.makeRequest('PUT', resource, { ledger_account: fields });
    },

    /**
     * @method deleteLedgerAccount
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a ledger account.
     * @param {string} key
     */
    deleteLedgerAccount(key) {
        const resource = `ledger_accounts/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
