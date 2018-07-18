/**
 * Sales Invoices
 * @module SageOne
 */
module.exports = {
    /**
     * @method getSalesInvoices
     * Fetches sales invoices.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesInvoices(options) {
        return this.makeRequest('GET', 'sales_invoices', options);
    },

    /**
     * @method getSalesInvoice
     * Fetches one sales invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesInvoice(key, options) {
        const resource = `sales_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesInvoice
     * Creates a sales invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices
     * @param {Object} fields
     * @returns {Promise}
     */
    createSalesInvoice(fields) {
        if (!fields.contact_id || !fields.date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices_sales_invoice');
        }

        return this.makeRequest('POST', 'sales_invoices', { sales_invoice: fields });
    },

    /**
     * @method updateSalesInvoice
     * Updates a sales invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateSalesInvoice(key, fields) {
        const resource = `sales_invoices/${key}`;
        return this.makeRequest('PUT', resource, { sales_invoice: fields });
    },

    /**
     * @method deleteSalesInvoice
     * Deletes a sales invoice.
     * @param {Object} fields
     * @returns {Promise}
     */
    deleteSalesInvoice(key) {
        const resource = `sales_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
