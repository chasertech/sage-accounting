module.exports = {
    /**
     * @method getSalesQuotes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches sales quotes.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes Sage API}
     * @param {Object} [options]
     */
    getSalesQuotes(options) {
        return this.makeRequest('GET', 'sales_quotes', options);
    },

    /**
     * @method getSalesQuote
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one sales quote.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getSalesQuote(key, options) {
        const resource = `sales_quotes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesQuote
     * @memberof SageOne
     * @instance
     * @description
     * Creates a sales quote.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes Sage API}
     * @param {Object} fields
     */
    createSalesQuote(fields) {
        if (!fields.contact_id || !fields.date || !fields.expiry_date || !fields.quote_lines) {
            throw new Error('Fields "contact_id", "date", "expiry_date" and "quote_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes_sales_quote');
        }
        return this.makeRequest('POST', 'sales_quotes', { sales_quote: fields });
    },

    /**
     * @method updateSalesQuote
     * @memberof SageOne
     * @instance
     * @description
     * Updates a sales quote.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateSalesQuote(key, fields) {
        const resource = `sales_quotes/${key}`;
        return this.makeRequest('PUT', resource, { sales_quote: fields });
    },

    /**
     * @method deleteSalesQuote
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a sales quote.
     * @param {string} key
     */
    deleteSalesQuote(key) {
        const resource = `sales_quotes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
