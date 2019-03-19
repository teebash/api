import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject("Assets")
export class Assets {

    @JsonProperty("AssetClass", String)
    private _AssetClass?: string = undefined;

    public get AssetClass(): string {
        return this._AssetClass;
    }
    public set AssetClass(value: string) {
        this._AssetClass = value;
    }

    @JsonProperty("Service", Any)
    Service?: any = undefined;
};

@JsonObject("AssetTypes")
export class AssetTypes {

    @JsonProperty("AssetTypes", [Assets])
    private _AssetTypes?: Assets[] = undefined;

    public get AssetTypes(): Assets[] {
        return this._AssetTypes;
    }
    public set AssetTypes(value: Assets[]) {
        this._AssetTypes = value;
    }
};

@JsonObject("Clients")
export class Clients {

    @JsonProperty("Clients", [AssetTypes])
    private _Clients?: AssetTypes[] = undefined;

    public get Clients(): AssetTypes[] {
        return this._Clients;
    }
    public set Clients(value: AssetTypes[]) {
        this._Clients = value;
    }
};

@JsonObject("Consultant")
export class Consultant {

    @JsonProperty("Consultant", Clients)
    private _Consultant?: Clients = undefined;

    public get Consultant(): Clients {
        return this._Consultant;
    }
    public set Consultant(value: Clients) {
        this._Consultant = value;
    }
};

@JsonObject("Profile")
export class Profile {

    @JsonProperty("FirmName", String)
    private _FirmName?: string = undefined;

    public get FirmName(): string {
        return this._FirmName;
    }
    public set FirmName(value: string) {
        this._FirmName = value;
    }

    @JsonProperty("AggregateID", Number)
    private _AggregateID?: number = undefined;

    public get AggregateID(): number {
        return this._AggregateID;
    }
    public set AggregateID(value: number) {
        this._AggregateID = value;
    }

    @JsonProperty("Consultant", Clients)
    private _Consultant?: Clients = undefined;

    public get Consultant(): Clients {
        return this._Consultant;
    }
    public set Consultant(value: Clients) {
        this._Consultant = value;
    }
};