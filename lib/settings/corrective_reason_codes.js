module.exports = {
    /**
     * @method getCorrectiveReasonCodes
     * @memberof SageOne
     * @instance
     * @description
     * Fetches corrective reason codes.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/corrective_reason_codes Sage API}
     * @param {Object} [options]
     */
    getCorrectiveReasonCodes(options) {
        return this.makeRequest('GET', 'corrective_reason_codes', options);
    },

    /**
     * @method getCorrectiveReasonCode
     * @memberof SageOne
     * @instance
     * @description
     * Fetches a corrective reason code.
     * For information on possible params:
     * {@link https://developer.columbus.sage.com/docs#/uki/sageone/accounts/v3/corrective_reason_codes Sage API}
     * @param {string} key
     * @param {Object} [options]
     */
    getCorrectiveReasonCode(key, options) {
        const resource = `corrective_reason_codes/${key}`;
        return this.makeRequest('GET', resource, options);
    },
};
