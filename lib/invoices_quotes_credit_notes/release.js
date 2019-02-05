module.exports = {
    /**
     * @method createRelease
     * @memberof SageOne
     * @instance
     * @description
     * Creates a release credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/release Sage API}
     * @param {string} salesInvoiceKey
     * @param {Object} fields
     */
    createRelease(salesInvoiceKey, fields) {
        const resource = `sales_invoices/${salesInvoiceKey}/release`;
        return this.makeRequest('POST', resource, { release: fields });
    },
};
