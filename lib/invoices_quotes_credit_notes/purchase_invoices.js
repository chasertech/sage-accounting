module.exports = {
    /**
     * @method getPurchaseInvoices
     * @memberof SageOne
     * @instance
     * @description
     * Fetches purchase invoices.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices Sage API}
     * @param {Object} [options]
     */
    getPurchaseInvoices(options) {
        return this.makeRequest('GET', 'purchase_invoices', options);
    },

    /**
     * @method getPurchaseInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a purchase invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getPurchaseInvoice(key, options) {
        const resource = `purchase_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Creates a purchase invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices Sage API}
     * @param {Object} fields
     */
    createPurchaseInvoice(fields) {
        if (!fields.contact_id || !fields.date || !fields.due_date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date", "due_date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices_purchase_invoice');
        }
        return this.makeRequest('POST', 'purchase_invoices', { purchase_invoice: fields });
    },

    /**
     * @method updatePurchaseInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Updates a purchase invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updatePurchaseInvoice(key, fields) {
        const resource = `purchase_invoices/${key}`;
        return this.makeRequest('PUT', resource, { purchase_invoice: fields });
    },

    /**
     * @method deletePurchaseInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a purchase invoice.
     * @param {string} key
     */
    deletePurchaseInvoice(key) {
        const resource = `purchase_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
