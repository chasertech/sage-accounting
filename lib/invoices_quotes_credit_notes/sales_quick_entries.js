module.exports = {
    /**
     * @method getSalesQuickEntries
     * @memberof SageOne
     * @instance
     * @description
     * Fetches sales quick entries.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {Object} [options]
     */
    getSalesQuickEntries(options) {
        return this.makeRequest('GET', 'sales_quick_entries', options);
    },

    /**
     * @method getSalesQuickEntry
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one sales quick entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getSalesQuickEntry(key, options) {
        const resource = `sales_quick_entries/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesQuickEntry
     * @memberof SageOne
     * @instance
     * @description
     * Creates a sales quick entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {Object} fields
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
     * @memberof SageOne
     * @instance
     * @description
     * Updates a sales quick entry.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_invoices Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateSalesQuickEntry(key, fields) {
        const resource = `sales_quick_entries/${key}`;
        return this.makeRequest('PUT', resource, { sales_quick_entry: fields });
    },

    /**
     * @method deleteSalesQuickEntry
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a sales quick entry.
     * @param {string} key
     */
    deleteSalesQuickEntry(key) {
        const resource = `sales_quick_entries/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
