import { Entity } from "../../@seedowrk/domain/entity";

interface GameProps {
  id?: string;
  title: string;
  description: string;
  region: string;
  releaseDate: Date;
  producer: string;
  category: string;
  genre: string;
  officialLink: string;
  image: string;
  slug: string;
  status: number;
}

export class Game extends Entity<GameProps> {
  private constructor(props: GameProps, id?: string) {
    super(props, id);
  }

  static createGame(props: GameProps, id?: string) {
    const game = new Game(props, id);
    return game;
  }

  getAllUserInformation(): GameProps {
    return { ...this.props, id: this.getId() };
  }
}
