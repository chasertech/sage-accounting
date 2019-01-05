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

describe('getLedgerAccounts', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getLedgerAccounts({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'ledger_accounts',
            { attributes: 'all' },
        ]);
    });
});

describe('getLedgerAccount', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getLedgerAccount('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'ledger_accounts/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createLedgerAccount', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createLedgerAccount()).toThrowError();
        expect(() => instance.createLedgerAccount({
            ledger_account_type_id: 1,
            included_in_chart: false,
            name: 'Test',
            display_name: 'Test',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            ledger_account_type_id: 1,
            included_in_chart: false,
            name: 'Test',
            display_name: 'Test',
            nominal_code: 'test',
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createLedgerAccount(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'ledger_accounts',
            { ledger_account: fields },
        ]);
    });
});

describe('updateLedgerAccount', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            name: 'Test',
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateLedgerAccount('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'ledger_accounts/KEY',
            { ledger_account: fields },
        ]);
    });
});

describe('deleteLedgerAccount', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteLedgerAccount('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'ledger_accounts/KEY',
        ]);
    });
});
