import { Request, Response } from "express";
import { FindOneFollowerUseCase } from "../../../../application/use-cases/follow/findFollower/findOneFollowerUseCase";

export class FindOneFollowerController {
  constructor(private findOneFollowerUseCase: FindOneFollowerUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    try {
      const result = await this.findOneFollowerUseCase.execute({
        username: username,
      });
      return response.status(200).send(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error",
      });
    }
  }
}
