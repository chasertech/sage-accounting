/**
 * Purchase Quick Entries
 * @module SageOne
 */
module.exports = {
    /**
     * @method getPurchaseQuickEntries
     * Fetches purchase quick entries.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseQuickEntries(options) {
        return this.makeRequest('GET', 'purchase_quick_entries', options);
    },

    /**
     * @method getPurchaseQuickEntry
     * Fetches one purchase quick entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getPurchaseQuickEntry(key, options) {
        const resource = `purchase_quick_entries/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseQuickEntry
     * Creates a purchase quick entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries
     * @param {Object} fields
     * @returns {Promise}
     */
    createPurchaseQuickEntry(fields) {
        if (!fields.quick_entry_type_id || !fields.date || !fields.contact_id ||
            !fields.reference || !fields.ledger_account_id) {
            throw new Error('Fields "quick_entry_type_id", "date", "contact_id", "reference" and "ledger_account_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries_purchase_quick_entry');
        }
        return this.makeRequest('POST', 'purchase_quick_entries', { purchase_quick_entry: fields });
    },

    /**
     * @method updatePurchaseQuickEntry
     * Updates a purchase quick entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updatePurchaseQuickEntry(key, fields) {
        const resource = `purchase_quick_entries/${key}`;
        return this.makeRequest('PUT', resource, { purchase_quick_entry: fields });
    },

    /**
     * @method deletePurchaseQuickEntry
     * Deletes a purchase quick entry.
     * @param {Object} fields
     * @returns {Promise}
     */
    deletePurchaseQuickEntry(key) {
        const resource = `purchase_quick_entries/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
