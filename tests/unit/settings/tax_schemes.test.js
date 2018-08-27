const SageOne = require('../../../lib/index');

let instance;

beforeEach(() => {
    instance = new SageOne(
        'test_client_id',
        'test_client_secret',
        'test_signing_secret',
        'test_primary_key',
        'test_secondary_key',
        'test_token',
    );
    instance.makeRequest = jest.fn();
});

describe('getTaxSchemes', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getTaxSchemes({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'tax_schemes',
            { attributes: 'all' },
        ]);
    });
});

describe('getTaxScheme', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getTaxScheme('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'tax_schemes/KEY',
            { attributes: 'all' },
        ]);
    });
});
