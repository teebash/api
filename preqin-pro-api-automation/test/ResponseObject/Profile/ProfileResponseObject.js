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
const json2typescript_1 = require("json2typescript");
let Assets = class Assets {
    constructor() {
        this._AssetClass = undefined;
        this.Service = undefined;
    }
    get AssetClass() {
        return this._AssetClass;
    }
    set AssetClass(value) {
        this._AssetClass = value;
    }
};
__decorate([
    json2typescript_1.JsonProperty("AssetClass", String),
    __metadata("design:type", String)
], Assets.prototype, "_AssetClass", void 0);
__decorate([
    json2typescript_1.JsonProperty("Service", json2typescript_1.Any),
    __metadata("design:type", Object)
], Assets.prototype, "Service", void 0);
Assets = __decorate([
    json2typescript_1.JsonObject("Assets")
], Assets);
exports.Assets = Assets;
;
let AssetTypes = class AssetTypes {
    constructor() {
        this._AssetTypes = undefined;
    }
    get AssetTypes() {
        return this._AssetTypes;
    }
    set AssetTypes(value) {
        this._AssetTypes = value;
    }
};
__decorate([
    json2typescript_1.JsonProperty("AssetTypes", [Assets]),
    __metadata("design:type", Array)
], AssetTypes.prototype, "_AssetTypes", void 0);
AssetTypes = __decorate([
    json2typescript_1.JsonObject("AssetTypes")
], AssetTypes);
exports.AssetTypes = AssetTypes;
;
let Clients = class Clients {
    constructor() {
        this._Clients = undefined;
    }
    get Clients() {
        return this._Clients;
    }
    set Clients(value) {
        this._Clients = value;
    }
};
__decorate([
    json2typescript_1.JsonProperty("Clients", [AssetTypes]),
    __metadata("design:type", Array)
], Clients.prototype, "_Clients", void 0);
Clients = __decorate([
    json2typescript_1.JsonObject("Clients")
], Clients);
exports.Clients = Clients;
;
let Consultant = class Consultant {
    constructor() {
        this._Consultant = undefined;
    }
    get Consultant() {
        return this._Consultant;
    }
    set Consultant(value) {
        this._Consultant = value;
    }
};
__decorate([
    json2typescript_1.JsonProperty("Consultant", Clients),
    __metadata("design:type", Clients)
], Consultant.prototype, "_Consultant", void 0);
Consultant = __decorate([
    json2typescript_1.JsonObject("Consultant")
], Consultant);
exports.Consultant = Consultant;
;
let Profile = class Profile {
    constructor() {
        this._FirmName = undefined;
        this._AggregateID = undefined;
        this._Consultant = undefined;
    }
    get FirmName() {
        return this._FirmName;
    }
    set FirmName(value) {
        this._FirmName = value;
    }
    get AggregateID() {
        return this._AggregateID;
    }
    set AggregateID(value) {
        this._AggregateID = value;
    }
    get Consultant() {
        return this._Consultant;
    }
    set Consultant(value) {
        this._Consultant = value;
    }
};
__decorate([
    json2typescript_1.JsonProperty("FirmName", String),
    __metadata("design:type", String)
], Profile.prototype, "_FirmName", void 0);
__decorate([
    json2typescript_1.JsonProperty("AggregateID", Number),
    __metadata("design:type", Number)
], Profile.prototype, "_AggregateID", void 0);
__decorate([
    json2typescript_1.JsonProperty("Consultant", Clients),
    __metadata("design:type", Clients)
], Profile.prototype, "_Consultant", void 0);
Profile = __decorate([
    json2typescript_1.JsonObject("Profile")
], Profile);
exports.Profile = Profile;
;
//# sourceMappingURL=ProfileResponseObject.js.map