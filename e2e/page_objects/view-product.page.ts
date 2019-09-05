import { $, by, element, ElementFinder } from "protractor";

export class ViewProductPage {

  public productName: (product: myLib.Product) => ElementFinder;

  constructor() {

    /**
     * Used to create the locator for the Product name (it's parameterised as we don't know what product we've created)
     *
     * @param Product that we've created using the test data
     * @returns the ElementFinder for the 'name' of the product on the View Product Page 
     */
    this.productName = (product: myLib.Product) => {
      return element(by.cssContainingText("h2", product.name));
    };
  }

}
