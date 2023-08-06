import { Request, Response } from "express";
import { CreateProposeUseCase } from "../../../../application/use-cases/propose/create/CreateProposeUseCase";

export class CreateProposeController {
  constructor(private readonly createProposeUseCase: CreateProposeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      userId,
      bidder_id,
      bidder_game_id,
      receiver_id,
      receiver_game_id,
      status,
    } = request.body;

    try {
      const result = await this.createProposeUseCase.execute({
        bidderId: bidder_id ? bidder_id : userId,
        bidderGameId: bidder_game_id,
        receiverId: receiver_id,
        receiverGameId: receiver_game_id,
        status: status,
      });
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
