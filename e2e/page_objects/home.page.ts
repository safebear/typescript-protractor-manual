import { $, by, element, ElementFinder } from "protractor";

export class HomePage {

  public addProduct: ElementFinder;
  public productInTable: (product: myLib.Product) => ElementFinder;

  constructor() {

    /**
     * 'Add Product' Button
     */
    this.addProduct = $(".mat-flat-button.mat-primary");

    /**
     * Find a 'Product' in the table
     *
     * @param Product - this is a product (name, description, price) that we want to find in the table.
     * @returns the element that is found (an ElementFinder).
     */
    this.productInTable = (product: myLib.Product) => {
        return element(by.cssContainingText(".mat-cell", product.name));
    };

  }

}
