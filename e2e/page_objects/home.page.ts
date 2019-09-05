import { $, by, element, ElementFinder } from "protractor";

export class HomePage {

  public addProduct: ElementFinder;

  public productInTable: (product: myLib.Product) => ElementFinder;

  constructor() {

    this.addProduct = $(".mat-flat-button.mat-primary");

    this.productInTable = (product: myLib.Product) => {
        return element(by.cssContainingText(".mat-cell", product.name));
    };

  }

}
