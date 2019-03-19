import { assert } from 'chai';
import { ApiClient } from '../HelperUtils/ApiClient';
import { SearchRequestObject } from '../RequestObject/Search/SearchRequestObject';
import { SearchResponseRootObject } from '../ResponseObject/Search/SearchResponseObject';
import { Profile } from '../ResponseObject/Profile/ProfileResponseObject';

let apiClient = new ApiClient();
let searchRequestObject = new SearchRequestObject();

describe('Generic type Tests', () => {

    // before(async () => {

    //     // return await apiClient.Init();
    // });

    it('Search endpoint, complex post request', async () => {

        let payload = await searchRequestObject.CreateSearchRequestObject(1, 2, "name", "ascending", "FundManager", [{ id: "officeType", type: "LIST", filterOperation: "null", filterBy: ["head_office"] }]);
        let responseObject = await apiClient.Post<SearchResponseRootObject>('search-api/search', payload, 200, SearchResponseRootObject);
        assert.equal(responseObject.Data[0].Name, ".406 Ventures");
    });

    it('Profile endpoint, complex get request', async () => {

        let responseObject = await apiClient.Get<Profile>('profile-api/InvestmentConsultant?investorId=2365', 200, Profile);
        assert.equal(responseObject[0].FirmName, "Bard Consulting");
    });

    xit('Example, Nested object', async () => {

        // const jsonObject: object = {
        //     "meta": {
        //         "returned": 50,
        //         "total": 29495,
        //         "page": 1,
        //         "took": 168,
        //         "filterCounts": null
        //     },
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
        //                     "otherGeographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 17,
        //                                 "text": "Canada"
        //                             },
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ]
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
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": "Bottom-up",
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "typesOfMarketsTraded": {
        //                             "Stock Indexes": [],
        //                             "Interest Rates": [],
        //                             "Energy": [],
        //                             "Grains": [],
        //                             "Meats": [],
        //                             "Bonds": [],
        //                             "Metals": [],
        //                             "Softs": [],
        //                             "Currencies": []
        //                         },
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Money Market Instruments"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ],
        //                             "Derivative Markets": [
        //                                 "Equity Derivatives"
        //                             ],
        //                             "Other": [
        //                                 "Currency"
        //                             ]
        //                         },
        //                         "geographicCorePreferences": [],
        //                         "otherStrategiesDetailedList": {
        //                             "Event Driven Strategies": [
        //                                 "Special Situations",
        //                                 "Risk/Merger Arbitrage"
        //                             ],
        //                             "Equity Strategies": [
        //                                 "Value-Oriented"
        //                             ]
        //                         },
        //                         "minimumInvestment": 750,
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "parentFundId": "50331",
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

        // const fullJsonObject: object = {
        //     "meta": {
        //         "returned": 50,
        //         "total": 29495,
        //         "page": 1,
        //         "took": 168,
        //         "filterCounts": null
        //     },
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
        //         },
        //         {
        //             "id": "226905",
        //             "checkBox": null,
        //             "currency": "NZD",
        //             "name": "0.Ventures",
        //             "addressDetails.city": "Wellington",
        //             "addressDetails.country": "New Zealand",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": " ",
        //             "addressDetails.email": "info@zeropoint.ventures",
        //             "addressDetails.region": "Australasia",
        //             "addressDetails.website": "http://www.zeropoint.ventures",
        //             "addressDetails.telephone": "+64 (0)2 120 34298"
        //         },
        //         {
        //             "id": "171865",
        //             "checkBox": null,
        //             "currency": "CNY",
        //             "name": "01 Venture Capital",
        //             "addressDetails.city": "Shanghai",
        //             "addressDetails.country": "China",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Venture (General)",
        //                 "Early Stage",
        //                 "Expansion / Late Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 4.74,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 1.33,
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
        //                         "usdMn": 1.33,
        //                         "eurMn": 1.19,
        //                         "localMn": 8.12
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 4.74,
        //                         "eurMn": 4.26,
        //                         "localMn": 29
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 20,
        //                                 "text": "China"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Asia"
        //                     },
        //                     "name": "Shanghai Lingyi Fund",
        //                     "id": "89875",
        //                     "fundRaisingStatus": "Closed",
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
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "primaryStrategy": null,
        //                         "strategies": [],
        //                         "sectorPreferences": [],
        //                         "pppPfiInvestments": null
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 20,
        //                                 "text": "China"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Asia"
        //                     },
        //                     "name": "01VC Fund II",
        //                     "id": "90893",
        //                     "fundRaisingStatus": "Raising",
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
        //             "addressDetails.fax": "+86 (0)21 63320081",
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": "Unit 2802B, 28/F Blk 5 Corporate Avenue, Huangpu District",
        //             "addressDetails.email": "info@01vc.com",
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://www.01vc.com",
        //             "addressDetails.telephone": "+86 (0)21 63136288"
        //         },
        //         {
        //             "id": "238087",
        //             "checkBox": null,
        //             "currency": "GBP",
        //             "name": "01 Ventures",
        //             "addressDetails.city": "London",
        //             "addressDetails.country": "UK",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "NW1 8AB",
        //             "addressDetails.line": "Interchange Triangle, 3rd Floor Triangle Building Stables Market, Chalk Farm Road",
        //             "addressDetails.email": "coffeemenow@01ventures.com",
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "www.01ventures.com",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "225659",
        //             "checkBox": null,
        //             "currency": "JPY",
        //             "name": "01Booster.com",
        //             "addressDetails.city": "Tokyo",
        //             "addressDetails.country": "Japan",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": "7F, Second Watanabe Building, 1-7-3, Higashi-Azabu, Minato-ku ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://www.01booster.com",
        //             "addressDetails.telephone": "+81 (0)3 6435 5360"
        //         },
        //         {
        //             "id": "242953",
        //             "checkBox": null,
        //             "currency": "INR",
        //             "name": "021 Capital",
        //             "addressDetails.city": "Bengaluru",
        //             "addressDetails.country": "India",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 32,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 31.2,
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
        //                         "usdMn": 31.2,
        //                         "eurMn": 27.34,
        //                         "localMn": 2172.45
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 32,
        //                         "eurMn": 28.04,
        //                         "localMn": 2228.15
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Asia"
        //                     },
        //                     "name": "021 Capital",
        //                     "id": "75122",
        //                     "fundRaisingStatus": "First Close",
        //                     "isActive": true,
        //                     "category": "Early Stage: Start-up",
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "Karnataka",
        //             "addressDetails.postcode": "560095",
        //             "addressDetails.line": " ",
        //             "addressDetails.email": "info@021.capital",
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://021.capital",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "278359",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "10 Federal",
        //             "addressDetails.city": "Raleigh",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Value Added",
        //                 "Opportunistic"
        //             ],
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": 5,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": 2.57,
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
        //                         "usdMn": 2.57,
        //                         "eurMn": 2.09,
        //                         "localMn": 2.57
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 5,
        //                         "eurMn": 4.07,
        //                         "localMn": 5
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "10 Federal Self Storage I",
        //                     "id": "86914",
        //                     "fundRaisingStatus": "Fourth Close",
        //                     "isActive": true,
        //                     "category": "Real Estate",
        //                     "assetClasses": [
        //                         "RE"
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "NC",
        //             "addressDetails.postcode": "27612",
        //             "addressDetails.line": "5400 Glenwood Avenue Suite G-11",
        //             "addressDetails.email": "contact@10federal.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://10federal.com",
        //             "addressDetails.telephone": "+1 800 462 5860"
        //         },
        //         {
        //             "id": "270825",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "10 Point Capital",
        //             "addressDetails.city": "Atlanta",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Growth"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "GA",
        //             "addressDetails.postcode": "30305",
        //             "addressDetails.line": "3575 Piedmont Road NE Building 15, Suite 730",
        //             "addressDetails.email": "admin@10pointcapital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.10pointcapital.com",
        //             "addressDetails.telephone": "+1 404 444 3110"
        //         },
        //         {
        //             "id": "269690",
        //             "checkBox": null,
        //             "currency": "CZK",
        //             "name": "100 Towers Holding",
        //             "addressDetails.city": "Prague",
        //             "addressDetails.country": "Czech Republic",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Opportunistic",
        //                 "Core"
        //             ],
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "140 00",
        //             "addressDetails.line": "Nuselská 419/92 ",
        //             "addressDetails.email": "info@100towers.re",
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "http://100towers.re",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "117205",
        //             "checkBox": null,
        //             "currency": "EUR",
        //             "name": "101 Startups",
        //             "addressDetails.city": "Barcelona",
        //             "addressDetails.country": "Spain",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "08039",
        //             "addressDetails.line": "Pier01, Palau de Mar, 2A2 ",
        //             "addressDetails.email": "info@101startups.com",
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "www.101startups.com",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "126060",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1060 Capital",
        //             "addressDetails.city": "Chicago",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 17,
        //                                 "text": "Canada"
        //                             },
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ]
        //                     },
        //                     "name": "1060 Capital Opportunity Fund LP",
        //                     "id": "50331",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": "No",
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": "Bottom-up",
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [
        //                             "Separately Managed Account"
        //                         ],
        //                         "industryPreferences": [
        //                             "Consumer Discretionary",
        //                             "Industrials"
        //                         ],
        //                         "industryPreferencesDetailedList": [
        //                             {
        //                                 "industryPreferences": [],
        //                                 "sortOrder": 2,
        //                                 "name": "Consumer Discretionary"
        //                             },
        //                             {
        //                                 "industryPreferences": [],
        //                                 "sortOrder": 6,
        //                                 "name": "Industrials"
        //                             }
        //                         ],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Convertible Bonds"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Forward Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 250,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [
        //                             {
        //                                 "sortOrder": 4,
        //                                 "name": "North America",
        //                                 "countries": [
        //                                     "Canada",
        //                                     "US"
        //                                 ]
        //                             }
        //                         ],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 4,
        //                                 "name": "North America",
        //                                 "countries": [
        //                                     "North America"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 17,
        //                                 "text": "Canada"
        //                             },
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ]
        //                     },
        //                     "name": "1060 Capital Opportunity Fund Ltd",
        //                     "id": "70356",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": "No",
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": "Bottom-up",
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [
        //                             "Separately Managed Account"
        //                         ],
        //                         "industryPreferences": [
        //                             "Consumer Discretionary",
        //                             "Industrials"
        //                         ],
        //                         "industryPreferencesDetailedList": [
        //                             {
        //                                 "industryPreferences": [],
        //                                 "sortOrder": 2,
        //                                 "name": "Consumer Discretionary"
        //                             },
        //                             {
        //                                 "industryPreferences": [],
        //                                 "sortOrder": 6,
        //                                 "name": "Industrials"
        //                             }
        //                         ],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Convertible Bonds"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Forward Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 250,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [
        //                             {
        //                                 "sortOrder": 4,
        //                                 "name": "North America",
        //                                 "countries": [
        //                                     "Canada",
        //                                     "US"
        //                                 ]
        //                             }
        //                         ],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "parentFundId": "50331",
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 4,
        //                                 "name": "North America",
        //                                 "countries": [
        //                                     "North America"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long/Short Equity"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 195,
        //             "addressDetails.fax": "+1 312 361 3587",
        //             "addressDetails.state": "IL",
        //             "addressDetails.postcode": "60654",
        //             "addressDetails.line": "415 N. LaSalle Street Suite 501",
        //             "addressDetails.email": "info@1060llc.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://1060capitalmanagement.com/",
        //             "addressDetails.telephone": "+1 312 201 4175"
        //         },
        //         {
        //             "id": "218498",
        //             "checkBox": null,
        //             "currency": "CNY",
        //             "name": "10Fund",
        //             "addressDetails.city": "Beijing",
        //             "addressDetails.country": "China",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Venture (General)",
        //                 "Early Stage",
        //                 "Expansion / Late Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 0,
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
        //                         "usdMn": null,
        //                         "eurMn": null,
        //                         "localMn": null
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 20,
        //                                 "text": "China"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Asia"
        //                     },
        //                     "name": "Shenzhen 10fund Venture Fund",
        //                     "id": "91201",
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": "Room 7A01, Building 7, No. 85, Chaoyang Road, Chaoyang District ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://www.10funds.com",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "302562",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "10Talents Investors",
        //             "addressDetails.city": "Foxborough",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Fund of Funds"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 15,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 9.38,
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "10Talents Private Fund III",
        //                     "id": "96248",
        //                     "fundRaisingStatus": "Unknown",
        //                     "isActive": false,
        //                     "category": "Fund of Funds",
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "10Talents Private Fund II",
        //                     "id": "96247",
        //                     "fundRaisingStatus": "Unknown",
        //                     "isActive": false,
        //                     "category": "Fund of Funds",
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "10Talents Private Fund IV",
        //                     "id": "96245",
        //                     "fundRaisingStatus": "Announced",
        //                     "isActive": true,
        //                     "category": "Fund of Funds",
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
        //                         "usdMn": 9.38,
        //                         "eurMn": 8.79,
        //                         "localMn": 9.38
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 15,
        //                         "eurMn": 14.06,
        //                         "localMn": 15
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "10Talents Private Fund I",
        //                     "id": "96246",
        //                     "fundRaisingStatus": "First Close",
        //                     "isActive": true,
        //                     "category": "Fund of Funds",
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
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "MA",
        //             "addressDetails.postcode": "02035",
        //             "addressDetails.line": "124 Washington Street #101 ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://10talentsinvestors.com/",
        //             "addressDetails.telephone": "+1 508 549 5799"
        //         },
        //         {
        //             "id": "265907",
        //             "checkBox": null,
        //             "currency": "EUR",
        //             "name": "10x.Group",
        //             "addressDetails.city": "Munich",
        //             "addressDetails.country": "Germany",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": " ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "www.10x.group",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "281831",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "11-11 Ventures",
        //             "addressDetails.city": "Alpharetta",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "GA",
        //             "addressDetails.postcode": "30009",
        //             "addressDetails.line": "TECH Alpharetta Innovation Center 2972 Webb Bridge Rd",
        //             "addressDetails.email": "info@11-11ventures.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.11-11ventures.com",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "275522",
        //             "checkBox": null,
        //             "currency": "INR",
        //             "name": "11.2 Advisors",
        //             "addressDetails.city": "Mumbai",
        //             "addressDetails.country": "India",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": " ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://www.11point2advisors.com",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "258639",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "12 South Capital Partners",
        //             "addressDetails.city": "Charlotte",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Buyout",
        //                 "Growth"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "NC",
        //             "addressDetails.postcode": "28205",
        //             "addressDetails.line": "1305 Central Ave. ",
        //             "addressDetails.email": "team@12southcapitalpartners.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.12southcapitalpartners.com",
        //             "addressDetails.telephone": "+1 309 264 1123"
        //         },
        //         {
        //             "id": "107904",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "12 West Capital Management",
        //             "addressDetails.city": "New York",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "12 West Capital Fund Ltd",
        //                     "id": "38293",
        //                     "fundRaisingStatus": "Closed to Investment",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Money Market Instruments"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ],
        //                             "Derivative Markets": [
        //                                 "Equity Derivatives"
        //                             ],
        //                             "Other": [
        //                                 "Currency"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 10000,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "parentFundId": "38292",
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "12 West Capital Fund LP",
        //                     "id": "38291",
        //                     "fundRaisingStatus": "Closed to Investment",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Money Market Instruments"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ],
        //                             "Derivative Markets": [
        //                                 "Equity Derivatives"
        //                             ],
        //                             "Other": [
        //                                 "Currency"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 10000,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "12 West Capital Offshore Fund",
        //                     "id": "38292",
        //                     "fundRaisingStatus": "Closed to Investment",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Money Market Instruments"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ],
        //                             "Derivative Markets": [
        //                                 "Equity Derivatives"
        //                             ],
        //                             "Other": [
        //                                 "Currency"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 10000,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "12 West Punch Card Fund",
        //                     "id": "45739",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Money Market Instruments"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps",
        //                                 "Warrants"
        //                             ],
        //                             "Derivative Markets": [
        //                                 "Equity Derivatives"
        //                             ],
        //                             "Other": [
        //                                 "Currency"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long/Short Equity"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 1771,
        //             "addressDetails.fax": "+1 646 219 2834",
        //             "addressDetails.state": "NY",
        //             "addressDetails.postcode": "10016",
        //             "addressDetails.line": "90 Park Avenue 40th Floor",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "",
        //             "addressDetails.telephone": "+1 646 216 7040"
        //         },
        //         {
        //             "id": "224817",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "122 West Ventures",
        //             "addressDetails.city": "San Francisco",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "122 West Ventures Fund I",
        //                     "id": "69237",
        //                     "fundRaisingStatus": "Raising",
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
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CA",
        //             "addressDetails.postcode": "94115",
        //             "addressDetails.line": "2852 California Street Apt. 2",
        //             "addressDetails.email": "info@122west.vc",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "https://122west.vc/",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "1",
        //             "checkBox": null,
        //             "currency": "EUR",
        //             "name": "123 Investment Managers",
        //             "addressDetails.city": "Paris",
        //             "addressDetails.country": "France",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Buyout",
        //                 "Venture (General)",
        //                 "Growth",
        //                 "Expansion / Late Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 25,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 0,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Value Added",
        //                 "Opportunistic",
        //                 "Core"
        //             ],
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123Expansion",
        //                     "id": "8542",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Growth",
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "LinkSport",
        //                     "id": "95249",
        //                     "fundRaisingStatus": "Raising",
        //                     "isActive": true,
        //                     "category": "Growth",
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 25,
        //                         "eurMn": 18.35,
        //                         "localMn": 18.35
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123Transmission",
        //                     "id": "16094",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Buyout",
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             },
        //                             {
        //                                 "id": 4,
        //                                 "text": "West Europe"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123MultiNova Venture Fund II",
        //                     "id": "3687",
        //                     "fundRaisingStatus": "Closed",
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             },
        //                             {
        //                                 "id": 33,
        //                                 "text": "Germany"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123MultiNova Venture Fund",
        //                     "id": "3333",
        //                     "fundRaisingStatus": "Liquidated",
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
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123MultiNova Venture Fund IV",
        //                     "id": "9705",
        //                     "fundRaisingStatus": "Closed",
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 4,
        //                                 "text": "West Europe"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123MultiNova Europe",
        //                     "id": "8543",
        //                     "fundRaisingStatus": "Closed",
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
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123MultiCap",
        //                     "id": "16092",
        //                     "fundRaisingStatus": "Closed",
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
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "primaryStrategy": null,
        //                         "strategies": [],
        //                         "sectorPreferences": [],
        //                         "pppPfiInvestments": null
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123Explorer Fund II",
        //                     "id": "3686",
        //                     "fundRaisingStatus": "Abandoned",
        //                     "isActive": false,
        //                     "category": "Fund of Funds",
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
        //                             },
        //                             {
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             },
        //                             {
        //                                 "id": 11,
        //                                 "text": "Other"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             },
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123Explorer",
        //                     "id": "2832",
        //                     "fundRaisingStatus": "Liquidated",
        //                     "isActive": true,
        //                     "category": "Fund of Funds",
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
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             },
        //                             {
        //                                 "id": 4,
        //                                 "text": "West Europe"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 31,
        //                                 "text": "France"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "123Convictions",
        //                     "id": "8540",
        //                     "fundRaisingStatus": "Mutual Fund",
        //                     "isActive": false,
        //                     "category": "Fund of Funds",
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
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": "+33 (0)1 4926 9819",
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "75009",
        //             "addressDetails.line": "94 rue de la Victoire ",
        //             "addressDetails.email": "info@123-im.com",
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "http://www.123-im.com",
        //             "addressDetails.telephone": "+33 (0)1 4926 9800"
        //         },
        //         {
        //             "id": "283785",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1251 Capital Group",
        //             "addressDetails.city": "Boston",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Buyout",
        //                 "Recapitalisation",
        //                 "Succession",
        //                 "Management Buyout",
        //                 "Divestiture",
        //                 "Growth"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "MA",
        //             "addressDetails.postcode": "02116",
        //             "addressDetails.line": "83 Newbury Street 3rd Floor",
        //             "addressDetails.email": "info@1251capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1251capital.com",
        //             "addressDetails.telephone": "+1 617 273 9482"
        //         },
        //         {
        //             "id": "276175",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "12th Street Asset Management",
        //             "addressDetails.city": "Nashville",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "12th Street Asset Management LP",
        //                     "id": "86369",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": "Both Top Down and Bottom Up",
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [
        //                             "Separately Managed Account"
        //                         ],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Convertible Bonds"
        //                             ],
        //                             "Equities": [],
        //                             "Other": [
        //                                 "ETFs"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Value-Oriented"
        //                             ]
        //                         },
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [
        //                             "Value-Oriented"
        //                         ],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 4,
        //                                 "name": "North America",
        //                                 "countries": [
        //                                     "US"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long/Short Equity"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 491,
        //             "addressDetails.fax": "+1 615 250 4828",
        //             "addressDetails.state": "TN",
        //             "addressDetails.postcode": "37205",
        //             "addressDetails.line": "102 Woodmont Blvd Suite 460",
        //             "addressDetails.email": "info@12thstreetasset.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.12thstreetasset.com/",
        //             "addressDetails.telephone": "+1 615 915 3701"
        //         },
        //         {
        //             "id": "161262",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1315 Capital",
        //             "addressDetails.city": "Philadelphia",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Growth",
        //                 "Expansion / Late Stage"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 503.4,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 303.27,
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
        //                         "usdMn": 55.77,
        //                         "eurMn": 49.64,
        //                         "localMn": 55.77
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 203.4,
        //                         "eurMn": 181.07,
        //                         "localMn": 203.4
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
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
        //                     "name": "1315 Capital",
        //                     "id": "60514",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Growth",
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
        //                         "usdMn": 247.5,
        //                         "eurMn": 201.92,
        //                         "localMn": 247.5
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 300,
        //                         "eurMn": 244.75,
        //                         "localMn": 300
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1315 Capital II",
        //                     "id": "81057",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Growth",
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
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 500,
        //             "addressDetails.fax": "+1 215 689 4648",
        //             "addressDetails.state": "PA",
        //             "addressDetails.postcode": "19104",
        //             "addressDetails.line": "2929 Walnut Street Suite 1240",
        //             "addressDetails.email": "team@1315capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1315capital.com",
        //             "addressDetails.telephone": "+1 215 662 1315"
        //         },
        //         {
        //             "id": "120972",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "137 Ventures",
        //             "addressDetails.city": "San Francisco",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Secondaries",
        //                 "Venture Debt",
        //                 "Growth",
        //                 "pre-IPO",
        //                 "Direct Secondaries"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 458.09999999999997,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 120.72000000000001,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "Venture Debt",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": 458.09999999999997,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": 120.72000000000001,
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
        //                         "usdMn": 68.33,
        //                         "eurMn": 59.92,
        //                         "localMn": 68.33
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 200,
        //                         "eurMn": 175.36,
        //                         "localMn": 200
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Ventures III",
        //                     "id": "55275",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 0.45,
        //                         "eurMn": 0.4,
        //                         "localMn": 0.45
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 1.6,
        //                         "eurMn": 1.43,
        //                         "localMn": 1.6
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "Fishner-Wolfson Investments",
        //                     "id": "80901",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 22.83,
        //                         "eurMn": 16.79,
        //                         "localMn": 22.83
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 137,
        //                         "eurMn": 100.71,
        //                         "localMn": 137
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Ventures II",
        //                     "id": "49022",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 5.78,
        //                         "eurMn": 4.91,
        //                         "localMn": 5.78
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 9,
        //                         "eurMn": 7.65,
        //                         "localMn": 9
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
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
        //                     "name": "137 Holdings VIII",
        //                     "id": "77137",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings X",
        //                     "id": "83174",
        //                     "fundRaisingStatus": "Raising",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 0.26,
        //                         "eurMn": 0.2,
        //                         "localMn": 0.26
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 3.1,
        //                         "eurMn": 2.39,
        //                         "localMn": 3.1
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings III",
        //                     "id": "42294",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 8.48,
        //                         "eurMn": 6.57,
        //                         "localMn": 8.48
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 50.9,
        //                         "eurMn": 39.39,
        //                         "localMn": 50.9
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings VII",
        //                     "id": "50459",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 3.5,
        //                         "eurMn": 2.61,
        //                         "localMn": 3.5
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 21,
        //                         "eurMn": 15.68,
        //                         "localMn": 21
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings VI",
        //                     "id": "50460",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 2.65,
        //                         "eurMn": 1.91,
        //                         "localMn": 2.65
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 15.9,
        //                         "eurMn": 11.45,
        //                         "localMn": 15.9
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings V",
        //                     "id": "46256",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 0.03,
        //                         "eurMn": 0.03,
        //                         "localMn": 0.03
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 0.4,
        //                         "eurMn": 0.32,
        //                         "localMn": 0.4
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings II",
        //                     "id": "42293",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
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
        //                     "name": "137 Holdings XXIII",
        //                     "id": "92165",
        //                     "fundRaisingStatus": "Unknown",
        //                     "isActive": false,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Ventures",
        //                     "id": "70701",
        //                     "fundRaisingStatus": "Unknown",
        //                     "isActive": false,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 7.7,
        //                         "eurMn": 6.44,
        //                         "localMn": 7.7
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 12,
        //                         "eurMn": 10.03,
        //                         "localMn": 12
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
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
        //                     "name": "137 Holdings IX",
        //                     "id": "77139",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                         "usdMn": 0.71,
        //                         "eurMn": 0.53,
        //                         "localMn": 0.71
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 7.2,
        //                         "eurMn": 5.41,
        //                         "localMn": 7.2
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 53,
        //                                 "text": "West"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Holdings IV",
        //                     "id": "42291",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "137 Ventures IV",
        //                     "id": "80477",
        //                     "fundRaisingStatus": "Raising",
        //                     "isActive": true,
        //                     "category": "Venture Debt",
        //                     "assetClasses": [
        //                         "PE",
        //                         "PD",
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
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 882,
        //             "addressDetails.fax": "+1 415 276 6061",
        //             "addressDetails.state": "CA",
        //             "addressDetails.postcode": "94108",
        //             "addressDetails.line": "49 Geary Street #500",
        //             "addressDetails.email": "info@137ventures.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.137ventures.com",
        //             "addressDetails.telephone": "+1 415 513 5222"
        //         },
        //         {
        //             "id": "105474",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "13th Floor Investments",
        //             "addressDetails.city": "Miami",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Value Added",
        //                 "Opportunistic",
        //                 "Distressed",
        //                 "Debt"
        //             ],
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": 104.9,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": 25.43,
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
        //                         "usdMn": 1.61,
        //                         "eurMn": 1.46,
        //                         "localMn": 1.61
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 18.5,
        //                         "eurMn": 16.79,
        //                         "localMn": 18.5
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 51,
        //                                 "text": "Southeast"
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
        //                     "name": "Florida Real Estate Value Fund II",
        //                     "id": "37575",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Real Estate",
        //                     "assetClasses": [
        //                         "RE"
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
        //                         "usdMn": 4.52,
        //                         "eurMn": 3.53,
        //                         "localMn": 4.52
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 45.4,
        //                         "eurMn": 35.46,
        //                         "localMn": 45.4
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 51,
        //                                 "text": "Southeast"
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
        //                     "name": "Florida Real Estate Value Fund",
        //                     "id": "37573",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Real Estate",
        //                     "assetClasses": [
        //                         "RE"
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
        //                         "usdMn": 19.3,
        //                         "eurMn": 18.28,
        //                         "localMn": 19.3
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 41,
        //                         "eurMn": 38.83,
        //                         "localMn": 41
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 51,
        //                                 "text": "Southeast"
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
        //                     "name": "Florida Real Estate Value Fund III",
        //                     "id": "74087",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Real Estate",
        //                     "assetClasses": [
        //                         "RE"
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
        //             "addressDetails.fax": "+1 305 663 0440",
        //             "addressDetails.state": "FL",
        //             "addressDetails.postcode": "33131",
        //             "addressDetails.line": "848 Brickell Avenue PH1 ",
        //             "addressDetails.email": "info@13fi.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://13fi.com/",
        //             "addressDetails.telephone": "+1 786 220 0460"
        //         },
        //         {
        //             "id": "263642",
        //             "checkBox": null,
        //             "currency": "AED",
        //             "name": "1512 St.Gallen Capital Management",
        //             "addressDetails.city": "St.Gallen",
        //             "addressDetails.country": "Switzerland",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "CTA"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": []
        //                     },
        //                     "name": "St.Gallen I Counter-Trend Program",
        //                     "id": "90759",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "CTA",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "Yes",
        //                             "tradingMethodology": "Both Discretionary and Systematic"
        //                         },
        //                         "coreStrategies": [
        //                             "Managed Futures/CTA"
        //                         ],
        //                         "otherStructuresOffered": [
        //                             "Managed Account (general)"
        //                         ],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {},
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 150,
        //                         "coreStrategiesDetailedList": {
        //                             "Managed Futures/CTA": [
        //                                 "Counter Trend"
        //                             ]
        //                         },
        //                         "geographicPreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {
        //                             "Stock Indexes": [],
        //                             "Interest Rates": [],
        //                             "Energy": [],
        //                             "Grains": [],
        //                             "Meats": [],
        //                             "Bonds": [],
        //                             "Metals": [],
        //                             "Softs": [],
        //                             "Currencies": []
        //                         },
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Managed Account (general)"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Managed Futures/CTA"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": "Jona ",
        //             "addressDetails.email": "thomas.kochanek@1512sgcm.com",
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "http://www.1512sgcm.com",
        //             "addressDetails.telephone": "+41 78 920 0715"
        //         },
        //         {
        //             "id": "175175",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1517 Fund",
        //             "addressDetails.city": "Oakland",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 0,
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
        //                         "usdMn": null,
        //                         "eurMn": null,
        //                         "localMn": null
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1517 Fund I",
        //                     "id": "56531",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Early Stage: Seed",
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CA",
        //             "addressDetails.postcode": "94618",
        //             "addressDetails.line": "5519 McMillan Street ",
        //             "addressDetails.email": "info@1517fund.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1517fund.com",
        //             "addressDetails.telephone": "+1 858 337 1977"
        //         },
        //         {
        //             "id": "259890",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "16th Amendment Advisors",
        //             "addressDetails.city": "New York",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "Vicksburg Municipal Trading Fund",
        //                     "id": "79391",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Fixed Income"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Government & Agency Bonds"
        //                             ],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Credit Strategies": [
        //                                 "Fixed Income"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Commingled"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "Vicksburg Municipal Trading Offshore Fund",
        //                     "id": "79393",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Fixed Income"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Government & Agency Bonds"
        //                             ],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Credit Strategies": [
        //                                 "Fixed Income"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "parentFundId": "79391",
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Fixed Income"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 112,
        //             "addressDetails.fax": "+1 212 332 1601",
        //             "addressDetails.state": "NY",
        //             "addressDetails.postcode": "10020",
        //             "addressDetails.line": "One Rockefeller Plaza, Suite 1202 ",
        //             "addressDetails.email": "info@16thadvisors.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://16thadvisors.com/",
        //             "addressDetails.telephone": "+1 212 332 1600"
        //         },
        //         {
        //             "id": "163581",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1776",
        //             "addressDetails.city": "Philadelphia",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 12.5,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 2.08,
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
        //                         "usdMn": 2.08,
        //                         "eurMn": 1.85,
        //                         "localMn": 2.08
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 12.5,
        //                         "eurMn": 11.07,
        //                         "localMn": 12.5
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
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
        //                     "name": "1776 Seed Investors",
        //                     "id": "55920",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Early Stage: Seed",
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "PA",
        //             "addressDetails.postcode": "20005",
        //             "addressDetails.line": "1608 Walnut Street 12th Floor",
        //             "addressDetails.email": "info@1776.vc",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "www.1776.vc",
        //             "addressDetails.telephone": "+1 202 618 3142"
        //         },
        //         {
        //             "id": "304701",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1787 Capital",
        //             "addressDetails.city": "Chapel Hill",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Value Added",
        //                 "Opportunistic"
        //             ],
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
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1787 Capital Opportunity Zone Fund",
        //                     "id": "97210",
        //                     "fundRaisingStatus": "Raising",
        //                     "isActive": true,
        //                     "category": "Real Estate",
        //                     "assetClasses": [
        //                         "RE"
        //                     ],
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "NC",
        //             "addressDetails.postcode": "27516",
        //             "addressDetails.line": "101 Everam Court ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": null,
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "268691",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1788 Holdings",
        //             "addressDetails.city": "Bethesda",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Value Added",
        //                 "Opportunistic",
        //                 "Core-Plus",
        //                 "Core"
        //             ],
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "MD",
        //             "addressDetails.postcode": "20814",
        //             "addressDetails.line": "4421 East-West Highway ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1788holdings.com",
        //             "addressDetails.telephone": "+1 301 830 2832"
        //         },
        //         {
        //             "id": "217889",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1789 Capital Management",
        //             "addressDetails.city": "Plainview",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1789 Global Asymmetric Opportunities Fund",
        //                     "id": "67951",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Government & Agency Bonds"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": []
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 100,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long/Short Equity"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "NY",
        //             "addressDetails.postcode": "11803",
        //             "addressDetails.line": "17 Sheer Plaza ",
        //             "addressDetails.email": "info@1789capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1789capital.com/",
        //             "addressDetails.telephone": "+1 516 586 8588"
        //         },
        //         {
        //             "id": "23573",
        //             "checkBox": null,
        //             "currency": "EUR",
        //             "name": "17Capital",
        //             "addressDetails.city": "London",
        //             "addressDetails.country": "UK",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Buyout",
        //                 "Recapitalisation",
        //                 "Secondaries"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 2276.58,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 1049.05,
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
        //                         "usdMn": 174.74,
        //                         "eurMn": 148.34,
        //                         "localMn": 148.34
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 589,
        //                         "eurMn": 500,
        //                         "localMn": 500
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             },
        //                             {
        //                                 "id": 4,
        //                                 "text": "West Europe"
        //                             },
        //                             {
        //                                 "id": 10,
        //                                 "text": "Nordic"
        //                             },
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "17Capital Fund 3",
        //                     "id": "52245",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Secondaries",
        //                     "assetClasses": [
        //                         "PE",
        //                         "SEC"
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
        //                         "usdMn": 13.03,
        //                         "eurMn": 10.05,
        //                         "localMn": 10.05
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 269.67,
        //                         "eurMn": 208,
        //                         "localMn": 208
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 4,
        //                                 "text": "West Europe"
        //                             },
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "17Capital Fund 2",
        //                     "id": "32043",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Secondaries",
        //                     "assetClasses": [
        //                         "PE",
        //                         "SEC"
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
        //                         "usdMn": 112.94,
        //                         "eurMn": 88,
        //                         "localMn": 88
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 3,
        //                                 "text": "Europe"
        //                             },
        //                             {
        //                                 "id": 4,
        //                                 "text": "West Europe"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "17Capital Fund",
        //                     "id": "17055",
        //                     "fundRaisingStatus": "Liquidated",
        //                     "isActive": true,
        //                     "category": "Secondaries",
        //                     "assetClasses": [
        //                         "PE",
        //                         "SEC"
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
        //                         "usdMn": 861.28,
        //                         "eurMn": 792,
        //                         "localMn": 792
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 1304.97,
        //                         "eurMn": 1200,
        //                         "localMn": 1200
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": "Europe"
        //                     },
        //                     "name": "17Capital Fund 4",
        //                     "id": "64985",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Secondaries",
        //                     "assetClasses": [
        //                         "PE",
        //                         "SEC"
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
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 800,
        //             "addressDetails.fax": "+44 (0)20 7529 1908",
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "SW1Y 6QW",
        //             "addressDetails.line": "Almack House 28 King Street",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "http://www.17capital.com",
        //             "addressDetails.telephone": "+44 (0)20 7493 2462"
        //         },
        //         {
        //             "id": "11204",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "180 Degree Capital",
        //             "addressDetails.city": "Montclair",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Venture (General)",
        //                 "Early Stage",
        //                 "PIPE",
        //                 "Early Stage: Start-up",
        //                 "Cleantech",
        //                 "Early Stage: Seed",
        //                 "Turnaround"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //                         "usdMn": 0,
        //                         "eurMn": 0,
        //                         "localMn": 0
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "180 Degree Capital",
        //                     "id": "16221",
        //                     "fundRaisingStatus": "Listed",
        //                     "isActive": false,
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
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 150,
        //             "addressDetails.fax": "+1 973 746 4508",
        //             "addressDetails.state": "NJ",
        //             "addressDetails.postcode": "07042",
        //             "addressDetails.line": "7 N. Willow Street Suite 4B",
        //             "addressDetails.email": "ir@180degreecapital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "www.180degreecapital.com",
        //             "addressDetails.telephone": "+1 973 746 4500"
        //         },
        //         {
        //             "id": "310134",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "180 Multifamily Properties",
        //             "addressDetails.city": "Arlington",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": [
        //                 "Value Added",
        //                 "Distressed",
        //                 "Core-Plus",
        //                 "Core"
        //             ],
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "TX",
        //             "addressDetails.postcode": "76011",
        //             "addressDetails.line": "101 East Randal Mill Suite 106",
        //             "addressDetails.email": "invest@180mfcapital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.180mfcapital.com",
        //             "addressDetails.telephone": "+1 817 945 3266"
        //         },
        //         {
        //             "id": "118736",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1832 Asset Management",
        //             "addressDetails.city": "Toronto",
        //             "addressDetails.country": "Canada",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "Scotia Long Short Equity Fund",
        //                     "id": "41757",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": "Bottom-up",
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Discretionary"
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [
        //                             "Separately Managed Account"
        //                         ],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Equities": []
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 750,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 4,
        //                                 "name": "North America",
        //                                 "countries": [
        //                                     "US"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long/Short Equity"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 559,
        //             "addressDetails.fax": "+1 416 865 3463",
        //             "addressDetails.state": "Ontario",
        //             "addressDetails.postcode": "M5C 2V9",
        //             "addressDetails.line": "Dynamic Funds Tower, 1 Adelaide Street East 28th Floor",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1832.ca",
        //             "addressDetails.telephone": "+1 416 365 6480"
        //         },
        //         {
        //             "id": "278980",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1839 Asset Management",
        //             "addressDetails.city": "Ossining",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1839 Fund I",
        //                     "id": "87251",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Specialist Credit"
        //                         ],
        //                         "otherStructuresOffered": [
        //                             "Managed Account (general)"
        //                         ],
        //                         "industryPreferences": [
        //                             "Real Estate"
        //                         ],
        //                         "industryPreferencesDetailedList": [
        //                             {
        //                                 "industryPreferences": [],
        //                                 "sortOrder": 9,
        //                                 "name": "Real Estate"
        //                             }
        //                         ],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Government & Agency Bonds",
        //                                 "Mortgage-Backed Securities"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 250,
        //                         "coreStrategiesDetailedList": {
        //                             "Credit Strategies": [
        //                                 "Specialist Credit"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Specialist Credit"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 50,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "NY",
        //             "addressDetails.postcode": "10562",
        //             "addressDetails.line": "500 Executive Blvd #201 ",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "",
        //             "addressDetails.telephone": "+1 646 350 3579"
        //         },
        //         {
        //             "id": "237043",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1843 Capital",
        //             "addressDetails.city": "Greenwich",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 6.9,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 3.01,
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
        //                         "usdMn": 3.01,
        //                         "eurMn": 2.45,
        //                         "localMn": 3.01
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 6.9,
        //                         "eurMn": 5.62,
        //                         "localMn": 6.9
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1843 Capital Ventures",
        //                     "id": "85076",
        //                     "fundRaisingStatus": "First Close",
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
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CT",
        //             "addressDetails.postcode": "06830",
        //             "addressDetails.line": "52 Mason Street ",
        //             "addressDetails.email": "info@1843capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1843capital.com",
        //             "addressDetails.telephone": "+1 917 902 6406"
        //         },
        //         {
        //             "id": "256600",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1848 Capital Partners",
        //             "addressDetails.city": "Miami",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Buyout",
        //                 "Recapitalisation"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": null,
        //             "fundManagerDetails.funds": null,
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": "+1 305 374 8403",
        //             "addressDetails.state": "FL",
        //             "addressDetails.postcode": "33131",
        //             "addressDetails.line": "1221 Brickell Avenue Suite 2660",
        //             "addressDetails.email": "info@1848capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1848capital.com",
        //             "addressDetails.telephone": "+1 786 662 3112"
        //         },
        //         {
        //             "id": "232133",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1855 Capital",
        //             "addressDetails.city": "State College",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 0,
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
        //                         "usdMn": null,
        //                         "eurMn": null,
        //                         "localMn": null
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1855 Capital Fund I",
        //                     "id": "71530",
        //                     "fundRaisingStatus": "First Close",
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
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "PA",
        //             "addressDetails.postcode": "16803",
        //             "addressDetails.line": "200 Innovation Blvd. Suite 201C",
        //             "addressDetails.email": "info@1855capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1855capital.com/",
        //             "addressDetails.telephone": "+1 814 429 3777"
        //         },
        //         {
        //             "id": "236967",
        //             "checkBox": null,
        //             "currency": "CNY",
        //             "name": "1898 Venture Capital",
        //             "addressDetails.city": "Beijing",
        //             "addressDetails.country": "China",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Venture (General)",
        //                 "Early Stage",
        //                 "Expansion / Late Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 15.11,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 5.16,
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
        //                         "usdMn": 5.16,
        //                         "eurMn": 4.65,
        //                         "localMn": 34.51
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 15.11,
        //                         "eurMn": 13.6,
        //                         "localMn": 101
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 20,
        //                                 "text": "China"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Asia"
        //                     },
        //                     "name": "Beijing 1898 Youchuang Fund",
        //                     "id": "98077",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Venture (General)",
        //                     "assetClasses": [
        //                         "PE",
        //                         "VC"
        //                     ],
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": "Unit 1, Jiuxianqiao 10th Street Chaoyang District",
        //             "addressDetails.email": "hezuo@1898vc.com",
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://www.1898vc.com",
        //             "addressDetails.telephone": "+86 (0)10 8410 1497"
        //         },
        //         {
        //             "id": "227013",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "19 Capital Management",
        //             "addressDetails.city": "Norwalk",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "19 Capital",
        //                     "id": "69725",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long/Short Equity"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [
        //                             "Technology"
        //                         ],
        //                         "industryPreferencesDetailedList": [
        //                             {
        //                                 "industryPreferences": [
        //                                     "Technology"
        //                                 ],
        //                                 "sortOrder": 7,
        //                                 "name": "Information Technology"
        //                             }
        //                         ],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Equities": []
        //                         },
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long/Short Equity"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long/Short Equity"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 55,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CT",
        //             "addressDetails.postcode": "06880",
        //             "addressDetails.line": "137 Rowayton Avenue Suite 320",
        //             "addressDetails.email": "info@19capital.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.19capital.com",
        //             "addressDetails.telephone": "+1 203 635 8050"
        //         },
        //         {
        //             "id": "104498",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1900 Investments Asset Management",
        //             "addressDetails.city": "West Palm Beach",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "Mezzanine",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": 2,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": 0.19,
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
        //                         "usdMn": 0.19,
        //                         "eurMn": 0.14,
        //                         "localMn": 0.19
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 2,
        //                         "eurMn": 1.48,
        //                         "localMn": 2
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 17,
        //                                 "text": "Canada"
        //                             },
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1900 Investments - Private Equity I",
        //                     "id": "37324",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Mezzanine",
        //                     "assetClasses": [
        //                         "PD"
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
        //                     "structure": "Separately Managed Account"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": "+1 800 493 5201",
        //             "addressDetails.state": "FL",
        //             "addressDetails.postcode": "33407",
        //             "addressDetails.line": "801 Northpoint Parkway, Suite V133 ",
        //             "addressDetails.email": "info@1900investments.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1900investments.com",
        //             "addressDetails.telephone": "+1 561 721 6403"
        //         },
        //         {
        //             "id": "173025",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1901 Partners",
        //             "addressDetails.city": "New York",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Buyout",
        //                 "Early Stage"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 500,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 187.5,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": [
        //                 "Energy"
        //             ],
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": 500,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": 187.5,
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
        //                         "usdMn": 187.5,
        //                         "eurMn": 176.64,
        //                         "localMn": 187.5
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 500,
        //                         "eurMn": 471.05,
        //                         "localMn": 500
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
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
        //                     "name": "1901 Partners",
        //                     "id": "55940",
        //                     "fundRaisingStatus": "Closed",
        //                     "isActive": true,
        //                     "category": "Buyout",
        //                     "assetClasses": [
        //                         "PE",
        //                         "NR"
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
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
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
        //                     "name": "1901-LES Partners",
        //                     "id": "98127",
        //                     "fundRaisingStatus": "Raising",
        //                     "isActive": true,
        //                     "category": "Buyout",
        //                     "assetClasses": [
        //                         "PE"
        //                     ],
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
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
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
        //                     "name": "1901-VEL Partners",
        //                     "id": "98150",
        //                     "fundRaisingStatus": "Raising",
        //                     "isActive": true,
        //                     "category": "Buyout",
        //                     "assetClasses": [
        //                         "PE"
        //                     ],
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 823,
        //             "addressDetails.fax": "+1 646 961 3020",
        //             "addressDetails.state": "NY",
        //             "addressDetails.postcode": "10017",
        //             "addressDetails.line": "750 Third Avenue 29th Floor",
        //             "addressDetails.email": null,
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "",
        //             "addressDetails.telephone": "+1 646 961 3010"
        //         },
        //         {
        //             "id": "153017",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1949 Value Advisors",
        //             "addressDetails.city": "Mahwah",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.rE.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.RE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.RE.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.pD.overallInvestmentCriteria.strategies": "",
        //             "fundManagerDetails.snapshots.PD.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PD.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.nR.preferences.strategies": null,
        //             "fundManagerDetails.snapshots.NR.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.NR.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.iNF.primaryStrategies": null,
        //             "fundManagerDetails.snapshots.INF.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.INF.estimatedDryPowder.usdMn": null,
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Global"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1949 Global Value Fund",
        //                     "id": "50753",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": "Bottom-up",
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Long Bias"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Asset-Backed Securities",
        //                                 "Corporate Bonds",
        //                                 "Government & Agency Bonds"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options",
        //                                 "Swaps"
        //                             ],
        //                             "Other": [
        //                                 "Commodities"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {
        //                             "Event Driven Strategies": [
        //                                 "Special Situations",
        //                                 "Risk/Merger Arbitrage"
        //                             ]
        //                         },
        //                         "minimumInvestment": null,
        //                         "coreStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Long Bias"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [
        //                             "Special Situations",
        //                             "Risk/Merger Arbitrage"
        //                         ],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Long Bias"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": 34,
        //             "addressDetails.fax": "+1 201 252 8639",
        //             "addressDetails.state": "NJ",
        //             "addressDetails.postcode": "07495",
        //             "addressDetails.line": "One International Boulevard Suite 623",
        //             "addressDetails.email": "investor@1949global.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1949global.com",
        //             "addressDetails.telephone": "+1 201 252 8800"
        //         },
        //         {
        //             "id": "186952",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1955 Capital",
        //             "addressDetails.city": "San Francisco",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Venture (General)"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 0,
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
        //                         "usdMn": null,
        //                         "eurMn": null,
        //                         "localMn": null
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 1,
        //                                 "text": "North America"
        //                             },
        //                             {
        //                                 "id": 6,
        //                                 "text": "Asia"
        //                             }
        //                         ],
        //                         "countries": [
        //                             {
        //                                 "id": 20,
        //                                 "text": "China"
        //                             },
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1955 Capital Fund I",
        //                     "id": "59761",
        //                     "fundRaisingStatus": "Closed",
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CA",
        //             "addressDetails.postcode": null,
        //             "addressDetails.line": " ",
        //             "addressDetails.email": "info@1955.capital",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1955.capital",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "251415",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1984 Ventures",
        //             "addressDetails.city": "San Francisco",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Early Stage",
        //                 "Early Stage: Seed"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 42.3,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 34.19,
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
        //                         "usdMn": 34.19,
        //                         "eurMn": 30.12,
        //                         "localMn": 34.19
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 42.3,
        //                         "eurMn": 37.26,
        //                         "localMn": 42.3
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 95,
        //                                 "text": "US"
        //                             }
        //                         ],
        //                         "mainFundFocus": "North America"
        //                     },
        //                     "name": "1984 Ventures",
        //                     "id": "76978",
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
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CA",
        //             "addressDetails.postcode": "94105",
        //             "addressDetails.line": "44 Tehama Street ",
        //             "addressDetails.email": "info@1984.vc",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1984.vc",
        //             "addressDetails.telephone": "+1 408 420 9220"
        //         },
        //         {
        //             "id": "213267",
        //             "checkBox": null,
        //             "currency": "INR",
        //             "name": "1Crowd",
        //             "addressDetails.city": "Mumbai",
        //             "addressDetails.country": "India",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": [
        //                 "Venture (General)",
        //                 "Early Stage",
        //                 "Co-Investment",
        //                 "Growth",
        //                 "Expansion / Late Stage",
        //                 "Early Stage: Seed",
        //                 "Early Stage: Start-up"
        //             ],
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": 3.53,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": 2.91,
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
        //                         "usdMn": 2.91,
        //                         "eurMn": 2.37,
        //                         "localMn": 189.75
        //                     },
        //                     "fundRaised": {
        //                         "usdMn": 3.53,
        //                         "eurMn": 2.87,
        //                         "localMn": 230
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [
        //                             {
        //                                 "id": 41,
        //                                 "text": "India"
        //                             }
        //                         ],
        //                         "mainFundFocus": "Asia"
        //                     },
        //                     "name": "1Funds Trust",
        //                     "id": "70167",
        //                     "fundRaisingStatus": "First Close",
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
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": null,
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "400051",
        //             "addressDetails.line": "601, 6th Floor, Keshava, Bandra Kurla Complex, Bandra (E) ",
        //             "addressDetails.email": "info@1crowd.co",
        //             "addressDetails.region": "Asia",
        //             "addressDetails.website": "http://www.1crowd.co",
        //             "addressDetails.telephone": null
        //         },
        //         {
        //             "id": "157509",
        //             "checkBox": null,
        //             "currency": "EUR",
        //             "name": "1OAK Capital",
        //             "addressDetails.city": "London",
        //             "addressDetails.country": "UK",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "CTA"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1OAK GI Macro",
        //                     "id": "51784",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "CTA",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "Yes",
        //                             "tradingMethodology": "Systematic"
        //                         },
        //                         "coreStrategies": [
        //                             "Managed Futures/CTA"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {},
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": null,
        //                         "coreStrategiesDetailedList": {
        //                             "Managed Futures/CTA": [
        //                                 "Macro CTA"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {
        //                             "Stock Indexes": [],
        //                             "Energy": [],
        //                             "Grains": [],
        //                             "Meats": [],
        //                             "Bonds": [],
        //                             "Metals": [],
        //                             "Softs": [],
        //                             "Currencies": []
        //                         },
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Separately Managed Account"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1OAK LAB",
        //                     "id": "51785",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "CTA",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Systematic"
        //                         },
        //                         "coreStrategies": [
        //                             "Managed Futures/CTA"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {},
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": null,
        //                         "coreStrategiesDetailedList": {
        //                             "Managed Futures/CTA": [
        //                                 "Macro CTA"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {
        //                             "Stock Indexes": [],
        //                             "Interest Rates": [],
        //                             "Bonds": [],
        //                             "Metals": []
        //                         },
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Separately Managed Account"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1OAK ACORN",
        //                     "id": "51783",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "CTA",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "Yes",
        //                             "tradingMethodology": "Systematic"
        //                         },
        //                         "coreStrategies": [
        //                             "Managed Futures/CTA"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {},
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": null,
        //                         "coreStrategiesDetailedList": {
        //                             "Managed Futures/CTA": [
        //                                 "Macro CTA"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {
        //                             "Energy": [],
        //                             "Grains": [],
        //                             "Meats": [],
        //                             "Metals": [],
        //                             "Softs": []
        //                         },
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Separately Managed Account"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [
        //                             {
        //                                 "id": 12,
        //                                 "text": "Global"
        //                             }
        //                         ],
        //                         "countries": [],
        //                         "mainFundFocus": "Developed Markets"
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1OAK STARR",
        //                     "id": "62147",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "CTA",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": "Systematic"
        //                         },
        //                         "coreStrategies": [
        //                             "Managed Futures/CTA"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {},
        //                         "otherStrategiesDetailedList": {},
        //                         "minimumInvestment": null,
        //                         "coreStrategiesDetailedList": {
        //                             "Managed Futures/CTA": [
        //                                 "Trend Following",
        //                                 "Arbitrage"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {
        //                             "Interest Rates": [],
        //                             "Bonds": []
        //                         },
        //                         "geographicCorePreferences": [
        //                             {
        //                                 "sortOrder": 1,
        //                                 "name": "Global (All)",
        //                                 "countries": [
        //                                     "Global"
        //                                 ]
        //                             }
        //                         ]
        //                     },
        //                     "structure": "Separately Managed Account"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Managed Futures/CTA"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": null,
        //             "addressDetails.postcode": "W1J 5QJ",
        //             "addressDetails.line": "51 Hays Mews Mayfair",
        //             "addressDetails.email": "info@1oakgroup.com",
        //             "addressDetails.region": "Europe",
        //             "addressDetails.website": "http://www.1oakgroup.com",
        //             "addressDetails.telephone": "+44 (0)20 7016 7979"
        //         },
        //         {
        //             "id": "252340",
        //             "checkBox": null,
        //             "currency": "USD",
        //             "name": "1Sharpe Capital",
        //             "addressDetails.city": "Piedmont",
        //             "addressDetails.country": "US",
        //             "fundManagerDetails.pE.overallInvestmentCriteria.strategies": null,
        //             "fundManagerDetails.snapshots.PE.totalCapitalRaised.usdMn": null,
        //             "fundManagerDetails.snapshots.PE.estimatedDryPowder.usdMn": null,
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
        //             "fundManagerDetails.hF.category": [
        //                 "Hedge Fund"
        //             ],
        //             "fundManagerDetails.funds": [
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1Sharpe Opportunity Fund",
        //                     "id": "77176",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Mortgage-Backed Strategies"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Mortgage-Backed Securities"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options"
        //                             ],
        //                             "Other": [
        //                                 "Commodities",
        //                                 "Currency",
        //                                 "ETFs"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Value-Oriented"
        //                             ]
        //                         },
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Credit Strategies": [
        //                                 "Mortgage-Backed Strategies"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [
        //                             "Value-Oriented"
        //                         ],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Commingled"
        //                 },
        //                 {
        //                     "iNF": {
        //                         "projectStage": [],
        //                         "strategies": [],
        //                         "sectorPreferences": []
        //                     },
        //                     "geographicFocus": {
        //                         "regions": [],
        //                         "countries": [],
        //                         "mainFundFocus": null
        //                     },
        //                     "otherGeographicFocus": {
        //                         "regions": [],
        //                         "countries": []
        //                     },
        //                     "name": "1Sharpe Income Fund",
        //                     "id": "77172",
        //                     "fundRaisingStatus": "Open to Investment/Raising",
        //                     "isActive": true,
        //                     "category": "Hedge Fund",
        //                     "assetClasses": [
        //                         "HF"
        //                     ],
        //                     "hF": {
        //                         "trading": {
        //                             "activist": null,
        //                             "usesArtificialIntelligenceMachineLearning": null,
        //                             "analystApproach": null,
        //                             "tradingVolatility": "",
        //                             "tradingMethodology": null
        //                         },
        //                         "coreStrategies": [
        //                             "Asset-Backed Lending Strategies"
        //                         ],
        //                         "otherStructuresOffered": [],
        //                         "industryPreferences": [],
        //                         "industryPreferencesDetailedList": [],
        //                         "showOnOnlineProduct": false,
        //                         "methodsOfInvestmentEmployed": {
        //                             "Debt": [
        //                                 "Asset-Backed Securities"
        //                             ],
        //                             "Equities": [],
        //                             "Derivatives": [
        //                                 "Futures Contracts",
        //                                 "Options"
        //                             ],
        //                             "Other": [
        //                                 "Commodities",
        //                                 "Currency",
        //                                 "ETFs"
        //                             ]
        //                         },
        //                         "otherStrategiesDetailedList": {
        //                             "Equity Strategies": [
        //                                 "Value-Oriented"
        //                             ]
        //                         },
        //                         "minimumInvestment": 1000,
        //                         "coreStrategiesDetailedList": {
        //                             "Credit Strategies": [
        //                                 "Asset-Backed Lending Strategies"
        //                             ]
        //                         },
        //                         "geographicPreferences": [],
        //                         "otherStrategies": [
        //                             "Value-Oriented"
        //                         ],
        //                         "parentFundIsDummyParent": false,
        //                         "typesOfMarketsTraded": {},
        //                         "geographicCorePreferences": []
        //                     },
        //                     "structure": "Commingled"
        //                 }
        //             ],
        //             "fundManagerDetails.hF.coreStrategies": [
        //                 "Mortgage-Backed Strategies",
        //                 "Asset-Backed Lending Strategies"
        //             ],
        //             "fundManagerDetails.snapshots.HF.aUM.localMn": null,
        //             "addressDetails.fax": null,
        //             "addressDetails.state": "CA",
        //             "addressDetails.postcode": "94611",
        //             "addressDetails.line": "370 Highland Ave Suite 200",
        //             "addressDetails.email": "info@1sharpe.com",
        //             "addressDetails.region": "North America",
        //             "addressDetails.website": "http://www.1sharpe.com",
        //             "addressDetails.telephone": "+1 510 788 5000"
        //         }
        //     ]
        // };

        // let meta: SearchObjectRoot;
        // let jsonConvert: JsonConvert = new JsonConvert();
        // // jsonConvert.operationMode = OperationMode.LOGGING;
        // // jsonConvert.operationMode = OperationMode.DISABLE;
        // jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_OBJECT_NULL;
        // jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
        // jsonConvert.ignorePrimitiveChecks = false;
        // // jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;

        // let companyNames = [];
        // meta = (<any>jsonConvert).deserialize(fullJsonObject, SearchObjectRoot);
        // companyNames = meta.Data.map(name => name.Name);
        // console.log(companyNames.length);
        // assert.equal(meta.Data[0].Name, ".406 Ventures");
    })
});