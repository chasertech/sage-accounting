/**
 * Release
 * @module SageOne
 */
module.exports = {
    /**
     * @method createRelease
     * Creates a release credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/release
     * @param {String} salesInvoiceKey
     * @param {Object} fields
     * @returns {Promise}
     */
    createRelease(salesInvoiceKey, fields) {
        const resource = `sales_invoices/${salesInvoiceKey}/release`;
        return this.makeRequest('POST', resource, { release: fields });
    },
};
