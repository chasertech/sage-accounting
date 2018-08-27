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

describe('getBankReconciliations', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankReconciliations({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_reconciliations',
            { attributes: 'all' },
        ]);
    });
});

describe('getBankReconciliation', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankReconciliation('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_reconciliations/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createBankReconciliation', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createBankReconciliation()).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            bank_account_id: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createBankReconciliation(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'bank_reconciliations',
            { bank_reconciliation: fields },
        ]);
    });
});

describe('updateBankReconciliation', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            bank_account_id: 2,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateBankReconciliation('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'bank_reconciliations/KEY',
            { bank_reconciliation: fields },
        ]);
    });
});
