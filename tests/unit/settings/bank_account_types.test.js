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

describe('getBankAccountTypes', () => {
    it('builds the request correctly', async () => {
        const mockAddressTypes = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockAddressTypes));

        const result = await instance.getBankAccountTypes({ attributes: 'all' });

        expect(result).toMatchObject(mockAddressTypes);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_account_types',
            { attributes: 'all' }
        ]);
    });
});

describe('getBankAccountType', () => {
    it('builds the request correctly', async () => {
        const mockAddressTypes = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockAddressTypes));

        const result = await instance.getBankAccountType('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockAddressTypes);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_account_types/KEY',
            { attributes: 'all' }
        ]);
    });
});
