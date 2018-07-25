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

describe('getContactPayments', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContactPayments({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contact_payments',
            { attributes: 'all' }
        ]);
    });
});

describe('getContactPayment', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContactPayment('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contact_payments/KEY',
            { attributes: 'all' }
        ]);
    });
});

describe('createContactPayment', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createContactPayment()).toThrowError();
        expect(() => instance.createContactPayment({
            transaction_type_id: 1,
        })).toThrowError();
        expect(() => instance.createContactPayment({
            transaction_type_id: 1,
            contact_id: 1,
        })).toThrowError();
        expect(() => instance.createContactPayment({
            transaction_type_id: 1,
            contact_id: 1,
            bank_account_id: 1,
        })).toThrowError();
        expect(() => instance.createContactPayment({
            transaction_type_id: 1,
            contact_id: 1,
            bank_account_id: 1,
            date: new Date(),
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            transaction_type_id: 1,
            contact_id: 1,
            bank_account_id: 1,
            date: new Date(),
            total_amount: 10,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createContactPayment(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'contact_payments',
            { contact_payment: fields }
        ]);
    });
});

describe('updateContactPayment', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            date: new Date(),
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateContactPayment('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'contact_payments/KEY',
            { contact_payment: fields }
        ]);
    });
});

describe('deleteContactPayment', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteContactPayment('KEY');
        
        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'contact_payments/KEY',
        ]);
    });
});
