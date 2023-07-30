import { Request, Response } from "express";
import { GetAllUserGameByUserIdUseCase } from "../../../../application/use-cases/user_game/get_all_by_user_id/GetAllUserGameByUserIdUseCase";

export class GetAllUserGameByUserIdController {
  constructor(private getAllByUserIdUseCase: GetAllUserGameByUserIdUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.body;
      const result = await this.getAllByUserIdUseCase.execute({
        userId,
      });
      response.status(200).json(result);
    } catch (error) {
      response.status(400).json({ message: error });
    }
  }
}
