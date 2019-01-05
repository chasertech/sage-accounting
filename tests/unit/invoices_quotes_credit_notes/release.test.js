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

describe('createRelease', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const salesInvoiceKey = '1';
        const fields = {};
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createRelease(salesInvoiceKey, fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            `sales_invoices/${salesInvoiceKey}/release`,
            { release: fields },
        ]);
    });
});
