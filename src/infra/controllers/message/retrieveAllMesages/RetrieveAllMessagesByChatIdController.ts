import { Request, Response } from "express";
import { RetrieveAllMessagesByChatIdUseCase } from "../../../../application/use-cases/message/retreiveAllMessages/RetrieveAllMessagesByChatIdUseCase";

export class RetrieveAllMessagesByChatIdController {
  constructor(
    private retrieveAllMessagesByChatIdUseCase: RetrieveAllMessagesByChatIdUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { chatId } = request.params;
      const result = await this.retrieveAllMessagesByChatIdUseCase.execute({
        chatId,
      });
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
