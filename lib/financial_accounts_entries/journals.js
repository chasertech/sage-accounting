module.exports = {
    /**
     * @method getJournals
     * @memberof SageOne
     * @instance
     * @description
     * Fetches journals.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals Sage API}
     * @param {Object} [options]
     */
    getJournals(options) {
        return this.makeRequest('GET', 'journals', options);
    },

    /**
     * @method getJournal
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one journal.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getJournal(key, options) {
        const resource = `journals/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createJournal
     * @memberof SageOne
     * @instance
     * @description
     * Creates a journal.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals Sage API}
     * @param {Object} fields
     */
    createJournal(fields) {
        if (!fields.date || !fields.reference || !fields.journal_lines) {
            throw new Error('Fields "date", "reference" and "journal_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals_journal');
        }

        return this.makeRequest('POST', 'journals', { journal: fields });
    },

    /**
     * @method updateJournal
     * @memberof SageOne
     * @instance
     * @description
     * Updates a journal.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals Sage API}
     * @param {string} key
     * @param {Object} fields
     */
    updateJournal(key, fields) {
        const resource = `journals/${key}`;
        return this.makeRequest('PUT', resource, { journal: fields });
    },

    /**
     * @method deleteJournal
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a journal.
     * @param {string} key
     */
    deleteJournal(key) {
        const resource = `journals/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
