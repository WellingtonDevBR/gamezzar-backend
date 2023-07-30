import { Entity } from "../../@seedowrk/domain/entity";

interface IGamePlatform {
  gameId: string;
  platformId: string;
}

export class GamePlatform extends Entity<IGamePlatform> {
  private constructor(props: IGamePlatform) {
    super(props);
  }

  static createGamePlatform(props: IGamePlatform) {
    const productPlataform = new GamePlatform(props);
    return productPlataform;
  }
}
