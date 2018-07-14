module.exports = {
    getJournalCodes(options) {
        return this.makeRequest('GET', 'journal_codes', options);
    },

    // https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes_journal_code
    getJournalCode(key, options) {
        const resource = `journal_codes/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    createJournalCode(fields) {
        if (!fields.name || !fields.code || !fields.journal_code_type_id) {
            throw new Error('Fields "name", "code" and "journal_code_type_id" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/journal_codes_journal_code');
        }
        return this.makeRequest('POST', 'journal_codes', { journal_code: fields });
    },

    updateJournalCode(key, fields) {
        const resource = `journal_codes/${key}`;
        return this.makeRequest('PUT', resource, { journal_code: fields });
    },

    deleteJournalCode(key) {
        const resource = `journal_codes/${key}`;
        return this.makeRequest('DELETE', resource);
    }
};
