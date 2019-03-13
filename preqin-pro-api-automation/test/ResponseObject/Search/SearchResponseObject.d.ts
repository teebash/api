export declare class Meta {
    private returned;
    Returned: number;
    private total;
    Total: number;
    private page;
    Page: number;
    private took;
    Took: number;
    filterCounts?: any;
}
export declare class INF {
    private projectStage?;
    ProjectStage: any[];
    private primaryStrategy?;
    PrimaryStrategy: any;
    private strategies;
    Strategies: any[];
    private sectorPreferences?;
    SectorPreferences: any[];
    private pppPfiInvestments?;
    PppPfiInvestments: any;
}
export declare class AvailableCapital {
    private usdMn;
    UsdMn: number;
    private eurMn;
    EurMn: number;
    private localMn;
    LocalMn: number;
}
export declare class FundRaised {
    private usdMn;
    UsdMn: number;
    private eurMn;
    EurMn: number;
    private localMn;
    LocalMn: number;
}
export declare class Region {
    private id;
    Id: number;
    private text;
    Text: string;
}
export declare class Country {
    private id;
    Id: number;
    private text;
    Text: string;
}
export declare class GeographicFocus {
    private regions;
    Regions: Region[];
    private countries;
    Countries: Country[];
    private mainFundFocus;
    MainFundFocus: string;
}
export declare class TypesOfMarketsTraded {
    private stockIndexes?;
    StockIndexes: any[];
    private interestRates?;
    InterestRates: any[];
    private energy?;
    Energy: any[];
    private grains?;
    Grains: any[];
    private meats?;
    Meats: any[];
    private bonds?;
    Bonds: any[];
    private metals?;
    Metals: any[];
    private softs?;
    Softs: any[];
    private currencies?;
    Currencies: any[];
}
export declare class IndustryPreferencesDetailedList {
    private industryPreferences?;
    IndustryPreferences: string[];
    private sortOrder?;
    SortOrder: number;
    private name?;
    Name: string;
}
export declare class MethodsOfInvestmentEmployed {
    private debt?;
    Debt: string[];
    private equities?;
    Equities: any[];
    private derivatives?;
    Derivatives: string[];
    private derivativeMarkets?;
    DerivativeMarkets: string[];
    private other?;
    Other: string[];
}
export declare class GeographicCorePreference {
    private sortOrder?;
    SortOrder: number;
    private name?;
    Name: string;
    private countries?;
    Countries: string[];
}
export declare class OtherStrategiesDetailedList {
    private equityStrategies?;
    EquityStrategies: string[];
    private eventDrivenStrategies;
    EventDrivenStrategies: string[];
}
export declare class CoreStrategiesDetailedList {
    private equityStrategies?;
    EquityStrategies: string[];
    private managedFuturesCTA?;
    ManagedFuturesCTA: string[];
    private creditStrategies?;
    CreditStrategies: string[];
}
export declare class GeographicPreference {
    private sortOrder;
    SortOrder: number;
    private name;
    Name: string;
    private countries;
    Countries: string[];
}
export declare class Trading {
    private activist;
    Activist: any;
    private usesArtificialIntelligenceMachineLearning?;
    UsesArtificialIntelligenceMachineLearning: any;
    private analystApproach;
    AnalystApproach: any;
    private tradingVolatility;
    TradingVolatility: string;
    private tradingMethodology;
    TradingMethodology: string;
}
export declare class HF {
    private otherStructuresOffered;
    OtherStructuresOffered: string[];
    private industryPreferences;
    IndustryPreferences: string[];
    private typesOfMarketsTraded;
    TypesOfMarketsTraded: TypesOfMarketsTraded;
    private industryPreferencesDetailedList;
    private showOnOnlineProduct;
    private methodsOfInvestmentEmployed;
    private geographicCorePreferences;
    private otherStrategiesDetailedList;
    private coreStrategiesDetailedList;
    private geographicPreferences;
    private trading;
    private coreStrategies;
    CoreStrategies: string[];
    private minimumInvestment?;
    MinimumInvestment: number;
    private otherStrategies;
    OtherStrategies: string[];
    private parentFundIsDummyParent?;
    private parentFundId;
    ParentFundId: string;
}
export declare class Region2 {
    private id?;
    Id: number;
    private text;
    Text: string;
}
export declare class Country2 {
    private id?;
    Id: number;
    private text;
    Text: string;
}
export declare class OtherGeographicFocus {
    private regions;
    Regions: Region2[];
    private countries;
    Countries: Country2[];
}
export declare class FundManagerDetailsFund {
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
}
export declare class Datum {
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
}
export declare class RootObject {
    meta: Meta;
    data: Datum[];
}
