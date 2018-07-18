module.exports = {
    getOpeningBalanceJournals(options) {
        return this.makeRequest('GET', 'opening_balance_journals', options);
    },

    getOpeningBalanceJournal(key, options) {
        const resource = `opening_balance_journals/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/opening_balance_journals_opening_balance_journal
    createOpeningBalanceJournal(fields) {
        if (!fields.journal_lines) {
            throw new Error('Field "journal_lines" is mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/opening_balance_journals_opening_balance_journal');
        }
        return this.makeRequest('POST', 'opening_balance_journals', { opening_balance_journal: fields });
    },

    deleteOpeningBalanceJournal(key) {
        const resource = `opening_balance_journals/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
