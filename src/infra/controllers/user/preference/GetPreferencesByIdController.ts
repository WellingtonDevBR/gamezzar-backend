import { Request, Response } from "express";
import { GetPreferencesByIdUseCase } from "../../../../application/use-cases/user/preference/get/GetPreferencesByIdUseCase";

export class GetPreferencesByIdController {
  constructor(
    private getPreferencesByIdController: GetPreferencesByIdUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.body;
      const preferences = await this.getPreferencesByIdController.execute({
        userId,
      });
      return response.status(200).json(preferences);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
