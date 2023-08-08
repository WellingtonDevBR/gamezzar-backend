import { Request, Response } from "express";
import { GetAllInterestedUsersUseCase } from "../../../../application/use-cases/game/getInterstedUsers/GetAllInterestedUsersUseCase";

export class GetAllInterestedUsersController {
  constructor(
    private getAllInterestedUsersUseCase: GetAllInterestedUsersUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { gameId } = request.params;
      const interestedUsers = await this.getAllInterestedUsersUseCase.execute({
        gameId,
      });
      return response.status(200).json(interestedUsers);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error." });
    }
  }
}
