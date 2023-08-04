import { Request, Response } from "express";
import { FindAllFollowersUseCase } from "../../../../application/use-cases/follow/findAllFollowers/findAllFollowersUseCase";

export class FindAllFollowersController {
  constructor(private findAllFollowersUseCase: FindAllFollowersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;

    try {
      const result = await this.findAllFollowersUseCase.execute({
        userId: userId,
      });
      return response.status(201).send(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error",
      });
    }
  }
}
