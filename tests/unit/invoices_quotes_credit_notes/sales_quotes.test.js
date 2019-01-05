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

describe('getSalesQuotes', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesQuotes({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_quotes',
            { attributes: 'all' },
        ]);
    });
});

describe('getSalesQuote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesQuote('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_quotes/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createSalesQuote', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createSalesQuote()).toThrowError();
        expect(() => instance.createSalesQuote({
            contact_id: 'Test',
            date: new Date(),
            expiry_date: new Date(),
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            contact_id: 'Test',
            date: new Date(),
            expiry_date: new Date(),
            quote_lines: [],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createSalesQuote(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'sales_quotes',
            { sales_quote: fields },
        ]);
    });
});

describe('updateSalesQuote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            date: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateSalesQuote('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'sales_quotes/KEY',
            { sales_quote: fields },
        ]);
    });
});

describe('deleteSalesQuote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteSalesQuote('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'sales_quotes/KEY',
        ]);
    });
});
