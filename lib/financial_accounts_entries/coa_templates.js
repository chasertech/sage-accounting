/**
 * Coa Templates
 * @module SageOne
 */
module.exports = {
    /**
     * @method getCoaTemplates
     * Fetches coa templates.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_templates
     * @param {Object} [options]
     * @returns {Promise}
     */
    getCoaTemplates(options) {
        return this.makeRequest('GET', 'coa_templates', options);
    },

    /**
     * @method getCoaTemplate
     * Fetches one coa template.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/coa_templates
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getCoaTemplate(key, options) {
        const resource = `coa_templates/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
