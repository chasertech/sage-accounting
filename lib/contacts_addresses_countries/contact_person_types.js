module.exports = {
    /**
     * @method getContactPersonTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contact person types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_person_types Sage API}
     * @param {Object} options
     */
    getContactPersonTypes(options) {
        return this.makeRequest('GET', 'contact_person_types', options);
    },

    /**
     * @method getContactPersonType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one contact person type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_person_types Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getContactPersonType(key, options) {
        const resource = `contact_person_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
