"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class NewFilter {
    constructor() {
        this._id = undefined;
        this._type = undefined;
        this._filterOperation = undefined;
        this._filterBy = undefined;
    }
    get id() { return this._id; }
    set id(value) { this._id = value; }
    get type() { return this._type; }
    set type(value) { this._type = value; }
    get filterOperation() { return this._filterOperation; }
    set filterOperation(value) { this._filterOperation = value; }
    get filterBy() { return this._filterBy; }
    set filterBy(value) { this._filterBy = value; }
}
exports.NewFilter = NewFilter;
;
class RootObject {
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
}
exports.RootObject = RootObject;
;
class SearchRequestObject {
    CreateSearchRequestObject(page, size, sortBy, sortOrder, category, newFilters) {
        return __awaiter(this, void 0, void 0, function* () {
            let column = undefined;
            let searchObjectValues = new RootObject();
            if (category === "FundManager") {
                column = [
                    "id",
                    "checkBox",
                    "currency",
                    "name",
                    "addressDetails.city",
                    "addressDetails.country"
                ];
            }
            else if (category === "Investor") {
                column = [
                    "id",
                    "checkBox",
                    "currency",
                    "name",
                    "addressDetails.city",
                    "addressDetails.country",
                ];
            }
            searchObjectValues.Columns = column;
            searchObjectValues.Page = page;
            searchObjectValues.Size = size;
            searchObjectValues.SortBy = sortBy;
            searchObjectValues.SortOrder = sortOrder;
            searchObjectValues.Category = category;
            searchObjectValues.NewFilters = newFilters;
            return yield searchObjectValues;
        });
    }
    ;
}
exports.SearchRequestObject = SearchRequestObject;
;
//# sourceMappingURL=SearchRequestObject.js.map