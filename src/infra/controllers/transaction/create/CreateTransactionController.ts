import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../../../application/use-cases/transaction/create/CreateTransactionUseCase";

export class CreateTransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        bidder_id,
        receiver_id,
        bidder_game_id,
        receiver_game_id,
        status,
      } = request.body;
      console.log(request.body)
      const transaction = await this.createTransactionUseCase.execute({
        bidderId: bidder_id,
        receiverId: receiver_id,
        bidderGameId: bidder_game_id,
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
