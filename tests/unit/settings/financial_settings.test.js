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

describe('getFinancialSettings', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getFinancialSettings({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'financial_settings',
            { attributes: 'all' },
        ]);
    });
});

describe('updateFinancialSettings', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateFinancialSettings(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'financial_settings',
            { financial_settings: fields },
        ]);
    });
});
