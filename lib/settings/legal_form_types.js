module.exports = {
    getLegalFormTypes(options) {
        return this.makeRequest('GET', 'legal_form_types', options);
    },

    getLegalFormType(key, options) {
        const resource = `legal_form_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
