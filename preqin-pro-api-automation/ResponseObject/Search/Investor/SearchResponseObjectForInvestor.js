"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const json2typescript_1 = require("json2typescript");
let Meta = class Meta {
    constructor() {
        this.returned = undefined;
        this.total = undefined;
        this.page = undefined;
        this.took = undefined;
        this.filterCounts = undefined;
    }
    get Returned() { return this.returned; }
    set Returned(value) { this.returned = value; }
    get Total() { return this.total; }
    set Total(value) { this.total = value; }
    get Page() { return this.page; }
    set Page(value) { this.page = value; }
    get Took() { return this.took; }
    set Took(value) { this.took = value; }
};
__decorate([
    json2typescript_1.JsonProperty("returned", Number),
    __metadata("design:type", Number)
], Meta.prototype, "returned", void 0);
__decorate([
    json2typescript_1.JsonProperty("total", Number),
    __metadata("design:type", Number)
], Meta.prototype, "total", void 0);
__decorate([
    json2typescript_1.JsonProperty("page", Number),
    __metadata("design:type", Number)
], Meta.prototype, "page", void 0);
__decorate([
    json2typescript_1.JsonProperty("took", Number),
    __metadata("design:type", Number)
], Meta.prototype, "took", void 0);
__decorate([
    json2typescript_1.JsonProperty("filterCounts", json2typescript_1.Any),
    __metadata("design:type", Object)
], Meta.prototype, "filterCounts", void 0);
Meta = __decorate([
    json2typescript_1.JsonObject("Meta")
], Meta);
exports.Meta = Meta;
;
let Datum = class Datum {
    constructor() {
        this.id = undefined;
        this.checkBox = undefined;
        this.name = undefined;
        this.investorsFundCount = undefined;
        this.addressDetailsCity = undefined;
        this.addressDetailsCountry = undefined;
        this.type = undefined;
        this.assetsUnderManagementUsdMn = undefined;
        this.investorDetailsPePeAllocationsCurrentAmountUsdMn = undefined;
        this.investorDetailsPePeAllocationsTargetAmountUsdMn = undefined;
        this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = undefined;
        this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = undefined;
        this.investorDetailsReReAllocationsCurrentAmountUsdMn = undefined;
        this.investorDetailsReReAllocationsTargetAmountUsdMn = undefined;
        this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = undefined;
        this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = undefined;
        this.investorDetailsPdAllocationsCurrentAmountUsdMn = undefined;
        this.investorDetailsPdAllocationsTargetAmountUsdMn = undefined;
        this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = undefined;
        this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = undefined;
        this.investorDetailsInfAllocationsCurrentAmountUsdMn = undefined;
        this.investorDetailsInfAllocationsTargetAmountUsdMn = undefined;
        this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn = undefined;
        this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn = undefined;
        this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn = undefined;
        this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn = undefined;
        this.investorDetailsNrAllocationsCurrentAmountUsdMn = undefined;
        this.investorDetailsNrAllocationsTargetAmountUsdMn = undefined;
        this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn = undefined;
        this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn = undefined;
        this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn = undefined;
        this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn = undefined;
        this.investorDetailsHfAllocationsCurrentAmountUsdMn = undefined;
        this.investorDetailsHfAllocationsTargetAmountUsdMn = undefined;
        this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = undefined;
        this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = undefined;
        this.addressDetailsFax = undefined;
        this.addressDetailsState = undefined;
        this.addressDetailsPostcode = undefined;
        this.addressDetailsLine = undefined;
        this.addressDetailsEmail = undefined;
        this.addressDetailsRegion = undefined;
        this.addressDetailsWebsite = undefined;
        this.addressDetailsTelephone = undefined;
    }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get CheckBox() { return this.checkBox; }
    set CheckBox(value) { this.checkBox = value; }
    get Name() { return this.name; }
    set Name(value) { this.name = value; }
    get InvestorsFundCount() { return this.investorsFundCount; }
    set InvestorsFundCount(value) { this.investorsFundCount = value; }
    get AddressDetailsCity() { return this.addressDetailsCity; }
    set AddressDetailsCity(value) { this.addressDetailsCity = value; }
    get AddressDetailsCountry() { return this.addressDetailsCountry; }
    set AddressDetailsCountry(value) { this.addressDetailsCountry = value; }
    get Type() { return this.type; }
    set Type(value) { this.type = value; }
    get AssetsUnderManagementUsdMn() { return this.assetsUnderManagementUsdMn; }
    set AssetsUnderManagementUsdMn(value) { this.assetsUnderManagementUsdMn = value; }
    get InvestorDetailsPePeAllocationsCurrentAmountUsdMn() { return this.investorDetailsPePeAllocationsCurrentAmountUsdMn; }
    set InvestorDetailsPePeAllocationsCurrentAmountUsdMn(value) { this.investorDetailsPePeAllocationsCurrentAmountUsdMn = value; }
    get InvestorDetailsPePeAllocationsTargetAmountUsdMn() { return this.investorDetailsPePeAllocationsTargetAmountUsdMn; }
    set InvestorDetailsPePeAllocationsTargetAmountUsdMn(value) { this.investorDetailsPePeAllocationsTargetAmountUsdMn = value; }
    get InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn() { return this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    set InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value) { this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }
    get InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn() { return this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    set InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value) { this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }
    get InvestorDetailsReReAllocationsCurrentAmountUsdMn() { return this.investorDetailsReReAllocationsCurrentAmountUsdMn; }
    set InvestorDetailsReReAllocationsCurrentAmountUsdMn(value) { this.investorDetailsReReAllocationsCurrentAmountUsdMn = value; }
    get InvestorDetailsReReAllocationsTargetAmountUsdMn() { return this.investorDetailsReReAllocationsTargetAmountUsdMn; }
    set InvestorDetailsReReAllocationsTargetAmountUsdMn(value) { this.investorDetailsReReAllocationsTargetAmountUsdMn = value; }
    get InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn() { return this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    set InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value) { this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }
    get InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn() { return this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    set InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value) { this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }
    get InvestorDetailsPdAllocationsCurrentAmountUsdMn() { return this.investorDetailsPdAllocationsCurrentAmountUsdMn; }
    set InvestorDetailsPdAllocationsCurrentAmountUsdMn(value) { this.investorDetailsPdAllocationsCurrentAmountUsdMn = value; }
    get InvestorDetailsPdAllocationsTargetAmountUsdMn() { return this.investorDetailsPdAllocationsTargetAmountUsdMn; }
    set InvestorDetailsPdAllocationsTargetAmountUsdMn(value) { this.investorDetailsPdAllocationsTargetAmountUsdMn = value; }
    get InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn() { return this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    set InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value) { this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }
    get InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn() { return this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    set InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value) { this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }
    get InvestorDetailsInfAllocationsCurrentAmountUsdMn() { return this.investorDetailsInfAllocationsCurrentAmountUsdMn; }
    set InvestorDetailsInfAllocationsCurrentAmountUsdMn(value) { this.investorDetailsInfAllocationsCurrentAmountUsdMn = value; }
    get InvestorDetailsInfAllocationsTargetAmountUsdMn() { return this.investorDetailsInfAllocationsTargetAmountUsdMn; }
    set InvestorDetailsInfAllocationsTargetAmountUsdMn(value) { this.investorDetailsInfAllocationsTargetAmountUsdMn = value; }
    get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn() { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn; }
    set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn(value) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn = value; }
    get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn() { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn; }
    set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn(value) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn = value; }
    get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn() { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn; }
    set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn(value) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn = value; }
    get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn() { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn; }
    set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn(value) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn = value; }
    get InvestorDetailsNrAllocationsCurrentAmountUsdMn() { return this.investorDetailsNrAllocationsCurrentAmountUsdMn; }
    set InvestorDetailsNrAllocationsCurrentAmountUsdMn(value) { this.investorDetailsNrAllocationsCurrentAmountUsdMn = value; }
    get InvestorDetailsNrAllocationsTargetAmountUsdMn() { return this.investorDetailsNrAllocationsTargetAmountUsdMn; }
    set InvestorDetailsNrAllocationsTargetAmountUsdMn(value) { this.investorDetailsNrAllocationsTargetAmountUsdMn = value; }
    get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn() { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn; }
    set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn(value) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn = value; }
    get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn() { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn; }
    set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn(value) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn = value; }
    get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn() { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn; }
    set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn(value) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn = value; }
    get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn() { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn; }
    set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn(value) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn = value; }
    get InvestorDetailsHfAllocationsCurrentAmountUsdMn() { return this.investorDetailsHfAllocationsCurrentAmountUsdMn; }
    set InvestorDetailsHfAllocationsCurrentAmountUsdMn(value) { this.investorDetailsHfAllocationsCurrentAmountUsdMn = value; }
    get InvestorDetailsHfAllocationsTargetAmountUsdMn() { return this.investorDetailsHfAllocationsTargetAmountUsdMn; }
    set InvestorDetailsHfAllocationsTargetAmountUsdMn(value) { this.investorDetailsHfAllocationsTargetAmountUsdMn = value; }
    get InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn() { return this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    set InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value) { this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }
    get InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn() { return this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    set InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value) { this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }
    get AddressDetailsFax() { return this.addressDetailsFax; }
    set AddressDetailsFax(value) { this.addressDetailsFax = value; }
    get AddressDetailsState() { return this.addressDetailsState; }
    set AddressDetailsState(value) { this.addressDetailsState = value; }
    get AddressDetailsPostcode() { return this.addressDetailsPostcode; }
    set AddressDetailsPostcode(value) { this.addressDetailsPostcode = value; }
    get AddressDetailsLine() { return this.addressDetailsLine; }
    set AddressDetailsLine(value) { this.addressDetailsLine = value; }
    get AddressDetailsEmail() { return this.addressDetailsEmail; }
    set AddressDetailsEmail(value) { this.addressDetailsEmail = value; }
    get AddressDetailsRegion() { return this.addressDetailsRegion; }
    set AddressDetailsRegion(value) { this.addressDetailsRegion = value; }
    get AddressDetailsWebsite() { return this.addressDetailsWebsite; }
    set AddressDetailsWebsite(value) { this.addressDetailsWebsite = value; }
    get AddressDetailsTelephone() { return this.addressDetailsTelephone; }
    set AddressDetailsTelephone(value) { this.addressDetailsTelephone = value; }
};
__decorate([
    json2typescript_1.JsonProperty("id", String),
    __metadata("design:type", String)
], Datum.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("checkBox", json2typescript_1.Any),
    __metadata("design:type", Object)
], Datum.prototype, "checkBox", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String),
    __metadata("design:type", String)
], Datum.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorsFundCount", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "investorsFundCount", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.city", String),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsCity", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.country", String),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsCountry", void 0);
__decorate([
    json2typescript_1.JsonProperty("type", String, true),
    __metadata("design:type", String)
], Datum.prototype, "type", void 0);
__decorate([
    json2typescript_1.JsonProperty("assetsUnderManagement.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "assetsUnderManagementUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pE.peAllocations.current.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPePeAllocationsCurrentAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pE.peAllocations.target.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPePeAllocationsTargetAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pE.investmentPreferences.typicalInvestmentSize.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pE.investmentPreferences.typicalInvestmentSize.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.rE.reAllocations.current.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsReReAllocationsCurrentAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.rE.reAllocations.target.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsReReAllocationsTargetAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.rE.investmentPreferences.typicalInvestmentSize.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.rE.investmentPreferences.typicalInvestmentSize.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pD.allocations.current.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPdAllocationsCurrentAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pD.allocations.target.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPdAllocationsTargetAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pD.investmentPreferences.typicalInvestmentSize.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.pD.investmentPreferences.typicalInvestmentSize.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.iNF.allocations.current.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsInfAllocationsCurrentAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.iNF.allocations.target.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsInfAllocationsTargetAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInHoldings.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInHoldings.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInFunds.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInFunds.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.nR.allocations.current.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsNrAllocationsCurrentAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.nR.allocations.target.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsNrAllocationsTargetAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInHoldings.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInHoldings.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInFunds.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInFunds.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.hF.allocations.current.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsHfAllocationsCurrentAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.hF.allocations.target.amount.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsHfAllocationsTargetAmountUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.hF.investmentPreferences.typicalInvestmentSize.min.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("investorDetails.hF.investmentPreferences.typicalInvestmentSize.max.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.fax", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsFax", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.state", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsState", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.postcode", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsPostcode", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.line", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsLine", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.email", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsEmail", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.region", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsRegion", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.website", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsWebsite", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.telephone", String, true),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsTelephone", void 0);
Datum = __decorate([
    json2typescript_1.JsonObject("Datum")
], Datum);
exports.Datum = Datum;
;
let SearchResponseRootObjectForInvestor = class SearchResponseRootObjectForInvestor {
    constructor() {
        this.meta = undefined;
        this.data = undefined;
    }
    get Meta() { return this.meta; }
    set Meta(value) { this.meta = value; }
    get Data() { return this.data; }
    set Data(value) { this.data = value; }
};
__decorate([
    json2typescript_1.JsonProperty("meta", Meta),
    __metadata("design:type", Meta)
], SearchResponseRootObjectForInvestor.prototype, "meta", void 0);
__decorate([
    json2typescript_1.JsonProperty("data", [Datum]),
    __metadata("design:type", Array)
], SearchResponseRootObjectForInvestor.prototype, "data", void 0);
SearchResponseRootObjectForInvestor = __decorate([
    json2typescript_1.JsonObject("SearchResponseRootObjectForInvestor")
], SearchResponseRootObjectForInvestor);
exports.SearchResponseRootObjectForInvestor = SearchResponseRootObjectForInvestor;
;
//# sourceMappingURL=SearchResponseObjectForInvestor.js.map