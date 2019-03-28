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
    IndustryPreferencesDetailedList: IndustryPreferencesDetailedList[];
    private showOnOnlineProduct;
    ShowOnOnlineProduct: boolean;
    private methodsOfInvestmentEmployed;
    MethodsOfInvestmentEmployed: MethodsOfInvestmentEmployed;
    private geographicCorePreferences;
    GeographicCorePreferences: GeographicCorePreference[];
    private otherStrategiesDetailedList;
    OtherStrategiesDetailedList: OtherStrategiesDetailedList;
    private coreStrategiesDetailedList;
    CoreStrategiesDetailedList: CoreStrategiesDetailedList;
    private geographicPreferences;
    GeographicPreferences: GeographicPreference[];
    private trading;
    Trading: Trading;
    private coreStrategies;
    CoreStrategies: string[];
    private minimumInvestment?;
    MinimumInvestment: number;
    private otherStrategies;
    OtherStrategies: string[];
    private parentFundIsDummyParent?;
    ParentFundIsDummyParent: boolean;
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
    private iNF;
    INF: INF;
    private availableCapital;
    AvailableCapital: AvailableCapital;
    private fundRaised;
    FundRaised: FundRaised;
    private geographicFocus;
    GeographicFocus: GeographicFocus;
    private name;
    Name: string;
    private id;
    Id: string;
    private fundRaisingStatus;
    FundRaisingStatus: string;
    private isActive;
    IsActive: boolean;
    private category;
    Category: string;
    private assetClasses;
    AssetClasses: string[];
    private hF;
    HF: HF;
    private structure;
    Structure: string;
    private otherGeographicFocus?;
    OtherGeographicFocus: OtherGeographicFocus;
}
export declare class Datum {
    private id;
    Id: string;
    private checkBox?;
    CheckBox: any;
    private currency;
    Currency: string;
    private name;
    Name: string;
    private addressDetailsCity;
    AddressDetailsCity: string;
    private addressDetailsCountry;
    AddressDetailsCountry: string;
    private fundManagerDetailsPeOverallInvestmentCriteriaStrategies;
    FundManagerDetailsPeOverallInvestmentCriteriaStrategies: string[];
    private fundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn?;
    FundManagerDetailsSnapshotsPeTotalCapitalRaisedUsdMn: number;
    private fundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn?;
    FundManagerDetailsSnapshotsPeEstimatedDryPowderUsdMn: number;
    private fundManagerDetailsRePreferencesStrategies?;
    FundManagerDetailsRePreferencesStrategies: string[];
    private fundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn?;
    FundManagerDetailsSnapshotsReTotalCapitalRaisedUsdMn: number;
    private fundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn?;
    FundManagerDetailsSnapshotsReEstimatedDryPowderUsdMn: number;
    private fundManagerDetailsPdOverallInvestmentCriteriaStrategies;
    FundManagerDetailsPdOverallInvestmentCriteriaStrategies: string;
    private fundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn?;
    FundManagerDetailsSnapshotsPdTotalCapitalRaisedUsdMn: number;
    private fundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn?;
    FundManagerDetailsSnapshotsPdEstimatedDryPowderUsdMn: number;
    private fundManagerDetailsNrPreferencesStrategies;
    FundManagerDetailsNrPreferencesStrategies: string[];
    private fundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn?;
    FundManagerDetailsSnapshotsNrTotalCapitalRaisedUsdMn: number;
    private fundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn?;
    FundManagerDetailsSnapshotsNrEstimatedDryPowderUsdMn: number;
    private fundManagerDetailsInfPrimaryStrategies;
    FundManagerDetailsInfPrimaryStrategies: any[];
    private fundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn?;
    FundManagerDetailsSnapshotsInfTotalCapitalRaisedUsdMn: any;
    private fundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn?;
    FundManagerDetailsSnapshotsInfEstimatedDryPowderUsdMn: any;
    private fundManagerDetailsHfCategory;
    FundManagerDetailsHfCategory: string[];
    private fundManagerDetailsFunds;
    FundManagerDetailsFunds: FundManagerDetailsFund[];
    private fundManagerDetailsHfCoreStrategies;
    FundManagerDetailsHfCoreStrategies: string[];
    private fundManagerDetailsSnapshotsHfAumLocalMn?;
    FundManagerDetailsSnapshotsHfAumLocalMn: number;
    private addressDetailsFax;
    AddressDetailsFax: string;
    private addressDetailsState;
    AddressDetailsState: string;
    private addressDetailsPostcode;
    AddressDetailsPostcode: string;
    private addressDetailsLine;
    AddressDetailsLine: string;
    private addressDetailsEmail;
    AddressDetailsEmail: string;
    private addressDetailsRegion;
    AddressDetailsRegion: string;
    private addressDetailsWebsite;
    AddressDetailsWebsite: string;
    private addressDetailsTelephone;
    AddressDetailsTelephone: string;
}
export declare class SearchResponseRootObjectForFundManager {
    private meta;
    Meta: Meta;
    private data;
    Data: Datum[];
}
