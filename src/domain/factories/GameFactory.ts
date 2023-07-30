import { Game } from "../entities/Game";

export class GameFactory {
  static create(
    title: string,
    description: string,
    region: string,
    releaseDate: Date,
    category: string,
    producer: string,
    genre: string,
    officialLink: string,
    image: string,
    slug: string,
    status: number
  ) {
    return Game.createGame({
      title,
      description,
      region,
      category,
      releaseDate,
      producer,
      genre,
      officialLink,
      image,
      slug,
      status,
    });
  }
}
