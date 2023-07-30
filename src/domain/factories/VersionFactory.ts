import { Edition } from "../entities/Edition";

export class EditionFactory {
  static create(name: string): Edition {
    return Edition.createEdition({ name });
  }
}
