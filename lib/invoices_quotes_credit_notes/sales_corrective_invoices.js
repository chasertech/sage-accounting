module.exports = {
    /**
     * @method getSalesCorrectiveInvoices
     * @method createRelease
     * @memberof SageOne
     * @instance
     * Fetches sales corrective invoices.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices Sage API}
     * @param {Object} [options]
     */
    getSalesCorrectiveInvoices(options) {
        return this.makeRequest('GET', 'sales_corrective_invoices', options);
    },

    /**
     * @method getSalesCorrectiveInvoice
     * @method createRelease
     * @memberof SageOne
     * @instance
     * Fetches one sales corrective invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getSalesCorrectiveInvoice(key, options) {
        const resource = `sales_corrective_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesCorrectiveInvoice
     * @method createRelease
     * @memberof SageOne
     * @instance
     * Creates a sales corrective invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices Sage API}
     * @param {Object} fields
     */
    createSalesCorrectiveInvoice(fields) {
        return this.makeRequest('POST', 'sales_corrective_invoices', { sales_corrective_invoice: fields });
    },

    /**
     * @method updateSalesCorrectiveInvoice
     * @method createRelease
     * @memberof SageOne
     * @instance
     * Updates a sales corrective invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_corrective_invoices Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateSalesCorrectiveInvoice(key, fields) {
        const resource = `sales_corrective_invoices/${key}`;
        return this.makeRequest('PUT', resource, { sales_corrective_invoice: fields });
    },

    /**
     * @method deleteSalesCorrectiveInvoice
     * @method createRelease
     * @memberof SageOne
     * @instance
     * Deletes a sales corrective invoice.
     * @param {string} key
     */
    deleteSalesCorrectiveInvoice(key) {
        const resource = `sales_corrective_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
