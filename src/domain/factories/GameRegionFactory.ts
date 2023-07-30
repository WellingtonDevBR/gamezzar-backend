import { GameRegion } from "../entities/GameRegion";

export class GameRegionFactory {
  static create(gameId: string, regionId: string): GameRegion {
    return GameRegion.createGameRegion({
      gameId,
      regionId,
    });
  }
}
