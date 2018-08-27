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

describe('getBankOpeningBalances', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankOpeningBalances({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_opening_balances',
            { attributes: 'all' },
        ]);
    });
});

describe('getBankOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankOpeningBalance('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_opening_balances/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createBankOpeningBalance', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createBankOpeningBalance()).toThrowError();
        expect(() => instance.createBankOpeningBalance({
            bank_account_id: 1,
        })).toThrowError();
        expect(() => instance.createBankOpeningBalance({
            bank_account_id: 1,
            date: 1,
        })).toThrowError();
        expect(() => instance.createBankOpeningBalance({
            bank_account_id: 1,
            date: '2018-07-11',
            debit: 1,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            bank_account_id: 1,
            date: '2018-07-11',
            debit: 1,
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createBankOpeningBalance(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'bank_opening_balances',
            { bank_opening_balance: fields },
        ]);
    });
});

describe('updateBankOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateBankOpeningBalance('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'bank_opening_balances/KEY',
            { bank_opening_balance: fields },
        ]);
    });
});

describe('deleteBankOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteBankOpeningBalance('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'bank_opening_balances/KEY',
        ]);
    });
});
