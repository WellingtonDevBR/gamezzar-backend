import { Request, Response } from "express";
import { FindAllFeedbackByUserNameUseCase } from "../../../../application/use-cases/feedback/findAll/FindAllFeedbackByUserNameUseCase";

export class FindAllFeedbackByUserNameController {
  constructor(
    private findAllFeedbackByUserNameUseCase: FindAllFeedbackByUserNameUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { username } = request.params;
      const feedbacks = await this.findAllFeedbackByUserNameUseCase.execute({
        userName: username,
      });
      return response.status(200).json(feedbacks);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
