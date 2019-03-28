import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject("Meta")
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

    @JsonProperty("projectStage", [Any], true)
    private projectStage?: any[] = undefined;
    public get ProjectStage() { return this.projectStage; }
    public set ProjectStage(value: any[]) { this.projectStage = value; }

    @JsonProperty("primaryStrategy", Any, true)
    private primaryStrategy?: any = undefined;
    public get PrimaryStrategy() { return this.primaryStrategy; }
    public set PrimaryStrategy(value: any) { this.primaryStrategy = value; }

    @JsonProperty("strategies", [Any], true)
    private strategies: any[] = undefined;
    public get Strategies() { return this.strategies; }
    public set Strategies(value: any[]) { this.strategies = value; }

    @JsonProperty("sectorPreferences", [Any], true)
    private sectorPreferences?: any[] = undefined;
    public get SectorPreferences() { return this.sectorPreferences; }
    public set SectorPreferences(value: any[]) { this.sectorPreferences = value; }

    @JsonProperty("pppPfiInvestments", Any, true)
    private pppPfiInvestments?: any = undefined;
    public get PppPfiInvestments() { return this.pppPfiInvestments; }
    public set PppPfiInvestments(value: any) { this.pppPfiInvestments = value; }
};

@JsonObject("AvailableCapital")
export class AvailableCapital {

    @JsonProperty("usdMn", Number, true)
    private usdMn: number = undefined;
    public get UsdMn(): number { return this.usdMn; }
    public set UsdMn(value: number) { this.usdMn = value; }

    @JsonProperty("eurMn", Number, true)
    private eurMn: number = undefined;
    public get EurMn(): number { return this.eurMn; }
    public set EurMn(value: number) { this.eurMn = value; }

    @JsonProperty("localMn", Number, true)
    private localMn: number = undefined;
    public get LocalMn(): number { return this.localMn; }
    public set LocalMn(value: number) { this.localMn = value; }
};

@JsonObject("FundRaised")
export class FundRaised {

    @JsonProperty("usdMn", Number, true)
    private usdMn: number = undefined;
    public get UsdMn(): number { return this.usdMn; }
    public set UsdMn(value: number) { this.usdMn = value; }

    @JsonProperty("eurMn", Number, true)
    private eurMn: number = undefined;
    public get EurMn(): number { return this.eurMn; }
    public set EurMn(value: number) { this.eurMn = value; }

    @JsonProperty("localMn", Number, true)
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

    @JsonProperty("regions", [Region], true)
    private regions: Region[] = undefined;
    public get Regions(): Region[] { return this.regions; }
    public set Regions(value: Region[]) { this.regions = value; }

    @JsonProperty("countries", [Country], true)
    private countries: Country[] = undefined;
    public get Countries(): Country[] { return this.countries; }
    public set Countries(value: Country[]) { this.countries = value; }

    @JsonProperty("mainFundFocus", String, true)
    private mainFundFocus: string = undefined;
    public get MainFundFocus(): string { return this.mainFundFocus; }
    public set MainFundFocus(value: string) { this.mainFundFocus = value; }
};

@JsonObject("TypesOfMarketsTraded")
export class TypesOfMarketsTraded {

    @JsonProperty("Stock Indexes", [Any], true)
    private stockIndexes?: any[] = undefined;
    public get StockIndexes(): any[] { return this.stockIndexes; }
    public set StockIndexes(value: any[]) { this.stockIndexes = value; }

    @JsonProperty("Interest Rates", [Any], true)
    private interestRates?: any[] = undefined;
    public get InterestRates(): any[] { return this.interestRates; }
    public set InterestRates(value: any[]) { this.interestRates = value; }

    @JsonProperty("Energy", [Any], true)
    private energy?: any[] = undefined;
    public get Energy(): any[] { return this.energy; }
    public set Energy(value: any[]) { this.energy = value; }

    @JsonProperty("Grains", [Any], true)
    private grains?: any[] = undefined;
    public get Grains(): any[] { return this.grains; }
    public set Grains(value: any[]) { this.grains = value; }

    @JsonProperty("Meats", [Any], true)
    private meats?: any[] = undefined;
    public get Meats(): any[] { return this.meats; }
    public set Meats(value: any[]) { this.meats = value; }

    @JsonProperty("Bonds", [Any], true)
    private bonds?: any[] = undefined;
    public get Bonds(): any[] { return this.bonds; }
    public set Bonds(value: any[]) { this.bonds = value; }

    @JsonProperty("Metals", [Any], true)
    private metals?: any[] = undefined;
    public get Metals(): any[] { return this.metals; }
    public set Metals(value: any[]) { this.metals = value; }

    @JsonProperty("Softs", [Any], true)
    private softs?: any[] = undefined;
    public get Softs(): any[] { return this.softs; }
    public set Softs(value: any[]) { this.softs = value; }

    @JsonProperty("Currencies", [Any], true)
    private currencies?: any[] = undefined;
    public get Currencies(): any[] { return this.currencies; }
    public set Currencies(value: any[]) { this.currencies = value; }
};

@JsonObject("IndustryPreferencesDetailedList")
export class IndustryPreferencesDetailedList {

    @JsonProperty("industryPreferences", [String], true)
    private industryPreferences?: string[] = undefined;
    public get IndustryPreferences(): string[] { return this.industryPreferences; }
    public set IndustryPreferences(value: string[]) { this.industryPreferences = value; }

    @JsonProperty("sortOrder", Number, true)
    private sortOrder?: number = undefined;
    public get SortOrder(): number { return this.sortOrder; }
    public set SortOrder(value: number) { this.sortOrder = value; }

    @JsonProperty("name", String, true)
    private name?: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }
};

@JsonObject("MethodsOfInvestmentEmployed")
export class MethodsOfInvestmentEmployed {

    @JsonProperty("Debt", [String], true)
    private debt?: string[] = undefined;
    public get Debt(): string[] { return this.debt; }
    public set Debt(value: string[]) { this.debt = value; }

    @JsonProperty("Equities", [Any], true)
    private equities?: any[] = undefined;
    public get Equities(): any[] { return this.equities; }
    public set Equities(value: any[]) { this.equities = value; }

    @JsonProperty("Derivatives", [String], true)
    private derivatives?: string[] = undefined;
    public get Derivatives(): string[] { return this.derivatives; }
    public set Derivatives(value: string[]) { this.derivatives = value; }

    @JsonProperty("Derivative Markets", [String], true)
    private derivativeMarkets?: string[] = undefined;
    public get DerivativeMarkets(): string[] { return this.derivativeMarkets; }
    public set DerivativeMarkets(value: string[]) { this.derivativeMarkets = value; }

    @JsonProperty("Other", [String], true)
    private other?: string[] = undefined;
    public get Other(): string[] { return this.other; }
    public set Other(value: string[]) { this.other = value; }
};

@JsonObject("GeographicCorePreference")
export class GeographicCorePreference {

    @JsonProperty("sortOrder", Number, true)
    private sortOrder?: number = undefined;
    public get SortOrder(): number { return this.sortOrder; }
    public set SortOrder(value: number) { this.sortOrder = value; }

    @JsonProperty("name", String, true)
    private name?: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }

    @JsonProperty("countries", [String], true)
    private countries?: string[] = undefined;
    public get Countries(): string[] { return this.countries; }
    public set Countries(value: string[]) { this.countries = value; }
};

@JsonObject("OtherStrategiesDetailedList")
export class OtherStrategiesDetailedList {

    @JsonProperty("Equity Strategies", [String], true)
    private equityStrategies?: string[] = undefined;
    public get EquityStrategies(): string[] { return this.equityStrategies; }
    public set EquityStrategies(value: string[]) { this.equityStrategies = value; }

    @JsonProperty("Event Driven Strategies", [String], true)
    private eventDrivenStrategies: string[] = undefined;
    public get EventDrivenStrategies(): string[] { return this.eventDrivenStrategies; }
    public set EventDrivenStrategies(value: string[]) { this.eventDrivenStrategies = value; }
};

@JsonObject("CoreStrategiesDetailedList")
export class CoreStrategiesDetailedList {

    @JsonProperty("Equity Strategies", [String], true)
    private equityStrategies?: string[] = undefined;
    public get EquityStrategies(): string[] { return this.equityStrategies; }
    public set EquityStrategies(value: string[]) { this.equityStrategies = value; }

    @JsonProperty("Managed Futures/CTA", [String], true)
    private managedFuturesCTA?: string[] = undefined;
    public get ManagedFuturesCTA(): string[] { return this.managedFuturesCTA; }
    public set ManagedFuturesCTA(value: string[]) { this.managedFuturesCTA = value; }

    @JsonProperty("Credit Strategies", [String], true)
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

    @JsonProperty("activist", Any, true)
    private activist: any = undefined;
    public get Activist(): any { return this.activist; }
    public set Activist(value: any) { this.activist = value; }

    @JsonProperty("usesArtificialIntelligenceMachineLearning", Any, true)
    private usesArtificialIntelligenceMachineLearning?: any = undefined;
    public get UsesArtificialIntelligenceMachineLearning(): any { return this.usesArtificialIntelligenceMachineLearning; }
    public set UsesArtificialIntelligenceMachineLearning(value: any) { this.usesArtificialIntelligenceMachineLearning = value; }

    @JsonProperty("analystApproach", Any, true)
    private analystApproach: any = undefined;
    public get AnalystApproach(): any { return this.analystApproach; }
    public set AnalystApproach(value: any) { this.analystApproach = value; }

    @JsonProperty("tradingVolatility", String, true)
    private tradingVolatility: string = undefined;
    public get TradingVolatility(): string { return this.tradingVolatility; }
    public set TradingVolatility(value: string) { this.tradingVolatility = value; }

    @JsonProperty("tradingMethodology", String, true)
    private tradingMethodology: string = undefined;
    public get TradingMethodology(): string { return this.tradingMethodology; }
    public set TradingMethodology(value: string) { this.tradingMethodology = value; }
};

@JsonObject("HF")
export class HF {

    @JsonProperty("otherStructuresOffered", [String], true)
    private otherStructuresOffered: string[] = undefined;
    public get OtherStructuresOffered(): string[] { return this.otherStructuresOffered; }
    public set OtherStructuresOffered(value: string[]) { this.otherStructuresOffered = value; }

    @JsonProperty("industryPreferences", [String], true)
    private industryPreferences: string[] = undefined;
    public get IndustryPreferences(): string[] { return this.industryPreferences; }
    public set IndustryPreferences(value: string[]) { this.industryPreferences = value; }

    @JsonProperty("typesOfMarketsTraded", TypesOfMarketsTraded, true)
    private typesOfMarketsTraded: TypesOfMarketsTraded = undefined;
    public get TypesOfMarketsTraded(): TypesOfMarketsTraded { return this.typesOfMarketsTraded; }
    public set TypesOfMarketsTraded(value: TypesOfMarketsTraded) { this.typesOfMarketsTraded = value; }

    @JsonProperty("industryPreferencesDetailedList", [IndustryPreferencesDetailedList], true)
    private industryPreferencesDetailedList: IndustryPreferencesDetailedList[] = undefined;
    public get IndustryPreferencesDetailedList(): IndustryPreferencesDetailedList[] { return this.industryPreferencesDetailedList; }
    public set IndustryPreferencesDetailedList(value: IndustryPreferencesDetailedList[]) { this.industryPreferencesDetailedList = value; }

    @JsonProperty("showOnOnlineProduct", Boolean, true)
    private showOnOnlineProduct: boolean = undefined;
    public get ShowOnOnlineProduct(): boolean { return this.showOnOnlineProduct; }
    public set ShowOnOnlineProduct(value: boolean) { this.showOnOnlineProduct = value; }

    @JsonProperty("methodsOfInvestmentEmployed", MethodsOfInvestmentEmployed, true)
    private methodsOfInvestmentEmployed: MethodsOfInvestmentEmployed = undefined;
    public get MethodsOfInvestmentEmployed(): MethodsOfInvestmentEmployed { return this.methodsOfInvestmentEmployed; }
    public set MethodsOfInvestmentEmployed(value: MethodsOfInvestmentEmployed) { this.methodsOfInvestmentEmployed = value; }

    @JsonProperty("geographicCorePreferences", [GeographicCorePreference], true)
    private geographicCorePreferences: GeographicCorePreference[] = undefined;
    public get GeographicCorePreferences(): GeographicCorePreference[] { return this.geographicCorePreferences; }
    public set GeographicCorePreferences(value: GeographicCorePreference[]) { this.geographicCorePreferences = value; }

    @JsonProperty("otherStrategiesDetailedList", OtherStrategiesDetailedList, true)
    private otherStrategiesDetailedList: OtherStrategiesDetailedList = undefined;
    public get OtherStrategiesDetailedList(): OtherStrategiesDetailedList { return this.otherStrategiesDetailedList; }
    public set OtherStrategiesDetailedList(value: OtherStrategiesDetailedList) { this.otherStrategiesDetailedList = value; }

    @JsonProperty("coreStrategiesDetailedList", CoreStrategiesDetailedList, true)
    private coreStrategiesDetailedList: CoreStrategiesDetailedList = undefined;
    public get CoreStrategiesDetailedList(): CoreStrategiesDetailedList { return this.coreStrategiesDetailedList; }
    public set CoreStrategiesDetailedList(value: CoreStrategiesDetailedList) { this.coreStrategiesDetailedList = value; }

    @JsonProperty("geographicPreferences", [GeographicPreference], true)
    private geographicPreferences: GeographicPreference[] = undefined;
    public get GeographicPreferences(): GeographicPreference[] { return this.geographicPreferences; }
    public set GeographicPreferences(value: GeographicPreference[]) { this.geographicPreferences = value; }

    @JsonProperty("trading", Trading, true)
    private trading: Trading = undefined;
    public get Trading(): Trading { return this.trading; }
    public set Trading(value: Trading) { this.trading = value; }

    @JsonProperty("coreStrategies", [String], true)
    private coreStrategies: string[] = undefined;
    public get CoreStrategies(): string[] { return this.coreStrategies; }
    public set CoreStrategies(value: string[]) { this.coreStrategies = value; }

    @JsonProperty("minimumInvestment", Number, true)
    private minimumInvestment?: number = undefined;
    public get MinimumInvestment(): number { return this.minimumInvestment; }
    public set MinimumInvestment(value: number) { this.minimumInvestment = value; }

    @JsonProperty("otherStrategies", [String], true)
    private otherStrategies: string[] = undefined;
    public get OtherStrategies(): string[] { return this.otherStrategies; }
    public set OtherStrategies(value: string[]) { this.otherStrategies = value; }

    @JsonProperty("parentFundIsDummyParent", Boolean, true)
    private parentFundIsDummyParent?: boolean = undefined;
    public get ParentFundIsDummyParent(): boolean { return this.parentFundIsDummyParent; }
    public set ParentFundIsDummyParent(value: boolean) { this.parentFundIsDummyParent = value; }

    @JsonProperty("parentFundId", String, true)
    private parentFundId: string = undefined;
    public get ParentFundId(): string { return this.parentFundId; }
    public set ParentFundId(value: string) { this.parentFundId = value; }
};

@JsonObject("Region2")
export class Region2 {

    @JsonProperty("id", Number, true)
    private id?: number = undefined;
    public get Id(): number { return this.id; }
    public set Id(value: number) { this.id = value; }

    @JsonProperty("text", String, true)
    private text: string = undefined;
    public get Text(): string { return this.text; }
    public set Text(value: string) { this.text = value; }
};

@JsonObject("Country2")
export class Country2 {

    @JsonProperty("id", Number, true)
    private id?: number = undefined;
    public get Id(): number { return this.id; }
    public set Id(value: number) { this.id = value; }

    @JsonProperty("text", String, true)
    private text: string = undefined;
    public get Text(): string { return this.text; }
    public set Text(value: string) { this.text = value; }
};

@JsonObject("OtherGeographicFocus")
export class OtherGeographicFocus {

    @JsonProperty("regions", [Region2], true)
    private regions: Region2[] = undefined;
    public get Regions(): Region2[] { return this.regions; }
    public set Regions(value: Region2[]) { this.regions = value; }
    
    @JsonProperty("regions", [Country2], true)
    private countries: Country2[] = undefined;
    public get Countries(): Country2[] { return this.countries; }
    public set Countries(value: Country2[]) { this.countries = value; }
};

@JsonObject("FundManagerDetailsFund")
export class FundManagerDetailsFund {

    @JsonProperty("iNF", INF, true)
    private iNF: INF = undefined;
    public get INF(): INF { return this.iNF; }
    public set INF(value: INF) { this.iNF = value; }

    @JsonProperty("availableCapital", AvailableCapital, true)
    private availableCapital: AvailableCapital = undefined;
    public get AvailableCapital(): AvailableCapital { return this.availableCapital; }
    public set AvailableCapital(value: AvailableCapital) { this.availableCapital = value; }

    @JsonProperty("fundRaised", FundRaised, true)
    private fundRaised: FundRaised = undefined;
    public get FundRaised(): FundRaised { return this.fundRaised; }
    public set FundRaised(value: FundRaised) { this.fundRaised = value; }

    @JsonProperty("geographicFocus", GeographicFocus, true)
    private geographicFocus: GeographicFocus = undefined;
    public get GeographicFocus(): GeographicFocus { return this.geographicFocus; }
    public set GeographicFocus(value: GeographicFocus) { this.geographicFocus = value; }

    @JsonProperty("name", String, true)
    private name: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }

    @JsonProperty("id", String, true)
    private id: string = undefined;
    public get Id(): string { return this.id; }
    public set Id(value: string) { this.id = value; }

    @JsonProperty("fundRaisingStatus", String, true)
    private fundRaisingStatus: string = undefined;
    public get FundRaisingStatus(): string { return this.fundRaisingStatus; }
    public set FundRaisingStatus(value: string) { this.fundRaisingStatus = value; }

    @JsonProperty("isActive", Boolean, true)
    private isActive: boolean = undefined;
    public get IsActive(): boolean { return this.isActive; }
    public set IsActive(value: boolean) { this.isActive = value; }

    @JsonProperty("category", String, true)
    private category: string = undefined;
    public get Category(): string { return this.category; }
    public set Category(value: string) { this.category = value; }

    @JsonProperty("assetClasses", [String], true)
    private assetClasses: string[] = undefined;
    public get AssetClasses(): string[] { return this.assetClasses; }
    public set AssetClasses(value: string[]) { this.assetClasses = value; }

    @JsonProperty("hF", HF, true)
    private hF: HF = undefined;
    public get HF(): HF { return this.hF; }
    public set HF(value: HF) { this.hF = value; }

    @JsonProperty("structure", String, true)
    private structure: string = undefined;
    public get Structure(): string { return this.structure; }
    public set Structure(value: string) { this.structure = value; }

    @JsonProperty("otherGeographicFocus", OtherGeographicFocus, true)
    private otherGeographicFocus?: OtherGeographicFocus = undefined;
    public get OtherGeographicFocus(): OtherGeographicFocus { return this.otherGeographicFocus; }
    public set OtherGeographicFocus(value: OtherGeographicFocus) { this.otherGeographicFocus = value; }
};

@JsonObject("Datum")
export class Datum {

    @JsonProperty("id", String)
    private id: string = undefined;
    public get Id(): string { return this.id; }
    public set Id(value: string) { this.id = value; }

    @JsonProperty("checkBox", Any)
    private checkBox?: any = undefined;
    public get CheckBox(): any { return this.checkBox; }
    public set CheckBox(value: any) { this.checkBox = value; }

    @JsonProperty("currency", String)
    private currency: string = undefined;
    public get Currency(): string { return this.currency; }
    public set Currency(value: string) { this.currency = value; }

    @JsonProperty("name", String)
    private name: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }

    @JsonProperty("addressDetails.city", String)
    private addressDetailsCity: string = undefined;
    public get AddressDetailsCity(): string { return this.addressDetailsCity; }
    public set AddressDetailsCity(value: string) { this.addressDetailsCity = value; }

    @JsonProperty("addressDetails.country", String)
    private addressDetailsCountry: string = undefined;
    public get AddressDetailsCountry(): string { return this.addressDetailsCountry; }
    public set AddressDetailsCountry(value: string) { this.addressDetailsCountry = value; }

    @JsonProperty("fundManagerDetails.pE.overallInvestmentCriteria.strategies", [String], true)
    private fundManagerDetailsPeOverallInvestmentCriteriaStrategies: string[] = undefined;
    public get FundManagerDetailsPeOverallInvestmentCriteriaStrategies(): string[] { return this.fundManagerDetailsPeOverallInvestmentCriteriaStrategies; }
    public set FundManagerDetailsPeOverallInvestmentCriteriaStrategies(value: string[]) { this.fundManagerDetailsPeOverallInvestmentCriteriaStrategies = value; }

    @JsonProperty("fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn", Number, true)
    private fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn(): number { return this.fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn; }
    public set FundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn(value: number) { this.fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn = value; }

    @JsonProperty("fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn", Number, true)
    private fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn(): number { return this.fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn; }
    public set FundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn(value: number) { this.fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn = value; }

    @JsonProperty("fundManagerDetails.rE.preferences.strategies", [String], true)
    private fundManagerDetailsRePreferencesStrategies?: string[] = undefined;
    public get FundManagerDetailsRePreferencesStrategies(): string[] { return this.fundManagerDetailsRePreferencesStrategies; }
    public set FundManagerDetailsRePreferencesStrategies(value: string[]) { this.fundManagerDetailsRePreferencesStrategies = value; }

    @JsonProperty("fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn", Number, true)
    private fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn(): number { return this.fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn; }
    public set FundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn(value: number) { this.fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn = value; }

    @JsonProperty("fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn", Number, true)
    private fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn(): number { return this.fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn; }
    public set FundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn(value: number) { this.fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn = value; }

    @JsonProperty("fundManagerDetails.pD.overallInvestmentCriteria.strategies", String, true)
    private fundManagerDetailsPdOverallInvestmentCriteriaStrategies: string = undefined;
    public get FundManagerDetailsPdOverallInvestmentCriteriaStrategies(): string { return this.fundManagerDetailsPdOverallInvestmentCriteriaStrategies; }
    public set FundManagerDetailsPdOverallInvestmentCriteriaStrategies(value: string) { this.fundManagerDetailsPdOverallInvestmentCriteriaStrategies = value; }

    @JsonProperty("fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn", Number, true)
    private fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn(): number { return this.fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn; }
    public set FundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn(value: number) { this.fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn = value; }

    @JsonProperty("fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn", Number, true)
    private fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn(): number { return this.fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn; }
    public set FundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn(value: number) { this.fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn = value; }

    @JsonProperty("fundManagerDetails.nR.preferences.strategies", [String], true)
    private fundManagerDetailsNrPreferencesStrategies: string[] = undefined;
    public get FundManagerDetailsNrPreferencesStrategies(): string[] { return this.fundManagerDetailsNrPreferencesStrategies; }
    public set FundManagerDetailsNrPreferencesStrategies(value: string[]) { this.fundManagerDetailsNrPreferencesStrategies = value; }

    @JsonProperty("fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn", Number, true)
    private fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn(): number { return this.fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn; }
    public set FundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn(value: number) { this.fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn = value; }

    @JsonProperty("fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn", Number, true)
    private fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn?: number = undefined;
    public get FundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn(): number { return this.fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn; }
    public set FundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn(value: number) { this.fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn = value; }

    @JsonProperty("fundManagerDetails.iNF.primaryStrategies", [Any], true)
    private fundManagerDetailsInfPrimaryStrategies: any[] = undefined;
    public get FundManagerDetailsInfPrimaryStrategies(): any[] { return this.fundManagerDetailsInfPrimaryStrategies; }
    public set FundManagerDetailsInfPrimaryStrategies(value: any[]) { this.fundManagerDetailsInfPrimaryStrategies = value; }

    @JsonProperty("fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn", Any, true)
    private fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn?: any = undefined;
    public get FundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn(): any { return this.fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn; }
    public set FundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn(value: any) { this.fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn = value; }

    @JsonProperty("fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn", Any, true)
    private fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn?: any = undefined;
    public get FundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn(): any { return this.fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn; }
    public set FundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn(value: any) { this.fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn = value; }

    @JsonProperty("fundManagerDetails.hF.category", [String], true)
    private fundManagerDetailsHfCategory: string[] = undefined;
    public get FundManagerDetailsHfCategory(): string[] { return this.fundManagerDetailsHfCategory; }
    public set FundManagerDetailsHfCategory(value: string[]) { this.fundManagerDetailsHfCategory = value; }

    @JsonProperty("fundManagerDetails.funds", [FundManagerDetailsFund], true)
    private fundManagerDetailsFunds: FundManagerDetailsFund[] = undefined;
    public get FundManagerDetailsFunds(): FundManagerDetailsFund[] { return this.fundManagerDetailsFunds; }
    public set FundManagerDetailsFunds(value: FundManagerDetailsFund[]) { this.fundManagerDetailsFunds = value; }

    @JsonProperty("fundManagerDetails.hF.coreStrategies", [String], true)
    private fundManagerDetailsHfCoreStrategies: string[] = undefined;
    public get FundManagerDetailsHfCoreStrategies(): string[] { return this.fundManagerDetailsHfCoreStrategies; }
    public set FundManagerDetailsHfCoreStrategies(value: string[]) { this.fundManagerDetailsHfCoreStrategies = value; }

    @JsonProperty("fundManagerDetails.snapshots.HF.aUM.localMn", Number, true)
    private fundManagerDetailsSnapshotsHfAumLocalMn?: number = undefined;
    public get FundManagerDetailsSnapshotsHfAumLocalMn(): number { return this.fundManagerDetailsSnapshotsHfAumLocalMn; }
    public set FundManagerDetailsSnapshotsHfAumLocalMn(value: number) { this.fundManagerDetailsSnapshotsHfAumLocalMn = value; }

    @JsonProperty("addressDetails.fax", String, true)
    private addressDetailsFax: string = undefined;
    public get AddressDetailsFax(): string { return this.addressDetailsFax; }
    public set AddressDetailsFax(value: string) { this.addressDetailsFax = value; }

    @JsonProperty("addressDetails.state", String, true)
    private addressDetailsState: string = undefined;
    public get AddressDetailsState(): string { return this.addressDetailsState; }
    public set AddressDetailsState(value: string) { this.addressDetailsState = value; }

    @JsonProperty("addressDetails.postcode", String, true)
    private addressDetailsPostcode: string = undefined;
    public get AddressDetailsPostcode(): string { return this.addressDetailsPostcode; }
    public set AddressDetailsPostcode(value: string) { this.addressDetailsPostcode = value; }

    @JsonProperty("addressDetails.line", String, true)
    private addressDetailsLine: string = undefined;
    public get AddressDetailsLine(): string { return this.addressDetailsLine; }
    public set AddressDetailsLine(value: string) { this.addressDetailsLine = value; }

    @JsonProperty("addressDetails.email", String, true)
    private addressDetailsEmail: string = undefined;
    public get AddressDetailsEmail(): string { return this.addressDetailsEmail; }
    public set AddressDetailsEmail(value: string) { this.addressDetailsEmail = value; }

    @JsonProperty("addressDetails.region", String, true)
    private addressDetailsRegion: string = undefined;
    public get AddressDetailsRegion(): string { return this.addressDetailsRegion; }
    public set AddressDetailsRegion(value: string) { this.addressDetailsRegion = value; }

    @JsonProperty("addressDetails.website", String, true)
    private addressDetailsWebsite: string = undefined;
    public get AddressDetailsWebsite(): string { return this.addressDetailsWebsite; }
    public set AddressDetailsWebsite(value: string) { this.addressDetailsWebsite = value; }

    @JsonProperty("addressDetails.telephone", String, true)
    private addressDetailsTelephone: string = undefined;
    public get AddressDetailsTelephone(): string { return this.addressDetailsTelephone; }
    public set AddressDetailsTelephone(value: string) { this.addressDetailsTelephone = value; }
};

@JsonObject("SearchResponseRootObjectForFundManager")
export class SearchResponseRootObjectForFundManager {

    @JsonProperty("meta", Meta)
    private meta: Meta = undefined;
    public get Meta(): Meta { return this.meta; }
    public set Meta(value: Meta) { this.meta = value; }

    @JsonProperty("data", [Datum])
    private data: Datum[] = undefined;
    public get Data(): Datum[] { return this.data; }
    public set Data(value: Datum[]) { this.data = value; }
};