<a name="SageOne"></a>

## SageOne
Class representing a SageOne company.

**Kind**: global class  

* [SageOne](#SageOne)
    * [new SageOne(clientId, clientSecret, signingSecret, primaryKey, secondaryKey, [token])](#new_SageOne_new)
    * [.getAuthorizationURL(redirectUri, scope)](#SageOne+getAuthorizationURL) ⇒ <code>string</code>
    * [.getAccessToken(redirectUri, authorizationCode, country)](#SageOne+getAccessToken) ⇒ <code>Promise</code>
    * [.renewAccessToken()](#SageOne+renewAccessToken) ⇒ <code>Promise</code>
    * [.revokeToken()](#SageOne+revokeToken) ⇒ <code>Promise</code>
    * [.makeRequest(method, resource, options)](#SageOne+makeRequest) ⇒ <code>Promise</code>
    * [.makeCoreRequest(method, resource, options)](#SageOne+makeCoreRequest) ⇒ <code>Promise</code>

<a name="new_SageOne_new"></a>

### new SageOne(clientId, clientSecret, signingSecret, primaryKey, secondaryKey, [token])
Create a SageOne company instance.


| Param | Type |
| --- | --- |
| clientId | <code>string</code> | 
| clientSecret | <code>string</code> | 
| signingSecret | <code>string</code> | 
| primaryKey | <code>string</code> | 
| secondaryKey | <code>string</code> | 
| [token] | <code>Object</code> | 

<a name="SageOne+getAuthorizationURL"></a>

### sageOne.getAuthorizationURL(redirectUri, scope) ⇒ <code>string</code>
Generates the authorization URL.

**Kind**: instance method of [<code>SageOne</code>](#SageOne)  

| Param | Type |
| --- | --- |
| redirectUri | <code>string</code> | 
| scope | <code>Array</code> | 

<a name="SageOne+getAccessToken"></a>

### sageOne.getAccessToken(redirectUri, authorizationCode, country) ⇒ <code>Promise</code>
Obtains and stores the access token from given authorization code and country.

**Kind**: instance method of [<code>SageOne</code>](#SageOne)  
**Returns**: <code>Promise</code> - Obtained access token.  

| Param | Type |
| --- | --- |
| redirectUri | <code>string</code> | 
| authorizationCode | <code>string</code> | 
| country | <code>string</code> | 

<a name="SageOne+renewAccessToken"></a>

### sageOne.renewAccessToken() ⇒ <code>Promise</code>
Renews the company's access token.

**Kind**: instance method of [<code>SageOne</code>](#SageOne)  
**Returns**: <code>Promise</code> - Renewed access token.  
<a name="SageOne+revokeToken"></a>

### sageOne.revokeToken() ⇒ <code>Promise</code>
Revokes the company's access token.

**Kind**: instance method of [<code>SageOne</code>](#SageOne)  
**Returns**: <code>Promise</code> - Resolves when token is revoked.  
<a name="SageOne+makeRequest"></a>

### sageOne.makeRequest(method, resource, options) ⇒ <code>Promise</code>
Executes a request to SageOne Accounts API.

**Kind**: instance method of [<code>SageOne</code>](#SageOne)  

| Param | Type |
| --- | --- |
| method | <code>string</code> | 
| resource | <code>string</code> | 
| options | <code>Object</code> | 

<a name="SageOne+makeCoreRequest"></a>

### sageOne.makeCoreRequest(method, resource, options) ⇒ <code>Promise</code>
Executes a request to SageOne Core API.

**Kind**: instance method of [<code>SageOne</code>](#SageOne)  

| Param | Type |
| --- | --- |
| method | <code>string</code> | 
| resource | <code>string</code> | 
| options | <code>Object</code> | 

