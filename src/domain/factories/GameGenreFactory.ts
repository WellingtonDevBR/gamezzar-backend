import { GameGenre } from "../entities/GameGenre";

export class GameGenreFactory {
  static create(gameId: string, genreId: string): GameGenre {
    return GameGenre.createGameGenre({
      gameId,
      genreId,
    });
  }
}
