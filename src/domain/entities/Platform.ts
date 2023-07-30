import { Entity } from "../../@seedowrk/domain/entity";

interface IPlatform {
  name: string;
  image: string;
  brand: string;
  slug: string;
  status: number;
}

export class Platform extends Entity<IPlatform> {
  private constructor(props: IPlatform) {
    super(props);
  }

  static createPlatform(props: IPlatform) {
    const console = new Platform(props);
    return console;
  }
}
