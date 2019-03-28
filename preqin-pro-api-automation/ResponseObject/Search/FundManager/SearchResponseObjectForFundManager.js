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
let INF = class INF {
    constructor() {
        this.projectStage = undefined;
        this.primaryStrategy = undefined;
        this.strategies = undefined;
        this.sectorPreferences = undefined;
        this.pppPfiInvestments = undefined;
    }
    get ProjectStage() { return this.projectStage; }
    set ProjectStage(value) { this.projectStage = value; }
    get PrimaryStrategy() { return this.primaryStrategy; }
    set PrimaryStrategy(value) { this.primaryStrategy = value; }
    get Strategies() { return this.strategies; }
    set Strategies(value) { this.strategies = value; }
    get SectorPreferences() { return this.sectorPreferences; }
    set SectorPreferences(value) { this.sectorPreferences = value; }
    get PppPfiInvestments() { return this.pppPfiInvestments; }
    set PppPfiInvestments(value) { this.pppPfiInvestments = value; }
};
__decorate([
    json2typescript_1.JsonProperty("projectStage", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], INF.prototype, "projectStage", void 0);
__decorate([
    json2typescript_1.JsonProperty("primaryStrategy", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], INF.prototype, "primaryStrategy", void 0);
__decorate([
    json2typescript_1.JsonProperty("strategies", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], INF.prototype, "strategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("sectorPreferences", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], INF.prototype, "sectorPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("pppPfiInvestments", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], INF.prototype, "pppPfiInvestments", void 0);
INF = __decorate([
    json2typescript_1.JsonObject("INF")
], INF);
exports.INF = INF;
;
let AvailableCapital = class AvailableCapital {
    constructor() {
        this.usdMn = undefined;
        this.eurMn = undefined;
        this.localMn = undefined;
    }
    get UsdMn() { return this.usdMn; }
    set UsdMn(value) { this.usdMn = value; }
    get EurMn() { return this.eurMn; }
    set EurMn(value) { this.eurMn = value; }
    get LocalMn() { return this.localMn; }
    set LocalMn(value) { this.localMn = value; }
};
__decorate([
    json2typescript_1.JsonProperty("usdMn", Number, true),
    __metadata("design:type", Number)
], AvailableCapital.prototype, "usdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("eurMn", Number, true),
    __metadata("design:type", Number)
], AvailableCapital.prototype, "eurMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("localMn", Number, true),
    __metadata("design:type", Number)
], AvailableCapital.prototype, "localMn", void 0);
AvailableCapital = __decorate([
    json2typescript_1.JsonObject("AvailableCapital")
], AvailableCapital);
exports.AvailableCapital = AvailableCapital;
;
let FundRaised = class FundRaised {
    constructor() {
        this.usdMn = undefined;
        this.eurMn = undefined;
        this.localMn = undefined;
    }
    get UsdMn() { return this.usdMn; }
    set UsdMn(value) { this.usdMn = value; }
    get EurMn() { return this.eurMn; }
    set EurMn(value) { this.eurMn = value; }
    get LocalMn() { return this.localMn; }
    set LocalMn(value) { this.localMn = value; }
};
__decorate([
    json2typescript_1.JsonProperty("usdMn", Number, true),
    __metadata("design:type", Number)
], FundRaised.prototype, "usdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("eurMn", Number, true),
    __metadata("design:type", Number)
], FundRaised.prototype, "eurMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("localMn", Number, true),
    __metadata("design:type", Number)
], FundRaised.prototype, "localMn", void 0);
FundRaised = __decorate([
    json2typescript_1.JsonObject("FundRaised")
], FundRaised);
exports.FundRaised = FundRaised;
;
let Region = class Region {
    constructor() {
        this.id = undefined;
        this.text = undefined;
    }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get Text() { return this.text; }
    set Text(value) { this.text = value; }
};
__decorate([
    json2typescript_1.JsonProperty("id", Number),
    __metadata("design:type", Number)
], Region.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("text", String),
    __metadata("design:type", String)
], Region.prototype, "text", void 0);
Region = __decorate([
    json2typescript_1.JsonObject("Region")
], Region);
exports.Region = Region;
;
let Country = class Country {
    constructor() {
        this.id = undefined;
        this.text = undefined;
    }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get Text() { return this.text; }
    set Text(value) { this.text = value; }
};
__decorate([
    json2typescript_1.JsonProperty("id", Number),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("text", String),
    __metadata("design:type", String)
], Country.prototype, "text", void 0);
Country = __decorate([
    json2typescript_1.JsonObject("Country")
], Country);
exports.Country = Country;
;
let GeographicFocus = class GeographicFocus {
    constructor() {
        this.regions = undefined;
        this.countries = undefined;
        this.mainFundFocus = undefined;
    }
    get Regions() { return this.regions; }
    set Regions(value) { this.regions = value; }
    get Countries() { return this.countries; }
    set Countries(value) { this.countries = value; }
    get MainFundFocus() { return this.mainFundFocus; }
    set MainFundFocus(value) { this.mainFundFocus = value; }
};
__decorate([
    json2typescript_1.JsonProperty("regions", [Region], true),
    __metadata("design:type", Array)
], GeographicFocus.prototype, "regions", void 0);
__decorate([
    json2typescript_1.JsonProperty("countries", [Country], true),
    __metadata("design:type", Array)
], GeographicFocus.prototype, "countries", void 0);
__decorate([
    json2typescript_1.JsonProperty("mainFundFocus", String, true),
    __metadata("design:type", String)
], GeographicFocus.prototype, "mainFundFocus", void 0);
GeographicFocus = __decorate([
    json2typescript_1.JsonObject("GeographicFocus")
], GeographicFocus);
exports.GeographicFocus = GeographicFocus;
;
let TypesOfMarketsTraded = class TypesOfMarketsTraded {
    constructor() {
        this.stockIndexes = undefined;
        this.interestRates = undefined;
        this.energy = undefined;
        this.grains = undefined;
        this.meats = undefined;
        this.bonds = undefined;
        this.metals = undefined;
        this.softs = undefined;
        this.currencies = undefined;
    }
    get StockIndexes() { return this.stockIndexes; }
    set StockIndexes(value) { this.stockIndexes = value; }
    get InterestRates() { return this.interestRates; }
    set InterestRates(value) { this.interestRates = value; }
    get Energy() { return this.energy; }
    set Energy(value) { this.energy = value; }
    get Grains() { return this.grains; }
    set Grains(value) { this.grains = value; }
    get Meats() { return this.meats; }
    set Meats(value) { this.meats = value; }
    get Bonds() { return this.bonds; }
    set Bonds(value) { this.bonds = value; }
    get Metals() { return this.metals; }
    set Metals(value) { this.metals = value; }
    get Softs() { return this.softs; }
    set Softs(value) { this.softs = value; }
    get Currencies() { return this.currencies; }
    set Currencies(value) { this.currencies = value; }
};
__decorate([
    json2typescript_1.JsonProperty("Stock Indexes", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "stockIndexes", void 0);
__decorate([
    json2typescript_1.JsonProperty("Interest Rates", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "interestRates", void 0);
__decorate([
    json2typescript_1.JsonProperty("Energy", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "energy", void 0);
__decorate([
    json2typescript_1.JsonProperty("Grains", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "grains", void 0);
__decorate([
    json2typescript_1.JsonProperty("Meats", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "meats", void 0);
__decorate([
    json2typescript_1.JsonProperty("Bonds", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "bonds", void 0);
__decorate([
    json2typescript_1.JsonProperty("Metals", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "metals", void 0);
__decorate([
    json2typescript_1.JsonProperty("Softs", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "softs", void 0);
__decorate([
    json2typescript_1.JsonProperty("Currencies", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "currencies", void 0);
TypesOfMarketsTraded = __decorate([
    json2typescript_1.JsonObject("TypesOfMarketsTraded")
], TypesOfMarketsTraded);
exports.TypesOfMarketsTraded = TypesOfMarketsTraded;
;
let IndustryPreferencesDetailedList = class IndustryPreferencesDetailedList {
    constructor() {
        this.industryPreferences = undefined;
        this.sortOrder = undefined;
        this.name = undefined;
    }
    get IndustryPreferences() { return this.industryPreferences; }
    set IndustryPreferences(value) { this.industryPreferences = value; }
    get SortOrder() { return this.sortOrder; }
    set SortOrder(value) { this.sortOrder = value; }
    get Name() { return this.name; }
    set Name(value) { this.name = value; }
};
__decorate([
    json2typescript_1.JsonProperty("industryPreferences", [String], true),
    __metadata("design:type", Array)
], IndustryPreferencesDetailedList.prototype, "industryPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("sortOrder", Number, true),
    __metadata("design:type", Number)
], IndustryPreferencesDetailedList.prototype, "sortOrder", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String, true),
    __metadata("design:type", String)
], IndustryPreferencesDetailedList.prototype, "name", void 0);
IndustryPreferencesDetailedList = __decorate([
    json2typescript_1.JsonObject("IndustryPreferencesDetailedList")
], IndustryPreferencesDetailedList);
exports.IndustryPreferencesDetailedList = IndustryPreferencesDetailedList;
;
let MethodsOfInvestmentEmployed = class MethodsOfInvestmentEmployed {
    constructor() {
        this.debt = undefined;
        this.equities = undefined;
        this.derivatives = undefined;
        this.derivativeMarkets = undefined;
        this.other = undefined;
    }
    get Debt() { return this.debt; }
    set Debt(value) { this.debt = value; }
    get Equities() { return this.equities; }
    set Equities(value) { this.equities = value; }
    get Derivatives() { return this.derivatives; }
    set Derivatives(value) { this.derivatives = value; }
    get DerivativeMarkets() { return this.derivativeMarkets; }
    set DerivativeMarkets(value) { this.derivativeMarkets = value; }
    get Other() { return this.other; }
    set Other(value) { this.other = value; }
};
__decorate([
    json2typescript_1.JsonProperty("Debt", [String], true),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "debt", void 0);
__decorate([
    json2typescript_1.JsonProperty("Equities", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "equities", void 0);
__decorate([
    json2typescript_1.JsonProperty("Derivatives", [String], true),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "derivatives", void 0);
__decorate([
    json2typescript_1.JsonProperty("Derivative Markets", [String], true),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "derivativeMarkets", void 0);
__decorate([
    json2typescript_1.JsonProperty("Other", [String], true),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "other", void 0);
MethodsOfInvestmentEmployed = __decorate([
    json2typescript_1.JsonObject("MethodsOfInvestmentEmployed")
], MethodsOfInvestmentEmployed);
exports.MethodsOfInvestmentEmployed = MethodsOfInvestmentEmployed;
;
let GeographicCorePreference = class GeographicCorePreference {
    constructor() {
        this.sortOrder = undefined;
        this.name = undefined;
        this.countries = undefined;
    }
    get SortOrder() { return this.sortOrder; }
    set SortOrder(value) { this.sortOrder = value; }
    get Name() { return this.name; }
    set Name(value) { this.name = value; }
    get Countries() { return this.countries; }
    set Countries(value) { this.countries = value; }
};
__decorate([
    json2typescript_1.JsonProperty("sortOrder", Number, true),
    __metadata("design:type", Number)
], GeographicCorePreference.prototype, "sortOrder", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String, true),
    __metadata("design:type", String)
], GeographicCorePreference.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty("countries", [String], true),
    __metadata("design:type", Array)
], GeographicCorePreference.prototype, "countries", void 0);
GeographicCorePreference = __decorate([
    json2typescript_1.JsonObject("GeographicCorePreference")
], GeographicCorePreference);
exports.GeographicCorePreference = GeographicCorePreference;
;
let OtherStrategiesDetailedList = class OtherStrategiesDetailedList {
    constructor() {
        this.equityStrategies = undefined;
        this.eventDrivenStrategies = undefined;
    }
    get EquityStrategies() { return this.equityStrategies; }
    set EquityStrategies(value) { this.equityStrategies = value; }
    get EventDrivenStrategies() { return this.eventDrivenStrategies; }
    set EventDrivenStrategies(value) { this.eventDrivenStrategies = value; }
};
__decorate([
    json2typescript_1.JsonProperty("Equity Strategies", [String], true),
    __metadata("design:type", Array)
], OtherStrategiesDetailedList.prototype, "equityStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("Event Driven Strategies", [String], true),
    __metadata("design:type", Array)
], OtherStrategiesDetailedList.prototype, "eventDrivenStrategies", void 0);
OtherStrategiesDetailedList = __decorate([
    json2typescript_1.JsonObject("OtherStrategiesDetailedList")
], OtherStrategiesDetailedList);
exports.OtherStrategiesDetailedList = OtherStrategiesDetailedList;
;
let CoreStrategiesDetailedList = class CoreStrategiesDetailedList {
    constructor() {
        this.equityStrategies = undefined;
        this.managedFuturesCTA = undefined;
        this.creditStrategies = undefined;
    }
    get EquityStrategies() { return this.equityStrategies; }
    set EquityStrategies(value) { this.equityStrategies = value; }
    get ManagedFuturesCTA() { return this.managedFuturesCTA; }
    set ManagedFuturesCTA(value) { this.managedFuturesCTA = value; }
    get CreditStrategies() { return this.creditStrategies; }
    set CreditStrategies(value) { this.creditStrategies = value; }
};
__decorate([
    json2typescript_1.JsonProperty("Equity Strategies", [String], true),
    __metadata("design:type", Array)
], CoreStrategiesDetailedList.prototype, "equityStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("Managed Futures/CTA", [String], true),
    __metadata("design:type", Array)
], CoreStrategiesDetailedList.prototype, "managedFuturesCTA", void 0);
__decorate([
    json2typescript_1.JsonProperty("Credit Strategies", [String], true),
    __metadata("design:type", Array)
], CoreStrategiesDetailedList.prototype, "creditStrategies", void 0);
CoreStrategiesDetailedList = __decorate([
    json2typescript_1.JsonObject("CoreStrategiesDetailedList")
], CoreStrategiesDetailedList);
exports.CoreStrategiesDetailedList = CoreStrategiesDetailedList;
;
let GeographicPreference = class GeographicPreference {
    constructor() {
        this.sortOrder = undefined;
        this.name = undefined;
        this.countries = undefined;
    }
    get SortOrder() { return this.sortOrder; }
    set SortOrder(value) { this.sortOrder = value; }
    get Name() { return this.name; }
    set Name(value) { this.name = value; }
    get Countries() { return this.countries; }
    set Countries(value) { this.countries = value; }
};
__decorate([
    json2typescript_1.JsonProperty("sortOrder", Number),
    __metadata("design:type", Number)
], GeographicPreference.prototype, "sortOrder", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String),
    __metadata("design:type", String)
], GeographicPreference.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty("countries", [String]),
    __metadata("design:type", Array)
], GeographicPreference.prototype, "countries", void 0);
GeographicPreference = __decorate([
    json2typescript_1.JsonObject("GeographicPreference")
], GeographicPreference);
exports.GeographicPreference = GeographicPreference;
;
let Trading = class Trading {
    constructor() {
        this.activist = undefined;
        this.usesArtificialIntelligenceMachineLearning = undefined;
        this.analystApproach = undefined;
        this.tradingVolatility = undefined;
        this.tradingMethodology = undefined;
    }
    get Activist() { return this.activist; }
    set Activist(value) { this.activist = value; }
    get UsesArtificialIntelligenceMachineLearning() { return this.usesArtificialIntelligenceMachineLearning; }
    set UsesArtificialIntelligenceMachineLearning(value) { this.usesArtificialIntelligenceMachineLearning = value; }
    get AnalystApproach() { return this.analystApproach; }
    set AnalystApproach(value) { this.analystApproach = value; }
    get TradingVolatility() { return this.tradingVolatility; }
    set TradingVolatility(value) { this.tradingVolatility = value; }
    get TradingMethodology() { return this.tradingMethodology; }
    set TradingMethodology(value) { this.tradingMethodology = value; }
};
__decorate([
    json2typescript_1.JsonProperty("activist", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Trading.prototype, "activist", void 0);
__decorate([
    json2typescript_1.JsonProperty("usesArtificialIntelligenceMachineLearning", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Trading.prototype, "usesArtificialIntelligenceMachineLearning", void 0);
__decorate([
    json2typescript_1.JsonProperty("analystApproach", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Trading.prototype, "analystApproach", void 0);
__decorate([
    json2typescript_1.JsonProperty("tradingVolatility", String, true),
    __metadata("design:type", String)
], Trading.prototype, "tradingVolatility", void 0);
__decorate([
    json2typescript_1.JsonProperty("tradingMethodology", String, true),
    __metadata("design:type", String)
], Trading.prototype, "tradingMethodology", void 0);
Trading = __decorate([
    json2typescript_1.JsonObject("Trading")
], Trading);
exports.Trading = Trading;
;
let HF = class HF {
    constructor() {
        this.otherStructuresOffered = undefined;
        this.industryPreferences = undefined;
        this.typesOfMarketsTraded = undefined;
        this.industryPreferencesDetailedList = undefined;
        this.showOnOnlineProduct = undefined;
        this.methodsOfInvestmentEmployed = undefined;
        this.geographicCorePreferences = undefined;
        this.otherStrategiesDetailedList = undefined;
        this.coreStrategiesDetailedList = undefined;
        this.geographicPreferences = undefined;
        this.trading = undefined;
        this.coreStrategies = undefined;
        this.minimumInvestment = undefined;
        this.otherStrategies = undefined;
        this.parentFundIsDummyParent = undefined;
        this.parentFundId = undefined;
    }
    get OtherStructuresOffered() { return this.otherStructuresOffered; }
    set OtherStructuresOffered(value) { this.otherStructuresOffered = value; }
    get IndustryPreferences() { return this.industryPreferences; }
    set IndustryPreferences(value) { this.industryPreferences = value; }
    get TypesOfMarketsTraded() { return this.typesOfMarketsTraded; }
    set TypesOfMarketsTraded(value) { this.typesOfMarketsTraded = value; }
    get IndustryPreferencesDetailedList() { return this.industryPreferencesDetailedList; }
    set IndustryPreferencesDetailedList(value) { this.industryPreferencesDetailedList = value; }
    get ShowOnOnlineProduct() { return this.showOnOnlineProduct; }
    set ShowOnOnlineProduct(value) { this.showOnOnlineProduct = value; }
    get MethodsOfInvestmentEmployed() { return this.methodsOfInvestmentEmployed; }
    set MethodsOfInvestmentEmployed(value) { this.methodsOfInvestmentEmployed = value; }
    get GeographicCorePreferences() { return this.geographicCorePreferences; }
    set GeographicCorePreferences(value) { this.geographicCorePreferences = value; }
    get OtherStrategiesDetailedList() { return this.otherStrategiesDetailedList; }
    set OtherStrategiesDetailedList(value) { this.otherStrategiesDetailedList = value; }
    get CoreStrategiesDetailedList() { return this.coreStrategiesDetailedList; }
    set CoreStrategiesDetailedList(value) { this.coreStrategiesDetailedList = value; }
    get GeographicPreferences() { return this.geographicPreferences; }
    set GeographicPreferences(value) { this.geographicPreferences = value; }
    get Trading() { return this.trading; }
    set Trading(value) { this.trading = value; }
    get CoreStrategies() { return this.coreStrategies; }
    set CoreStrategies(value) { this.coreStrategies = value; }
    get MinimumInvestment() { return this.minimumInvestment; }
    set MinimumInvestment(value) { this.minimumInvestment = value; }
    get OtherStrategies() { return this.otherStrategies; }
    set OtherStrategies(value) { this.otherStrategies = value; }
    get ParentFundIsDummyParent() { return this.parentFundIsDummyParent; }
    set ParentFundIsDummyParent(value) { this.parentFundIsDummyParent = value; }
    get ParentFundId() { return this.parentFundId; }
    set ParentFundId(value) { this.parentFundId = value; }
};
__decorate([
    json2typescript_1.JsonProperty("otherStructuresOffered", [String], true),
    __metadata("design:type", Array)
], HF.prototype, "otherStructuresOffered", void 0);
__decorate([
    json2typescript_1.JsonProperty("industryPreferences", [String], true),
    __metadata("design:type", Array)
], HF.prototype, "industryPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("typesOfMarketsTraded", TypesOfMarketsTraded, true),
    __metadata("design:type", TypesOfMarketsTraded)
], HF.prototype, "typesOfMarketsTraded", void 0);
__decorate([
    json2typescript_1.JsonProperty("industryPreferencesDetailedList", [IndustryPreferencesDetailedList], true),
    __metadata("design:type", Array)
], HF.prototype, "industryPreferencesDetailedList", void 0);
__decorate([
    json2typescript_1.JsonProperty("showOnOnlineProduct", Boolean, true),
    __metadata("design:type", Boolean)
], HF.prototype, "showOnOnlineProduct", void 0);
__decorate([
    json2typescript_1.JsonProperty("methodsOfInvestmentEmployed", MethodsOfInvestmentEmployed, true),
    __metadata("design:type", MethodsOfInvestmentEmployed)
], HF.prototype, "methodsOfInvestmentEmployed", void 0);
__decorate([
    json2typescript_1.JsonProperty("geographicCorePreferences", [GeographicCorePreference], true),
    __metadata("design:type", Array)
], HF.prototype, "geographicCorePreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("otherStrategiesDetailedList", OtherStrategiesDetailedList, true),
    __metadata("design:type", OtherStrategiesDetailedList)
], HF.prototype, "otherStrategiesDetailedList", void 0);
__decorate([
    json2typescript_1.JsonProperty("coreStrategiesDetailedList", CoreStrategiesDetailedList, true),
    __metadata("design:type", CoreStrategiesDetailedList)
], HF.prototype, "coreStrategiesDetailedList", void 0);
__decorate([
    json2typescript_1.JsonProperty("geographicPreferences", [GeographicPreference], true),
    __metadata("design:type", Array)
], HF.prototype, "geographicPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("trading", Trading, true),
    __metadata("design:type", Trading)
], HF.prototype, "trading", void 0);
__decorate([
    json2typescript_1.JsonProperty("coreStrategies", [String], true),
    __metadata("design:type", Array)
], HF.prototype, "coreStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("minimumInvestment", Number, true),
    __metadata("design:type", Number)
], HF.prototype, "minimumInvestment", void 0);
__decorate([
    json2typescript_1.JsonProperty("otherStrategies", [String], true),
    __metadata("design:type", Array)
], HF.prototype, "otherStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("parentFundIsDummyParent", Boolean, true),
    __metadata("design:type", Boolean)
], HF.prototype, "parentFundIsDummyParent", void 0);
__decorate([
    json2typescript_1.JsonProperty("parentFundId", String, true),
    __metadata("design:type", String)
], HF.prototype, "parentFundId", void 0);
HF = __decorate([
    json2typescript_1.JsonObject("HF")
], HF);
exports.HF = HF;
;
let Region2 = class Region2 {
    constructor() {
        this.id = undefined;
        this.text = undefined;
    }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get Text() { return this.text; }
    set Text(value) { this.text = value; }
};
__decorate([
    json2typescript_1.JsonProperty("id", Number, true),
    __metadata("design:type", Number)
], Region2.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("text", String, true),
    __metadata("design:type", String)
], Region2.prototype, "text", void 0);
Region2 = __decorate([
    json2typescript_1.JsonObject("Region2")
], Region2);
exports.Region2 = Region2;
;
let Country2 = class Country2 {
    constructor() {
        this.id = undefined;
        this.text = undefined;
    }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get Text() { return this.text; }
    set Text(value) { this.text = value; }
};
__decorate([
    json2typescript_1.JsonProperty("id", Number, true),
    __metadata("design:type", Number)
], Country2.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("text", String, true),
    __metadata("design:type", String)
], Country2.prototype, "text", void 0);
Country2 = __decorate([
    json2typescript_1.JsonObject("Country2")
], Country2);
exports.Country2 = Country2;
;
let OtherGeographicFocus = class OtherGeographicFocus {
    constructor() {
        this.regions = undefined;
        this.countries = undefined;
    }
    get Regions() { return this.regions; }
    set Regions(value) { this.regions = value; }
    get Countries() { return this.countries; }
    set Countries(value) { this.countries = value; }
};
__decorate([
    json2typescript_1.JsonProperty("regions", [Region2], true),
    __metadata("design:type", Array)
], OtherGeographicFocus.prototype, "regions", void 0);
__decorate([
    json2typescript_1.JsonProperty("regions", [Country2], true),
    __metadata("design:type", Array)
], OtherGeographicFocus.prototype, "countries", void 0);
OtherGeographicFocus = __decorate([
    json2typescript_1.JsonObject("OtherGeographicFocus")
], OtherGeographicFocus);
exports.OtherGeographicFocus = OtherGeographicFocus;
;
let FundManagerDetailsFund = class FundManagerDetailsFund {
    constructor() {
        this.iNF = undefined;
        this.availableCapital = undefined;
        this.fundRaised = undefined;
        this.geographicFocus = undefined;
        this.name = undefined;
        this.id = undefined;
        this.fundRaisingStatus = undefined;
        this.isActive = undefined;
        this.category = undefined;
        this.assetClasses = undefined;
        this.hF = undefined;
        this.structure = undefined;
        this.otherGeographicFocus = undefined;
    }
    get INF() { return this.iNF; }
    set INF(value) { this.iNF = value; }
    get AvailableCapital() { return this.availableCapital; }
    set AvailableCapital(value) { this.availableCapital = value; }
    get FundRaised() { return this.fundRaised; }
    set FundRaised(value) { this.fundRaised = value; }
    get GeographicFocus() { return this.geographicFocus; }
    set GeographicFocus(value) { this.geographicFocus = value; }
    get Name() { return this.name; }
    set Name(value) { this.name = value; }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get FundRaisingStatus() { return this.fundRaisingStatus; }
    set FundRaisingStatus(value) { this.fundRaisingStatus = value; }
    get IsActive() { return this.isActive; }
    set IsActive(value) { this.isActive = value; }
    get Category() { return this.category; }
    set Category(value) { this.category = value; }
    get AssetClasses() { return this.assetClasses; }
    set AssetClasses(value) { this.assetClasses = value; }
    get HF() { return this.hF; }
    set HF(value) { this.hF = value; }
    get Structure() { return this.structure; }
    set Structure(value) { this.structure = value; }
    get OtherGeographicFocus() { return this.otherGeographicFocus; }
    set OtherGeographicFocus(value) { this.otherGeographicFocus = value; }
};
__decorate([
    json2typescript_1.JsonProperty("iNF", INF, true),
    __metadata("design:type", INF)
], FundManagerDetailsFund.prototype, "iNF", void 0);
__decorate([
    json2typescript_1.JsonProperty("availableCapital", AvailableCapital, true),
    __metadata("design:type", AvailableCapital)
], FundManagerDetailsFund.prototype, "availableCapital", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundRaised", FundRaised, true),
    __metadata("design:type", FundRaised)
], FundManagerDetailsFund.prototype, "fundRaised", void 0);
__decorate([
    json2typescript_1.JsonProperty("geographicFocus", GeographicFocus, true),
    __metadata("design:type", GeographicFocus)
], FundManagerDetailsFund.prototype, "geographicFocus", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String, true),
    __metadata("design:type", String)
], FundManagerDetailsFund.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty("id", String, true),
    __metadata("design:type", String)
], FundManagerDetailsFund.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundRaisingStatus", String, true),
    __metadata("design:type", String)
], FundManagerDetailsFund.prototype, "fundRaisingStatus", void 0);
__decorate([
    json2typescript_1.JsonProperty("isActive", Boolean, true),
    __metadata("design:type", Boolean)
], FundManagerDetailsFund.prototype, "isActive", void 0);
__decorate([
    json2typescript_1.JsonProperty("category", String, true),
    __metadata("design:type", String)
], FundManagerDetailsFund.prototype, "category", void 0);
__decorate([
    json2typescript_1.JsonProperty("assetClasses", [String], true),
    __metadata("design:type", Array)
], FundManagerDetailsFund.prototype, "assetClasses", void 0);
__decorate([
    json2typescript_1.JsonProperty("hF", HF, true),
    __metadata("design:type", HF)
], FundManagerDetailsFund.prototype, "hF", void 0);
__decorate([
    json2typescript_1.JsonProperty("structure", String, true),
    __metadata("design:type", String)
], FundManagerDetailsFund.prototype, "structure", void 0);
__decorate([
    json2typescript_1.JsonProperty("otherGeographicFocus", OtherGeographicFocus, true),
    __metadata("design:type", OtherGeographicFocus)
], FundManagerDetailsFund.prototype, "otherGeographicFocus", void 0);
FundManagerDetailsFund = __decorate([
    json2typescript_1.JsonObject("FundManagerDetailsFund")
], FundManagerDetailsFund);
exports.FundManagerDetailsFund = FundManagerDetailsFund;
;
let Datum = class Datum {
    constructor() {
        this.id = undefined;
        this.checkBox = undefined;
        this.currency = undefined;
        this.name = undefined;
        this.addressDetailsCity = undefined;
        this.addressDetailsCountry = undefined;
        this.fundManagerDetailsPeOverallInvestmentCriteriaStrategies = undefined;
        this.fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn = undefined;
        this.fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn = undefined;
        this.fundManagerDetailsRePreferencesStrategies = undefined;
        this.fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn = undefined;
        this.fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn = undefined;
        this.fundManagerDetailsPdOverallInvestmentCriteriaStrategies = undefined;
        this.fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn = undefined;
        this.fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn = undefined;
        this.fundManagerDetailsNrPreferencesStrategies = undefined;
        this.fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn = undefined;
        this.fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn = undefined;
        this.fundManagerDetailsInfPrimaryStrategies = undefined;
        this.fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn = undefined;
        this.fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn = undefined;
        this.fundManagerDetailsHfCategory = undefined;
        this.fundManagerDetailsFunds = undefined;
        this.fundManagerDetailsHfCoreStrategies = undefined;
        this.fundManagerDetailsSnapshotsHfAumLocalMn = undefined;
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
    get Currency() { return this.currency; }
    set Currency(value) { this.currency = value; }
    get Name() { return this.name; }
    set Name(value) { this.name = value; }
    get AddressDetailsCity() { return this.addressDetailsCity; }
    set AddressDetailsCity(value) { this.addressDetailsCity = value; }
    get AddressDetailsCountry() { return this.addressDetailsCountry; }
    set AddressDetailsCountry(value) { this.addressDetailsCountry = value; }
    get FundManagerDetailsPeOverallInvestmentCriteriaStrategies() { return this.fundManagerDetailsPeOverallInvestmentCriteriaStrategies; }
    set FundManagerDetailsPeOverallInvestmentCriteriaStrategies(value) { this.fundManagerDetailsPeOverallInvestmentCriteriaStrategies = value; }
    get FundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn() { return this.fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn; }
    set FundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn(value) { this.fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn = value; }
    get FundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn() { return this.fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn; }
    set FundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn(value) { this.fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn = value; }
    get FundManagerDetailsRePreferencesStrategies() { return this.fundManagerDetailsRePreferencesStrategies; }
    set FundManagerDetailsRePreferencesStrategies(value) { this.fundManagerDetailsRePreferencesStrategies = value; }
    get FundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn() { return this.fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn; }
    set FundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn(value) { this.fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn = value; }
    get FundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn() { return this.fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn; }
    set FundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn(value) { this.fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn = value; }
    get FundManagerDetailsPdOverallInvestmentCriteriaStrategies() { return this.fundManagerDetailsPdOverallInvestmentCriteriaStrategies; }
    set FundManagerDetailsPdOverallInvestmentCriteriaStrategies(value) { this.fundManagerDetailsPdOverallInvestmentCriteriaStrategies = value; }
    get FundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn() { return this.fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn; }
    set FundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn(value) { this.fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn = value; }
    get FundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn() { return this.fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn; }
    set FundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn(value) { this.fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn = value; }
    get FundManagerDetailsNrPreferencesStrategies() { return this.fundManagerDetailsNrPreferencesStrategies; }
    set FundManagerDetailsNrPreferencesStrategies(value) { this.fundManagerDetailsNrPreferencesStrategies = value; }
    get FundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn() { return this.fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn; }
    set FundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn(value) { this.fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn = value; }
    get FundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn() { return this.fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn; }
    set FundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn(value) { this.fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn = value; }
    get FundManagerDetailsInfPrimaryStrategies() { return this.fundManagerDetailsInfPrimaryStrategies; }
    set FundManagerDetailsInfPrimaryStrategies(value) { this.fundManagerDetailsInfPrimaryStrategies = value; }
    get FundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn() { return this.fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn; }
    set FundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn(value) { this.fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn = value; }
    get FundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn() { return this.fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn; }
    set FundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn(value) { this.fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn = value; }
    get FundManagerDetailsHfCategory() { return this.fundManagerDetailsHfCategory; }
    set FundManagerDetailsHfCategory(value) { this.fundManagerDetailsHfCategory = value; }
    get FundManagerDetailsFunds() { return this.fundManagerDetailsFunds; }
    set FundManagerDetailsFunds(value) { this.fundManagerDetailsFunds = value; }
    get FundManagerDetailsHfCoreStrategies() { return this.fundManagerDetailsHfCoreStrategies; }
    set FundManagerDetailsHfCoreStrategies(value) { this.fundManagerDetailsHfCoreStrategies = value; }
    get FundManagerDetailsSnapshotsHfAumLocalMn() { return this.fundManagerDetailsSnapshotsHfAumLocalMn; }
    set FundManagerDetailsSnapshotsHfAumLocalMn(value) { this.fundManagerDetailsSnapshotsHfAumLocalMn = value; }
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
    json2typescript_1.JsonProperty("currency", String),
    __metadata("design:type", String)
], Datum.prototype, "currency", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String),
    __metadata("design:type", String)
], Datum.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.city", String),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsCity", void 0);
__decorate([
    json2typescript_1.JsonProperty("addressDetails.country", String),
    __metadata("design:type", String)
], Datum.prototype, "addressDetailsCountry", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.pE.overallInvestmentCriteria.strategies", [String], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsPeOverallInvestmentCriteriaStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.rE.preferences.strategies", [String], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsRePreferencesStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.pD.overallInvestmentCriteria.strategies", String, true),
    __metadata("design:type", String)
], Datum.prototype, "fundManagerDetailsPdOverallInvestmentCriteriaStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.nR.preferences.strategies", [String], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsNrPreferencesStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.iNF.primaryStrategies", [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsInfPrimaryStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn", json2typescript_1.Any, true),
    __metadata("design:type", Object)
], Datum.prototype, "fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.hF.category", [String], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsHfCategory", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.funds", [FundManagerDetailsFund], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsFunds", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.hF.coreStrategies", [String], true),
    __metadata("design:type", Array)
], Datum.prototype, "fundManagerDetailsHfCoreStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("fundManagerDetails.snapshots.HF.aUM.localMn", Number, true),
    __metadata("design:type", Number)
], Datum.prototype, "fundManagerDetailsSnapshotsHfAumLocalMn", void 0);
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
let SearchResponseRootObjectForFundManager = class SearchResponseRootObjectForFundManager {
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
], SearchResponseRootObjectForFundManager.prototype, "meta", void 0);
__decorate([
    json2typescript_1.JsonProperty("data", [Datum]),
    __metadata("design:type", Array)
], SearchResponseRootObjectForFundManager.prototype, "data", void 0);
SearchResponseRootObjectForFundManager = __decorate([
    json2typescript_1.JsonObject("SearchResponseRootObjectForFundManager")
], SearchResponseRootObjectForFundManager);
exports.SearchResponseRootObjectForFundManager = SearchResponseRootObjectForFundManager;
;
//# sourceMappingURL=SearchResponseObjectForFundManager.js.map