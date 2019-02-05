module.exports = {
    /**
     * @method getCoaTemplates
     * @memberof SageOne
     * @instance
     * @description
     * Fetches coa templates.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_templates Sage API}
     * @param {Object} [options]
     */
    getCoaTemplates(options) {
        return this.makeRequest('GET', 'coa_templates', options);
    },

    /**
     * @method getCoaTemplate
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one coa template.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_templates Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCoaTemplate(key, options) {
        const resource = `coa_templates/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
