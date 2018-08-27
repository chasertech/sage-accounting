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

describe('getUser', () => {
    it('builds the request correctly', async () => {
        const userMock = {
            created_at: '2018-06-06T03:14:27Z',
            updated_at: '2018-06-06T03:14:27Z',
            displayed_as: 'Buzz Lightyear',
            id: '111222333444',
            first_name: 'Buzz',
            last_name: 'Lightyear',
            initials: 'BL',
            email: 'buzz.lightyear@buzzzzzz.io',
            locale: 'en-GB',
            business_owner: true,
        };
        instance.makeCoreRequest.mockReturnValueOnce(Promise.resolve(userMock));

        const result = await instance.getUser();

        expect(result).toMatchObject(userMock);
        const [asset] = instance.makeCoreRequest.mock.calls[0];

        expect(asset).toBe('user');
    });
});
