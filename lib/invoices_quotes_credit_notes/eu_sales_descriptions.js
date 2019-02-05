module.exports = {
    /**
     * @method getEUSalesDescriptions
     * @memberof SageOne
     * @instance
     * @description
     * Fetches EU sales descriptions.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/eu_sales_descriptions Sage API}
     * @param {Object} [options]
     */
    getEUSalesDescriptions(options) {
        return this.makeRequest('GET', 'eu_sales_descriptions', options);
    },

    /**
     * @method getEUSalesDescription
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a EU sales description.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/eu_sales_descriptions Sage API}
     * @param {Object} [options]
     */
    getEUSalesDescription(key, options) {
        const resource = `eu_sales_descriptions/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
