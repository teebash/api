import { Given, Then, When, TableDefinition } from 'cucumber';
import { ApiClient } from '../HelperUtils/ApiClient';
import { expect, assert } from 'chai';
import { Profile } from '../ResponseObject/Profile/ProfileResponseObject';
import { SearchRequestObject } from '../RequestObject/Search/SearchRequestObject';
import { SearchResponseRootObject } from '../ResponseObject/Search/SearchResponseObject';

let apiClient = new ApiClient();
let searchRequestObject = new SearchRequestObject();
let profileResponseObject: Profile;
let searchResponseObject: SearchResponseRootObject;

Given(/^I have made a valid get request$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    profileResponseObject = await apiClient.Get<Profile>(data.endpoint.toString(), Number(data.statusCode), Profile);
});

Given(/^I have made a valid post request$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    let requestBody = await searchRequestObject.CreateSearchRequestObject(Number(data.requestBodyPage), Number(data.requestBodySize), data.requestBodySortBy.toString(), data.requestBodySortOrder.toString(), data.requestBodyCategory.toString(), [{ id: data.requestBodyNewFilterId.toString(), type: data.requestBodyNewFilterType.toString(), filterOperation: data.requestBodyNewFilterFilterOperation.toString(), filterBy: [data.requestBodyPageNewFilterFilterBy.toString()] }]);
    searchResponseObject = await apiClient.Post<SearchResponseRootObject>(data.endpoint.toString(), requestBody, Number(data.statusCode), SearchResponseRootObject);
});

Then(/^I should get a valid get response$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    assert.equal(profileResponseObject[0].FirmName, data.firstfirmName.toString(), "First FirmName did not match");
});

Then(/^I should get a valid post response$/, async (table: TableDefinition) => {

    const data = table.rowsHash();
    const firmNames = searchResponseObject.Data.map(firmName => firmName.Name)

    assert.equal(searchResponseObject.Data[0].Name, data.firstName.toString(), "First FirmName did not match");
    assert.equal(firmNames.length, Number(data.totalNumberOfFirms), "FirmName count did not match");
});