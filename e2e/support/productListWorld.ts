import { World } from "cucumber";
import { Actions } from "./actions";
import { Checks } from "./checks"

declare module "cucumber" {
  interface World {
    actions: Actions;
    checks: Checks;
    product: {
      name: string,
      description: string,
      price: string,
    };
  }
}