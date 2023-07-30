import { Entity } from "../../@seedowrk/domain/entity";

interface IGenre {
  name: string;
  image: string;
  slug: string;
  status: number;
}

export class Genre extends Entity<IGenre> {
  private constructor(props: IGenre) {
    super(props);
  }

  static createGenre(props: IGenre) {
    const genre = new Genre(props);
    return genre;
  }
}
