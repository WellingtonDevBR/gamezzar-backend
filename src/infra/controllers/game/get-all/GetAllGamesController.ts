import { Request, Response } from "express";
import { GetAllGamesUseCase } from "../../../../application/use-cases/game/get-all/GetAllGamesUseCase";

export class GetAllGamesController {
  constructor(private getAllGamesUseCase: GetAllGamesUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const games = await this.getAllGamesUseCase.execute(request.body);
      return response.status(200).json(games);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
