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

describe('getMe', () => {
    it('builds the request correctly', async () => {
        const meMock = {
            user: {
                first_name: 'Buzz',
                last_name: 'Lightyear',
            },
            business: {
                name: 'Space Enterprises',
            },
        };
        instance.makeCoreRequest.mockReturnValueOnce(Promise.resolve(meMock));

        const result = await instance.getMe();

        expect(result).toMatchObject(meMock);
        const [asset] = instance.makeCoreRequest.mock.calls[0];

        expect(asset).toBe('me');
    });
});
