import { Request, Response } from "express";
import { GetUserPopularCollectionUseCase } from "../../../../application/use-cases/user_game/getUserPopularCollection/GetUserPopularCollectionUseCase";

export class GetUserPopularCollectionController {
  constructor(
    private getUserPopularCollectionUseCase: GetUserPopularCollectionUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const result = await this.getUserPopularCollectionUseCase.execute({});
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
