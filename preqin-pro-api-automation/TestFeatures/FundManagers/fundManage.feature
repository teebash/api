@demo
Feature: Api Demo

  Let create a poc for api framework
  Trying out typescript, request and cucumber.

  Scenario: FundManage Post request
    Given I have made a valid post request for FundManage with the following details
      | endpoint                            | search-api/search |
      | statusCode                          | 200               |
      | requestBodyPage                     | 1                 |
      | requestBodySize                     | 2                 |
      | requestBodySortBy                   | name              |
      | requestBodySortOrder                | ascending         |
      | requestBodyCategory                 | FundManager       |
      | requestBodyNewFilterId              | officeType        |
      | requestBodyNewFilterType            | LIST              |
      | requestBodyNewFilterFilterOperation | null              |
      | requestBodyPageNewFilterFilterBy    | head_office       |
    Then I should get a valid post response for FundManage
      | firstfundManagerOnTheList | .406 Ventures |
      | totalNumberOfFundMagers   | 2             |