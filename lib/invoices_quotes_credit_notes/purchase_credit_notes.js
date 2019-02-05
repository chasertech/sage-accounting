module.exports = {
    /**
     * @method getPurchaseCreditNotes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches purchase credit notes.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes Sage API}
     * @param {Object} [options]
     */
    getPurchaseCreditNotes(options) {
        return this.makeRequest('GET', 'purchase_credit_notes', options);
    },

    /**
     * @method getPurchaseCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one purchase credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getPurchaseCreditNote(key, options) {
        const resource = `purchase_credit_notes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Creates a purchase credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes Sage API}
     * @param {Object} fields
     */
    createPurchaseCreditNote(fields) {
        if (!fields.contact_id || !fields.date || !fields.credit_note_lines) {
            throw new Error('Fields "contact_id", "date" and "credit_note_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes_purchase_credit_note');
        }
        return this.makeRequest('POST', 'purchase_credit_notes', { purchase_credit_note: fields });
    },

    /**
     * @method updatePurchaseCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Updates a purchase credit note.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updatePurchaseCreditNote(key, fields) {
        const resource = `purchase_credit_notes/${key}`;
        return this.makeRequest('PUT', resource, { purchase_credit_note: fields });
    },

    /**
     * @method deletePurchaseCreditNote
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a purchase credit note.
     * @param {string} key
     */
    deletePurchaseCreditNote(key) {
        const resource = `purchase_credit_notes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
