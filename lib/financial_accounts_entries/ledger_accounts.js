/**
 * Ledger Accounts
 * @module SageOne
 */
module.exports = {
    /**
     * @method getLedgerAccounts
     * Fetches ledger accounts.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts
     * @param {Object} [options]
     * @returns {Promise}
     */
    getLedgerAccounts(options) {
        return this.makeRequest('GET', 'ledger_accounts', options);
    },

    /**
     * @method getLedgerAccount
     * Fetches one ledger account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getLedgerAccount(key, options) {
        const resource = `ledger_accounts/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createLedgerAccount
     * Creates a ledger account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts
     * @param {Object} fields
     * @returns {Promise}
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
     * Updates a ledger account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/ledger_accounts
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateLedgerAccount(key, fields) {
        const resource = `ledger_accounts/${key}`;
        return this.makeRequest('PUT', resource, { ledger_account: fields });
    },

    /**
     * @method deleteLedgerAccount
     * Deletes a sales invoice.
     * @param {String} key
     * @returns {Promise}
     */
    deleteLedgerAccount(key) {
        const resource = `ledger_accounts/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
