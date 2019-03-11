"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const consultantClass_1 = require("./consultantClass");
const json2typescript_1 = require("json2typescript");
let Profile = class Profile {
    constructor() {
        this.FirmName = "";
        this.AggregateID = 0;
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
};
__decorate([
    json2typescript_1.JsonProperty("FirmName", String),
    __metadata("design:type", String)
], Profile.prototype, "FirmName", void 0);
__decorate([
    json2typescript_1.JsonProperty("AggregateID", Number),
    __metadata("design:type", Number)
], Profile.prototype, "AggregateID", void 0);
__decorate([
    json2typescript_1.JsonProperty("Consultant", consultantClass_1.Consultant),
    __metadata("design:type", consultantClass_1.Consultant)
], Profile.prototype, "Consultant", void 0);
Profile = __decorate([
    json2typescript_1.JsonObject("Profile")
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=ProfileResponseObject.js.map