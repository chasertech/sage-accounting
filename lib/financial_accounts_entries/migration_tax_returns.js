module.exports = {
    /**
     * @method getMigrationTaxReturns
     * @memberof SageOne
     * @instance
     * @description
     * Fetches migration tax returns.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns Sage API}
     * @param {Object} [options]
     */
    getMigrationTaxReturns(options) {
        return this.makeRequest('GET', 'migration_tax_returns', options);
    },

    /**
     * @method getMigrationTaxReturn
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a migration tax return.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getMigrationTaxReturn(key, options) {
        const resource = `migration_tax_returns/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createMigrationTaxReturn
     * @memberof SageOne
     * @instance
     * @description
     * Creates a migration tax returns.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns Sage API}
     * @param {Object} fields
     */
    createMigrationTaxReturn(fields) {
        if (!fields.from_date || !fields.to_date || !fields.total_amount ||
            !fields.tax_return_frequency_id) {
            throw new Error('Fields "from_date", "to_date", "total_amount" and "tax_return_frequency_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migration_tax_returns_migration_tax_return');
        }

        return this.makeRequest('POST', 'migration_tax_returns', { migration_tax_return: fields });
    },
};
