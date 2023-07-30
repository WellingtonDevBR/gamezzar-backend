import { Request, Response } from "express";
import { CreateProposeUseCase } from "../../../../application/use-cases/propose/create/CreateProposeUseCase";

export class CreateProposeController {
  constructor(private readonly createProposeUseCase: CreateProposeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, interested_game_id, owner_user_id, owner_game_id, status } =
      request.body;

    try {
      const result = await this.createProposeUseCase.execute({
        interestedUserId: userId,
        interestedGameId: interested_game_id,
        ownerUserId: owner_user_id,
        ownerGameId: owner_game_id,
        status,
      });
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
