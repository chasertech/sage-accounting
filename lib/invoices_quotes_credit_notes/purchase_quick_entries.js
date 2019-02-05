module.exports = {
    /**
     * @method getPurchaseQuickEntries
     * @memberof SageOne
     * @instance
     * @description
     * Fetches purchase quick entries.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries Sage API}
     * @param {Object} [options]
     */
    getPurchaseQuickEntries(options) {
        return this.makeRequest('GET', 'purchase_quick_entries', options);
    },

    /**
     * @method getPurchaseQuickEntry
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a purchase quick entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getPurchaseQuickEntry(key, options) {
        const resource = `purchase_quick_entries/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createPurchaseQuickEntry
     * @memberof SageOne
     * @instance
     * @description
     * Creates a purchase quick entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries Sage API}
     * @param {Object} fields
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
     * @memberof SageOne
     * @instance
     * @description
     * Updates a purchase quick entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/purchase_quick_entries Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updatePurchaseQuickEntry(key, fields) {
        const resource = `purchase_quick_entries/${key}`;
        return this.makeRequest('PUT', resource, { purchase_quick_entry: fields });
    },

    /**
     * @method deletePurchaseQuickEntry
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a purchase quick entry.
     * @param {string} key
     */
    deletePurchaseQuickEntry(key) {
        const resource = `purchase_quick_entries/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
