module.exports = {
    /**
     * @method getAddressRegions
     * @memberof SageOne
     * @instance
     * @description
     * Fetches address regions.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/address_regions Sage API}
     * @param {Object} options
     */
    getAddressRegions(options) {
        return this.makeRequest('GET', 'address_regions', options);
    },

    /**
     * @method getAddressRegion
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one address region.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/address_regions Sage API}
     * @param {Object} options
     */
    getAddressRegion(key, options) {
        const resource = `address_regions/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
