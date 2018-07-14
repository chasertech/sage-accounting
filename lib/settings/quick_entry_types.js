module.exports = {
    getQuickEntryTypes(options) {
        return this.makeRequest('GET', 'quick_entry_types', options);
    },

    getQuickEntryType(key, options) {
        const resource = `quick_entry_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
