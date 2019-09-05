import { browser, ElementFinder } from "protractor";
import { Waits } from "./waits";

const waits: Waits = new Waits();

export class Actions {

  /**
   * Used to open the website in the browser.
   *
   * @remarks
   * WaitForAngularEnabled is set to false, as we're not using an angular website.
   * The 'get' command is empty, as the default url is set in the 'protractor.conf.ts' file.
   */
  public openWebsite = () => {
    browser.waitForAngularEnabled(false);
    return browser.get("");
  }

    /**
     * Used to click on an element on the webpage
     *
     * @param element - the element on the webpage you want to click on (e.g. button)
     * @returns promise <void>
     */
    public click = async (element: ElementFinder) => {
      await waits.isElementClickable(element);
      return await element.click();
    }

    /**
     * Used to type text into a field
     *
     * @param element - the element on the webpage you want to type in (e.g. an text field)
     * @returns promise <void>
     */
    public type = async (element: ElementFinder, text: string) => {
      await waits.waitForElement(element);
      return await element.sendKeys(text);
    }

}
