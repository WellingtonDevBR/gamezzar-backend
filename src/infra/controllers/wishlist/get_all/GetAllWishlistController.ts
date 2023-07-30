import { Request, Response } from "express";
import { GetAllWishlistUseCase } from "../../../../application/use-cases/wishlist/get_all/GetAllWishlistUseCase";

export class GetAllWishlistController {
  constructor(private getAllWishlistUseCase: GetAllWishlistUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.body;
      const wishlist = await this.getAllWishlistUseCase.execute(userId);
      return response.status(200).json(wishlist);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
