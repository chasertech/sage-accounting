module.exports = {
    /**
     * @method getSalesCreditNotes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches sales credit notes.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes Sage API}
     * @param {Object} [options]
     */
    getSalesCreditNotes(options) {
        return this.makeRequest('GET', 'sales_credit_notes', options);
    },

    /**
     * @method getSalesCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one sales credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getSalesCreditNote(key, options) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Creates a sales credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes Sage API}
     * @param {Object} fields
     */
    createSalesCreditNote(fields) {
        if (!fields.contact_id || !fields.date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes_sales_credit_note');
        }

        return this.makeRequest('POST', 'sales_credit_notes', { sales_credit_notes: fields });
    },

    /**
     * @method updateSalesCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Updates a sales credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateSalesCreditNote(key, fields) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('PUT', resource, { sales_credit_notes: fields });
    },

    /**
     * @method deleteSalesCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a sales credit note.
     * @param {Object} fields
     */
    deleteSalesCreditNote(key) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
