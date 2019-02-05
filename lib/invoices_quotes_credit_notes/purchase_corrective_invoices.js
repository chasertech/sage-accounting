module.exports = {
    /**
     * @method getPurchaseCorrectiveInvoices
     * @memberof SageOne
     * @instance
     * @description
     * Fetches purchase corrective invoices.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices Sage API}
     * @param {Object} [options]
     */
    getPurchaseCorrectiveInvoices(options) {
        return this.makeRequest('GET', 'purchase_corrective_invoices', options);
    },

    /**
     * @method getPurchaseCorrectiveInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one purchase corrective invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getPurchaseCorrectiveInvoice(key, options) {
        const resource = `purchase_corrective_invoices/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseCorrectiveInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Creates a purchase corrective invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices Sage API}
     * @param {Object} fields
     */
    createPurchaseCorrectiveInvoice(fields) {
        return this.makeRequest('POST', 'purchase_corrective_invoices', { purchase_corrective_invoice: fields });
    },

    /**
     * @method updatePurchaseCorrectiveInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Updates a purchase corrective invoice.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_corrective_invoices Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updatePurchaseCorrectiveInvoice(key, fields) {
        const resource = `purchase_corrective_invoices/${key}`;
        return this.makeRequest('PUT', resource, { purchase_corrective_invoice: fields });
    },

    /**
     * @method deletePurchaseCorrectiveInvoice
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a purchase corrective invoice.
     * @param {string} key
     */
    deletePurchaseCorrectiveInvoice(key) {
        const resource = `purchase_corrective_invoices/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
