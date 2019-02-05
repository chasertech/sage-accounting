# Sage V3 API Node.JS 
[![Build Status](https://travis-ci.org/chasertech/sage-accounting.svg?branch=master)](https://travis-ci.org/chasertech/sage-accounting)

This is a Node.JS wrapper for [Sage One's Version 3 API](https://developer.columbus.sage.com/docs#/uki/sageone/accounts).

Minimum node version: 8

## Documentation
Available methods can be found [here](https://chasertech.github.io/sage-accounting/docs/SageOne.html).

## How to use

```javascript
const SageOne = require('sage-nodejs');

const sage = new SageOne(
    '<client_id>',
    '<client_secret>',
    '<signing_secret>',
    '<primary_key>',
    '<secondary_key>',
    {
        'access_token': '<access_token>',
        'refresh_token': '<refresh_token>',
    },
);
const contacts = await sage.getContacts();
```

## Obtaining the access token
Official documentation can be found [here](https://developer.columbus.sage.com/docs#/uki/sageone/accounts/gs-authentication).

```javascript
const querystring = require('querystring');

function getAuthorizationURL(redirectUri) {
    const SAGE_AUTH_URL = 'https://www.sageone.com/oauth2/auth/central';
    const query = querystring.stringify({
        client_id: '<client_id>',
        scope: ['full_access'], // readonly is the other option
        response_type: 'code',
        redirect_uri: redirectUri,
    });
    return `${SAGE_AUTH_URL}?${query}`;
}

const authorizationUrl = getAuthorizationURL('<redirect_url>');
// redirect user to the authorization URL.

// express.js callback route example
app.get('/callback', async (req, res) => {
    const { code, country } = req.query;
    const organisation = new Sage(
        '<client_id>',
        '<client_secret>',
        '<signing_secret>',
        '<primary_key>',
        '<secondary_key>',
    );
    await organisation.getAccessToken('<redirect_url>', code, country);

    // ...
    const contacts = await organisation.getContacts();
});
```

## Renewing the access token
Tokens last for 60 minutes after being generated.

```javascript
const newAccessToken = await organisation.renewAccessToken();

// store the new access token somewhere

const contacts = await organisation.getContacts();
```
