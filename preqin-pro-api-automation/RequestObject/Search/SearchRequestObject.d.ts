export declare class NewFilter {
    private _id?;
    id: string;
    private _type?;
    type: string;
    private _filterOperation?;
    filterOperation: string;
    private _filterBy?;
    filterBy: string[];
}
export declare class RootObject {
    private columns?;
    Columns: string[];
    private page?;
    Page: number;
    private size?;
    Size: number;
    private sortBy?;
    SortBy: string;
    private sortOrder?;
    SortOrder: string;
    private category?;
    Category: string;
    private newFilters?;
    NewFilters: NewFilter[];
}
export declare class SearchRequestObject {
    CreateSearchRequestObject(page: number, size: number, sortBy: string, sortOrder: string, category: string, newFilters: Array<NewFilter>): Promise<RootObject>;
}
