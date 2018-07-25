module.exports = {
    /**
     * Fetches contact person types.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_person_types
     * @param {Object} options
     */
    getContactPersonTypes(options) {
        return this.makeRequest('GET', 'contact_person_types', options);
    },

    /**
     * Fetches one contact person type.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_person_types
     * @param {Object} options
     */
    getContactPersonType(key, options) {
        const resource = `contact_person_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
