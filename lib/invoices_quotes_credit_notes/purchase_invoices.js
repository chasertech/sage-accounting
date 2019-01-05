/**
 * Purchase Invoices
 * @module SageOne
 */
module.exports = {
    /**
     * @method getPurchaseInvoices
     * Fetches purchase invoices.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseInvoices(options) {
        return this.makeRequest('GET', 'purchase_invoices', options);
    },

    /**
     * @method getPurchaseInvoice
     * Fetches one purchase invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseInvoice(key, options) {
        const resource = `purchase_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseInvoice
     * Creates a purchase invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices
     * @param {Object} fields
     * @returns {Promise}
     */
    createPurchaseInvoice(fields) {
        if (!fields.contact_id || !fields.date || !fields.due_date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date", "due_date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices_purchase_invoice');
        }
        return this.makeRequest('POST', 'purchase_invoices', { purchase_invoice: fields });
    },

    /**
     * @method updatePurchaseInvoice
     * Updates a purchase invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_invoices
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updatePurchaseInvoice(key, fields) {
        const resource = `purchase_invoices/${key}`;
        return this.makeRequest('PUT', resource, { purchase_invoice: fields });
    },

    /**
     * @method deletePurchaseInvoice
     * Deletes a purchase invoice.
     * @param {Object} fields
     * @returns {Promise}
     */
    deletePurchaseInvoice(key) {
        const resource = `purchase_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
