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

describe('getContactOpeningBalances', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContactOpeningBalances({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contact_opening_balances',
            { attributes: 'all' },
        ]);
    });
});

describe('getContactOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getContactOpeningBalance('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'contact_opening_balances/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createContactOpeningBalance', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createContactOpeningBalance()).toThrowError();
        expect(() => instance.createContactOpeningBalance({
            contact_opening_balance_type_id: 1,
        })).toThrowError();
        expect(() => instance.createContactOpeningBalance({
            contact_opening_balance_type_id: 1,
            date: 1,
        })).toThrowError();
        expect(() => instance.createContactOpeningBalance({
            contact_opening_balance_type_id: 1,
            date: '2018-07-11',
            contact_id: 1,
        })).toThrowError();
        expect(() => instance.createContactOpeningBalance({
            contact_opening_balance_type_id: 1,
            date: '2018-07-11',
            contact_id: 1,
            reference: 'ref',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            contact_opening_balance_type_id: 1,
            date: '2018-07-11',
            contact_id: 1,
            reference: 'ref',
            total_amount: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createContactOpeningBalance(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'contact_opening_balances',
            { contact_opening_balance: fields },
        ]);
    });
});

describe('updateContactOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            reference: 'ref',
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateContactOpeningBalance('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'contact_opening_balances/KEY',
            { contact_opening_balance: fields },
        ]);
    });
});

describe('deleteContactOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteContactOpeningBalance('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'contact_opening_balances/KEY',
        ]);
    });
});
