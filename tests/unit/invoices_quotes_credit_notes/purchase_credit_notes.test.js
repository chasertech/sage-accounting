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

describe('getPurchaseCreditNotes', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getPurchaseCreditNotes({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'purchase_credit_notes',
            { attributes: 'all' },
        ]);
    });
});

describe('getPurchaseCreditNote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getPurchaseCreditNote('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'purchase_credit_notes/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createPurchaseCreditNote', () => {
    it('throws an error when a mandatory field is missing', () => {
        expect(() => instance.createPurchaseCreditNote()).toThrowError();
        expect(() => instance.createPurchaseCreditNote({
            contact_id: 1,
            date: new Date(),
        })).toThrowError();
    });

    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            contact_id: 1,
            date: new Date(),
            credit_note_lines: [],
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createPurchaseCreditNote(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'purchase_credit_notes',
            { purchase_credit_note: fields },
        ]);
    });
});

describe('updatePurchaseCreditNote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 3,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updatePurchaseCreditNote('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'purchase_credit_notes/KEY',
            { purchase_credit_note: fields },
        ]);
    });
});

describe('deletePurchaseCreditNote', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deletePurchaseCreditNote('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'purchase_credit_notes/KEY',
        ]);
    });
});
