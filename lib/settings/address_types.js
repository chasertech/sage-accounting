module.exports = {
    /**
     * @method getAddressTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches address types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/address_types Sage API}
     * @param {Object} [options]
     */
    getAddressTypes(options) {
        return this.makeRequest('GET', 'address_types', options);
    },

    /**
     * @method getAddressType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches an address type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/address_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getAddressType(key, options) {
        const resource = `address_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
