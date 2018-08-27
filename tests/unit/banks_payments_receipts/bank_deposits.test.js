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

describe('getBankDeposits', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankDeposits({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_deposits',
            { attributes: 'all' },
        ]);
    });
});

describe('getBankAccount', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankAccount('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_accounts/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createBankDeposit', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createBankDeposit()).toThrowError();
        expect(() => instance.createBankDeposit({
            from_bank_account_id: 1,
        })).toThrowError();
        expect(() => instance.createBankDeposit({
            from_bank_account_id: 1,
            to_bank_account_id: 1,
        })).toThrowError();
        expect(() => instance.createBankDeposit({
            from_bank_account_id: 1,
            to_bank_account_id: 1,
            date: new Date(),
        })).toThrowError();
        expect(() => instance.createBankDeposit({
            from_bank_account_id: 1,
            to_bank_account_id: 1,
            date: new Date(),
            reference: 'TEST-1',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 1,
            to_bank_account_id: 1,
            date: new Date(),
            reference: 'TEST-1',
            cash_amount: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createBankDeposit(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'bank_deposits',
            { bank_deposit: fields },
        ]);
    });
});

describe('updateBankDeposit', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            cash_amount: 2,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateBankDeposit('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'bank_deposits/KEY',
            { bank_deposit: fields },
        ]);
    });
});

describe('deleteBankDeposit', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteBankDeposit('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'bank_deposits/KEY',
        ]);
    });
});
