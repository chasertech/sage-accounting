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

describe('getPurchaseQuickEntries', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getPurchaseQuickEntries({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'purchase_quick_entries',
            { attributes: 'all' },
        ]);
    });
});

describe('getPurchaseQuickEntry', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getPurchaseQuickEntry('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'purchase_quick_entries/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createPurchaseQuickEntry', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createPurchaseQuickEntry()).toThrowError();
        expect(() => instance.createPurchaseQuickEntry({
            quick_entry_type_id: 1,
            date: new Date(),
            contact_id: 1,
            reference: 'ref',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            quick_entry_type_id: 1,
            date: new Date(),
            contact_id: 1,
            reference: 'ref',
            ledger_account_id: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createPurchaseQuickEntry(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'purchase_quick_entries',
            { purchase_quick_entry: fields },
        ]);
    });
});

describe('updatePurchaseInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            due_date: new Date(),
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updatePurchaseQuickEntry('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'purchase_quick_entries/KEY',
            { purchase_quick_entry: fields },
        ]);
    });
});

describe('deletePurchaseInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deletePurchaseQuickEntry('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'purchase_quick_entries/KEY',
        ]);
    });
});
