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

describe('getAddresses', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getAddresses({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'addresses',
            { attributes: 'all' }
        ]);
    });
});

describe('getAddress', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getAddress('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'addresses/KEY',
            { attributes: 'all' }
        ]);
    });
});

describe('createAddress', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createAddress()).toThrowError();
        expect(() => instance.createAddress({
            address_type_id: 1,
        })).toThrowError();
        expect(() => instance.createAddress({
            address_type_id: 1,
            name: 'Test',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            address_type_id: 1,
            name: 'Test',
            is_main_address: true,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createAddress(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'addresses',
            { address: fields }
        ]);
    });
});

describe('updateAddress', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            is_main_address: false,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateAddress('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'addresses/KEY',
            { address: fields }
        ]);
    });
});

describe('deleteAddress', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteAddress('KEY');
        
        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'addresses/KEY',
        ]);
    });
});
