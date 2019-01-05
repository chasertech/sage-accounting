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

describe('getHostedArtefactPaymentSettings', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getHostedArtefactPaymentSettings({ attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'hosted_artefact_payment_settings',
            { attributes: 'all' },
        ]);
    });
});

describe('getHostedArtefactPaymentSetting', () => {
    it('builds the request correctly', async () => {
        const mockResult = { results: [] };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.getHostedArtefactPaymentSetting('KEY', { attributes: 'all' });

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'GET',
            'hosted_artefact_payment_settings/KEY',
            { attributes: 'all' },
        ]);
    });
});

describe('createHostedArtefactPaymentSetting', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            object_guid: 1,
            disable_payment: false,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.createHostedArtefactPaymentSetting(fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'POST',
            'hosted_artefact_payment_settings',
            { hosted_artefact_payment_setting: fields },
        ]);
    });
});

describe('updateHostedArtefactPaymentSetting', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        const fields = {
            from_bank_account_id: 3,
        };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.updateHostedArtefactPaymentSetting('KEY', fields);

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'PUT',
            'hosted_artefact_payment_settings/KEY',
            { hosted_artefact_payment_setting: fields },
        ]);
    });
});

describe('deleteHostedArtefactPaymentSetting', () => {
    it('builds the request correctly', async () => {
        const mockResult = { id: 1 };
        instance.makeRequest.mockReturnValueOnce(Promise.resolve(mockResult));

        const result = await instance.deleteHostedArtefactPaymentSetting('KEY');

        expect(result).toMatchObject(mockResult);
        expect(instance.makeRequest.mock.calls[0]).toEqual([
            'DELETE',
            'hosted_artefact_payment_settings/KEY',
        ]);
    });
});
