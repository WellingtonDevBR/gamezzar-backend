import { Request, Response } from "express";
import { GetUserGameByUserIdUseCase } from "../../../../application/use-cases/user_game/get_by_user_id/GetUserGameByUserIdUseCase";

export class GetUserGameByUserIdController {
  constructor(private getUserGameByUserIdUseCase: GetUserGameByUserIdUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    try {
      const { id } = request.params;
      const { email } = request.body;
      const result = await this.getUserGameByUserIdUseCase.execute({
        email,
        gameId: id,
      });
      response.status(200).json(result);
    } catch (error) {
      response.status(400).json({ message: error || "Unexpected error." });
    }
  }
}
