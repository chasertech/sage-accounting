const SageOne = require('../../lib/index');
const request = require('request-promise');

let instance;

beforeEach(() => {
    request.post = jest.fn();
    request.get = jest.fn();
    instance = new SageOne(
        'test_client_id',
        'test_client_secret',
        'test_signing_secret',
        'test_primary_key',
        'test_secondary_key',
        'test_token',
    );
});

test('creates SageOne instance with given data', () => {
    expect(instance.clientId).toBe('test_client_id');
    expect(instance.clientSecret).toBe('test_client_secret');
    expect(instance.signingSecret).toBe('test_signing_secret');
    expect(instance.primaryKey).toBe('test_primary_key');
    expect(instance.secondaryKey).toBe('test_secondary_key');
    expect(instance.token).toBe('test_token');
});

describe('getAuthorizationURL', () => {
    test('returns the respective authorization URL', () => {
        const url = instance.getAuthorizationURL('//test');
        expect(url).toBe('https://www.sageone.com/oauth2/auth/central?client_id=test_client_id&response_type=code&scope=full_access&callback_url=%2F%2Ftest');
    });

    test('returns the respective authorization URL with different scope', () => {
        const url = instance.getAuthorizationURL('//test', 'readonly');
        expect(url).toBe('https://www.sageone.com/oauth2/auth/central?client_id=test_client_id&response_type=code&scope=readonly&callback_url=%2F%2Ftest');
    });
});

describe('getAccessToken', () => {
    it('makes the request, stores and returns the access token', async () => {
        const mockAccessToken = { access_token: 'test_access_token' };
        request.post.mockReturnValueOnce(Promise.resolve(mockAccessToken));
        await instance.getAccessToken('//test', 'test_authorization_code', 'GB');

        expect(request.post.mock.calls.length).toBe(1);

        const [tokenUrl, options] = request.post.mock.calls[0];
        expect(tokenUrl).toBe('https://app.sageone.com/oauth2/token');
        expect(options).toMatchObject({
            body: {
                client_id: 'test_client_id',
                client_secret: 'test_client_secret',
                code: 'test_authorization_code',
                redirect_uri: '//test',
                grant_type: 'authorization_code',
            },
            json: true,
        });

        expect(instance.country).toBe('GB');
        expect(instance.token).toMatchObject(mockAccessToken);
    });

    it('throws an error when an invalid country code is passed', async () => {
        try {
            await instance.getAccessToken('//test', 'test_authorization_code', 'ZZ');
        } catch (e) {
            expect(e).toEqual(new Error('Invalid country code. Available options: CA, DE, ES, FR, GB, IE, US.'));
        }
    });
});

describe('renewAccessToken', () => {
    it('makes the request to obtain a new access token', async () => {
        const oldToken = { refresh_token: 'test_old_refresh_token' };
        const newToken = { refresh_token: 'test_new_refresh_token' };
        instance.token = oldToken;
        instance.country = 'GB';
        request.post.mockReturnValueOnce(Promise.resolve(newToken));

        await instance.renewAccessToken();

        expect(instance.token).toMatchObject(newToken);
    });

    it('throws an error when an invalid country code is used', async () => {
        try {
            instance.country = 'ZZ';
            await instance.renewAccessToken();
        } catch (e) {
            expect(e).toEqual(new Error('Invalid country code. Available options: CA, DE, ES, FR, GB, IE, US.'));
        }
    });
});

describe('revokeAccessToken', () => {
    it('makes the request to revoke the token', async () => {
        const token = { access_token: 'test_access_token' };
        instance.token = token;
        instance.country = 'GB';

        request.post.mockReturnValueOnce(Promise.resolve({ OK: 1 })); // TODO test call IRL

        await instance.revokeAccessToken();

        expect(request.post.mock.calls.length).toBe(1);

        const [tokenUrl, options] = request.post.mock.calls[0];
        expect(tokenUrl).toEqual('https://app.sageone.com/oauth2/revoke');
        expect(options).toMatchObject({
            body: {
                client_id: 'test_client_id',
                token: 'test_access_token',
            },
            json: true,
        });
    });

    it('throws an error when an invalid country code is used', async () => {
        try {
            instance.country = 'ZZ';
            await instance.revokeAccessToken();
        } catch (e) {
            expect(e).toEqual(new Error('Invalid country code. Available options: CA, DE, ES, FR, GB, IE, US.'));
        }
    });
});

describe('makeRequest', () => {
    beforeEach(() => {
        instance.token = {
            access_token: 'test_access_token',
            resource_owner_id: 'test_resource_owner_id',
        };
    });

    it('makes an appropriate GET request', async () => {
        const mockResult = { RESULT: 1 };
        request.get.mockReturnValueOnce(Promise.resolve(mockResult));
        const result = await instance.makeRequest('GET', 'sales_invoices', { attributes: 'all' });

        expect(mockResult).toMatchObject(result);
        expect(request.get.mock.calls.length).toBe(1);

        const [options] = request.get.mock.calls[0];

        expect(options).toMatchObject({
            url: 'https://api.columbus.sage.com/uki/sageone/accounts/v3/sales_invoices',
            qs: { attributes: 'all' },
            headers:
            {
                Authorization: 'Bearer test_access_token',
                'X-Site': 'test_resource_owner_id',
                'ocp-apim-subscription-key': 'test_primary_key',
            },
        });
    });

    it('makes an appropriate POST request', async () => {
        const mockResult = { RESULT: 1 };
        request.post.mockReturnValueOnce(Promise.resolve(mockResult));
        const result = await instance.makeRequest('POST', 'sales_invoices', { amount: 1000 });

        expect(mockResult).toMatchObject(result);
        expect(request.post.mock.calls.length).toBe(1);

        const [options] = request.post.mock.calls[0];

        expect(options).toMatchObject({
            url: 'https://api.columbus.sage.com/uki/sageone/accounts/v3/sales_invoices',
            headers:
            {
                Authorization: 'Bearer test_access_token',
                'X-Site': 'test_resource_owner_id',
                'ocp-apim-subscription-key': 'test_primary_key',
            },
            body: { amount: 1000 },
            json: true,
        });
    });
});

describe('makeCoreRequest', () => {
    beforeEach(() => {
        instance.token = {
            access_token: 'test_access_token',
            resource_owner_id: 'test_resource_owner_id',
        };
    });

    it('makes an appropriate GET request', async () => {
        const mockResult = { RESULT: 1 };
        request.get.mockReturnValueOnce(Promise.resolve(mockResult));
        const result = await instance.makeCoreRequest('business');

        expect(mockResult).toMatchObject(result);
        expect(request.get.mock.calls.length).toBe(1);

        const [options] = request.get.mock.calls[0];

        expect(options).toMatchObject({
            url: 'https://api.columbus.sage.com/uki/sageone/core/v3/business',
            headers:
            {
                Authorization: 'Bearer test_access_token',
                'X-Site': 'test_resource_owner_id',
                'ocp-apim-subscription-key': 'test_primary_key',
            },
        });
    });
});
