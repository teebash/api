import { Given, Then, When, TableDefinition } from 'cucumber';
import { ApiClient } from '../../../HelperUtils/ApiClient';
import { expect, assert } from 'chai';
import { SearchRequestObject } from '../../../RequestObject/Search/SearchRequestObject';
import { SearchResponseRootObjectForFundManager } from '../../../ResponseObject/Search/FundManager/SearchResponseObjectForFundManager';

let apiClient = new ApiClient();
let searchRequestObject = new SearchRequestObject();
let searchResponseObject: SearchResponseRootObjectForFundManager;

Given(/^I have made a valid post request for FundManage with the following details$/, async (table: TableDefinition) => {

    const data = table.rowsHash();

    let requestBody = await searchRequestObject.CreateSearchRequestObject(Number(data.requestBodyPage), Number(data.requestBodySize), data.requestBodySortBy.toString(), data.requestBodySortOrder.toString(), data.requestBodyCategory.toString(), [{ id: data.requestBodyNewFilterId.toString(), type: data.requestBodyNewFilterType.toString(), filterOperation: data.requestBodyNewFilterFilterOperation.toString(), filterBy: [data.requestBodyPageNewFilterFilterBy.toString()] }]);
    searchResponseObject = await apiClient.Post<SearchResponseRootObjectForFundManager>(data.endpoint.toString(), requestBody, Number(data.statusCode), SearchResponseRootObjectForFundManager);
});

Then(/^I should get a valid post response for FundManage$/, async (table: TableDefinition) => {

    const data = table.rowsHash();
    const AllfundManager = searchResponseObject.Data.map(fundManager => fundManager.Name);

    assert.equal(searchResponseObject.Data[0].Name, data.firstfundManagerOnTheList.toString(), "First FirmName from the array object did not match");
    assert.equal(AllfundManager.length, Number(data.totalNumberOfFundMagers), "Total FirmName count did not match");
});