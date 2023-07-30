import { Genre } from "../entities/Genre";

export class GenreFactory {
  static create(
    name: string,
    image: string,
    slug: string,
    status: number,
  ): Genre {
    return Genre.createGenre({
      name: name,
      image: image,
      slug: slug,
      status: status,
    });
  }
}
