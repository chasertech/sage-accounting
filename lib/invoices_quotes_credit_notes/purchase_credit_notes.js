/**
 * Purchase Credit Notes
 * @module SageOne
 */
module.exports = {
    /**
     * @method getPurchaseCreditNotes
     * Fetches purchase credit notes.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseCreditNotes(options) {
        return this.makeRequest('GET', 'purchase_credit_notes', options);
    },

    /**
     * @method getPurchaseCreditNote
     * Fetches one purchase credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseCreditNote(key, options) {
        const resource = `purchase_credit_notes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseCreditNote
     * Creates a purchase credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes
     * @param {Object} fields
     * @returns {Promise}
     */
    createPurchaseCreditNote(fields) {
        if (!fields.contact_id || !fields.date || !fields.credit_note_lines) {
            throw new Error('Fields "contact_id", "date" and "credit_note_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes_purchase_credit_note');
        }
        return this.makeRequest('POST', 'purchase_credit_notes', { purchase_credit_note: fields });
    },

    /**
     * @method updatePurchaseCreditNote
     * Updates a purchase credit note.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_credit_notes
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updatePurchaseCreditNote(key, fields) {
        const resource = `purchase_credit_notes/${key}`;
        return this.makeRequest('PUT', resource, { purchase_credit_note: fields });
    },

    /**
     * @method deletePurchaseCreditNote
     * Deletes a purchase credit note.
     * @param {Object} fields
     * @returns {Promise}
     */
    deletePurchaseCreditNote(key) {
        const resource = `purchase_credit_notes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
