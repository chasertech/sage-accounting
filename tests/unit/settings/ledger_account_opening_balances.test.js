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

describe('getLedgerAccountOpeningBalances', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getLedgerAccountOpeningBalances({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'ledger_account_opening_balances',
            { attributes: 'all' },
        ]);
    });
});

describe('getLedgerAccountOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getLedgerAccountOpeningBalance('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'ledger_account_opening_balances/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createLedgerAccountOpeningBalance', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createLedgerAccountOpeningBalance()).toThrowError();
        expect(() => instance.createLedgerAccountOpeningBalance({
            ledger_account_id: 'test',
        })).toThrowError();
        expect(() => instance.createLedgerAccountOpeningBalance({
            ledger_account_id: 'test',
            debit: 1,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            ledger_account_id: 'test',
            debit: 1,
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createLedgerAccountOpeningBalance(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'ledger_account_opening_balances',
            { ledger_account_opening_balance: fields },
        ]);
    });
});

describe('updateLedgerAccountOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateLedgerAccountOpeningBalance('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'ledger_account_opening_balances/KEY',
            { ledger_account_opening_balance: fields },
        ]);
    });
});

describe('deleteLedgerAccountOpeningBalance', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteLedgerAccountOpeningBalance('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'ledger_account_opening_balances/KEY',
        ]);
    });
});
