import { expect, assert } from 'chai';
import { JsonConvert } from 'json2typescript';
import ApiClient from './helper/ApiClient';
import { Profile } from './ResponseObject/Profile/ProfileResponseObject';

let jsonConvert = new JsonConvert();
let apiClient = new ApiClient();
let profile = new Array<Profile>();

describe('Generic type Tests', () => {

    before(async () => {

        return apiClient.Init();
    });

    xit('Search endpoint, complex post request', async () => {

        let payload = { "columns": ["id", "name", "serviceProviderDetails.funds.count", "headquarterAddress.city", "headquarterAddress.country", "type"], "page": 1, "size": 120, "sortBy": "name", "sortOrder": "ascending", "category": "ServiceProvider", "newFilters": [{ "id": "serviceProviderDetails.funds.fundManager.id", "type": "integer", "filterBy": "20297" }, { "id": "type", "type": "LIST", "filterBy": ["Fund Administrator", "Law Firm", "Placement Agent", "Auditor", "Custodian", "Prime Broker"] }] };
       
        await apiClient.Post('search-api/search', payload);
    })

    it('Profile endpoint, complex get request', async () => {
       
        profile = (<any>jsonConvert).deserialize(await apiClient.Get('profile-api/InvestmentConsultant?investorId=2365'), Profile);        

        assert.equal(profile[0].FirmName, "Bard Consulting");
        console.log(profile);
    })
});