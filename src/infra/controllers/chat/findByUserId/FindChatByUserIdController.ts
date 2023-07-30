import { Request, Response } from "express";
import { FindChatByUserIdUseCase } from "../../../../application/use-cases/chat/findByUserId/FindChatByUserIdUseCase";

export class FindChatByUserIdController {
  constructor(private findChatByUserIdUseCase: FindChatByUserIdUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.body;
      const chats = await this.findChatByUserIdUseCase.execute({ userId });
      return response.status(200).json(chats);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
