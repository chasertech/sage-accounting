module.exports = {
    /**
     * @method getEuGoodsServicesTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches Eu good services types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/eu_goods_services_types Sage API}
     * @param {Object} [options]
     */
    getEuGoodsServicesTypes(options) {
        return this.makeRequest('GET', 'eu_goods_services_types', options);
    },

    /**
     * @method getEuGoodsServicesType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches an Eu good services type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/eu_goods_services_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getEuGoodsServicesType(key, options) {
        const resource = `eu_goods_services_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
