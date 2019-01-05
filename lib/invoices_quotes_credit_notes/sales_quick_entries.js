/**
 * Sales Quick Entries
 * @module SageOne
 */
module.exports = {
    /**
     * @method getSalesQuickEntries
     * Fetches sales quick entries.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quick_entries
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesQuickEntries(options) {
        return this.makeRequest('GET', 'sales_quick_entries', options);
    },

    /**
     * @method getSalesQuickEntry
     * Fetches one sales quick entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quick_entries
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesQuickEntry(key, options) {
        const resource = `sales_quick_entries/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesQuickEntry
     * Creates a sales quick entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quick_entries
     * @param {Object} fields
     * @returns {Promise}
     */
    createSalesQuickEntry(fields) {
        if (!fields.quick_entry_type_id || !fields.date || !fields.contact_id ||
            !fields.reference || !fields.ledger_account_id) {
            throw new Error('Fields "quick_entry_type_id", "date", "contact_id", "reference" and "ledger_account_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quick_entries_sales_quick_entry');
        }
        return this.makeRequest('POST', 'sales_quick_entries', { sales_quick_entry: fields });
    },

    /**
     * @method updateSalesQuickEntry
     * Updates a sales quick entry.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quick_entries
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateSalesQuickEntry(key, fields) {
        const resource = `sales_quick_entries/${key}`;
        return this.makeRequest('PUT', resource, { sales_quick_entry: fields });
    },

    /**
     * @method deleteSalesQuickEntry
     * Deletes a sales quick entry.
     * @param {Object} fields
     * @returns {Promise}
     */
    deleteSalesQuickEntry(key) {
        const resource = `sales_quick_entries/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
