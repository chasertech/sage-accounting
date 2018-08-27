/**
 * Purchase Corrective Invoices
 * @module SageOne
 */
module.exports = {
    /**
     * @method getPurchaseCorrectiveInvoices
     * Fetches purchase corrective invoices.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseCorrectiveInvoices(options) {
        return this.makeRequest('GET', 'purchase_corrective_invoices', options);
    },

    /**
     * @method getPurchaseCorrectiveInvoice
     * Fetches one purchase corrective invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseCorrectiveInvoice(key, options) {
        const resource = `purchase_corrective_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseCorrectiveInvoice
     * Creates a purchase corrective invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices
     * @param {Object} fields
     * @returns {Promise}
     */
    createPurchaseCorrectiveInvoice(fields) {
        return this.makeRequest('POST', 'purchase_corrective_invoices', { purchase_corrective_invoice: fields });
    },

    /**
     * @method updatePurchaseCorrectiveInvoice
     * Updates a purchase corrective invoice.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updatePurchaseCorrectiveInvoice(key, fields) {
        const resource = `purchase_corrective_invoices/${key}`;
        return this.makeRequest('PUT', resource, { purchase_corrective_invoice: fields });
    },

    /**
     * @method deletePurchaseCorrectiveInvoice
     * Deletes a purchase corrective invoice.
     * @param {Object} fields
     * @returns {Promise}
     */
    deletePurchaseCorrectiveInvoice(key) {
        const resource = `purchase_corrective_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
