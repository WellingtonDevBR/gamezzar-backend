import { Request, Response } from "express";
import { GetGameByIdUseCase } from "../../../../application/use-cases/game/getById/GetGameByIdUseCase";

export class GetGameByIdController {
  constructor(private getGameByIdUseCase: GetGameByIdUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const result = await this.getGameByIdUseCase.execute({ id });
      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({ error: "Failed to get game" });
    }
  }
}
