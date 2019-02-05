module.exports = {
    /**
     * @method getContactTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contact types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_types Sage API}
     * @param {Object} [options]
     */
    getContactTypes(options) {
        return this.makeRequest('GET', 'contact_types', options);
    },

    /**
     * @method getContactType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_types Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getContactType(key, options) {
        const resource = `contact_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
