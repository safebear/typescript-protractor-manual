import { Before, Given, Then, When} from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";
import { Actions } from "../support/actions";
import { Checks } from "../support/checks";
import { Waits } from "../support/waits";

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

// This will run before each Scenario
Before(function() {

  this.actions = new Actions();
  this.checks = new Checks();
  this.waits = new Waits();

  // Opens the website to the default URL in the 'protractor.config.ts' file
  this.actions.openWebsite();

});

Given('a product doesn\'t exist', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I add the product', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the product is created', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
