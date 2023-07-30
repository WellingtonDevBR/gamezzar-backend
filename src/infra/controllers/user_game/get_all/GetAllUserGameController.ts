import { Request, Response } from "express";
import { GetAllUserGameUseCase } from "../../../../application/use-cases/user_game/get_all/GetAllUserGameUseCase";

export class GetAllUserGameController {
  constructor(private getAllUserGameUseCase: GetAllUserGameUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.getAllUserGameUseCase.execute({});
      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
