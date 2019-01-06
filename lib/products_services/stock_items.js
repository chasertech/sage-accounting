/**
 * Stock Items
 * @module SageOne
 */
module.exports = {
    /**
     * Fetches stock items.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items
     * @param {Object} options
     */
    getStockItems(options) {
        return this.makeRequest('GET', 'stock_items', options);
    },

    /**
     * Fetches one stock item.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items
     * @param {string} key
     * @param {Object} options
     */
    getStockItem(key, options) {
        const resource = `stock_items/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one stock item.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items
     * @param {Object} fields
     */
    createStockItem(fields) {
        if (!fields.item_code || !fields.description || !fields.sales_ledger_account_id ||
            !fields.purchase_ledger_account_id) {
            throw new Error('Fields "item_code", "description", "sales_ledger_account_id" and "purchase_ledger_account_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items_stock_item');
        }
        return this.makeRequest('POST', 'stock_items', { stock_item: fields });
    },

    /**
     * Updates one stock item.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items
     * @param {string} key
     * @param {Object} options
     */
    updateStockItem(key, fields) {
        const resource = `stock_items/${key}`;
        return this.makeRequest('PUT', resource, { stock_item: fields });
    },

    /**
     * Deletes one stock item.
     * @param {string} key
     */
    deleteStockItem(key) {
        const resource = `stock_items/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
