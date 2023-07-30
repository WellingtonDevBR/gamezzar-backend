import { Request, Response } from "express";
import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { IWishlistRepository } from "../../../../domain/repository/IWishlistRepository";

interface UpdateWishlistByIdUseCaseInput {
  wishlistId: string;
  interestLevel: string;
  userId: string;
}
interface UpdateWishlistByIdUseCaseOutput {
  status: string;
  message: string;
}

export class UpdateWishlistByIdUseCase
  implements
    UseCase<UpdateWishlistByIdUseCaseInput, UpdateWishlistByIdUseCaseOutput>
{
  constructor(private wishlistRepository: IWishlistRepository) {}
  async execute(
    input: UpdateWishlistByIdUseCaseInput
  ): Promise<UpdateWishlistByIdUseCaseOutput> {
    const isWishlistUpdated = await this.wishlistRepository.updateById({
      wishlistId: input.wishlistId,
      interestLevel: input.interestLevel,
      userId: input.userId,
    });
    if (!isWishlistUpdated) {
      throw new Error("Wishlist not updated");
    }

    return {
      status: "success",
      message: "Wishlist updated successfully",
    };
  }
}
