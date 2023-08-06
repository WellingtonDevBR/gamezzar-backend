import { Request, Response } from "express";
import { CreateMessageUseCase } from "../../../../application/use-cases/message/create/CreateMessageUseCase";
import { io } from "../../../../server";

export class CreateMessageController {
  constructor(private createMessageUseCase: CreateMessageUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        chat_id,
        userId,
        bidder,
        receiver,
        message,
        is_sender,
      } = request.body;


      console.log(request.body);

      const result = await this.createMessageUseCase.execute({
        senderId: is_sender ? receiver.user_id : bidder.user_id,
        receiverId: is_sender ? bidder.user_id : receiver.user_id,
        content: message,
        gameId: receiver.game_id,
      });

      io.to(`chat-${chat_id}`).emit("newMessage", {
        sender_id: is_sender ? receiver.user_id : bidder.user_id,
        receiver_id: is_sender ? bidder.user_id : receiver.user_id,
        content: message,
        game_id: receiver.game_id,
        created_at: new Date(),
      });

      return response.status(200).json(result); // Add return here
    } catch (error) {
      return response.status(400).json({ message: error }); // Add return here
    }
  }
}
