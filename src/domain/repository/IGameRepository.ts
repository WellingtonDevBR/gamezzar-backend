import { Game } from "../entities/Game";

export interface IGameRepository {
  create(game: Game): Promise<any>;
  getAll(): Promise<any>;
  getById(gameId: string): Promise<any>;
}
