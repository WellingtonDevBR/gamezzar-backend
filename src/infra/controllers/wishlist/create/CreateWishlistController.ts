import { Request, Response } from "express";
import { CreateWishlistUseCase } from "../../../../application/use-cases/wishlist/create/CreateWishlistUseCase";

export class CreateWishlistController {
  constructor(private createWishlistUseCase: CreateWishlistUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { userId, game_id, interest_level } = request.body;
      const wishlist = await this.createWishlistUseCase.execute({
        userId,
        gameId: game_id,
        interestLevel: interest_level,
      });
      return response.status(201).json(wishlist);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
