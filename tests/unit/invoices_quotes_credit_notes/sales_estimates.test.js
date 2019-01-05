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

describe('getSalesEstimates', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesEstimates({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_estimates',
            { attributes: 'all' },
        ]);
    });
});

describe('getSalesEstimate', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getSalesEstimate('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'sales_estimates/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createSalesEstimate', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createSalesEstimate()).toThrowError();
        expect(() => instance.createSalesEstimate({
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
            estimate_lines: [],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createSalesEstimate(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'sales_estimates',
            { sales_estimate: fields },
        ]);
    });
});

describe('updateSalesEstimate', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            date: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateSalesEstimate('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'sales_estimates/KEY',
            { sales_estimate: fields },
        ]);
    });
});

describe('deleteSalesInvoice', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteSalesEstimate('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'sales_estimates/KEY',
        ]);
    });
});
