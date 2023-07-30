import { UserGame } from "../entities/UserGame";

export class UserGameFactory {
  static create(
    userId: string,
    gameId: string,
    quantity: number,
    status: boolean
  ): UserGame {
    return UserGame.createUserGame({
      userId,
      gameId,
      quantity,
      status,
    });
  }
}
