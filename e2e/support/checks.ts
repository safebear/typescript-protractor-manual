import { browser, ElementFinder } from "protractor";

export class Checks {

    /**
     * Used to check to see if an element is on the page.
     *
     * @param element - the element that you're looking for on the page.
     * @returns true if the element is present, false if it isn't.
     */
    public isElementOnPage = async (element: ElementFinder) => {
      return await browser.isElementPresent(element);
    }

}
