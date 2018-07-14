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

describe('getJournalCodes', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getJournalCodes({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'journal_codes',
            { attributes: 'all' }
        ]);
    });
});

describe('getJournalCode', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getJournalCode('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'journal_codes/KEY',
            { attributes: 'all' }
        ]);
    });
});

describe('createBankOpeningBalance', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createJournalCode()).toThrowError();
        expect(() => instance.createJournalCode({
            name: 'test'
        })).toThrowError();
        expect(() => instance.createJournalCode({
            name: 'test',
            code: 1,
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            name: 'test',
            code: 1,
            journal_code_type_id: 1
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createJournalCode(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'journal_codes',
            { journal_code: fields }
        ]);
    });
});

describe('updateJournalCode', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            credit: 1,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateJournalCode('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'journal_codes/KEY',
            { journal_code: fields }
        ]);
    });
});

describe('deleteJournalCode', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteJournalCode('KEY');
        
        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'journal_codes/KEY',
        ]);
    });
});
