module.exports = {
    /**
     * @method getUnallocatedArtefacts
     * @memberof SageOne
     * @instance
     * @description
     * Fetches unallocated artefacts.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/unallocated_artefacts Sage API}
     * @param {Object} [options]
     */
    getUnallocatedArtefacts(options) {
        return this.makeRequest('GET', 'unallocated_artefacts', options);
    },

    /**
     * @method getUnallocatedArtefact
     * @memberof SageOne
     * @instance
     * @description
     * Fetches one unallocated artefact.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/unallocated_artefacts Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getUnallocatedArtefact(key, options) {
        const resource = `unallocated_artefacts/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
