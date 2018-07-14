module.exports = {
    getAddressTypes(options) {
        return this.makeRequest('GET', 'address_types', options);
    },

    getAddressType(key, options) {
        const resource = `address_types/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
