module.exports = {
    getSalesCreditNotes(options) {
        return this.makeRequest('GET', 'sales_credit_notes', options);
    },

    getSalesCreditNote(key, options) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    createSalesCreditNote(fields) {
        if (!fields.contact_id || !fields.date || !fields.invoice_lines) {
            throw new Error('Fields "contact_id", "date" and "invoice_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_credit_notes_sales_invoice');
        }

        return this.makeRequest('POST', 'sales_credit_notes', options);
    },

    updateSalesCreditNote(key, fields) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('PUT', resource, { sales_credit_notes: fields });
    },

    deleteSalesCreditNote(key) {
        const resource = `sales_credit_notes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
}
