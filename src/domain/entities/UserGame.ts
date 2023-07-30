import { Entity } from "../../@seedowrk/domain/entity";

interface IUserGame {
  userId: string;
  gameId: string;
  quantity: number;
  status: boolean;
}

export class UserGame extends Entity<IUserGame> {
  private constructor(props: IUserGame) {
    super(props);
  }

  static createUserGame(props: IUserGame) {
    const userProduct = new UserGame(props);
    return userProduct;
  }
}
