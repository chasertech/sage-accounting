/**
 * Unallocated Artefacts
 * @module SageOne
 */
module.exports = {
    /**
     * @method getUnallocatedArtefacts
     * Fetches unallocated artefacts.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/unallocated_artefacts
     * @param {Object} [options]
     * @returns {Promise}
     */
    getUnallocatedArtefacts(options) {
        return this.makeRequest('GET', 'unallocated_artefacts', options);
    },

    /**
     * @method getUnallocatedArtefact
     * Fetches one unallocated artefact.
     * For information on possible params:
     * https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/unallocated_artefacts
     * @param {string} key
     * @param {Object} [options]
     * @returns {Promise}
     */
    getUnallocatedArtefact(key, options) {
        const resource = `unallocated_artefacts/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
