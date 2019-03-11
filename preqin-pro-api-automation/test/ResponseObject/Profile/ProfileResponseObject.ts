import { Consultant } from "./consultantClass";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Profile")
export class Profile {

    @JsonProperty("FirmName", String)
    FirmName: string = "";

    @JsonProperty("AggregateID", Number)
    AggregateID: number = 0;

    @JsonProperty("Consultant", Consultant)
    Consultant: Consultant;

    // @JsonProperty("FirmName", String)
    // private _firmName: string = "";

    // get FirmName() { return this._firmName; }
    // set FirmName(value: string) { this._firmName = value; }

    // @JsonProperty("AggregateID", Number)
    // private _aggregateID: number = 0;

    // get AggregateID() { return this._aggregateID; }
    // set AggregateID(value: number) { this._aggregateID = value; }

    // @JsonProperty("consultants", Consultant)
    // consultants: Consultant;

    // @JsonProperty("Consultant", Consultant)
    // private _consultant: Consultant;

    // get Consultant() { return this._consultant; }
    // set Consultant(value: Consultant) { this._consultant = value; }
}