/**
 * Product Sales Price Types
 * @module SageOne
 */
module.exports = {
    getProductSalesPriceTypes(options) {
        return this.makeRequest('GET', 'product_sales_price_types', options);
    },

    getProductSalesPriceType(key, options) {
        const resource = `product_sales_price_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types_product_sales_price_type
    createProductSalesPriceType(fields) {
        if (!fields.name || fields.active === undefined) {
            throw new Error('Fields "name" and "active" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/product_sales_price_types_product_sales_price_type');
        }
        return this.makeRequest('POST', 'product_sales_price_types', { product_sales_price_type: fields });
    },

    updateProductSalesPriceType(key, fields) {
        const resource = `product_sales_price_types/${key}`;
        return this.makeRequest('PUT', resource, { product_sales_price_type: fields });
    },

    deleteProductSalesPriceType(key) {
        const resource = `product_sales_price_types/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
