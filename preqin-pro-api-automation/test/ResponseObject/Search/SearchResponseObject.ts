import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject("MetaDataDetails")
export class Meta {

    @JsonProperty("returned", Number)
    private returned: number = undefined;
    public get Returned(): number { return this.returned; }
    public set Returned(value: number) { this.returned = value; }

    @JsonProperty("total", Number)
    private total: number = undefined;
    public get Total(): number { return this.total; }
    public set Total(value: number) { this.total = value; }

    @JsonProperty("page", Number)
    private page: number = undefined;
    public get Page(): number { return this.page; }
    public set Page(value: number) { this.page = value; }

    @JsonProperty("took", Number)
    private took: number = undefined;
    public get Took(): number { return this.took; }
    public set Took(value: number) { this.took = value; }

    @JsonProperty("filterCounts", Any)
    filterCounts?: any = undefined;
};

@JsonObject("INF")
export class INF {

    @JsonProperty("projectStage", [Any])
    private projectStage?: any[] = undefined;
    public get ProjectStage() { return this.projectStage; }
    public set ProjectStage(value: any[]) { this.projectStage = value; }

    @JsonProperty("primaryStrategy", Any)
    private primaryStrategy?: any = undefined;
    public get PrimaryStrategy() { return this.primaryStrategy; }
    public set PrimaryStrategy(value: any) { this.primaryStrategy = value; }

    @JsonProperty("strategies", [Any])
    private strategies: any[] = undefined;
    public get Strategies() { return this.strategies; }
    public set Strategies(value: any[]) { this.strategies = value; }

    @JsonProperty("sectorPreferences", [Any])
    private sectorPreferences?: any[] = undefined;
    public get SectorPreferences() { return this.sectorPreferences; }
    public set SectorPreferences(value: any[]) { this.sectorPreferences = value; }

    @JsonProperty("pppPfiInvestments", Any)
    private pppPfiInvestments?: any = undefined;
    public get PppPfiInvestments() { return this.pppPfiInvestments; }
    public set PppPfiInvestments(value: any) { this.pppPfiInvestments = value; }
};

@JsonObject("AvailableCapital")
export class AvailableCapital {

    @JsonProperty("usdMn", Number)
    private usdMn: number = undefined;
    public get UsdMn(): number { return this.usdMn; }
    public set UsdMn(value: number) { this.usdMn = value; }

    @JsonProperty("eurMn", Number)
    private eurMn: number = undefined;
    public get EurMn(): number { return this.eurMn; }
    public set EurMn(value: number) { this.eurMn = value; }

    @JsonProperty("localMn", Number)
    private localMn: number = undefined;
    public get LocalMn(): number { return this.localMn; }
    public set LocalMn(value: number) { this.localMn = value; }
};

@JsonObject("FundRaised")
export class FundRaised {

    @JsonProperty("usdMn", Number)
    private usdMn: number = undefined;
    public get UsdMn(): number { return this.usdMn; }
    public set UsdMn(value: number) { this.usdMn = value; }

    @JsonProperty("eurMn", Number)
    private eurMn: number = undefined;
    public get EurMn(): number { return this.eurMn; }
    public set EurMn(value: number) { this.eurMn = value; }

    @JsonProperty("localMn", Number)
    private localMn: number = undefined;
    public get LocalMn(): number { return this.localMn; }
    public set LocalMn(value: number) { this.localMn = value; }
};

@JsonObject("Region")
export class Region {

    @JsonProperty("id", Number)
    private id: number = undefined;
    public get Id(): number { return this.id; }
    public set Id(value: number) { this.id = value; }

    @JsonProperty("text", String)
    private text: string = undefined;
    public get Text(): string { return this.text; }
    public set Text(value: string) { this.text = value; }
};

@JsonObject("Country")
export class Country {

    @JsonProperty("id", Number)
    private id: number = undefined;
    public get Id(): number { return this.id; }
    public set Id(value: number) { this.id = value; }

    @JsonProperty("text", String)
    private text: string = undefined;
    public get Text(): string { return this.text; }
    public set Text(value: string) { this.text = value; }
};

@JsonObject("GeographicFocus")
export class GeographicFocus {

    @JsonProperty("regions", [Region])
    private regions: Region[] = undefined;
    public get Regions(): Region[] { return this.regions; }
    public set Regions(value: Region[]) { this.regions = value; }

    @JsonProperty("countries", [Country])
    private countries: Country[] = undefined;
    public get Countries(): Country[] { return this.countries; }
    public set Countries(value: Country[]) { this.countries = value; }

    @JsonProperty("mainFundFocus", String)
    private mainFundFocus: string = undefined;
    public get MainFundFocus(): string { return this.mainFundFocus; }
    public set MainFundFocus(value: string) { this.mainFundFocus = value; }
};

@JsonObject("TypesOfMarketsTraded")
export class TypesOfMarketsTraded {

    @JsonProperty("Stock Indexes", [Any])
    private stockIndexes?: any[] = undefined;
    public get StockIndexes(): any[] { return this.stockIndexes; }
    public set StockIndexes(value: any[]) { this.stockIndexes = value; }

    @JsonProperty("Interest Rates", [Any])
    private interestRates?: any[] = undefined;
    public get InterestRates(): any[] { return this.interestRates; }
    public set InterestRates(value: any[]) { this.interestRates = value; }

    @JsonProperty("Energy", [Any])
    private energy?: any[] = undefined;
    public get Energy(): any[] { return this.energy; }
    public set Energy(value: any[]) { this.energy = value; }

    @JsonProperty("Grains", [Any])
    private grains?: any[] = undefined;
    public get Grains(): any[] { return this.grains; }
    public set Grains(value: any[]) { this.grains = value; }

    @JsonProperty("Meats", [Any])
    private meats?: any[] = undefined;
    public get Meats(): any[] { return this.meats; }
    public set Meats(value: any[]) { this.meats = value; }

    @JsonProperty("Bonds", [Any])
    private bonds?: any[] = undefined;
    public get Bonds(): any[] { return this.bonds; }
    public set Bonds(value: any[]) { this.bonds = value; }

    @JsonProperty("Metals", [Any])
    private metals?: any[] = undefined;
    public get Metals(): any[] { return this.metals; }
    public set Metals(value: any[]) { this.metals = value; }

    @JsonProperty("Softs", [Any])
    private softs?: any[] = undefined;
    public get Softs(): any[] { return this.softs; }
    public set Softs(value: any[]) { this.softs = value; }

    @JsonProperty("Currencies", [Any])
    private currencies?: any[] = undefined;
    public get Currencies(): any[] { return this.currencies; }
    public set Currencies(value: any[]) { this.currencies = value; }
};

@JsonObject("IndustryPreferencesDetailedList")
export class IndustryPreferencesDetailedList {

    @JsonProperty("industryPreferences", [String])
    private industryPreferences?: string[] = undefined;
    public get IndustryPreferences(): string[] { return this.industryPreferences; }
    public set IndustryPreferences(value: string[]) { this.industryPreferences = value; }

    @JsonProperty("sortOrder", Number)
    private sortOrder?: number = undefined;
    public get SortOrder(): number { return this.sortOrder; }
    public set SortOrder(value: number) { this.sortOrder = value; }

    @JsonProperty("name", String)
    private name?: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }
};

@JsonObject("MethodsOfInvestmentEmployed")
export class MethodsOfInvestmentEmployed {

    @JsonProperty("Debt", [String])
    private debt?: string[] = undefined;
    public get Debt(): string[] { return this.debt; }
    public set Debt(value: string[]) { this.debt = value; }

    @JsonProperty("Equities", [Any])
    private equities?: any[] = undefined;
    public get Equities(): any[] { return this.equities; }
    public set Equities(value: any[]) { this.equities = value; }

    @JsonProperty("Derivatives", [String])
    private derivatives?: string[] = undefined;
    public get Derivatives(): string[] { return this.derivatives; }
    public set Derivatives(value: string[]) { this.derivatives = value; }

    @JsonProperty("Derivative Markets", [String])
    private derivativeMarkets?: string[] = undefined;
    public get DerivativeMarkets(): string[] { return this.derivativeMarkets; }
    public set DerivativeMarkets(value: string[]) { this.derivativeMarkets = value; }

    @JsonProperty("Other", [String])
    private other?: string[] = undefined;
    public get Other(): string[] { return this.other; }
    public set Other(value: string[]) { this.other = value; }
};

@JsonObject("GeographicCorePreference")
export class GeographicCorePreference {

    @JsonProperty("sortOrder", Number)
    private sortOrder?: number = undefined;
    public get SortOrder(): number { return this.sortOrder; }
    public set SortOrder(value: number) { this.sortOrder = value; }

    @JsonProperty("name", String)
    private name?: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }

    @JsonProperty("countries", [String])
    private countries?: string[] = undefined;
    public get Countries(): string[] { return this.countries; }
    public set Countries(value: string[]) { this.countries = value; }
};

@JsonObject("OtherStrategiesDetailedList")
export class OtherStrategiesDetailedList {

    @JsonProperty("Equity Strategies", [String])
    private equityStrategies?: string[] = undefined;
    public get EquityStrategies(): string[] { return this.equityStrategies; }
    public set EquityStrategies(value: string[]) { this.equityStrategies = value; }

    @JsonProperty("Event Driven Strategies", [String])
    private eventDrivenStrategies: string[] = undefined;
    public get EventDrivenStrategies(): string[] { return this.eventDrivenStrategies; }
    public set EventDrivenStrategies(value: string[]) { this.eventDrivenStrategies = value; }
};

@JsonObject("CoreStrategiesDetailedList")
export class CoreStrategiesDetailedList {

    @JsonProperty("Equity Strategies", [String])
    private equityStrategies?: string[] = undefined;
    public get EquityStrategies(): string[] { return this.equityStrategies; }
    public set EquityStrategies(value: string[]) { this.equityStrategies = value; }

    @JsonProperty("Managed Futures/CTA", [String])
    private managedFuturesCTA?: string[] = undefined;
    public get ManagedFuturesCTA(): string[] { return this.managedFuturesCTA; }
    public set ManagedFuturesCTA(value: string[]) { this.managedFuturesCTA = value; }

    @JsonProperty("Credit Strategies", [String])
    private creditStrategies?: string[] = undefined;
    public get CreditStrategies(): string[] { return this.creditStrategies; }
    public set CreditStrategies(value: string[]) { this.creditStrategies = value; }
};

@JsonObject("GeographicPreference")
export class GeographicPreference {

    @JsonProperty("sortOrder", Number)
    private sortOrder: number = undefined;
    public get SortOrder(): number { return this.sortOrder; }
    public set SortOrder(value: number) { this.sortOrder = value; }

    @JsonProperty("name", String)
    private name: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }

    @JsonProperty("countries", [String])
    private countries: string[] = undefined;
    public get Countries(): string[] { return this.countries; }
    public set Countries(value: string[]) { this.countries = value; }
};

@JsonObject("Trading")
export class Trading {

    @JsonProperty("activist", Any)
    private activist: any = undefined;
    public get Activist(): any { return this.activist; }
    public set Activist(value: any) { this.activist = value; }

    @JsonProperty("usesArtificialIntelligenceMachineLearning", Any)
    private usesArtificialIntelligenceMachineLearning?: any = undefined;
    public get UsesArtificialIntelligenceMachineLearning(): any { return this.usesArtificialIntelligenceMachineLearning; }
    public set UsesArtificialIntelligenceMachineLearning(value: any) { this.usesArtificialIntelligenceMachineLearning = value; }

    @JsonProperty("analystApproach", Any)
    private analystApproach: any = undefined;
    public get AnalystApproach(): any { return this.analystApproach; }
    public set AnalystApproach(value: any) { this.analystApproach = value; }

    @JsonProperty("tradingVolatility", String)
    private tradingVolatility: string = undefined;
    public get TradingVolatility(): string { return this.tradingVolatility; }
    public set TradingVolatility(value: string) { this.tradingVolatility = value; }

    @JsonProperty("tradingMethodology", String)
    private tradingMethodology: string = undefined;
    public get TradingMethodology(): string { return this.tradingMethodology; }
    public set TradingMethodology(value: string) { this.tradingMethodology = value; }
};

@JsonObject("HF")
export class HF {

    @JsonProperty("otherStructuresOffered", [String])
    private otherStructuresOffered: string[] = undefined;
    public get OtherStructuresOffered(): string[] { return this.otherStructuresOffered; }
    public set OtherStructuresOffered(value: string[]) { this.otherStructuresOffered = value; }

    @JsonProperty("industryPreferences", [String])
    private industryPreferences: string[] = undefined;
    public get IndustryPreferences(): string[] { return this.industryPreferences; }
    public set IndustryPreferences(value: string[]) { this.industryPreferences = value; }

    @JsonProperty("typesOfMarketsTraded", TypesOfMarketsTraded)
    private typesOfMarketsTraded: TypesOfMarketsTraded = undefined;
    public get TypesOfMarketsTraded(): TypesOfMarketsTraded { return this.typesOfMarketsTraded; }
    public set TypesOfMarketsTraded(value: TypesOfMarketsTraded) { this.typesOfMarketsTraded = value; }

    @JsonProperty("industryPreferencesDetailedList", [IndustryPreferencesDetailedList])
    private industryPreferencesDetailedList: IndustryPreferencesDetailedList[] = undefined;

    @JsonProperty("showOnOnlineProduct", Boolean)
    private showOnOnlineProduct: boolean = undefined;

    @JsonProperty("methodsOfInvestmentEmployed", MethodsOfInvestmentEmployed)
    private methodsOfInvestmentEmployed: MethodsOfInvestmentEmployed = undefined;

    @JsonProperty("geographicCorePreferences", [GeographicCorePreference])
    private geographicCorePreferences: GeographicCorePreference[] = undefined;

    @JsonProperty("otherStrategiesDetailedList", OtherStrategiesDetailedList)
    private otherStrategiesDetailedList: OtherStrategiesDetailedList = undefined;

    @JsonProperty("coreStrategiesDetailedList", CoreStrategiesDetailedList)
    private coreStrategiesDetailedList: CoreStrategiesDetailedList = undefined;

    @JsonProperty("geographicPreferences", [GeographicPreference])
    private geographicPreferences: GeographicPreference[] = undefined;

    @JsonProperty("trading", Trading)
    private trading: Trading = undefined;

    @JsonProperty("coreStrategies", [String])
    private coreStrategies: string[] = undefined;
    public get CoreStrategies(): string[] { return this.coreStrategies; }
    public set CoreStrategies(value: string[]) { this.coreStrategies = value; }

    @JsonProperty("minimumInvestment", Number)
    private minimumInvestment?: number = undefined;
    public get MinimumInvestment(): number { return this.minimumInvestment; }
    public set MinimumInvestment(value: number) { this.minimumInvestment = value; }

    @JsonProperty("otherStrategies", [String])
    private otherStrategies: string[] = undefined;
    public get OtherStrategies(): string[] { return this.otherStrategies; }
    public set OtherStrategies(value: string[]) { this.otherStrategies = value; }

    @JsonProperty("parentFundIsDummyParent", Boolean)
    private parentFundIsDummyParent?: boolean = undefined;

    @JsonProperty("parentFundId", String)
    private parentFundId: string = undefined;
    public get ParentFundId(): string { return this.parentFundId; }
    public set ParentFundId(value: string) { this.parentFundId = value; }
};

@JsonObject("Region2")
export class Region2 {

    @JsonProperty("id", Number)
    private id?: number = undefined;
    public get Id(): number { return this.id; }
    public set Id(value: number) { this.id = value; }

    @JsonProperty("text", String)
    private text: string = undefined;
    public get Text(): string { return this.text; }
    public set Text(value: string) { this.text = value; }
};

@JsonObject("Country2")
export class Country2 {

    @JsonProperty("id", Number)
    private id?: number = undefined;
    public get Id(): number { return this.id; }
    public set Id(value: number) { this.id = value; }

    @JsonProperty("text", String)
    private text: string = undefined;
    public get Text(): string { return this.text; }
    public set Text(value: string) { this.text = value; }
};

@JsonObject("OtherGeographicFocus")
export class OtherGeographicFocus {

    @JsonProperty("regions", [Region2])
    private regions: Region2[] = undefined;
    public get Regions(): Region2[] { return this.regions; }
    public set Regions(value: Region2[]) { this.regions = value; }
    
    @JsonProperty("regions", [Country2])
    private countries: Country2[] = undefined;
    public get Countries(): Country2[] { return this.countries; }
    public set Countries(value: Country2[]) { this.countries = value; }
};

export class FundManagerDetailsFund {
    iNF: INF;
    availableCapital: AvailableCapital;
    fundRaised: FundRaised;
    geographicFocus: GeographicFocus;
    name: string;
    id: string;
    fundRaisingStatus: string;
    isActive: boolean;
    category: string;
    assetClasses: string[];
    hF: HF;
    structure: string;
    otherGeographicFocus: OtherGeographicFocus;
};

export class Datum {
    id: string;
    checkBox?: any;
    currency: string;
    name: string;
    addressDetailsCity: string;
    addressDetailsCountry: string;
    fundManagerDetailspEOverallInvestmentCriteriaStrategies: string[];
    fundManagerDetailsSnapshotsPEtotalCapitalRaisedUsdMn?: number;
    fundManagerDetailsSnapshotsPEestimatedDryPowderusdMn?: number;
    fundManagerDetailsREpreferencesstrategies: string[];
    fundManagerDetailsSnapshotsREtotalCapitalRaisedusdMn?: number;
    fundManagerDetailsSnapshotsREestimatedDryPowderusdMn?: number;
    fundManagerDetailsPDoverallInvestmentCriteriastrategies: string;
    fundManagerDetailsSnapshotsPDtotalCapitalRaisedusdMn?: number;
    fundManagerDetailsSnapshotsPDestimatedDryPowderusdMn?: number;
    fundManagerDetailsNRpreferencesstrategies: string[];
    fundManagerDetailsSnapshotsNRtotalCapitalRaisedusdMn?: number;
    fundManagerDetailsSnapshotsNRestimatedDryPowderusdMn?: number;
    fundManagerDetailsiNFprimaryStrategies: any[];
    fundManagerDetailsSnapshotsINFtotalCapitalRaisedusdMn?: any;
    fundManagerDetailsSnapshotsINFestimatedDryPowderusdMn?: any;
    fundManagerDetailsHFCategory: string[];
    fundManagerDetailsFunds: FundManagerDetailsFund[];
    fundManagerDetailsHFCoreStrategies: string[];
    fundManagerDetailsSnapshotsHFAUMlocalMn?: number;
    addressDetailsFax: string;
    addressDetailsState: string;
    addressDetailsPostcode: string;
    addressDetailsLine: string;
    addressDetailsEmail: string;
    addressDetailsRegion: string;
    addressDetailsWebsite: string;
    addressDetailsTelephone: string;
};

export class RootObject {
    meta: Meta;
    data: Datum[];
};