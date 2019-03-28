import { Given, Then, When, TableDefinition } from 'cucumber';
import { ApiClient } from '../../../HelperUtils/ApiClient';
import { expect, assert } from 'chai';
import { Profile } from '../../../ResponseObject/Profile/ProfileResponseObject';
import { SearchRequestObject } from '../../../RequestObject/Search/SearchRequestObject';
import { SearchResponseRootObjectForInvestor } from '../../../ResponseObject/Search/Investor/SearchResponseObjectForInvestor';

let apiClient = new ApiClient();
let profileResponseObject: Profile;
let searchRequestObject = new SearchRequestObject();
let searchResponseObject: SearchResponseRootObjectForInvestor;

Given(/^I have made a valid get request$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    profileResponseObject = await apiClient.Get<Profile>(data.endpoint.toString(), Number(data.statusCode), Profile);
});

Then(/^I should get a valid get response$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    assert.equal(profileResponseObject[0].FirmName, data.firstInvestorName.toString(), "First FirmName from the array object did not match");
});

Given(/^I have made a valid investors post request with the following details$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    let requestBody = await searchRequestObject.CreateSearchRequestObject(Number(data.requestBodyPage), Number(data.requestBodySize), data.requestBodySortBy.toString(), data.requestBodySortOrder.toString(), data.requestBodyCategory.toString(), [{ id: data.requestBodyNewFilterId_FirstArray.toString(), type: data.requestBodyNewFilterType_FirstArray.toString(), filterOperation: data.requestBodyNewFilterFilterOperation_FirstArray.toString(), filterBy: [data.requestBodyPageNewFilterFilterBy_FirstArray] }, { id: data.requestBodyNewFilterId_SecondArray.toString(), type: data.requestBodyNewFilterType_SecondArray.toString(), filterOperation: data.requestBodyNewFilterFilterOperation_SecondArray.toString(), filterBy: [data.requestBodyPageNewFilterFilterBy_SecondArray] }]);
    searchResponseObject = await apiClient.Post<SearchResponseRootObjectForInvestor>(data.endpoint.toString(), requestBody, Number(data.statusCode), SearchResponseRootObjectForInvestor);
});

Then(/^I should get a valid post response for Investors$/, async (table: TableDefinition) => {

    const data = table.rowsHash();
    const allInvestors = searchResponseObject.Data.map(investor => investor.Name);

    assert.equal(searchResponseObject.Data[0].Name, data.firstInvestorsOnTheList.toString(), "First FirmName from the array object did not match");
    assert.equal(allInvestors.length, Number(data.totalNumberOfInvestors), "Total FirmName count did not match");
});

