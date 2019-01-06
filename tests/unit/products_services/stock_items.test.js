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

describe('getStockItems', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getStockItems({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'stock_items',
            { attributes: 'all' },
        ]);
    });
});

describe('getStockItem', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getStockItem('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'stock_items/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createStockItem', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createStockItem()).toThrowError();
        expect(() => instance.createStockItem({
            item_code: 'Test',
            description: 'Test',
            sales_ledger_account_id: 1,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            item_code: 'Test',
            description: 'Test',
            sales_ledger_account_id: 1,
            purchase_ledger_account_id: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createStockItem(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'stock_items',
            { stock_item: fields },
        ]);
    });
});

describe('updateStockItem', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            name: 'Test',
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateStockItem('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'stock_items/KEY',
            { stock_item: fields },
        ]);
    });
});

describe('deleteStockItem', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteStockItem('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'stock_items/KEY',
        ]);
    });
});
