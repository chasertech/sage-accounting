module.exports = {
    getAttachmentContextTypes(options) {
        return this.makeRequest('GET', 'attachment_context_types', options);
    },

    getAttachmentContextType(key, options) {
        const resource = `attachment_context_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
