module.exports = {
    getEUSalesDescriptions(options) {
        return this.makeRequest('GET', 'eu_sales_descriptions', options);
    },

    getEUSalesDescription(key, options) {
        const resource = `eu_sales_descriptions/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
