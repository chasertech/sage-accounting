module.exports = {
    /**
     * @method getSalesEstimates
     * @memberof SageOne
     * @instance
     * @description
     * Fetches sales estimates.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates Sage API}
     * @param {Object} [options]
     */
    getSalesEstimates(options) {
        return this.makeRequest('GET', 'sales_estimates', options);
    },

    /**
     * @method getSalesEstimate
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one sales estimate.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getSalesEstimate(key, options) {
        const resource = `sales_estimates/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesEstimate
     * @memberof SageOne
     * @instance
     * @description
     * Creates a sales estimate.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates Sage API}
     * @param {Object} fields
     */
    createSalesEstimate(fields) {
        if (!fields.contact_id || !fields.date || !fields.expiry_date || !fields.estimate_lines) {
            throw new Error('Fields "contact_id", "date", "expiry_date" and "estimate_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates_sales_estimate');
        }
        return this.makeRequest('POST', 'sales_estimates', { sales_estimate: fields });
    },

    /**
     * @method updateSalesEstimate
     * @memberof SageOne
     * @instance
     * @description
     * Updates a sales estimate.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateSalesEstimate(key, fields) {
        const resource = `sales_estimates/${key}`;
        return this.makeRequest('PUT', resource, { sales_estimate: fields });
    },

    /**
     * @method deleteSalesEstimate
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a sales estimate.
     * @param {Object} fields
     */
    deleteSalesEstimate(key) {
        const resource = `sales_estimates/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
