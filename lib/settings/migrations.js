module.exports = {
    /**
     * @method getMigrations
     * @memberof SageOne
     * @instance
     * @description
     * Fetches migrations.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migrations Sage API}
     * @param {Object} [options]
     */
    getMigrations(options) {
        return this.makeRequest('GET', 'migrations', options);
    },

    /**
     * @method updateMigrations
     * @memberof SageOne
     * @instance
     * @description
     * Updates migrations.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/migrations Sage API}
     * @param {Object} fields
     */
    updateMigrations(fields) {
        return this.makeRequest('PUT', 'migrations', { migrations: fields });
    },
};
