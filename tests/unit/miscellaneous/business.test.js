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

describe('getBusiness', () => {
    it('builds the request correctly', async () => {
        const businessMock = { name: 'TestLLC' };
        instance.makeCoreRequest.mockReturnValueOnce(Promise.resolve(businessMock));

        const result = await instance.getBusiness();

        expect(result).toMatchObject(businessMock);
        const [asset] = instance.makeCoreRequest.mock.calls[0];

        expect(asset).toBe('business');
    });
});
