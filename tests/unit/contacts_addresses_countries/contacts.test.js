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

describe('getContacts', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContacts({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contacts',
            { attributes: 'all' },
        ]);
    });
});

describe('getContact', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContact('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contacts/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createContact', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createContact()).toThrowError();
        expect(() => instance.createContact({
            name: 'Test',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            name: 'Test',
            contact_type_ids: ['CUSTOMER'],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createContact(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'contacts',
            { contact: fields },
        ]);
    });
});

describe('updateContact', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 3,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateContact('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'contacts/KEY',
            { contact: fields },
        ]);
    });
});

describe('deleteContact', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteContact('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'contacts/KEY',
        ]);
    });
});
