module.exports = {
    /**
     * @method getAddressType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches artefact statuses.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/artefact_statuses Sage API}
     * @param {Object} [options]
     */
    getArtefactStatuses(options) {
        return this.makeRequest('GET', 'artefact_statuses', options);
    },

    /**
     * @method getAddressType
     * @memberof SageOne
     * @instance
     * @description
     * Fetches an address type.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/artefact_statuses Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getArtefactStatus(key, options) {
        const resource = `artefact_statuses/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
