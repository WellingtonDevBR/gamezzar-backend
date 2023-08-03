import { Request, Response } from "express";
import { SearchGameByNameUseCase } from "../../../../application/use-cases/game/searchByName/SearchGameByNameUseCase";

export class SearchGameByNameController {
  constructor(private searchGameByNameUseCase: SearchGameByNameUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { query } = request.query;
    try {
      const games = await this.searchGameByNameUseCase.execute({
        name: query as string,
      });
      return response.status(200).json(games);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error!",
      });
    }
  }
}
