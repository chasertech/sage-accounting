module.exports = {
    /**
     * @method getAttachmentContextTypes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches attachment context types.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/attachment_context_types Sage API}
     * @param {Object} [options]
     */
    getAttachmentContextTypes(options) {
        return this.makeRequest('GET', 'attachment_context_types', options);
    },

    /**
     * @method getAttachmentContextType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches an attachment context type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/attachment_context_types Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getAttachmentContextType(key, options) {
        const resource = `attachment_context_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
