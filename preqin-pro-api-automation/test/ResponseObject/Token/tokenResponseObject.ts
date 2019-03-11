
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("AccessToken")
export class AccessToken {

    @JsonProperty("access_token", String)
    private _access_token: string = "";
    get access_token() { return this._access_token; }
    set access_token(value: string) { this._access_token = value; }

    @JsonProperty("expires_in", Number)
    private _expires_in: number = 0;
    get expires_in() { return this._expires_in; }
    set expires_in(value: number) { this._expires_in = value; }

    @JsonProperty("token_type", String)
    private _token_type: string = "";
    get token_type() { return this._token_type; }
    set token_type(value: string) { this._token_type = value; }

    @JsonProperty("refresh_token", String)
    private _refresh_token: string = "";
    get refresh_token() { return this._refresh_token; }
    set refresh_token(value: string) { this._refresh_token = value; }
}