/**
 * Migration Tax Returns
 * @module SageOne
 */
module.exports = {
    /**
     * @method getMigrationTaxReturns
     * Fetches migration tax returns.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns
     * @param {Object} [options]
     * @returns {Promise}
     */
    getMigrationTaxReturns(options) {
        return this.makeRequest('GET', 'migration_tax_returns', options);
    },

    /**
     * @method getMigrationTaxReturn
     * Fetches one migration tax return.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getMigrationTaxReturn(key, options) {
        const resource = `migration_tax_returns/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createMigrationTaxReturn
     * Creates a ledger account.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns
     * @param {Object} fields
     * @returns {Promise}
     */
    createMigrationTaxReturn(fields) {
        if (!fields.from_date || !fields.to_date || !fields.total_amount ||
            !fields.tax_return_frequency_id) {
            throw new Error('Fields "from_date", "to_date", "total_amount" and "tax_return_frequency_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns_migration_tax_return');
        }

        return this.makeRequest('POST', 'migration_tax_returns', { migration_tax_return: fields });
    },
};
