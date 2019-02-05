module.exports = {
    /**
     * @method getAddresses
     * @memberof SageOne
     * @instance
     * @description
     * Fetches addresses.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses Sage API}
     * @param {options} options
     */
    getAddresses(options) {
        return this.makeRequest('GET', 'addresses', options);
    },

    /**
     * @method getAddress
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one address.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getAddress(key, options) {
        const resource = `addresses/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createAddress
     * @memberof SageOne
     * @instance
     * @description
     * Creates one address.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses Sage API}
     * @param {Object} fields
     */
    createAddress(fields) {
        if (!fields.address_type_id || !fields.name || !fields.is_main_address) {
            throw new Error('Fields "address_type_id", "name" and "is_main_address" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses_address');
        }
        return this.makeRequest('POST', 'addresses', { address: fields });
    },

    /**
     * @method updateAddress
     * @memberof SageOne
     * @instance
     * @description
     * Updates one address.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/addresses Sage API}
     * @param {Object} fields
     */
    updateAddress(key, fields) {
        const resource = `addresses/${key}`;
        return this.makeRequest('PUT', resource, { address: fields });
    },

    /**
     * @method deleteAddress
     * @memberof SageOne
     * @instance
     * @description
     * Deletes one address.
     * @param {string} key
     */
    deleteAddress(key) {
        const resource = `addresses/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
