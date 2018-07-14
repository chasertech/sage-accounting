module.exports = {
    getCatalogItemTypes(options) {
        return this.makeRequest('GET', 'catalog_item_types', options);
    },

    getCatalogItemType(key, options) {
        const resource = `catalog_item_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
