module.exports = {
    /**
     * Fetches contacts.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts
     * @param {Object} options
     */
    getContacts(options) {
        return this.makeRequest('GET', 'contacts', options);
    },

    /**
     * Fetches one contact.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts
     * @param {string} key
     * @param {Object} options
     */
    getContact(key, options) {
        const resource = `contacts/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one contact.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts
     * @param {Object} fields
     */
    createContact(fields) {
        if (!fields.name || !fields.contact_type_ids) {
            throw new Error('Fields "name" and "contact_type_ids" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts_contact');
        }
        return this.makeRequest('POST', 'contacts', { contact: fields });
    },

    /**
     * Updates one contact.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts
     * @param {string} key
     * @param {Object} options
     */
    updateContact(key, fields) {
        const resource = `contacts/${key}`;
        return this.makeRequest('PUT', resource, { contact: fields });
    },

    /**
     * Deletes one contact.
     * @param {string} key
     */
    deleteContact(key) {
        const resource = `contacts/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
