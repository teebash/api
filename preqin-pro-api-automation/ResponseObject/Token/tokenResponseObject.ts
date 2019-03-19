import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("AccessTokenResponseObject")
export class AccessTokenResponseObject {

    @JsonProperty("access_token", String, false)
    private _access_token: string = undefined;
    public get access_token() { return this._access_token; }
    public set access_token(value: string) { this._access_token = value; }

    @JsonProperty("expires_in", Number, false)
    private _expires_in: number = undefined;
    public get expires_in() { return this._expires_in; }
    public set expires_in(value: number) { this._expires_in = value; }

    @JsonProperty("token_type", String, false)
    private _token_type: string = undefined;
    public get token_type() { return this._token_type; }
    public set token_type(value: string) { this._token_type = value; }

    @JsonProperty("refresh_token", String, false)
    private _refresh_token: string = undefined;
    public get refresh_token() { return this._refresh_token; }
    public set refresh_token(value: string) { this._refresh_token = value; }
}