module.exports = {
    /**
     * @method getCatalogItemTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches catalog item types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/catalog_item_types Sage API}
     * @param {Object} [options]
     */
    getCatalogItemTypes(options) {
        return this.makeRequest('GET', 'catalog_item_types', options);
    },

    /**
     * @method getCatalogItemType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a catalog item type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/catalog_item_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCatalogItemType(key, options) {
        const resource = `catalog_item_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
