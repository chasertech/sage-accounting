module.exports = {
    /**
     * @method getProducts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches products.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products Sage API}
     * @param {Object} [options]
     */
    getProducts(options) {
        return this.makeRequest('GET', 'products', options);
    },

    /**
     * @method getProduct
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one product.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getProduct(key, options) {
        const resource = `products/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createProduct
     * @memberof SageOne
     * @instance
     * @description
     * Creates one product.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products Sage API}
     * @param {Object} fields
     */
    createProduct(fields) {
        if (!fields.description || !fields.sales_ledger_account_id ||
            !fields.purchase_ledger_account_id) {
            throw new Error('Fields "description", "sales_ledger_account_id" and "purchase_ledger_account_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products_product');
        }
        return this.makeRequest('POST', 'products', { product: fields });
    },

    /**
     * @method updateProduct
     * @memberof SageOne
     * @instance
     * @description
     * Updates one product.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products Sage API}
     * @param {string} key
     * @param {Object} options
     */
    updateProduct(key, fields) {
        const resource = `products/${key}`;
        return this.makeRequest('PUT', resource, { product: fields });
    },

    /**
     * @method deleteProduct
     * @memberof SageOne
     * @instance
     * @description
     * Deletes one product.
     * @param {string} key
     */
    deleteProduct(key) {
        const resource = `products/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
