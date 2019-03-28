export class NewFilter {

    private _id?: string = undefined;
    public get id(): string { return this._id; }
    public set id(value: string) { this._id = value; }

    private _type?: string = undefined;
    public get type(): string { return this._type; }
    public set type(value: string) { this._type = value; }

    private _filterOperation?: string = undefined;
    public get filterOperation(): string { return this._filterOperation; }
    public set filterOperation(value: string) { this._filterOperation = value; }

    private _filterBy?: string[] = undefined;
    public get filterBy(): string[] { return this._filterBy; }
    public set filterBy(value: string[]) { this._filterBy = value; }
};

export class RootObject {

    private columns?: string[] = undefined;
    public get Columns(): string[] { return this.columns; }
    public set Columns(value: string[]) { this.columns = value; }

    private page?: number = undefined;
    public get Page(): number { return this.page; }
    public set Page(value: number) { this.page = value; }

    private size?: number = undefined;
    public get Size(): number { return this.size; }
    public set Size(value: number) { this.size = value; }

    private sortBy?: string = undefined;
    public get SortBy(): string { return this.sortBy; }
    public set SortBy(value: string) { this.sortBy = value; }

    private sortOrder?: string = undefined;
    public get SortOrder(): string { return this.sortOrder; }
    public set SortOrder(value: string) { this.sortOrder = value; }

    private category?: string = undefined;
    public get Category(): string { return this.category; }
    public set Category(value: string) { this.category = value; }

    private newFilters?: NewFilter[] = undefined;
    public get NewFilters(): NewFilter[] { return this.newFilters; }
    public set NewFilters(value: NewFilter[]) { this.newFilters = value; }
};

export class SearchRequestObject {

    async CreateSearchRequestObject(page: number, size: number, sortBy: string, sortOrder: string, category: string, newFilters: Array<NewFilter>) {

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

        return await searchObjectValues;
    };
};