import { Entity } from "../../@seedowrk/domain/entity";

interface IGameRegion {
  gameId: string;
  regionId: string;
}

export class GameRegion extends Entity<IGameRegion> {
  private constructor(props: IGameRegion) {
    super(props);
  }

  static createGameRegion(props: IGameRegion) {
    const gameRegion = new GameRegion(props);
    return gameRegion;
  }
}
