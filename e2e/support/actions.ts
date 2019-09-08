import { browser, ElementArrayFinder, ElementFinder } from "protractor";
import { Waits } from "./waits";

const waits: Waits = new Waits();

export class Actions {

  /**
   * Used to open the website in the browser.
   *
   * @remarks
   * The 'get' command is empty, as the default url is set in the 'protractor.conf.ts' file.
   */
  public openWebsite = () => {
    return browser.get("");
  }

    /**
     * Used to click on an element on the webpage
     *
     * @param element - the element on the webpage you want to click on (e.g. button)
     * @returns Promise <void>
     */
    public click = async (element: ElementFinder) => {
      await waits.isElementClickable(element);
      return await element.click();
    }

    /**
     * Used to type text into a field
     *
     * @param element - the element on the webpage you want to type in (e.g. an text field)
     * @returns Promise <void>
     */
    public type = async (element: ElementFinder, text: string) => {
      await waits.waitForElement(element);
      return await element.sendKeys(text);
    }

    /**
     * Count number of multiple elements onscreen
     *
     * @param elements - an ElementArrayFinder of multiple elements
     * @returns Promise <number> of elements in the array
     */
     public countElements = async (elements: ElementArrayFinder) => {
       return await elements.count();
     }

    /**
     * Click on the first in a list of elements
     *
     * @param elements - an ElementArrayFinder of multiple elements
     * @returns Promise <void>
     */
    public clickOnFirstElement = async (elements: ElementArrayFinder) => {
      return await elements.first().click();
    }

}
