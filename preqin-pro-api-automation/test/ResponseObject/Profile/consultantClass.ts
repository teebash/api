import { Clients } from "./clientClass";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Consultant")
export class Consultant {

    // @JsonProperty("Clients", Client)
    // Clients: Client

    @JsonProperty("clients", [Clients])
    clients: Clients[];

    // @JsonProperty("Clients", [Client])
    // private _clients: Client;   

    // get Clients() { return this._clients; }
    // set Clients(value: Client) { this._clients = value; }
};