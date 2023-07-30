import { Request, Response } from "express";
import { CreateMessageUseCase } from "../../../../application/use-cases/message/create/CreateMessageUseCase";
import { io } from "../../../../server";

export class CreateMessageController {
  constructor(private createMessageUseCase: CreateMessageUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        interested_user_id,
        owner_user_id,
        message,
        owner_game_id,
        is_sender,
        chat_id
      } = request.body;

      const result = await this.createMessageUseCase.execute({
        senderId: is_sender ? owner_user_id : interested_user_id,
        receiverId: is_sender ? interested_user_id : owner_user_id,
        content: message,
        gameId: owner_game_id,
      });

      io.to(`chat-${chat_id}`).emit(
        "newMessage",
        {
          sender_id: is_sender ? owner_user_id : interested_user_id,
          receiver_id: is_sender ? interested_user_id : owner_user_id,
          content: message,
          game_id: owner_game_id,
          created_at: new Date(),
        }
      );

      return response.status(200).json(result); // Add return here
    } catch (error) {
      return response.status(400).json({ message: error }); // Add return here
    }
  }
}
