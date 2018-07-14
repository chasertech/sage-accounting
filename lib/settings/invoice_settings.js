module.exports = {
    getInvoiceSettings(options) {
        return this.makeRequest('GET', 'invoice_settings', options);
    },

    updateInvoiceSettings(fields) {
        return this.makeRequest('PUT', 'invoice_settings', { invoice_settings: fields });
    },
};
