/**
 * Sales Corrective Invoices
 * @module SageOne
 */
module.exports = {
    /**
     * @method getSalesCorrectiveInvoices
     * Fetches sales corrective invoices.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesCorrectiveInvoices(options) {
        return this.makeRequest('GET', 'sales_corrective_invoices', options);
    },

    /**
     * @method getSalesCorrectiveInvoice
     * Fetches one sales corrective invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesCorrectiveInvoice(key, options) {
        const resource = `sales_corrective_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesCorrectiveInvoice
     * Creates a sales corrective invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices
     * @param {Object} fields
     * @returns {Promise}
     */
    createSalesCorrectiveInvoice(fields) {
        return this.makeRequest('POST', 'sales_corrective_invoices', { sales_corrective_invoice: fields });
    },

    /**
     * @method updateSalesCorrectiveInvoice
     * Updates a sales corrective invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateSalesCorrectiveInvoice(key, fields) {
        const resource = `sales_corrective_invoices/${key}`;
        return this.makeRequest('PUT', resource, { sales_corrective_invoice: fields });
    },

    /**
     * @method deleteSalesCorrectiveInvoice
     * Deletes a sales corrective invoice.
     * @param {Object} fields
     * @returns {Promise}
     */
    deleteSalesCorrectiveInvoice(key) {
        const resource = `sales_corrective_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
