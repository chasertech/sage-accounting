require('dotenv').config({ path: './tests/e2e/.env' });
const puppeteer = require('puppeteer');
const querystring = require('querystring');
const express = require('express');
const Sage = require('../../lib/index.js');

const app = express();

jest.setTimeout(40000);

const server = app.listen(3000);

const organisationPromise = new Promise((resolve) => {
    app.get('/callback', async (req, res) => {
        const { code, country } = req.query;
        const organisation = new Sage(
            process.env.SAGE_CLIENT_ID,
            process.env.SAGE_CLIENT_SECRET,
            process.env.SAGE_SIGNING_SECRET,
            process.env.SAGE_PRIMARY_KEY,
            process.env.SAGE_SECONDARY_KEY,
        );
        await organisation.getAccessToken('http://localhost:3000/callback', code, country);
        resolve(organisation);
        res.send('Local callback called');
        server.close();
    });
});

const SAGE_AUTH_URL = 'https://www.sageone.com/oauth2/auth/central';

function getAuthorizationURL(redirectUri) {
    const query = querystring.stringify({
        client_id: process.env.SAGE_CLIENT_ID,
        scope: ['full_access'],
        response_type: 'code',
        callback_url: redirectUri,
    });
    return `${SAGE_AUTH_URL}?${query}`;
}

const UK_SELECTOR = '#ukflag';
const EMAIL_SELECTOR = '#sso_Email';
const PASSWORD_SELECTOR = '#sso_Password';
const LOGIN_BUTTON_SELECTOR = '[type="submit"]';
const ALLOW_BUTTON_SELECTOR = '[type="submit"]';

describe('Sage Connection workflow', () => {
    it('should connect an organisation', async () => {
        const authorizationUrl = getAuthorizationURL('http://localhost:3000/callback/');
        const browser = await puppeteer.launch({ headless: true, ignoreHTTPSErrors: true });
        const page = await browser.newPage();

        await page.goto(authorizationUrl, { waitUntil: 'networkidle2' });

        await page.click(UK_SELECTOR);
        await page.waitForNavigation();

        await page.click(EMAIL_SELECTOR);
        await page.keyboard.type(process.env.SAGE_EMAIL);
        await page.click(PASSWORD_SELECTOR);
        await page.keyboard.type(process.env.SAGE_PASSWORD);
        await page.click(LOGIN_BUTTON_SELECTOR);
        await page.waitForNavigation();

        await page.click(ALLOW_BUTTON_SELECTOR);

        const organisation = await organisationPromise;
        const invoices = await organisation.getSalesInvoices();

        expect(invoices).toHaveProperty('$total');
        expect(invoices).toHaveProperty('$page');
        expect(invoices).toHaveProperty('$next');
        expect(invoices).toHaveProperty('$back');
        expect(invoices).toHaveProperty('$itemsPerPage');
        expect(invoices).toHaveProperty('$items');

        await browser.close();
    });
});
