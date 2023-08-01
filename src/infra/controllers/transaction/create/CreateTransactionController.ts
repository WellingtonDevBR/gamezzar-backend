import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../../../application/use-cases/transaction/create/CreateTransactionUseCase";

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        sender_id,
        receiver_id,
        sender_game_id,
        receiver_game_id,
        status,
      } = request.body;
      const transaction = await this.createTransactionUseCase.execute({
        senderId: sender_id,
        receiverId: receiver_id,
        senderGameId: sender_game_id,
        receiverGameId: receiver_game_id,
        status,
      });
      return response.status(201).json(transaction);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
