module.exports = {
    /**
     * Fetches contact allocations.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_allocations
     * @param {options} options
     */
    getContactAllocations(options) {
        return this.makeRequest('GET', 'contact_allocations', options);
    },

    /**
     * Fetches one contact allocation.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_allocations
     * @param {string} key
     * @param {Object} options
     */
    getContactAllocation(key, options) {
        const resource = `contact_allocations/${key}`;
        return this.makeRequest('GET', resource, options);
    },

    /**
     * Creates one contact allocation.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_allocations
     * @param {Object} fields
     */
    createContactAllocation(fields) {
        if (!fields.transaction_type_id || !fields.contact_id || !fields.allocated_artefacts) {
            throw new Error('Fields "transaction_type_id", "contact_id" and "allocated_artefacts" are mandatory. Reference: https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_allocations_contact_allocation');
        }
        return this.makeRequest('POST', 'contact_allocations', { contact_allocation: fields });
    },

    /**
     * Updates one contact allocation.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/contact_allocations
     * @param {Object} fields
     */
    updateContactAllocation(key, fields) {
        const resource = `contact_allocations/${key}`;
        return this.makeRequest('PUT', resource, { contact_allocation: fields });
    },

    /**
     * Deletes one contact allocation.
     * @param {string} key
     */
    deleteContactAllocation(key) {
        const resource = `contact_allocations/${key}`;
        return this.makeRequest('DELETE', resource);
    },
};
