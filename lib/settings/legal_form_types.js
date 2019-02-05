module.exports = {
    /**
     * @method getLegalFormTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches legal form types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/legal_form_types Sage API}
     * @param {Object} [options]
     */
    getLegalFormTypes(options) {
        return this.makeRequest('GET', 'legal_form_types', options);
    },

    /**
     * @method getLegalFormType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a legal form type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/legal_form_types Sage API}
     * @param {Object} [options]
     */
    getLegalFormType(key, options) {
        const resource = `legal_form_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
