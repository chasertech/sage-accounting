/**
 * Journals
 * @module SageOne
 */
module.exports = {
    /**
     * @method getJournals
     * Fetches journals.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals
     * @param {Object} [options]
     * @returns {Promise}
     */
    getJournals(options) {
        return this.makeRequest('GET', 'journals', options);
    },

    /**
     * @method getJournal
     * Fetches one journal.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getJournal(key, options) {
        const resource = `journals/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createJournal
     * Creates a journal.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals
     * @param {Object} fields
     * @returns {Promise}
     */
    createJournal(fields) {
        if (!fields.date || !fields.reference || !fields.journal_lines) {
            throw new Error('Fields "date", "reference" and "journal_lines" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals_journal');
        }

        return this.makeRequest('POST', 'journals', { journal: fields });
    },

    /**
     * @method updateJournal
     * Updates a journal.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journals
     * @param {String} key
     * @param {Object} fields
     * @returns {Promise}
     */
    updateJournal(key, fields) {
        const resource = `journals/${key}`;
        return this.makeRequest('PUT', resource, { journal: fields });
    },

    /**
     * @method deleteJournal
     * Deletes a journal.
     * @param {String} key
     * @returns {Promise}
     */
    deleteJournal(key) {
        const resource = `journals/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
