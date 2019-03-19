export declare class Assets {
    private _AssetClass?;
    AssetClass: string;
    Service?: any;
}
export declare class AssetTypes {
    private _AssetTypes?;
    AssetTypes: Assets[];
}
export declare class Clients {
    private _Clients?;
    Clients: AssetTypes[];
}
export declare class Consultant {
    private _Consultant?;
    Consultant: Clients;
}
export declare class Profile {
    private _FirmName?;
    FirmName: string;
    private _AggregateID?;
    AggregateID: number;
    private _Consultant?;
    Consultant: Clients;
}
