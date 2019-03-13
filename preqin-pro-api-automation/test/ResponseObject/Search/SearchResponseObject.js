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
    json2typescript_1.JsonObject("MetaDataDetails")
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
    json2typescript_1.JsonProperty("projectStage", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], INF.prototype, "projectStage", void 0);
__decorate([
    json2typescript_1.JsonProperty("primaryStrategy", json2typescript_1.Any),
    __metadata("design:type", Object)
], INF.prototype, "primaryStrategy", void 0);
__decorate([
    json2typescript_1.JsonProperty("strategies", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], INF.prototype, "strategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("sectorPreferences", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], INF.prototype, "sectorPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("pppPfiInvestments", json2typescript_1.Any),
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
    json2typescript_1.JsonProperty("usdMn", Number),
    __metadata("design:type", Number)
], AvailableCapital.prototype, "usdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("eurMn", Number),
    __metadata("design:type", Number)
], AvailableCapital.prototype, "eurMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("localMn", Number),
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
    json2typescript_1.JsonProperty("usdMn", Number),
    __metadata("design:type", Number)
], FundRaised.prototype, "usdMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("eurMn", Number),
    __metadata("design:type", Number)
], FundRaised.prototype, "eurMn", void 0);
__decorate([
    json2typescript_1.JsonProperty("localMn", Number),
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
    json2typescript_1.JsonProperty("regions", [Region]),
    __metadata("design:type", Array)
], GeographicFocus.prototype, "regions", void 0);
__decorate([
    json2typescript_1.JsonProperty("countries", [Country]),
    __metadata("design:type", Array)
], GeographicFocus.prototype, "countries", void 0);
__decorate([
    json2typescript_1.JsonProperty("mainFundFocus", String),
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
    json2typescript_1.JsonProperty("Stock Indexes", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "stockIndexes", void 0);
__decorate([
    json2typescript_1.JsonProperty("Interest Rates", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "interestRates", void 0);
__decorate([
    json2typescript_1.JsonProperty("Energy", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "energy", void 0);
__decorate([
    json2typescript_1.JsonProperty("Grains", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "grains", void 0);
__decorate([
    json2typescript_1.JsonProperty("Meats", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "meats", void 0);
__decorate([
    json2typescript_1.JsonProperty("Bonds", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "bonds", void 0);
__decorate([
    json2typescript_1.JsonProperty("Metals", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "metals", void 0);
__decorate([
    json2typescript_1.JsonProperty("Softs", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], TypesOfMarketsTraded.prototype, "softs", void 0);
__decorate([
    json2typescript_1.JsonProperty("Currencies", [json2typescript_1.Any]),
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
    json2typescript_1.JsonProperty("industryPreferences", [String]),
    __metadata("design:type", Array)
], IndustryPreferencesDetailedList.prototype, "industryPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("sortOrder", Number),
    __metadata("design:type", Number)
], IndustryPreferencesDetailedList.prototype, "sortOrder", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String),
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
    json2typescript_1.JsonProperty("Debt", [String]),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "debt", void 0);
__decorate([
    json2typescript_1.JsonProperty("Equities", [json2typescript_1.Any]),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "equities", void 0);
__decorate([
    json2typescript_1.JsonProperty("Derivatives", [String]),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "derivatives", void 0);
__decorate([
    json2typescript_1.JsonProperty("Derivative Markets", [String]),
    __metadata("design:type", Array)
], MethodsOfInvestmentEmployed.prototype, "derivativeMarkets", void 0);
__decorate([
    json2typescript_1.JsonProperty("Other", [String]),
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
    json2typescript_1.JsonProperty("sortOrder", Number),
    __metadata("design:type", Number)
], GeographicCorePreference.prototype, "sortOrder", void 0);
__decorate([
    json2typescript_1.JsonProperty("name", String),
    __metadata("design:type", String)
], GeographicCorePreference.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty("countries", [String]),
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
    json2typescript_1.JsonProperty("Equity Strategies", [String]),
    __metadata("design:type", Array)
], OtherStrategiesDetailedList.prototype, "equityStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("Event Driven Strategies", [String]),
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
    json2typescript_1.JsonProperty("Equity Strategies", [String]),
    __metadata("design:type", Array)
], CoreStrategiesDetailedList.prototype, "equityStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("Managed Futures/CTA", [String]),
    __metadata("design:type", Array)
], CoreStrategiesDetailedList.prototype, "managedFuturesCTA", void 0);
__decorate([
    json2typescript_1.JsonProperty("Credit Strategies", [String]),
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
    json2typescript_1.JsonProperty("activist", json2typescript_1.Any),
    __metadata("design:type", Object)
], Trading.prototype, "activist", void 0);
__decorate([
    json2typescript_1.JsonProperty("usesArtificialIntelligenceMachineLearning", json2typescript_1.Any),
    __metadata("design:type", Object)
], Trading.prototype, "usesArtificialIntelligenceMachineLearning", void 0);
__decorate([
    json2typescript_1.JsonProperty("analystApproach", json2typescript_1.Any),
    __metadata("design:type", Object)
], Trading.prototype, "analystApproach", void 0);
__decorate([
    json2typescript_1.JsonProperty("tradingVolatility", String),
    __metadata("design:type", String)
], Trading.prototype, "tradingVolatility", void 0);
__decorate([
    json2typescript_1.JsonProperty("tradingMethodology", String),
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
    get CoreStrategies() { return this.coreStrategies; }
    set CoreStrategies(value) { this.coreStrategies = value; }
    get MinimumInvestment() { return this.minimumInvestment; }
    set MinimumInvestment(value) { this.minimumInvestment = value; }
    get OtherStrategies() { return this.otherStrategies; }
    set OtherStrategies(value) { this.otherStrategies = value; }
    get ParentFundId() { return this.parentFundId; }
    set ParentFundId(value) { this.parentFundId = value; }
};
__decorate([
    json2typescript_1.JsonProperty("otherStructuresOffered", [String]),
    __metadata("design:type", Array)
], HF.prototype, "otherStructuresOffered", void 0);
__decorate([
    json2typescript_1.JsonProperty("industryPreferences", [String]),
    __metadata("design:type", Array)
], HF.prototype, "industryPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("typesOfMarketsTraded", TypesOfMarketsTraded),
    __metadata("design:type", TypesOfMarketsTraded)
], HF.prototype, "typesOfMarketsTraded", void 0);
__decorate([
    json2typescript_1.JsonProperty("industryPreferencesDetailedList", [IndustryPreferencesDetailedList]),
    __metadata("design:type", Array)
], HF.prototype, "industryPreferencesDetailedList", void 0);
__decorate([
    json2typescript_1.JsonProperty("showOnOnlineProduct", Boolean),
    __metadata("design:type", Boolean)
], HF.prototype, "showOnOnlineProduct", void 0);
__decorate([
    json2typescript_1.JsonProperty("methodsOfInvestmentEmployed", MethodsOfInvestmentEmployed),
    __metadata("design:type", MethodsOfInvestmentEmployed)
], HF.prototype, "methodsOfInvestmentEmployed", void 0);
__decorate([
    json2typescript_1.JsonProperty("geographicCorePreferences", [GeographicCorePreference]),
    __metadata("design:type", Array)
], HF.prototype, "geographicCorePreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("otherStrategiesDetailedList", OtherStrategiesDetailedList),
    __metadata("design:type", OtherStrategiesDetailedList)
], HF.prototype, "otherStrategiesDetailedList", void 0);
__decorate([
    json2typescript_1.JsonProperty("coreStrategiesDetailedList", CoreStrategiesDetailedList),
    __metadata("design:type", CoreStrategiesDetailedList)
], HF.prototype, "coreStrategiesDetailedList", void 0);
__decorate([
    json2typescript_1.JsonProperty("geographicPreferences", [GeographicPreference]),
    __metadata("design:type", Array)
], HF.prototype, "geographicPreferences", void 0);
__decorate([
    json2typescript_1.JsonProperty("trading", Trading),
    __metadata("design:type", Trading)
], HF.prototype, "trading", void 0);
__decorate([
    json2typescript_1.JsonProperty("coreStrategies", [String]),
    __metadata("design:type", Array)
], HF.prototype, "coreStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("minimumInvestment", Number),
    __metadata("design:type", Number)
], HF.prototype, "minimumInvestment", void 0);
__decorate([
    json2typescript_1.JsonProperty("otherStrategies", [String]),
    __metadata("design:type", Array)
], HF.prototype, "otherStrategies", void 0);
__decorate([
    json2typescript_1.JsonProperty("parentFundIsDummyParent", Boolean),
    __metadata("design:type", Boolean)
], HF.prototype, "parentFundIsDummyParent", void 0);
__decorate([
    json2typescript_1.JsonProperty("parentFundId", String),
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
    json2typescript_1.JsonProperty("id", Number),
    __metadata("design:type", Number)
], Region2.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("text", String),
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
    json2typescript_1.JsonProperty("id", Number),
    __metadata("design:type", Number)
], Country2.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty("text", String),
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
    json2typescript_1.JsonProperty("regions", [Region2]),
    __metadata("design:type", Array)
], OtherGeographicFocus.prototype, "regions", void 0);
__decorate([
    json2typescript_1.JsonProperty("regions", [Country2]),
    __metadata("design:type", Array)
], OtherGeographicFocus.prototype, "countries", void 0);
OtherGeographicFocus = __decorate([
    json2typescript_1.JsonObject("OtherGeographicFocus")
], OtherGeographicFocus);
exports.OtherGeographicFocus = OtherGeographicFocus;
;
class FundManagerDetailsFund {
}
exports.FundManagerDetailsFund = FundManagerDetailsFund;
;
class Datum {
}
exports.Datum = Datum;
;
class RootObject {
}
exports.RootObject = RootObject;
;
//# sourceMappingURL=SearchResponseObject.js.map