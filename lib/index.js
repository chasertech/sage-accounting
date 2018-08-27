const request = require('request-promise');
const querystring = require('querystring');
const SAGE_CONSTANTS = require('./constants');

// Banks, Payments & Receipts
const bankAccounts = require('./banks_payments_receipts/bank_accounts');
const bankDeposits = require('./banks_payments_receipts/bank_deposits');
const bankReconciliations = require('./banks_payments_receipts/bank_reconciliations');
const bankTransfers = require('./banks_payments_receipts/bank_transfers');
const otherPayments = require('./banks_payments_receipts/other_payments');
const transactions = require('./banks_payments_receipts/transactions');

// Contacts, Addresses & Countries
const addressRegions = require('./contacts_addresses_countries/address_regions');
const addresses = require('./contacts_addresses_countries/addresses');
const contacts = require('./contacts_addresses_countries/contacts');
const contactPayments = require('./contacts_addresses_countries/contact_payments');
const contactPersonTypes = require('./contacts_addresses_countries/contact_person_types');
const contactPersons = require('./contacts_addresses_countries/contact_persons');

// Invoices, Quotes & Credit Notes
const salesCreditNotes = require('./invoices_quotes_credit_notes/sales_credit_notes');
const salesInvoices = require('./invoices_quotes_credit_notes/sales_invoices');

// Products & Services
const productSalesPriceTypes = require('./products_services/product_sales_price_types');

// Settings
const addressTypes = require('./settings/address_types');
const artefactStatuses = require('./settings/artefact_statuses');
const attachmentContextTypes = require('./settings/attachment_context_types');
const bankAccountTypes = require('./settings/bank_account_types');
const bankOpeningBalances = require('./settings/bank_opening_balances');
const businessSettings = require('./settings/business_settings');
const catalogItemTypes = require('./settings/catalog_item_types');
const contactOpeningBalanceTypes = require('./settings/contact_opening_balance_types');
const contactOpeningBalances = require('./settings/contact_opening_balances');
const contactTypes = require('./settings/contact_types');
const correctiveReasonCodes = require('./settings/corrective_reason_codes');
const countries = require('./settings/countries');
const countriesOfRegistration = require('./settings/countries_of_registration');
const countryGroups = require('./settings/country_groups');
const currencies = require('./settings/currencies');
const datevSettings = require('./settings/datev_settings');
const emailSettings = require('./settings/email_settings');
const euGoodsServicesTypes = require('./settings/eu_goods_services_types');
const financialSettings = require('./settings/financial_settings');
const invoiceSettings = require('./settings/invoice_settings');
const journalCodes = require('./settings/journal_codes');
const ledgerAccountClassifications = require('./settings/ledger_account_classifications');
const ledgerAccountOpeningBalances = require('./settings/ledger_account_opening_balances');
const ledgerAccountTypes = require('./settings/ledger_account_types');
const legalFormTypes = require('./settings/legal_form_types');
const migrations = require('./settings/migrations');
const openingBalanceJournals = require('./settings/opening_balance_journals');
const paymentMethods = require('./settings/payment_methods');
const quickEntryTypes = require('./settings/quick_entry_types');
const taxOffices = require('./settings/tax_offices');
const taxProfiles = require('./settings/tax_profiles');
const taxRates = require('./settings/tax_rates');
const taxReturnFrequencies = require('./settings/tax_return_frequencies');
const taxSchemes = require('./settings/tax_schemes');
const taxTypes = require('./settings/tax_types');
const transactionTypes = require('./settings/transaction_types');

// Miscellaneous
const business = require('./miscellaneous/business');
const businessRelationships = require('./miscellaneous/business_relationships');
const me = require('./miscellaneous/me');
const user = require('./miscellaneous/user');

/** Class representing a SageOne company. */
class SageOne {
    /**
     * Create a SageOne company instance.
     * @param {string} clientId
     * @param {string} clientSecret
     * @param {string} signingSecret
     * @param {string} primaryKey
     * @param {string} secondaryKey
     * @param {Object} [token]
     */
    constructor(clientId, clientSecret, signingSecret, primaryKey, secondaryKey, token) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.signingSecret = signingSecret;
        this.primaryKey = primaryKey;
        this.secondaryKey = secondaryKey;
        this.token = token;
    }

    /**
     * Generates the authorization URL.
     * @param {string} redirectUri
     * @param {Array} scope
     * @returns {string}
     */
    getAuthorizationURL(redirectUri, scope = ['full_access']) {
        const query = querystring.stringify({
            client_id: this.clientId,
            response_type: 'code',
            scope,
            callback_url: redirectUri,
        });
        return `${SAGE_CONSTANTS.AUTH_URL}?${query}`;
    }

    /**
     * Obtains and stores the access token from given authorization code and country.
     * @param {string} redirectUri
     * @param {string} authorizationCode
     * @param {string} country
     * @returns {Promise} Obtained access token.
     */
    async getAccessToken(redirectUri, authorizationCode, country) {
        const tokenUrl = SAGE_CONSTANTS.TOKEN_URL[country];
        if (!tokenUrl) {
            throw new Error('Invalid country code. Available options: CA, DE, ES, FR, GB, IE, US.');
        }

        const token = await request.post(tokenUrl, {
            body: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                code: authorizationCode,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            },
            json: true,
        });

        this.country = country;
        this.token = token;
        return token;
    }

    /**
     * Renews the company's access token.
     * @returns {Promise} Renewed access token.
     */
    async renewAccessToken() {
        const tokenUrl = SAGE_CONSTANTS.TOKEN_URL[this.country];
        if (!tokenUrl) {
            throw new Error('Invalid country code. Available options: CA, DE, ES, FR, GB, IE, US.');
        }
        const token = await request.post(tokenUrl, {
            body: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                refresh_token: this.token.refresh_token,
                grant_type: 'refresh_token',
            },
            json: true,
        });
        this.token = token;
        return token;
    }

    /**
     * Revokes the company's access token.
     * @returns {Promise} Resolves when token is revoked.
     */
    revokeToken() {
        const revokeTokenUrl = SAGE_CONSTANTS.REVOKE_TOKEN_URL[this.country];
        if (!revokeTokenUrl) {
            throw new Error('Invalid country code. Available options: CA, DE, ES, FR, GB, IE, US.');
        }
        const options = {
            body: {
                client_id: this.clientId,
                token: this.token.access_token,
            },
            json: true,
        };

        return request.post(revokeTokenUrl, options);
    }

    /**
     * Executes a request to SageOne Accounts API.
     * @param {string} method
     * @param {string} resource
     * @param {Object} options
     * @returns {Promise}
     */
    makeRequest(method, resource, options = {}) {
        const requestHeaders = {
            Authorization: `Bearer ${this.token.access_token}`,
            'X-Site': this.token.resource_owner_id,
            'ocp-apim-subscription-key': this.primaryKey,
        };

        const requestOptions = {
            url: `https://api.columbus.sage.com/uki/sageone/accounts/v3/${resource}`,
            json: true,
            headers: requestHeaders,
        };

        if (method === 'GET') {
            requestOptions.qs = options;
        } else {
            requestOptions.body = options;
            requestOptions.json = true;
        }

        return request[method.toLocaleLowerCase()](requestOptions);
    }

    /**
     * Executes a PDF GET request to SageOne Accounts API
     * @param {string} resource
     * @returns {Promise}
     */
    makePDFRequest(resource) {
        const requestHeaders = {
            Authorization: `Bearer ${this.token.access_token}`,
            'X-Site': this.token.resource_owner_id,
            'ocp-apim-subscription-key': this.primaryKey,
            Accept: 'application/pdf',
        };

        const requestOptions = {
            url: `https://api.columbus.sage.com/uki/sageone/accounts/v3/${resource}`,
            encoding: 'binary',
            headers: requestHeaders,
        };

        return request.get(requestOptions);
    }

    /**
     * Executes a request to SageOne Core API.
     * @param {string} method
     * @param {string} resource
     * @param {Object} options
     * @returns {Promise}
     */
    makeCoreRequest(resource) {
        const requestOptions = {
            url: `https://api.columbus.sage.com/uki/sageone/core/v3/${resource}`,
            json: true,
            headers: {
                Authorization: `Bearer ${this.token.access_token}`,
                'X-Site': this.token.resource_owner_id,
                'ocp-apim-subscription-key': this.primaryKey,
            },
        };

        return request.get(requestOptions);
    }
}

// Banks, Payments & Receipts
Object.assign(SageOne.prototype, bankAccounts);
Object.assign(SageOne.prototype, bankDeposits);
Object.assign(SageOne.prototype, bankReconciliations);
Object.assign(SageOne.prototype, bankTransfers);
Object.assign(SageOne.prototype, otherPayments);
Object.assign(SageOne.prototype, transactions);

// Contacts, Addresses & Countries
Object.assign(SageOne.prototype, addressRegions);
Object.assign(SageOne.prototype, addresses);
Object.assign(SageOne.prototype, contactPayments);
Object.assign(SageOne.prototype, contactPersonTypes);
Object.assign(SageOne.prototype, contactPersons);
Object.assign(SageOne.prototype, contacts);

// Invoices, Quotes & Credit Notes
Object.assign(SageOne.prototype, salesCreditNotes);
Object.assign(SageOne.prototype, salesInvoices);

// Products & Services
Object.assign(SageOne.prototype, productSalesPriceTypes);

// Settings
Object.assign(SageOne.prototype, addressTypes);
Object.assign(SageOne.prototype, artefactStatuses);
Object.assign(SageOne.prototype, attachmentContextTypes);
Object.assign(SageOne.prototype, bankAccountTypes);
Object.assign(SageOne.prototype, bankOpeningBalances);
Object.assign(SageOne.prototype, businessSettings);
Object.assign(SageOne.prototype, catalogItemTypes);
Object.assign(SageOne.prototype, contactOpeningBalanceTypes);
Object.assign(SageOne.prototype, contactOpeningBalances);
Object.assign(SageOne.prototype, contactTypes);
Object.assign(SageOne.prototype, correctiveReasonCodes);
Object.assign(SageOne.prototype, countries);
Object.assign(SageOne.prototype, countriesOfRegistration);
Object.assign(SageOne.prototype, countryGroups);
Object.assign(SageOne.prototype, currencies);
Object.assign(SageOne.prototype, datevSettings);
Object.assign(SageOne.prototype, emailSettings);
Object.assign(SageOne.prototype, euGoodsServicesTypes);
Object.assign(SageOne.prototype, financialSettings);
Object.assign(SageOne.prototype, invoiceSettings);
Object.assign(SageOne.prototype, journalCodes);
Object.assign(SageOne.prototype, ledgerAccountClassifications);
Object.assign(SageOne.prototype, ledgerAccountOpeningBalances);
Object.assign(SageOne.prototype, ledgerAccountTypes);
Object.assign(SageOne.prototype, legalFormTypes);
Object.assign(SageOne.prototype, migrations);
Object.assign(SageOne.prototype, openingBalanceJournals);
Object.assign(SageOne.prototype, paymentMethods);
Object.assign(SageOne.prototype, quickEntryTypes);
Object.assign(SageOne.prototype, taxOffices);
Object.assign(SageOne.prototype, taxProfiles);
Object.assign(SageOne.prototype, taxRates);
Object.assign(SageOne.prototype, taxReturnFrequencies);
Object.assign(SageOne.prototype, taxSchemes);
Object.assign(SageOne.prototype, taxTypes);
Object.assign(SageOne.prototype, transactionTypes);

// Miscellaneous
Object.assign(SageOne.prototype, business);
Object.assign(SageOne.prototype, businessRelationships);
Object.assign(SageOne.prototype, me);
Object.assign(SageOne.prototype, user);

module.exports = SageOne;
