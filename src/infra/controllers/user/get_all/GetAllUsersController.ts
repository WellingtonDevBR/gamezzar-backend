import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../../../application/use-cases/user/get_all/GetAllUsersUseCase";

export class GetAllUsersController {
  constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const result = await this.getAllUsersUseCase.execute({});
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
