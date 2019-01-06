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

describe('getMigrationTaxReturns', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getMigrationTaxReturns({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'migration_tax_returns',
            { attributes: 'all' },
        ]);
    });
});

describe('getMigrationTaxReturn', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getMigrationTaxReturn('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'migration_tax_returns/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createMigrationTaxReturn', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createMigrationTaxReturn()).toThrowError();
        expect(() => instance.createMigrationTaxReturn({
            from_date: new Date(),
            to_date: new Date(),
            total_amount: 1,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_date: new Date(),
            to_date: new Date(),
            total_amount: 1,
            tax_return_frequency_id: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createMigrationTaxReturn(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'migration_tax_returns',
            { migration_tax_return: fields },
        ]);
    });
});
