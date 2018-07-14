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

describe('getAttachmentContextTypes', () => {
    it('builds the request correctly', async () => {
        const mockAddressTypes = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockAddressTypes));

        const result = await instance.getAttachmentContextTypes({ attributes: 'all' });

        expect(result).toMatchObject(mockAddressTypes);
        const [method, asset, options] = instance.makeRequest.mock.calls[0];
        expect(method).toBe('GET');
        expect(asset).toBe('attachment_context_types');
        expect(options).toMatchObject({ attributes: 'all' });
    });
});

describe('getAttachmentContextType', () => {
    it('builds the request correctly', async () => {
        const mockAddressTypes = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockAddressTypes));

        const result = await instance.getAttachmentContextType('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockAddressTypes);
        const [method, asset, options] = instance.makeRequest.mock.calls[0];
        expect(method).toBe('GET');
        expect(asset).toBe('attachment_context_types/KEY');
        expect(options).toMatchObject({ attributes: 'all' });
    });
});
