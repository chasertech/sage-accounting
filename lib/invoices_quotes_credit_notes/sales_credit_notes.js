/**
 * Sales Credit Notes
 * @module SageOne
 */
module.exports = {
    /**
     * @method getSalesCreditNotes
     * Fetches sales credit notes.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesCreditNotes(options) {
        return this.makeRequest('GET', 'sales_credit_notes', options);
    },

    /**
     * @method getSalesCreditNote
     * Fetches one sales credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesCreditNote(key, options) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesCreditNote
     * Creates a sales credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes
     * @param {Object} fields
     * @returns {Promise}
     */
    createSalesCreditNote(fields) {
        if (!fields.contact_id || !fields.date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes_sales_credit_note');
        }

        return this.makeRequest('POST', 'sales_credit_notes', { sales_credit_notes: fields });
    },

    /**
     * @method updateSalesCreditNote
     * Updates a sales credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateSalesCreditNote(key, fields) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('PUT', resource, { sales_credit_notes: fields });
    },

    /**
     * @method deleteSalesCreditNote
     * Deletes a sales credit note.
     * @param {Object} fields
     * @returns {Promise}
     */
    deleteSalesCreditNote(key) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
