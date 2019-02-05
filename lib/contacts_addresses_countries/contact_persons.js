module.exports = {
    /**
     * @method getContactPersons
     * @memberof SageOne
     * @instance
     * @description
     * Fetches contact persons.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_persons Sage API}
     * @param {options} options
     */
    getContactPersons(options) {
        return this.makeRequest('GET', 'contact_persons', options);
    },

    /**
     * @method getContactPerson
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a contact person.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_persons Sage API}
     * @param {string} key
     * @param {Object} options
     */
    getContactPerson(key, options) {
        const resource = `contact_persons/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * @method createContactPerson
     * @memberof SageOne
     * @instance
     * @description
     * Creates a contact person.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_persons Sage API}
     * @param {Object} fields
     */
    createContactPerson(fields) {
        if (!fields.address_id || !fields.name || !fields.contact_person_type_ids) {
            throw new Error('Fields "address_id" and "name" and "contact_person_type_ids" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_persons_contact_person');
        }
        return this.makeRequest('POST', 'contact_persons', { contact_person: fields });
    },

    /**
     * @method updateContactPerson
     * @memberof SageOne
     * @instance
     * @description
     * Updates a contact person.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_persons Sage API}
     * @param {Object} fields
     */
    updateContactPerson(key, fields) {
        const resource = `contact_persons/${key}`;
        return this.makeRequest('PUT', resource, { contact_person: fields });
    },

    /**
     * @method deleteContactPerson
     * @memberof SageOne
     * @instance
     * @description
     * Deletes a contact person.
     * @param {string} key
     */
    deleteContactPerson(key) {
        const resource = `contact_persons/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
