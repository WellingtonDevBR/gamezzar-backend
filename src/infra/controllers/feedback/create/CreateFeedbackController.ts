import { Request, Response } from "express";
import { CreateFeedbackUseCase } from "../../../../application/use-cases/feedback/create/CreateFeedbackUseCase";

export class CreateFeedbackController {
  constructor(private createFeedbackUseCase: CreateFeedbackUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { transaction_id, score, comment, giver_id, receiver_id, userId } =
        request.body;

      const result = await this.createFeedbackUseCase.execute({
        transactionId: transaction_id,
        rating: score,
        comment,
        giverId: userId,
        receiverId: receiver_id,
      });

      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
