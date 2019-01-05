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

describe('getPurchaseInvoices', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getPurchaseInvoices({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'purchase_invoices',
            { attributes: 'all' },
        ]);
    });
});

describe('getPurchaseInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getPurchaseInvoice('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'purchase_invoices/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createPurchaseInvoice', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createPurchaseInvoice()).toThrowError();
        expect(() => instance.createPurchaseInvoice({
            contact_id: 1,
            date: new Date(),
            due_date: new Date(),
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            contact_id: 1,
            date: new Date(),
            due_date: new Date(),
            invoice_lines: [],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createPurchaseInvoice(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'purchase_invoices',
            { purchase_invoice: fields },
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

        const result = await instance.updatePurchaseInvoice('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'purchase_invoices/KEY',
            { purchase_invoice: fields },
        ]);
    });
});

describe('deletePurchaseInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deletePurchaseInvoice('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'purchase_invoices/KEY',
        ]);
    });
});
