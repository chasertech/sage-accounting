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

describe('getArtefactStatuses', () => {
    it('builds the request correctly', async () => {
        const mockAddressTypes = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockAddressTypes));

        const result = await instance.getArtefactStatuses({ attributes: 'all' });

        expect(result).toMatchObject(mockAddressTypes);
        const [method, asset, options] = instance.makeRequest.mock.calls[0];
        expect(method).toBe('GET');
        expect(asset).toBe('artefact_statuses');
        expect(options).toMatchObject({ attributes: 'all' });
    });
});

describe('getArtefactStatus', () => {
    it('builds the request correctly', async () => {
        const mockAddressTypes = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockAddressTypes));

        const result = await instance.getArtefactStatus('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockAddressTypes);
        const [method, asset, options] = instance.makeRequest.mock.calls[0];
        expect(method).toBe('GET');
        expect(asset).toBe('artefact_statuses/KEY');
        expect(options).toMatchObject({ attributes: 'all' });
    });
});
