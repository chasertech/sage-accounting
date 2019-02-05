module.exports = {
    /**
     * @method getJournalCodes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches journal codes.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes Sage API}
     * @param {Object} [options]
     */
    getJournalCodes(options) {
        return this.makeRequest('GET', 'journal_codes', options);
    },

    /**
     * @method getJournalCode
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a journal code.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getJournalCode(key, options) {
        const resource = `journal_codes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createJournalCode
     * @memberof SageOne
     * @instance
     * @description
     * Creates a journal code.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes Sage API}
     * @param {Object} fields
     */
    createJournalCode(fields) {
        if (!fields.name || !fields.code || !fields.journal_code_type_id) {
            throw new Error('Fields "name", "code" and "journal_code_type_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes_journal_code');
        }
        return this.makeRequest('POST', 'journal_codes', { journal_code: fields });
    },

    /**
     * @method updateJournalCode
     * @memberof SageOne
     * @instance
     * @description
     * Updates a journal code.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateJournalCode(key, fields) {
        const resource = `journal_codes/${key}`;
        return this.makeRequest('PUT', resource, { journal_code: fields });
    },

    /**
     * @method updateInvoiceSettings
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a journal code.
     * @param {string} key
     */
    deleteJournalCode(key) {
        const resource = `journal_codes/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
