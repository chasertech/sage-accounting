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

describe('getSalesQuickEntries', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesQuickEntries({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_quick_entries',
            { attributes: 'all' },
        ]);
    });
});

describe('getSalesQuickEntry', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesQuickEntry('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_quick_entries/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createSalesQuickEntry', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createSalesQuickEntry()).toThrowError();
        expect(() => instance.createSalesQuickEntry({
            quick_entry_type_id: 1,
            date: new Date(),
            contact_id: 'Test',
            reference: 'ref',
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            quick_entry_type_id: 1,
            date: new Date(),
            contact_id: 'Test',
            reference: 'ref',
            ledger_account_id: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createSalesQuickEntry(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'sales_quick_entries',
            { sales_quick_entry: fields },
        ]);
    });
});

describe('updateSalesQuickEntry', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            date: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateSalesQuickEntry('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'sales_quick_entries/KEY',
            { sales_quick_entry: fields },
        ]);
    });
});

describe('deleteSalesQuickEntry', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteSalesQuickEntry('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'sales_quick_entries/KEY',
        ]);
    });
});
