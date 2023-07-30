import { Request, Response } from "express";
import { UpdateWishlistByIdUseCase } from "../../../../application/use-cases/wishlist/update/UpdateWishlistByIdUseCase";

export class UpdateWishlistByUserIdController {
  constructor(private updateWishlistByIdUseCase: UpdateWishlistByIdUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { interest_level, userId } = request.body;
      const isWishlistUpdated = await this.updateWishlistByIdUseCase.execute({
        wishlistId: id,
        interestLevel: interest_level,
        userId,
      });
      return response.status(200).json(isWishlistUpdated);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
