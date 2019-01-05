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

describe('getSalesCorrectiveInvoices', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesCorrectiveInvoices({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_corrective_invoices',
            { attributes: 'all' },
        ]);
    });
});

describe('getSalesCorrectiveInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesCorrectiveInvoice('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_corrective_invoices/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createSalesCorrectiveInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            contact_id: 1,
            date: 1,
            invoice_lines: [],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createSalesCorrectiveInvoice(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'sales_corrective_invoices',
            { sales_corrective_invoice: fields },
        ]);
    });
});

describe('updateSalesInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            date: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateSalesCorrectiveInvoice('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'sales_corrective_invoices/KEY',
            { sales_corrective_invoice: fields },
        ]);
    });
});

describe('deleteSalesInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteSalesCorrectiveInvoice('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'sales_corrective_invoices/KEY',
        ]);
    });
});
