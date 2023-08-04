import { Request, Response } from "express";
import { CreateFollowUseCase } from "../../../../application/use-cases/follow/create/CreateFollowUseCase";

export class CreateFollowController {
  constructor(private createFollowUseCase: CreateFollowUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, username } = request.body;

    try {
      const result = await this.createFollowUseCase.execute({
        userId: userId,
        followeeUsername: username,
      });
      return response.status(201).send(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error",
      });
    }
  }
}
