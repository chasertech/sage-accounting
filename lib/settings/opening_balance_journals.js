module.exports = {
    /**
     * @method getOpeningBalanceJournals
     * @memberof SageOne
     * @instance
     * @description
     * Fetches opening balance journals.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/opening_balance_journals Sage API}
     * @param {Object} [options]
     */
    getOpeningBalanceJournals(options) {
        return this.makeRequest('GET', 'opening_balance_journals', options);
    },

    /**
     * @method getOpeningBalanceJournal
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a opening balance journal.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/opening_balance_journals Sage API}
     * @param {Object} [options]
     */
    getOpeningBalanceJournal(key, options) {
        const resource = `opening_balance_journals/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createOpeningBalanceJournal
     * @memberof SageOne
     * @instance
     * @description
     * Creates an opening balance journal.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/opening_balance_journals Sage API}
     * @param {Object} fields
     */
    createOpeningBalanceJournal(fields = {}) {
        if (!fields.journal_lines) {
            throw new Error('Field "journal_lines" is mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/opening_balance_journals_opening_balance_journal');
        }
        return this.makeRequest('POST', 'opening_balance_journals', { opening_balance_journal: fields });
    },

    /**
     * @method deleteOpeningBalanceJournal
     * @memberof SageOne
     * @instance
     * @description
     * Deletes an opening balance journal.
     * @param {string} key
     */
    deleteOpeningBalanceJournal(key) {
        const resource = `opening_balance_journals/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
