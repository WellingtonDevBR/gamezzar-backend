import { Request, Response } from "express";
import { CreateGameUseCase } from "../../../../application/use-cases/game/create/CreateGameUseCase";

export class CreateGameController {
  constructor(private createGameUseCase: CreateGameUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const output = await this.createGameUseCase.execute({
        title: request.body.title,
        description: request.body.description,
        region: request.body.region,
        releaseDate: request.body.release_date,
        producer: request.body.producer,
        genre: request.body.genre,
        officialLink: request.body.official_link,
        fileContent: request.file!,
        slug: request.body.slug,
        category: request.body.category,
        status: request.body.status,
      });
      return response.status(201).send({
        status: "success",
        message: output,
      });
    } catch (error: any) {
      return response.status(400).json({
        status: "error",
        message: error.message || "Unexpected error.",
      });
    }
  }
}
