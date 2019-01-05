/**
 * Sales Estimates
 * @module SageOne
 */
module.exports = {
    /**
     * @method getSalesEstimates
     * Fetches sales estimates.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesEstimates(options) {
        return this.makeRequest('GET', 'sales_estimates', options);
    },

    /**
     * @method getSalesEstimate
     * Fetches one sales estimate.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesEstimate(key, options) {
        const resource = `sales_estimates/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesEstimate
     * Creates a sales estimate.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates
     * @param {Object} fields
     * @returns {Promise}
     */
    createSalesEstimate(fields) {
        if (!fields.contact_id || !fields.date || !fields.expiry_date || !fields.estimate_lines) {
            throw new Error('Fields "contact_id", "date", "expiry_date" and "estimate_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates_sales_estimate');
        }
        return this.makeRequest('POST', 'sales_estimates', { sales_estimate: fields });
    },

    /**
     * @method updateSalesEstimate
     * Updates a sales estimate.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_estimates
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateSalesEstimate(key, fields) {
        const resource = `sales_estimates/${key}`;
        return this.makeRequest('PUT', resource, { sales_estimate: fields });
    },

    /**
     * @method deleteSalesEstimate
     * Deletes a sales estimate.
     * @param {Object} fields
     * @returns {Promise}
     */
    deleteSalesEstimate(key) {
        const resource = `sales_estimates/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
