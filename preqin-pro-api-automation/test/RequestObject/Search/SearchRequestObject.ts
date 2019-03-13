import { JsonObject } from 'json2typescript';

export class NewFilter {

    private id?: string = undefined;
    public get Id(): string { return this.id; }
    public set Id(value: string) { this.id = value; }

    private type?: string = undefined;
    public get Type(): string { return this.type; }
    public set Type(value: string) { this.type = value; }

    private filterOperation?: string = undefined;
    public get FilterOperation(): string { return this.filterOperation; }
    public set FilterOperation(value: string) { this.filterOperation = value; }

    private filterBy?: string[] = undefined;
    public get FilterBy(): string[] { return this.filterBy; }
    public set FilterBy(value: string[]) { this.filterBy = value; }
}

@JsonObject("RootObject")
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
}

export class SearchObject {

    async CreateSearchObject(category: string, sortBy: string) {

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
        searchObjectValues.NewFilters = [{ Id: "officeType", Type: "LIST", FilterOperation: "null", FilterBy: ["head_office"]}];
        searchObjectValues.Size = 50;

        return await searchObjectValues;
    };
};