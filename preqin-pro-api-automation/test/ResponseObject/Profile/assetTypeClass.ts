import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("AssetType")
export class AssetType {
        
    @JsonProperty("AssetClass", String)
    AssetClass: string;

    @JsonProperty("Service", String)
    Service: string;

    // @JsonProperty("AssetClass", String)
    // private _assetClass: string = "";

    // get AssetClass() { return this._assetClass; }
    // set AssetClass(value: string) { this._assetClass = value; }

    // @JsonProperty("Service", String)
    // private _service: string = "";

    // get Service() { return this._service; }
    // set Service(value: string) { this._service = value; }
};