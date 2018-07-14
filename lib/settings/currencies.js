module.exports = {
    getCurrencies(options) {
        return this.makeRequest('GET', 'currencies', options);
    },

    getCurrency(key, options) {
        const resource = `currencies/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
