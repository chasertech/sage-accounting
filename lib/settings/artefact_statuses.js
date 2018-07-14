module.exports = {
    getArtefactStatuses(options) {
        return this.makeRequest('GET', 'artefact_statuses', options);
    },

    getArtefactStatus(key, options) {
        const resource = `artefact_statuses/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
