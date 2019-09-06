import { $, by, element, ElementFinder, ElementArrayFinder } from "protractor";

export class HomePage {

  public addProduct: ElementFinder;
  public productInTable: (product: myLib.Product) => ElementFinder;
  public productsInTable: (product: myLib.Product) => ElementArrayFinder;

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

    /**
     * Find multiple 'Products' in the table with the same name
     *
     * @param Product - this is the product we want to find in the table
     * @returns an array of ElementFinders for each product in the table
     */
    this.productsInTable = (product: myLib.Product) => {
      return element.all(by.cssContainingText(".mat-cell", product.name));
    };

  }

}
