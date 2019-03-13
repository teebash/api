"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const json2typescript_1 = require("json2typescript");
class NewFilter {
    constructor() {
        this.id = undefined;
        this.type = undefined;
        this.filterOperation = undefined;
        this.filterBy = undefined;
    }
    get Id() { return this.id; }
    set Id(value) { this.id = value; }
    get Type() { return this.type; }
    set Type(value) { this.type = value; }
    get FilterOperation() { return this.filterOperation; }
    set FilterOperation(value) { this.filterOperation = value; }
    get FilterBy() { return this.filterBy; }
    set FilterBy(value) { this.filterBy = value; }
}
exports.NewFilter = NewFilter;
let RootObject = class RootObject {
    constructor() {
        this.columns = undefined;
        this.page = undefined;
        this.size = undefined;
        this.sortBy = undefined;
        this.sortOrder = undefined;
        this.category = undefined;
        this.newFilters = undefined;
    }
    get Columns() { return this.columns; }
    set Columns(value) { this.columns = value; }
    get Page() { return this.page; }
    set Page(value) { this.page = value; }
    get Size() { return this.size; }
    set Size(value) { this.size = value; }
    get SortBy() { return this.sortBy; }
    set SortBy(value) { this.sortBy = value; }
    get SortOrder() { return this.sortOrder; }
    set SortOrder(value) { this.sortOrder = value; }
    get Category() { return this.category; }
    set Category(value) { this.category = value; }
    get NewFilters() { return this.newFilters; }
    set NewFilters(value) { this.newFilters = value; }
};
RootObject = __decorate([
    json2typescript_1.JsonObject("RootObject")
], RootObject);
exports.RootObject = RootObject;
class SearchObject {
    CreateSearchObject(category, sortBy) {
        return __awaiter(this, void 0, void 0, function* () {
            var searchObjectValues = new RootObject();
            let column = [
                "id",
                "checkBox",
                "currency",
                "name",
                "addressDetails.city",
                "addressDetails.country",
                "fundManagerDetails.pE.overallInvestmentCriteria.strategies",
                "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn",
                "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn",
                "fundManagerDetails.rE.preferences.strategies",
                "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn",
                "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn",
                "fundManagerDetails.pD.overallInvestmentCriteria.strategies",
                "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn",
                "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn",
                "fundManagerDetails.nR.preferences.strategies",
                "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn",
                "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn",
                "fundManagerDetails.iNF.primaryStrategies",
                "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn",
                "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn",
                "fundManagerDetails.hF.category",
                "fundManagerDetails.funds",
                "fundManagerDetails.hF.coreStrategies",
                "fundManagerDetails.snapshots.HF.aUM.localMn"
            ];
            searchObjectValues.Columns = column;
            searchObjectValues.SortBy = sortBy;
            searchObjectValues.SortOrder = "ascending";
            searchObjectValues.Page = 1;
            searchObjectValues.Category = category;
            searchObjectValues.NewFilters = [{ Id: "officeType", Type: "LIST", FilterOperation: "null", FilterBy: ["head_office"] }];
            searchObjectValues.Size = 50;
            return yield searchObjectValues;
        });
    }
    ;
}
exports.SearchObject = SearchObject;
;
//# sourceMappingURL=SearchRequestObject.js.map