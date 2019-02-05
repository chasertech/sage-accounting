module.exports = {
    /**
     * @method getSalesInvoices
     * @memberof SageOne
     * @instance
     * @description
     * Fetches sales invoices.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     */
    getSalesInvoices(options) {
        return this.makeRequest('GET', 'sales_invoices', options);
    },

    /**
     * @method getSalesInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one sales invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getSalesInvoice(key, options) {
        const resource = `sales_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method getSalesInvoicePDF
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one sales invoice's PDF in a base64 string.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     */
    getSalesInvoicePDF(key) {
        const resource = `sales_invoices/${key}`;
        return this.makePDFRequest(resource);
    },

    /**
     * @method createSalesInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Creates a sales invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {Object} fields
     */
    createSalesInvoice(fields) {
        if (!fields.contact_id || !fields.date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices_sales_invoice');
        }

        return this.makeRequest('POST', 'sales_invoices', { sales_invoice: fields });
    },

    /**
     * @method updateSalesInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Updates a sales invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateSalesInvoice(key, fields) {
        const resource = `sales_invoices/${key}`;
        return this.makeRequest('PUT', resource, { sales_invoice: fields });
    },

    /**
     * @method deleteSalesInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a sales invoice.
     * @param {string} key
     */
    deleteSalesInvoice(key) {
        const resource = `sales_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
