module.exports = {
    /**
     * @method getContacts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contacts.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts Sage API}
     * @param {Object} options
     */
    getContacts(options) {
        return this.makeRequest('GET', 'contacts', options);
    },

    /**
     * @method getContact
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getContact(key, options) {
        const resource = `contacts/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createContact
     * @memberof SageOne
     * @instance
     * @description
     * Creates a contact.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts Sage API}
     * @param {Object} fields
     */
    createContact(fields) {
        if (!fields.name || !fields.contact_type_ids) {
            throw new Error('Fields "name" and "contact_type_ids" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts_contact');
        }
        return this.makeRequest('POST', 'contacts', { contact: fields });
    },

    /**
     * @method updateContact
     * @memberof SageOne
     * @instance
     * @description
     * Updates a contact.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contacts Sage API}
     * @param {string} key
     * @param {Object} options
     */
    updateContact(key, fields) {
        const resource = `contacts/${key}`;
        return this.makeRequest('PUT', resource, { contact: fields });
    },

    /**
     * @method deleteContact
     * @memberof SageOne
     * @instance
     * @description
     * Deletes one contact.
     * @param {string} key
     */
    deleteContact(key) {
        const resource = `contacts/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
