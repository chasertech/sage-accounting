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

describe('getContactPersons', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContactPersons({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contact_persons',
            { attributes: 'all' },
        ]);
    });
});

describe('getContactPerson', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContactPerson('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contact_persons/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createContactPerson', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createContactPerson()).toThrowError();
        expect(() => instance.createContactPerson({
            address_id: 1,
            name: 'Test',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            address_id: 1,
            name: 'Test',
            contact_person_type_ids: ['CUSTOMER'],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createContactPerson(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'contact_persons',
            { contact_person: fields },
        ]);
    });
});

describe('updateContactPerson', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 3,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateContactPerson('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'contact_persons/KEY',
            { contact_person: fields },
        ]);
    });
});

describe('deleteContactPerson', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteContactPerson('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'contact_persons/KEY',
        ]);
    });
});
