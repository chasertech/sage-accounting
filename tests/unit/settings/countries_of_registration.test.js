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

describe('getCountriesOfRegistration', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getCountriesOfRegistration({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'countries_of_registration',
            { attributes: 'all' },
        ]);
    });
});

describe('getCountryOfRegistration', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getCountryOfRegistration('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'countries_of_registration/KEY',
            { attributes: 'all' },
        ]);
    });
});
