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
let AccessTokenResponseObject = class AccessTokenResponseObject {
    constructor() {
        this._access_token = undefined;
        this._expires_in = undefined;
        this._token_type = undefined;
        this._refresh_token = undefined;
    }
    get access_token() { return this._access_token; }
    set access_token(value) { this._access_token = value; }
    get expires_in() { return this._expires_in; }
    set expires_in(value) { this._expires_in = value; }
    get token_type() { return this._token_type; }
    set token_type(value) { this._token_type = value; }
    get refresh_token() { return this._refresh_token; }
    set refresh_token(value) { this._refresh_token = value; }
};
__decorate([
    json2typescript_1.JsonProperty("access_token", String, false),
    __metadata("design:type", String)
], AccessTokenResponseObject.prototype, "_access_token", void 0);
__decorate([
    json2typescript_1.JsonProperty("expires_in", Number, false),
    __metadata("design:type", Number)
], AccessTokenResponseObject.prototype, "_expires_in", void 0);
__decorate([
    json2typescript_1.JsonProperty("token_type", String, false),
    __metadata("design:type", String)
], AccessTokenResponseObject.prototype, "_token_type", void 0);
__decorate([
    json2typescript_1.JsonProperty("refresh_token", String, false),
    __metadata("design:type", String)
], AccessTokenResponseObject.prototype, "_refresh_token", void 0);
AccessTokenResponseObject = __decorate([
    json2typescript_1.JsonObject("AccessTokenResponseObject")
], AccessTokenResponseObject);
exports.AccessTokenResponseObject = AccessTokenResponseObject;
//# sourceMappingURL=tokenResponseObject.js.map