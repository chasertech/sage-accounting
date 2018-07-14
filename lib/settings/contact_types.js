module.exports = {
    getContactTypes(options) {
        return this.makeRequest('GET', 'contact_types', options);
    },

    getContactType(key, options) {
        const resource = `contact_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
