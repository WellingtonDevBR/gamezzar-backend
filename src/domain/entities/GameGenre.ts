import { Entity } from "../../@seedowrk/domain/entity";

interface IGameGenre {
  gameId: string;
  genreId: string;
}

export class GameGenre extends Entity<IGameGenre> {
  private constructor(props: IGameGenre) {
    super(props);
  }

  static createGameGenre(props: IGameGenre) {
    const productGenre = new GameGenre(props);
    return productGenre;
  }
}
