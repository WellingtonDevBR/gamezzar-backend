import { Entity } from "../../@seedowrk/domain/entity";

interface IGameEdition {
  gameId: string;
  EditionId: string;
}

export class GameEdition extends Entity<IGameEdition> {
  private constructor(props: IGameEdition) {
    super(props);
  }

  static createGameEdition(props: IGameEdition) {
    const gameEdition = new GameEdition(props);
    return gameEdition;
  }
}
