Feature: Api Demo

  Let create a poc for api framework
  Trying out typescript, request and cucumber.

  Scenario: Get request
    Given I have made a valid get request
      | endpoint   | profile-api/InvestmentConsultant?investorId=2365 |
      | statusCode | 200                                              |
    Then I should get a valid get response
      | firstfirmName | Bard Consulting |

  Scenario: Post request
    Given I have made a valid post request
      | endpoint                            | search-api/search |
      | statusCode                          | 200               |
      | requestBodyPage                     | 1                 |
      | requestBodySize                     | 50                |
      | requestBodySortBy                   | name              |
      | requestBodySortOrder                | ascending         |
      | requestBodyCategory                 | FundManager       |
      | requestBodyNewFilterId              | officeType        |
      | requestBodyNewFilterType            | LIST              |
      | requestBodyNewFilterFilterOperation | null              |
      | requestBodyPageNewFilterFilterBy    | head_office       |
    Then I should get a valid post response
      | firstName          | .406 Ventures |
      | totalNumberOfFirms | 50            |