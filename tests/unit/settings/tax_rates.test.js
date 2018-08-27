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

describe('getTaxRates', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getTaxRates({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'tax_rates',
            { attributes: 'all' },
        ]);
    });
});

describe('getTaxRate', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getTaxRate('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'tax_rates/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createTaxRate', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            tax: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createTaxRate(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'tax_rates',
            { tax_rate: fields },
        ]);
    });
});

describe('updateTaxRate', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateTaxRate('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'tax_rates/KEY',
            { tax_rate: fields },
        ]);
    });
});

describe('deleteTaxRate', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteTaxRate('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'tax_rates/KEY',
        ]);
    });
});
