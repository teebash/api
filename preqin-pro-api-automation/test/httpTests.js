"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const json2typescript_1 = require("json2typescript");
const ApiClient_1 = __importDefault(require("./helper/ApiClient"));
const ProfileResponseObject_1 = require("./ResponseObject/Profile/ProfileResponseObject");
let jsonConvert = new json2typescript_1.JsonConvert();
let apiClient = new ApiClient_1.default();
let profile = new Array();
describe('Generic type Tests', () => {
    before(() => __awaiter(this, void 0, void 0, function* () {
        return apiClient.Init();
    }));
    xit('Search endpoint, complex post request', () => __awaiter(this, void 0, void 0, function* () {
        let payload = { "columns": ["id", "name", "serviceProviderDetails.funds.count", "headquarterAddress.city", "headquarterAddress.country", "type"], "page": 1, "size": 120, "sortBy": "name", "sortOrder": "ascending", "category": "ServiceProvider", "newFilters": [{ "id": "serviceProviderDetails.funds.fundManager.id", "type": "integer", "filterBy": "20297" }, { "id": "type", "type": "LIST", "filterBy": ["Fund Administrator", "Law Firm", "Placement Agent", "Auditor", "Custodian", "Prime Broker"] }] };
        yield apiClient.Post('search-api/search', payload);
    }));
    it('Profile endpoint, complex get request', () => __awaiter(this, void 0, void 0, function* () {
        profile = jsonConvert.deserialize(yield apiClient.Get('profile-api/InvestmentConsultant?investorId=2365'), ProfileResponseObject_1.Profile);
        chai_1.assert.equal(profile[0].FirmName, "Bard Consulting");
        console.log(profile);
    }));
});
//# sourceMappingURL=httpTests.js.map