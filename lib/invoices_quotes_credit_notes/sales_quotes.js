/**
 * Sales Quotes
 * @module SageOne
 */
module.exports = {
    /**
     * @method getSalesQuotes
     * Fetches sales quotes.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesQuotes(options) {
        return this.makeRequest('GET', 'sales_quotes', options);
    },

    /**
     * @method getSalesQuote
     * Fetches one sales quote.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getSalesQuote(key, options) {
        const resource = `sales_quotes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createSalesQuote
     * Creates a sales quote.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes
     * @param {Object} fields
     * @returns {Promise}
     */
    createSalesQuote(fields) {
        if (!fields.contact_id || !fields.date || !fields.expiry_date || !fields.quote_lines) {
            throw new Error('Fields "contact_id", "date", "expiry_date" and "quote_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes_sales_quote');
        }
        return this.makeRequest('POST', 'sales_quotes', { sales_quote: fields });
    },

    /**
     * @method updateSalesQuote
     * Updates a sales quote.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/sales_quotes
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateSalesQuote(key, fields) {
        const resource = `sales_quotes/${key}`;
        return this.makeRequest('PUT', resource, { sales_quote: fields });
    },

    /**
     * @method deleteSalesQuote
     * Deletes a sales quote.
     * @param {Object} fields
     * @returns {Promise}
     */
    deleteSalesQuote(key) {
        const resource = `sales_quotes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
