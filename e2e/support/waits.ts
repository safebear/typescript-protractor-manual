import { browser, ElementFinder, ExpectedConditions } from "protractor";

export class Waits {

  /**
   * Used to wait for an element if we know it should be there
   *
   * @param element - the element we're looking for on the webpage
   * @returns true if the element is found, false if not.
   */
  public waitForElement = async (element: ElementFinder) => {
    return await browser.wait(ExpectedConditions.visibilityOf(element), 4000);
  }

  /**
   * Used to wait until an element is clickable
   *
   * @param element - a clickable element on the webpage (e.g. a link or a button)
   * @returns true if it is clickable, false if it isn't
   */
  public isElementClickable = async (element: ElementFinder) => {
    return await browser.wait(ExpectedConditions.elementToBeClickable(element), 4000);
  }

}
