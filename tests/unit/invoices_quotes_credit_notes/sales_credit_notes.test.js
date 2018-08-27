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

describe('getSalesCreditNotes', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesCreditNotes({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_credit_notes',
            { attributes: 'all' },
        ]);
    });
});

describe('getSalesCreditNote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesCreditNote('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_credit_notes/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createSalesCreditNote', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createSalesCreditNote()).toThrowError();
        expect(() => instance.createSalesCreditNote({
            contact_id: 1,
        })).toThrowError();
        expect(() => instance.createSalesCreditNote({
            contact_id: 1,
            date: 1,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            contact_id: 1,
            date: 1,
            invoice_lines: [],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createSalesCreditNote(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'sales_credit_notes',
            { sales_credit_notes: fields },
        ]);
    });
});

describe('updateSalesCreditNote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            date: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateSalesCreditNote('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'sales_credit_notes/KEY',
            { sales_credit_notes: fields },
        ]);
    });
});

describe('deleteSalesCreditNote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteSalesCreditNote('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'sales_credit_notes/KEY',
        ]);
    });
});
