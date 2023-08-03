import { Request, Response } from "express";
import { GetAllWishlistByUserNameUseCase } from "../../../../application/use-cases/wishlist/getAllByUserName/GetAllWishlistByUserNameUseCase";

export class GetAllWishlistByUserNameController {
  constructor(
    private getAllWishlistByUserNameUseCase: GetAllWishlistByUserNameUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    try {
      const wishlist = await this.getAllWishlistByUserNameUseCase.execute({
        userName: username,
      });
      return response.status(200).json(wishlist);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
