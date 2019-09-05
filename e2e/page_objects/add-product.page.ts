import { $, by, element, ElementFinder } from "protractor";

export class AddProductPage {

  public productName: ElementFinder;
  public productDescription: ElementFinder;
  public productPrice: ElementFinder;
  public submitButton: ElementFinder;

  constructor() {

    /**
     * Elements on the page
     */
    this.productName = $("#mat-input-0");
    this.productDescription = $("#mat-input-1");
    this.productPrice = $("#mat-input-2");
    this.submitButton = $("[type=submit]");
  }

}
