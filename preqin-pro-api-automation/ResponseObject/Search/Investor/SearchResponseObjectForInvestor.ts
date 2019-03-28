import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject("Meta")
export class Meta {

    @JsonProperty("returned", Number)
    private returned: number = undefined;
    public get Returned(): number { return this.returned; }
    public set Returned(value: number) { this.returned = value; }

    @JsonProperty("total", Number)
    private total: number = undefined;
    public get Total(): number { return this.total; }
    public set Total(value: number) { this.total = value; }

    @JsonProperty("page", Number)
    private page: number = undefined;
    public get Page(): number { return this.page; }
    public set Page(value: number) { this.page = value; }

    @JsonProperty("took", Number)
    private took: number = undefined;
    public get Took(): number { return this.took; }
    public set Took(value: number) { this.took = value; }

    @JsonProperty("filterCounts", Any)
    filterCounts?: any = undefined;
};

@JsonObject("Datum")
export class Datum {

    @JsonProperty("id", String)
    private id: string = undefined;
    public get Id(): string { return this.id; }
    public set Id(value: string) { this.id = value; }

    @JsonProperty("checkBox", Any)
    private checkBox?: any = undefined;
    public get CheckBox(): any { return this.checkBox; }
    public set CheckBox(value: any) { this.checkBox = value; }

    @JsonProperty("name", String)
    private name: string = undefined;
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }

    @JsonProperty("investorsFundCount", Number, true)
    private investorsFundCount: number = undefined;
    public get InvestorsFundCount(): number { return this.investorsFundCount; }
    public set InvestorsFundCount(value: number) { this.investorsFundCount = value; }

    @JsonProperty("addressDetails.city", String)
    private addressDetailsCity: string = undefined;
    public get AddressDetailsCity(): string { return this.addressDetailsCity; }
    public set AddressDetailsCity(value: string) { this.addressDetailsCity = value; }

    @JsonProperty("addressDetails.country", String)
    private addressDetailsCountry: string = undefined;
    public get AddressDetailsCountry(): string { return this.addressDetailsCountry; }
    public set AddressDetailsCountry(value: string) { this.addressDetailsCountry = value; }

    @JsonProperty("type", String, true)
    private type: string = undefined;
    public get Type(): string { return this.type; }
    public set Type(value: string) { this.type = value; }

    @JsonProperty("assetsUnderManagement.usdMn", Number, true)
    private assetsUnderManagementUsdMn: number = undefined;
    public get AssetsUnderManagementUsdMn(): number { return this.assetsUnderManagementUsdMn; }
    public set AssetsUnderManagementUsdMn(value: number) { this.assetsUnderManagementUsdMn = value; }

    @JsonProperty("investorDetails.pE.peAllocations.current.amount.usdMn", Any, true)
    private investorDetailsPePeAllocationsCurrentAmountUsdMn?: any = undefined;
    public get InvestorDetailsPePeAllocationsCurrentAmountUsdMn(): any { return this.investorDetailsPePeAllocationsCurrentAmountUsdMn; }
    public set InvestorDetailsPePeAllocationsCurrentAmountUsdMn(value: any) { this.investorDetailsPePeAllocationsCurrentAmountUsdMn = value; }

    @JsonProperty("investorDetails.pE.peAllocations.target.amount.usdMn", Any, true)
    private investorDetailsPePeAllocationsTargetAmountUsdMn?: any = undefined;
    public get InvestorDetailsPePeAllocationsTargetAmountUsdMn(): any { return this.investorDetailsPePeAllocationsTargetAmountUsdMn; }
    public set InvestorDetailsPePeAllocationsTargetAmountUsdMn(value: any) { this.investorDetailsPePeAllocationsTargetAmountUsdMn = value; }

    @JsonProperty("investorDetails.pE.investmentPreferences.typicalInvestmentSize.min.usdMn", Any, true)
    private investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn?: any = undefined;
    public get InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(): any { return this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    public set InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value: any) { this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }

    @JsonProperty("investorDetails.pE.investmentPreferences.typicalInvestmentSize.max.usdMn", Any, true)
    private investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn?: any = undefined;
    public get InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(): any { return this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    public set InvestorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value: any) { this.investorDetailsPeInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }

    @JsonProperty("investorDetails.rE.reAllocations.current.amount.usdMn", Any, true)
    private investorDetailsReReAllocationsCurrentAmountUsdMn?: any = undefined;
    public get InvestorDetailsReReAllocationsCurrentAmountUsdMn(): any { return this.investorDetailsReReAllocationsCurrentAmountUsdMn; }
    public set InvestorDetailsReReAllocationsCurrentAmountUsdMn(value: any) { this.investorDetailsReReAllocationsCurrentAmountUsdMn = value; }

    @JsonProperty("investorDetails.rE.reAllocations.target.amount.usdMn", Any, true)
    private investorDetailsReReAllocationsTargetAmountUsdMn?: any = undefined;
    public get InvestorDetailsReReAllocationsTargetAmountUsdMn(): any { return this.investorDetailsReReAllocationsTargetAmountUsdMn; }
    public set InvestorDetailsReReAllocationsTargetAmountUsdMn(value: any) { this.investorDetailsReReAllocationsTargetAmountUsdMn = value; }

    @JsonProperty("investorDetails.rE.investmentPreferences.typicalInvestmentSize.min.usdMn", Any, true)
    private investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn?: any = undefined;
    public get InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(): any { return this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    public set InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value: any) { this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }

    @JsonProperty("investorDetails.rE.investmentPreferences.typicalInvestmentSize.max.usdMn", Any, true)
    private investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn?: any = undefined;
    public get InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(): any { return this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    public set InvestorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value: any) { this.investorDetailsReInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }

    @JsonProperty("investorDetails.pD.allocations.current.amount.usdMn", Any, true)
    private investorDetailsPdAllocationsCurrentAmountUsdMn?: any = undefined;
    public get InvestorDetailsPdAllocationsCurrentAmountUsdMn(): any { return this.investorDetailsPdAllocationsCurrentAmountUsdMn; }
    public set InvestorDetailsPdAllocationsCurrentAmountUsdMn(value: any) { this.investorDetailsPdAllocationsCurrentAmountUsdMn = value; }

    @JsonProperty("investorDetails.pD.allocations.target.amount.usdMn", Any, true)
    private investorDetailsPdAllocationsTargetAmountUsdMn?: any = undefined;
    public get InvestorDetailsPdAllocationsTargetAmountUsdMn(): any { return this.investorDetailsPdAllocationsTargetAmountUsdMn; }
    public set InvestorDetailsPdAllocationsTargetAmountUsdMn(value: any) { this.investorDetailsPdAllocationsTargetAmountUsdMn = value; }

    @JsonProperty("investorDetails.pD.investmentPreferences.typicalInvestmentSize.min.usdMn", Any, true)
    private investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn?: any = undefined;
    public get InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(): any { return this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    public set InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value: any) { this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }

    @JsonProperty("investorDetails.pD.investmentPreferences.typicalInvestmentSize.max.usdMn", Any, true)
    private investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn?: any = undefined;
    public get InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(): any { return this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    public set InvestorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value: any) { this.investorDetailsPdInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }

    @JsonProperty("investorDetails.iNF.allocations.current.amount.usdMn", Any, true)
    private investorDetailsInfAllocationsCurrentAmountUsdMn?: any = undefined;
    public get InvestorDetailsInfAllocationsCurrentAmountUsdMn(): any { return this.investorDetailsInfAllocationsCurrentAmountUsdMn; }
    public set InvestorDetailsInfAllocationsCurrentAmountUsdMn(value: any) { this.investorDetailsInfAllocationsCurrentAmountUsdMn = value; }

    @JsonProperty("investorDetails.iNF.allocations.target.amount.usdMn", Any, true)
    private investorDetailsInfAllocationsTargetAmountUsdMn?: any = undefined;
    public get InvestorDetailsInfAllocationsTargetAmountUsdMn(): any { return this.investorDetailsInfAllocationsTargetAmountUsdMn; }
    public set InvestorDetailsInfAllocationsTargetAmountUsdMn(value: any) { this.investorDetailsInfAllocationsTargetAmountUsdMn = value; }

    @JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInHoldings.min.usdMn", Any, true)
    private investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn?: any = undefined;
    public get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn(): any { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn; }
    public set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn(value: any) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMinUsdMn = value; }

    @JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInHoldings.max.usdMn", Any, true)
    private investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn?: any = undefined;
    public get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn(): any { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn; }
    public set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn(value: any) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInHoldingsMaxUsdMn = value; }

    @JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInFunds.min.usdMn", Any, true)
    private investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn?: any = undefined;
    public get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn(): any { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn; }
    public set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn(value: any) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMinUsdMn = value; }

    @JsonProperty("investorDetails.iNF.investmentPreferences.typicalInvetmentSizeInFunds.max.usdMn", Any, true)
    private investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn?: any = undefined;
    public get InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn(): any { return this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn; }
    public set InvestorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn(value: any) { this.investorDetailsInfInvestmentPreferencesTypicalInvetmentSizeInFundsMaxUsdMn = value; }

    @JsonProperty("investorDetails.nR.allocations.current.amount.usdMn", Any, true)
    private investorDetailsNrAllocationsCurrentAmountUsdMn?: any = undefined;
    public get InvestorDetailsNrAllocationsCurrentAmountUsdMn(): any { return this.investorDetailsNrAllocationsCurrentAmountUsdMn; }
    public set InvestorDetailsNrAllocationsCurrentAmountUsdMn(value: any) { this.investorDetailsNrAllocationsCurrentAmountUsdMn = value; }
    
    @JsonProperty("investorDetails.nR.allocations.target.amount.usdMn", Any, true)
    private investorDetailsNrAllocationsTargetAmountUsdMn?: any = undefined;
    public get InvestorDetailsNrAllocationsTargetAmountUsdMn(): any { return this.investorDetailsNrAllocationsTargetAmountUsdMn; }
    public set InvestorDetailsNrAllocationsTargetAmountUsdMn(value: any) { this.investorDetailsNrAllocationsTargetAmountUsdMn = value; }
    
    @JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInHoldings.min.usdMn", Any, true)
    private investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn?: any = undefined;
    public get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn(): any { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn; }
    public set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn(value: any) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMinUsdMn = value; }
    
    @JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInHoldings.max.usdMn", Any, true)
    private investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn?: any = undefined;
    public get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn(): any { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn; }
    public set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn(value: any) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInHoldingsMaxUsdMn = value; }
    
    @JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInFunds.min.usdMn", Any, true)
    private investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn?: any = undefined;
    public get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn(): any { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn; }
    public set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn(value: any) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMinUsdMn = value; }
    
    @JsonProperty("investorDetails.nR.investmentPreferences.typicallyInvestInFunds.max.usdMn", Any, true)
    private investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn?: any = undefined;
    public get InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn(): any { return this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn; }
    public set InvestorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn(value: any) { this.investorDetailsNrInvestmentPreferencesTypicallyInvestInFundsMaxUsdMn = value; }
    
    @JsonProperty("investorDetails.hF.allocations.current.amount.usdMn", Any, true)
    private investorDetailsHfAllocationsCurrentAmountUsdMn?: any = undefined;
    public get InvestorDetailsHfAllocationsCurrentAmountUsdMn(): any { return this.investorDetailsHfAllocationsCurrentAmountUsdMn; }
    public set InvestorDetailsHfAllocationsCurrentAmountUsdMn(value: any) { this.investorDetailsHfAllocationsCurrentAmountUsdMn = value; }

    @JsonProperty("investorDetails.hF.allocations.target.amount.usdMn", Any, true)
    private investorDetailsHfAllocationsTargetAmountUsdMn?: any = undefined;
    public get InvestorDetailsHfAllocationsTargetAmountUsdMn(): any { return this.investorDetailsHfAllocationsTargetAmountUsdMn; }
    public set InvestorDetailsHfAllocationsTargetAmountUsdMn(value: any) { this.investorDetailsHfAllocationsTargetAmountUsdMn = value; }

    @JsonProperty("investorDetails.hF.investmentPreferences.typicalInvestmentSize.min.usdMn", Any, true)
    private investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn?: any = undefined;
    public get InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(): any { return this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn; }
    public set InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn(value: any) { this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMinUsdMn = value; }

    @JsonProperty("investorDetails.hF.investmentPreferences.typicalInvestmentSize.max.usdMn", Any, true)
    private investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn?: any = undefined;
    public get InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(): any { return this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn; }
    public set InvestorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn(value: any) { this.investorDetailsHfInvestmentPreferencesTypicalInvestmentSizeMaxUsdMn = value; }

    @JsonProperty("addressDetails.fax", String, true)
    private addressDetailsFax: string = undefined;
    public get AddressDetailsFax(): string { return this.addressDetailsFax; }
    public set AddressDetailsFax(value: string) { this.addressDetailsFax = value; }

    @JsonProperty("addressDetails.state", String, true)
    private addressDetailsState: string = undefined;
    public get AddressDetailsState(): string { return this.addressDetailsState; }
    public set AddressDetailsState(value: string) { this.addressDetailsState = value; }

    @JsonProperty("addressDetails.postcode", String, true)
    private addressDetailsPostcode: string = undefined;
    public get AddressDetailsPostcode(): string { return this.addressDetailsPostcode; }
    public set AddressDetailsPostcode(value: string) { this.addressDetailsPostcode = value; }

    @JsonProperty("addressDetails.line", String, true)
    private addressDetailsLine: string = undefined;
    public get AddressDetailsLine(): string { return this.addressDetailsLine; }
    public set AddressDetailsLine(value: string) { this.addressDetailsLine = value; }

    @JsonProperty("addressDetails.email", String, true)
    private addressDetailsEmail: string = undefined;
    public get AddressDetailsEmail(): string { return this.addressDetailsEmail; }
    public set AddressDetailsEmail(value: string) { this.addressDetailsEmail = value; }

    @JsonProperty("addressDetails.region", String, true)
    private addressDetailsRegion: string = undefined;
    public get AddressDetailsRegion(): string { return this.addressDetailsRegion; }
    public set AddressDetailsRegion(value: string) { this.addressDetailsRegion = value; }

    @JsonProperty("addressDetails.website", String, true)
    private addressDetailsWebsite: string = undefined;
    public get AddressDetailsWebsite(): string { return this.addressDetailsWebsite; }
    public set AddressDetailsWebsite(value: string) { this.addressDetailsWebsite = value; }

    @JsonProperty("addressDetails.telephone", String, true)
    private addressDetailsTelephone: string = undefined;
    public get AddressDetailsTelephone(): string { return this.addressDetailsTelephone; }
    public set AddressDetailsTelephone(value: string) { this.addressDetailsTelephone = value; }
};

@JsonObject("SearchResponseRootObjectForInvestor")
export class SearchResponseRootObjectForInvestor {

    @JsonProperty("meta", Meta)
    private meta: Meta = undefined;
    public get Meta(): Meta { return this.meta; }
    public set Meta(value: Meta) { this.meta = value; }

    @JsonProperty("data", [Datum])
    private data: Datum[] = undefined;
    public get Data(): Datum[] { return this.data; }
    public set Data(value: Datum[]) { this.data = value; }
};