/**
 * Stock Movements
 * @module SageOne
 */
module.exports = {
    /**
     * Fetches stock movements.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements
     * @param {Object} options
     */
    getStockMovements(options) {
        return this.makeRequest('GET', 'stock_movements', options);
    },

    /**
     * Fetches one stock movement.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements
     * @param {string} key
     * @param {Object} options
     */
    getStockMovement(key, options) {
        const resource = `stock_movements/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one stock movement.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements
     * @param {Object} fields
     */
    createStockMovement(fields) {
        if (!fields.stock_item_id || !fields.date || !fields.quantity ||
            !fields.cost_price || !fields.details) {
            throw new Error('Fields "item_code", "date", "quantity", "cost_price" and "details" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements_stock_movement');
        }
        return this.makeRequest('POST', 'stock_movements', { stock_movement: fields });
    },

    /**
     * Updates one stock movement.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements
     * @param {string} key
     * @param {Object} options
     */
    updateStockMovement(key, fields) {
        const resource = `stock_movements/${key}`;
        return this.makeRequest('PUT', resource, { stock_movement: fields });
    },

    /**
     * Deletes one stock movement.
     * @param {string} key
     */
    deleteStockMovement(key) {
        const resource = `stock_movements/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
