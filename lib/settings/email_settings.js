module.exports = {
    getEmailSettings(options) {
        return this.makeRequest('GET', 'email_settings', options);
    },

    updateEmailSettings(fields) {
        return this.makeRequest('PUT', 'email_settings', { email_settings: fields });
    },
};
