module.exports = {
    /**
     * @method getStockMovements
     * @memberof SageOne
     * @instance
     * @description
     * Fetches stock movements.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements Sage API}
     * @param {Object} [options]
     */
    getStockMovements(options) {
        return this.makeRequest('GET', 'stock_movements', options);
    },

    /**
     * @method getStockMovement
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a stock movement.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getStockMovement(key, options) {
        const resource = `stock_movements/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createStockMovement
     * @memberof SageOne
     * @instance
     * @description
     * Creates a stock movement.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements Sage API}
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
     * @method updateStockMovement
     * @memberof SageOne
     * @instance
     * @description
     * Updates a stock movement.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/stock_movements Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateStockMovement(key, fields) {
        const resource = `stock_movements/${key}`;
        return this.makeRequest('PUT', resource, { stock_movement: fields });
    },

    /**
     * @method deleteStockMovement
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a stock movement.
     * @param {string} key
     */
    deleteStockMovement(key) {
        const resource = `stock_movements/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
