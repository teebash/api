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
let AssetType = class AssetType {
};
__decorate([
    json2typescript_1.JsonProperty("AssetClass", String),
    __metadata("design:type", String)
], AssetType.prototype, "AssetClass", void 0);
__decorate([
    json2typescript_1.JsonProperty("Service", String),
    __metadata("design:type", String)
], AssetType.prototype, "Service", void 0);
AssetType = __decorate([
    json2typescript_1.JsonObject("AssetType")
], AssetType);
exports.AssetType = AssetType;
;
//# sourceMappingURL=assetTypeClass.js.map