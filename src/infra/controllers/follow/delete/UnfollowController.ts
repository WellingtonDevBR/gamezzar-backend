import { Request, Response } from "express";
import { UnfollowUseCase } from "../../../../application/use-cases/follow/unfollow/UnfollowUseCase";

export class UnfollowController {
  constructor(private unfollowUseCase: UnfollowUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, username } = request.body;

    try {
      const result = await this.unfollowUseCase.execute({
        userId: userId,
        followeeUsername: username,
      });
      return response.status(200).send(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error",
      });
    }
  }
}
