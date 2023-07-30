import { Entity } from "../../@seedowrk/domain/entity";

interface IRegion {
  name: string;
  status: boolean;
}

export class Region extends Entity<IRegion> {
  private constructor(props: IRegion) {
    super(props);
  }

  static createRegion(props: IRegion) {
    const genre = new Region(props);
    return genre;
  }
}
