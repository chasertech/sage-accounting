module.exports = {
    /**
     * Fetches address regions.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/address_regions
     * @param {Object} options
     */
    getAddressRegions(options) {
        return this.makeRequest('GET', 'address_regions', options);
    },

    /**
     * Fetches one address region.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/address_regions
     * @param {Object} options
     */
    getAddressRegion(key, options) {
        const resource = `address_regions/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
