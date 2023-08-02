import { Request, Response } from "express";
import { CreateFeedbackUseCase } from "../../../../application/use-cases/feedback/create/CreateFeedbackUseCase";

export class CreateFeedbackController {
  constructor(private createFeedbackUseCase: CreateFeedbackUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { transactionId, rating, comment, giverId, receiverId } =
        request.body;

      const result = await this.createFeedbackUseCase.execute({
        transactionId,
        rating,
        comment,
        giverId,
        receiverId,
      });

      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
