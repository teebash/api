import { AssetType } from "./assetTypeClass";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Client")
export class Clients {
    
    @JsonProperty("AssetTypes", [AssetType])
    AssetTypes: AssetType[];

    // @JsonProperty("AssetTypes", [AssetType])
    // private _assetTypes: AssetType;

    // get AssetTypes() { return this._assetTypes; }
    // set AssetTypes(value: AssetType) { this._assetTypes = value; }
};