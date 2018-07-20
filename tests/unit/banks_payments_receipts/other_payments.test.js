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

describe('getOtherPayments', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getOtherPayments({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'other_payments',
            { attributes: 'all' }
        ]);
    });
});

describe('getOtherPayment', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getOtherPayment('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'other_payments/KEY',
            { attributes: 'all' }
        ]);
    });
});

describe('createOtherPayment', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createOtherPayment()).toThrowError();
        expect(() => instance.createOtherPayment({
            transaction_type_id: 1,
        })).toThrowError();
        expect(() => instance.createOtherPayment({
            transaction_type_id: 1,
            date: new Date(),
        })).toThrowError();
        expect(() => instance.createOtherPayment({
            transaction_type_id: 1,
            date: new Date(),
            total_amount: 10,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            transaction_type_id: 1,
            date: new Date(),
            total_amount: 10,
            payment_lines: []
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createOtherPayment(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'other_payments',
            { other_payment: fields }
        ]);
    });
});

describe('updateOtherPayment', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 3,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateOtherPayment('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'other_payments/KEY',
            { other_payment: fields }
        ]);
    });
});

describe('deleteOtherPayment', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteOtherPayment('KEY');
        
        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'other_payments/KEY',
        ]);
    });
});
