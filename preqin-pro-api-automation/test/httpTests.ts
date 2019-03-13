import { assert } from 'chai';
import ApiClient from './helper/ApiClient';
import { JsonConvert, OperationMode, ValueCheckingMode, JsonObject, JsonProperty, Any } from 'json2typescript';
import { Profile } from './ResponseObject/Profile/ProfileResponseObject';
import { SearchObject } from './RequestObject/Search/SearchRequestObject';
// import { Meta } from './ResponseObject/Search/SearchResponseObject';

let apiClient = new ApiClient();
let search = new SearchObject();

describe('Generic type Tests', () => {

    // before(async () => {

    //     return apiClient.Init();
    // });

    xit('Search endpoint, complex post request', async () => {

        let payload = await search.CreateSearchObject("FundManager", "name");
        // let responseObject = await apiClient.Post('search-api/search', 200, Meta, payload);
        // let responseObject = await apiClient.Post('search-api/search', 200, payload);
        // console.log();
    })

    xit('Profile endpoint, complex get request', async () => {

        let responseObject = await apiClient.Get<Profile>('profile-api/InvestmentConsultant?investorId=2365', 200, Profile);
        assert.equal(responseObject[0].FirmName, "Bard Consulting");
    });

    it('Example, Nested object', async () => {

        const jsonObject: object = {
            "trading": {
                "activist": null,
                "usesArtificialIntelligenceMachineLearning": null,
                "analystApproach": null,
                "tradingVolatility": "",
                "tradingMethodology": "Discretionary"
            },
            "coreStrategies": [
                "Fixed Income"
            ],
            "otherStructuresOffered": [],
            "industryPreferences": [],
            "industryPreferencesDetailedList": [],
            "showOnOnlineProduct": false,
            "methodsOfInvestmentEmployed": {
                "Debt": [
                    "Convertible Bonds"
                ],
                "Equities": [],
                "Derivatives": [
                    "Forward Contracts",
                    "Options",
                    "Swaps",
                    "Warrants"
                ],
                "Derivative Markets": [
                    "Equity Derivatives"
                ],
                "Other": [
                    "Currency"
                ]
            },
            "otherStrategiesDetailedList": {
                "Equity Strategies": [
                    "Value-Oriented"
                ],
                "Event Driven Strategies": [
                    "Special Situations",
                    "Risk/Merger Arbitrage"
                ]
            },
            "minimumInvestment": 1000,
            "coreStrategiesDetailedList": {
                "Credit Strategies": [
                    "Fixed Income"
                ],
                "Equity Strategies": [
                    "Long Bias"
                ],
                "Managed Futures/CTA": [
                    "Macro CTA"
                ]
            },
            "geographicPreferences": [],
            "otherStrategies": [],
            "parentFundIsDummyParent": false,
            "typesOfMarketsTraded": {
                "Stock Indexes": [],
                "Interest Rates": [],
                "Energy": [],
                "Grains": [],
                "Meats": [],
                "Bonds": [],
                "Metals": [],
                "Softs": [],
                "Currencies": []
            },
            "parentFundId": "79391",
            "geographicCorePreferences": []
        };

        // let meta: HF;
        let jsonConvert: JsonConvert = new JsonConvert();
        // jsonConvert.operationMode = OperationMode.LOGGING;
        // jsonConvert.operationMode = OperationMode.DISABLE;
        jsonConvert.ignorePrimitiveChecks = false;
        jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;

        try {

            // meta = jsonConvert.deserialize(jsonObject, HF);
            // console.log(meta);
            // assert.equal(meta.Meta.Returned, 50);

        } catch (e) {

            console.log((<Error>e));
        }
    })



    // const jsonObject: object = {
    //     "data": [
    //         {
    //             "id": "10775",
    //             "checkBox": null,
    //             "currency": "USD",
    //             "name": ".406 Ventures",
    //             "addressDetails.city": "Boston",
    //             "addressDetails.country": "US",
    //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
    //                 "Venture (General)",
    //                 "Early Stage",
    //                 "Co-Investment"
    //             ],
    //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 563.9,
    //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 147.60000000000002,
    //             "fundManagerDetails.rE.preferences.strategies": null,
    //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
    //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
    //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
    //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
    //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
    //             "fundManagerDetails.nR.preferences.strategies": null,
    //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
    //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
    //             "fundManagerDetails.iNF.primaryStrategies": [],
    //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
    //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
    //             "fundManagerDetails.hF.category": null,
    //             "fundManagerDetails.funds": [
    //                 {
    //                     "iNF": {
    //                         "projectStage": [],
    //                         "primaryStrategy": null,
    //                         "strategies": [],
    //                         "sectorPreferences": [],
    //                         "pppPfiInvestments": null
    //                     },
    //                     "availableCapital": {
    //                         "usdMn": 0,
    //                         "eurMn": 0,
    //                         "localMn": 0
    //                     },
    //                     "fundRaised": {
    //                         "usdMn": 167,
    //                         "eurMn": 105.66,
    //                         "localMn": 167
    //                     },
    //                     "geographicFocus": {
    //                         "regions": [
    //                             {
    //                                 "id": 50,
    //                                 "text": "Northeast"
    //                             }
    //                         ],
    //                         "countries": [
    //                             {
    //                                 "id": 95,
    //                                 "text": "US"
    //                             }
    //                         ],
    //                         "mainFundFocus": "North America"
    //                     },
    //                     "name": ".406 Ventures Fund I",
    //                     "id": "9001",
    //                     "fundRaisingStatus": "Closed",
    //                     "isActive": true,
    //                     "category": "Early Stage",
    //                     "assetClasses": [
    //                         "PE",
    //                         "VC"
    //                     ],
    //                     "hF": {
    //                         "otherStructuresOffered": [],
    //                         "industryPreferences": [],
    //                         "typesOfMarketsTraded": {},
    //                         "industryPreferencesDetailedList": [],
    //                         "showOnOnlineProduct": false,
    //                         "methodsOfInvestmentEmployed": {},
    //                         "geographicCorePreferences": [],
    //                         "otherStrategiesDetailedList": {},
    //                         "coreStrategiesDetailedList": {},
    //                         "geographicPreferences": []
    //                     },
    //                     "structure": "Commingled"
    //                 },
    //                 {
    //                     "iNF": {
    //                         "projectStage": [],
    //                         "primaryStrategy": null,
    //                         "strategies": [],
    //                         "sectorPreferences": [],
    //                         "pppPfiInvestments": null
    //                     },
    //                     "availableCapital": {
    //                         "usdMn": 16.86,
    //                         "eurMn": 13,
    //                         "localMn": 16.86
    //                     },
    //                     "fundRaised": {
    //                         "usdMn": 175,
    //                         "eurMn": 134.98,
    //                         "localMn": 175
    //                     },
    //                     "geographicFocus": {
    //                         "regions": [
    //                             {
    //                                 "id": 50,
    //                                 "text": "Northeast"
    //                             }
    //                         ],
    //                         "countries": [
    //                             {
    //                                 "id": 95,
    //                                 "text": "US"
    //                             }
    //                         ],
    //                         "mainFundFocus": "North America"
    //                     },
    //                     "name": ".406 Ventures Fund II",
    //                     "id": "20925",
    //                     "fundRaisingStatus": "Closed",
    //                     "isActive": true,
    //                     "category": "Early Stage",
    //                     "assetClasses": [
    //                         "PE",
    //                         "VC"
    //                     ],
    //                     "hF": {
    //                         "otherStructuresOffered": [],
    //                         "industryPreferences": [],
    //                         "typesOfMarketsTraded": {},
    //                         "industryPreferencesDetailedList": [],
    //                         "showOnOnlineProduct": false,
    //                         "methodsOfInvestmentEmployed": {},
    //                         "geographicCorePreferences": [],
    //                         "otherStrategiesDetailedList": {},
    //                         "coreStrategiesDetailedList": {},
    //                         "geographicPreferences": []
    //                     },
    //                     "structure": "Commingled"
    //                 },
    //                 {
    //                     "iNF": {
    //                         "projectStage": [],
    //                         "primaryStrategy": null,
    //                         "strategies": [],
    //                         "sectorPreferences": [],
    //                         "pppPfiInvestments": null
    //                     },
    //                     "availableCapital": {
    //                         "usdMn": 130.13,
    //                         "eurMn": 119.27,
    //                         "localMn": 130.13
    //                     },
    //                     "fundRaised": {
    //                         "usdMn": 217,
    //                         "eurMn": 198.9,
    //                         "localMn": 217
    //                     },
    //                     "geographicFocus": {
    //                         "regions": [
    //                             {
    //                                 "id": 50,
    //                                 "text": "Northeast"
    //                             }
    //                         ],
    //                         "countries": [
    //                             {
    //                                 "id": 95,
    //                                 "text": "US"
    //                             }
    //                         ],
    //                         "mainFundFocus": "North America"
    //                     },
    //                     "name": ".406 Ventures Fund III",
    //                     "id": "53791",
    //                     "fundRaisingStatus": "Closed",
    //                     "isActive": true,
    //                     "category": "Early Stage",
    //                     "assetClasses": [
    //                         "PE",
    //                         "VC"
    //                     ],
    //                     "hF": {
    //                         "otherStructuresOffered": [],
    //                         "industryPreferences": [],
    //                         "typesOfMarketsTraded": {},
    //                         "industryPreferencesDetailedList": [],
    //                         "showOnOnlineProduct": false,
    //                         "methodsOfInvestmentEmployed": {},
    //                         "geographicCorePreferences": [],
    //                         "otherStrategiesDetailedList": {},
    //                         "coreStrategiesDetailedList": {},
    //                         "geographicPreferences": []
    //                     },
    //                     "structure": "Commingled"
    //                 },
    //                 {
    //                     "iNF": {
    //                         "projectStage": [],
    //                         "primaryStrategy": null,
    //                         "strategies": [],
    //                         "sectorPreferences": [],
    //                         "pppPfiInvestments": null
    //                     },
    //                     "availableCapital": {
    //                         "usdMn": 0.28,
    //                         "eurMn": 0.21,
    //                         "localMn": 0.28
    //                     },
    //                     "fundRaised": {
    //                         "usdMn": 2.9,
    //                         "eurMn": 2.18,
    //                         "localMn": 2.9
    //                     },
    //                     "geographicFocus": {
    //                         "regions": [
    //                             {
    //                                 "id": 50,
    //                                 "text": "Northeast"
    //                             }
    //                         ],
    //                         "countries": [
    //                             {
    //                                 "id": 95,
    //                                 "text": "US"
    //                             }
    //                         ],
    //                         "mainFundFocus": "North America"
    //                     },
    //                     "name": ".406 Ventures - Co-Invest",
    //                     "id": "42298",
    //                     "fundRaisingStatus": "Closed",
    //                     "isActive": true,
    //                     "category": "Co-investment",
    //                     "assetClasses": [
    //                         "PE"
    //                     ],
    //                     "hF": {
    //                         "otherStructuresOffered": [],
    //                         "industryPreferences": [],
    //                         "typesOfMarketsTraded": {},
    //                         "industryPreferencesDetailedList": [],
    //                         "showOnOnlineProduct": false,
    //                         "methodsOfInvestmentEmployed": {},
    //                         "geographicCorePreferences": [],
    //                         "otherStrategiesDetailedList": {},
    //                         "coreStrategiesDetailedList": {},
    //                         "geographicPreferences": []
    //                     },
    //                     "structure": "Commingled"
    //                 },
    //                 {
    //                     "iNF": {
    //                         "projectStage": [],
    //                         "primaryStrategy": null,
    //                         "strategies": [],
    //                         "sectorPreferences": [],
    //                         "pppPfiInvestments": null
    //                     },
    //                     "availableCapital": {
    //                         "usdMn": 0.33,
    //                         "eurMn": 0.26,
    //                         "localMn": 0.33
    //                     },
    //                     "fundRaised": {
    //                         "usdMn": 2,
    //                         "eurMn": 1.55,
    //                         "localMn": 2
    //                     },
    //                     "geographicFocus": {
    //                         "regions": [
    //                             {
    //                                 "id": 50,
    //                                 "text": "Northeast"
    //                             }
    //                         ],
    //                         "countries": [
    //                             {
    //                                 "id": 95,
    //                                 "text": "US"
    //                             }
    //                         ],
    //                         "mainFundFocus": "North America"
    //                     },
    //                     "name": ".406 Ventures - Co-Invest II",
    //                     "id": "74122",
    //                     "fundRaisingStatus": "Closed",
    //                     "isActive": true,
    //                     "category": "Co-investment",
    //                     "assetClasses": [
    //                         "PE"
    //                     ],
    //                     "hF": {
    //                         "otherStructuresOffered": [],
    //                         "industryPreferences": [],
    //                         "typesOfMarketsTraded": {},
    //                         "industryPreferencesDetailedList": [],
    //                         "showOnOnlineProduct": false,
    //                         "methodsOfInvestmentEmployed": {},
    //                         "geographicCorePreferences": [],
    //                         "otherStrategiesDetailedList": {},
    //                         "coreStrategiesDetailedList": {},
    //                         "geographicPreferences": []
    //                     },
    //                     "structure": "Commingled"
    //                 },
    //                 {
    //                     "iNF": {
    //                         "projectStage": [],
    //                         "primaryStrategy": null,
    //                         "strategies": [],
    //                         "sectorPreferences": [],
    //                         "pppPfiInvestments": null
    //                     },
    //                     "availableCapital": {
    //                         "usdMn": 0,
    //                         "eurMn": 0,
    //                         "localMn": 0
    //                     },
    //                     "fundRaised": {
    //                         "usdMn": null,
    //                         "eurMn": null,
    //                         "localMn": null
    //                     },
    //                     "geographicFocus": {
    //                         "regions": [
    //                             {
    //                                 "id": 50,
    //                                 "text": "Northeast"
    //                             }
    //                         ],
    //                         "countries": [
    //                             {
    //                                 "id": 95,
    //                                 "text": "US"
    //                             }
    //                         ],
    //                         "mainFundFocus": "North America"
    //                     },
    //                     "name": ".406 Ventures 2016 Opportunities Fund",
    //                     "id": "61306",
    //                     "fundRaisingStatus": "First Close",
    //                     "isActive": true,
    //                     "category": "Venture (General)",
    //                     "assetClasses": [
    //                         "PE",
    //                         "VC"
    //                     ],
    //                     "hF": {
    //                         "otherStructuresOffered": [],
    //                         "industryPreferences": [],
    //                         "typesOfMarketsTraded": {},
    //                         "industryPreferencesDetailedList": [],
    //                         "showOnOnlineProduct": false,
    //                         "methodsOfInvestmentEmployed": {},
    //                         "geographicCorePreferences": [],
    //                         "otherStrategiesDetailedList": {},
    //                         "coreStrategiesDetailedList": {},
    //                         "geographicPreferences": []
    //                     },
    //                     "structure": "Commingled"
    //                 }
    //             ],
    //             "fundManagerDetails.hF.coreStrategies": null,
    //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
    //             "addressDetails.fax": "+1 617 406 3301",
    //             "addressDetails.state": "MA",
    //             "addressDetails.postcode": "02210",
    //             "addressDetails.line": "470 Atlantic Avenue 12th Floor",
    //             "addressDetails.email": "contact@406ventures.com",
    //             "addressDetails.region": "North America",
    //             "addressDetails.website": "http://www.406ventures.com",
    //             "addressDetails.telephone": "+1 617 406 3300"
    //         }
    //     ]
    // };
});