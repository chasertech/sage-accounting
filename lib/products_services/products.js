/**
 * Products
 * @module SageOne
 */
module.exports = {
    /**
     * Fetches products.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products
     * @param {Object} options
     */
    getProducts(options) {
        return this.makeRequest('GET', 'products', options);
    },

    /**
     * Fetches one product.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products
     * @param {string} key
     * @param {Object} options
     */
    getProduct(key, options) {
        const resource = `products/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one product.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products
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
     * Updates one product.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/products
     * @param {string} key
     * @param {Object} options
     */
    updateProduct(key, fields) {
        const resource = `products/${key}`;
        return this.makeRequest('PUT', resource, { product: fields });
    },

    /**
     * Deletes one product.
     * @param {string} key
     */
    deleteProduct(key) {
        const resource = `products/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
