@demo
Feature: Api Demo

    Let create a poc for api framework
    Trying out typescript, request and cucumber.

    Scenario: Investor Profile Get request
        Given I have made a valid get request
            | endpoint   | profile-api/InvestmentConsultant?investorId=2365 |
            | statusCode | 200                                              |
        Then I should get a valid get response
            | firstInvestorName | Bard Consulting |

    Scenario: Investors Post request
        Given I have made a valid investors post request with the following details
            | endpoint                                        | search-api/search            |
            | statusCode                                      | 200                          |
            | requestBodyPage                                 | 1                            |
            | requestBodySize                                 | 2                            |
            | requestBodySortBy                               | assetsUnderManagement.usdMn  |
            | requestBodySortOrder                            | descending                   |
            | requestBodyCategory                             | Investor                     |
            | requestBodyNewFilterId_FirstArray               | investmentPreferences        |
            | requestBodyNewFilterType_FirstArray             | LIST                         |
            | requestBodyNewFilterFilterOperation_FirstArray  | null                         |
            | requestBodyPageNewFilterFilterBy_FirstArray     | "general", "current", "past" |
            | requestBodyNewFilterId_SecondArray              | officeType                   |
            | requestBodyNewFilterType_SecondArray            | LIST                         |
            | requestBodyNewFilterFilterOperation_SecondArray | null                         |
            | requestBodyPageNewFilterFilterBy_SecondArray    | "head_office"                |
        Then I should get a valid post response for Investors
            | firstInvestorsOnTheList | People's Bank of China |
            | totalNumberOfInvestors  | 2                      |