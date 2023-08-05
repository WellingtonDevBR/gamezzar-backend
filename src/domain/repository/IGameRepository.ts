import { Game } from "../entities/Game";

export interface IGameRepository {
  create(game: Game): Promise<any>;
  getAll(offset: number): Promise<any>;
  getById(gameId: string): Promise<any>;
  searchByName(name: string): Promise<any>;
}
