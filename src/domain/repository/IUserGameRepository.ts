export interface IUserGameRepository {
  createOrUpdate(userGame: any): Promise<any>;
  getAll(offset: number, userId?: string): Promise<any>;
  getAllByUserId(userId: string): Promise<any>;
  getByGameId(gameId: string): Promise<any>;
  getByUserId(userId: string, gameId: string): Promise<any>;
}
