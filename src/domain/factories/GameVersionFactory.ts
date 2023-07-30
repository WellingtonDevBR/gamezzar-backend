import { GameEdition } from "../entities/GameEdition";

export class GameEditionFactory {
  static create(gameId: string, EditionId: string): GameEdition {
    return GameEdition.createGameEdition({
      gameId,
      EditionId,
    });
  }
}
