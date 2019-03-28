"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const ApiClient_1 = require("../../../HelperUtils/ApiClient");
const chai_1 = require("chai");
const SearchRequestObject_1 = require("../../../RequestObject/Search/SearchRequestObject");
const SearchResponseObjectForFundManager_1 = require("../../../ResponseObject/Search/FundManager/SearchResponseObjectForFundManager");
let apiClient = new ApiClient_1.ApiClient();
let searchRequestObject = new SearchRequestObject_1.SearchRequestObject();
let searchResponseObject;
cucumber_1.Given(/^I have made a valid post request for FundManage with the following details$/, (table) => __awaiter(this, void 0, void 0, function* () {
    const data = table.rowsHash();
    let requestBody = yield searchRequestObject.CreateSearchRequestObject(Number(data.requestBodyPage), Number(data.requestBodySize), data.requestBodySortBy.toString(), data.requestBodySortOrder.toString(), data.requestBodyCategory.toString(), [{ id: data.requestBodyNewFilterId.toString(), type: data.requestBodyNewFilterType.toString(), filterOperation: data.requestBodyNewFilterFilterOperation.toString(), filterBy: [data.requestBodyPageNewFilterFilterBy.toString()] }]);
    searchResponseObject = yield apiClient.Post(data.endpoint.toString(), requestBody, Number(data.statusCode), SearchResponseObjectForFundManager_1.SearchResponseRootObjectForFundManager);
}));
cucumber_1.Then(/^I should get a valid post response for FundManage$/, (table) => __awaiter(this, void 0, void 0, function* () {
    const data = table.rowsHash();
    const AllfundManager = searchResponseObject.Data.map(fundManager => fundManager.Name);
    chai_1.assert.equal(searchResponseObject.Data[0].Name, data.firstfundManagerOnTheList.toString(), "First FirmName from the array object did not match");
    chai_1.assert.equal(AllfundManager.length, Number(data.totalNumberOfFundMagers), "Total FirmName count did not match");
}));
//# sourceMappingURL=fundManagerSteps.js.map