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
    instance.makeCoreRequest = jest.fn();
});

describe('getBusinessRelationships', () => {
    it('builds the request correctly', async () => {
        const businessRelationshipsMock = { business_relationships: [] };
        instance.makeCoreRequest.mockReturnValueOnce(Promise.resolve(businessRelationshipsMock));

        const result = await instance.getBusinessRelationships();
        
        expect(result).toMatchObject(businessRelationshipsMock);
        const [asset] = instance.makeCoreRequest.mock.calls[0];

        expect(asset).toBe('business_relationships');
    });
});
