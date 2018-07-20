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

describe('getBankTransfers', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankTransfers({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_transfers',
            { attributes: 'all' }
        ]);
    });
});

describe('getBankTransfer', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getBankTransfer('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'bank_transfers/KEY',
            { attributes: 'all' }
        ]);
    });
});

describe('createBankTransfer', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createBankTransfer()).toThrowError();
        expect(() => instance.createBankTransfer({
            from_bank_account_id: 1,
        })).toThrowError();
        expect(() => instance.createBankTransfer({
            from_bank_account_id: 1,
            to_bank_account_id: 2,
        })).toThrowError();
        expect(() => instance.createBankTransfer({
            from_bank_account_id: 1,
            to_bank_account_id: 2,
            date: new Date(),
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 1,
            to_bank_account_id: 2,
            date: new Date(),
            amount: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createBankTransfer(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'bank_transfers',
            { bank_transfer: fields }
        ]);
    });
});

describe('updateBankTransfer', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 3,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateBankTransfer('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'bank_transfers/KEY',
            { bank_transfer: fields }
        ]);
    });
});

describe('deleteBankTransfer', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteBankTransfer('KEY');
        
        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'bank_transfers/KEY',
        ]);
    });
});
