module.exports = {
    /**
     * @method getProductSalesPriceTypes
     * @memberof SageOne
     * @instance
     * @description
     * Retrieves product sales price types
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types Sage API}
     * @param {Object} [options]
     */
    getProductSalesPriceTypes(options) {
        return this.makeRequest('GET', 'product_sales_price_types', options);
    },

    /**
     * @method getProductSalesPriceType
     * @memberof SageOne
     * @instance
     * @description
     * Retrieves a product sales price type
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getProductSalesPriceType(key, options) {
        const resource = `product_sales_price_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createProductSalesPriceType
     * @memberof SageOne
     * @instance
     * @description
     * Creates a product sales price type
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types Sage API}
     * @param {Object} fields
     */
    createProductSalesPriceType(fields) {
        if (!fields.name || fields.active === undefined) {
            throw new Error('Fields "name" and "active" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types_product_sales_price_type');
        }
        return this.makeRequest('POST', 'product_sales_price_types', { product_sales_price_type: fields });
    },

    /**
     * @method updateProductSalesPriceType
     * @memberof SageOne
     * @instance
     * @description
     * Updates a product sales price type
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateProductSalesPriceType(key, fields) {
        const resource = `product_sales_price_types/${key}`;
        return this.makeRequest('PUT', resource, { product_sales_price_type: fields });
    },

    /**
     * @method deleteProductSalesPriceType
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a product sales price type
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types Sage API}
     * @param {string} key
     */
    deleteProductSalesPriceType(key) {
        const resource = `product_sales_price_types/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
