module.exports = {
    /**
     * @method getStockItems
     * @memberof SageOne
     * @instance
     * @description
     * Fetches stock items.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items Sage API}
     * @param {Object} [options]
     */
    getStockItems(options) {
        return this.makeRequest('GET', 'stock_items', options);
    },

    /**
     * @method getStockItem
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one stock item.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getStockItem(key, options) {
        const resource = `stock_items/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createStockItem
     * @memberof SageOne
     * @instance
     * @description
     * Creates one stock item.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items Sage API}
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
     * @method updateStockItem
     * @memberof SageOne
     * @instance
     * @description
     * Updates one stock item.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_items Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateStockItem(key, fields) {
        const resource = `stock_items/${key}`;
        return this.makeRequest('PUT', resource, { stock_item: fields });
    },

    /**
     * @method deleteStockItem
     * @memberof SageOne
     * @instance
     * @description
     * Deletes one stock item.
     * @param {string} key
     */
    deleteStockItem(key) {
        const resource = `stock_items/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
