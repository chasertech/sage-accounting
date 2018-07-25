module.exports = {
    /**
     * Fetches addresses.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses
     * @param {options} options
     */
    getAddresses(options) {
        return this.makeRequest('GET', 'addresses', options);
    },

    /**
     * Fetches one address.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses
     * @param {string} key
     * @param {Object} options
     */
    getAddress(key, options) {
        const resource = `addresses/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one address.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses
     * @param {Object} fields
     */
    createAddress(fields) {
        if (!fields.address_type_id || !fields.name || !fields.is_main_address) {
            throw new Error('Fields "address_type_id", "name" and "is_main_address" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses_address');
        }
        return this.makeRequest('POST', 'addresses', { address: fields });
    },

    /**
     * Updates one address.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses
     * @param {Object} fields
     */
    updateAddress(key, fields) {
        const resource = `addresses/${key}`;
        return this.makeRequest('PUT', resource, { address: fields });
    },

    /**
     * Deletes one address.
     * @param {string} key
     */
    deleteAddress(key) {
        const resource = `addresses/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
