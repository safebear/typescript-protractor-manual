import { World } from "cucumber";
import { Actions } from "./actions";
import { Checks } from "./checks";
import { Waits } from "./waits"; 

declare module "cucumber" {
  interface World {
    actions: Actions;
    checks: Checks;
    waits: Waits;
    product: myLib.Product;
  }
}
