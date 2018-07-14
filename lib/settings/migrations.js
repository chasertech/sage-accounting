module.exports = {
    getMigrations(options) {
        return this.makeRequest('GET', 'migrations', options);
    },

    updateMigrations(fields) {
        return this.makeRequest('PUT', 'migrations', { migrations: fields });
    },
};
