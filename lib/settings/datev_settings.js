module.exports = {
    getDatevSettings(options) {
        return this.makeRequest('GET', 'datev_settings', options);
    },

    updateDatevSettings(fields) {
        return this.makeRequest('PUT', 'datev_settings', { datev_settings: fields });
    },
};
