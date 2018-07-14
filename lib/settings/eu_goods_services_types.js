module.exports = {
    getEuGoodsServicesTypes(options) {
        return this.makeRequest('GET', 'eu_goods_services_types', options);
    },

    getEuGoodsServicesType(key, options) {
        const resource = `eu_goods_services_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
