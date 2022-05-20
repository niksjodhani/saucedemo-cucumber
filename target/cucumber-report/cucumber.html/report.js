$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4323662200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User navigates saucedemo page and complete the item purchase",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchase",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login with credential username \"Satandard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I filter the products by Price \u0027high to low\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter details firstname \"firstName\", lastName \"lastName\" and zipPostalCode \"Zip/PostalCode\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \u0027Thank you for your order\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 171384699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Satandard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 64
    }
  ],
  "location": "LoginSteps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 213850601,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 144271900,
  "status": "passed"
});
formatter.match({
  "location": "InventorySteps.iFilterTheProductsByPriceHighToLow()"
});
formatter.result({
  "duration": 130583201,
  "status": "passed"
});
formatter.match({
  "location": "InventorySteps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 109343500,
  "status": "passed"
});
formatter.match({
  "location": "InventorySteps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 74201000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iGoToCheckout()"
});
formatter.result({
  "duration": 72558699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 27
    },
    {
      "val": "lastName",
      "offset": 49
    },
    {
      "val": "Zip/PostalCode",
      "offset": 78
    }
  ],
  "location": "CheckOutSteps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 222385401,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 83498801,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 74478099,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iShouldBeAbleToSeeMessageThankYouForYourOrder()"
});
formatter.result({
  "duration": 44730900,
  "status": "passed"
});
formatter.after({
  "duration": 96901,
  "status": "passed"
});
});