export declare class NewFilter {
    private id?;
    Id: string;
    private type?;
    Type: string;
    private filterOperation?;
    FilterOperation: string;
    private filterBy?;
    FilterBy: string[];
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
export declare class SearchObject {
    CreateSearchObject(category: string, sortBy: string): Promise<RootObject>;
}
