import { Request, Response } from "express";
import { IWishlistRepository } from "../../../../domain/repository/IWishlistRepository";
import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { WishlistFactory } from "../../../../domain/factories/WishlistFactory";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";

interface CreateWishlistUseCaseInput {
  userId: string;
  gameId: string;
  interestLevel: string;
}
interface CreateWishlistUseCaseOutput {}

export class CreateWishlistUseCase
  implements UseCase<CreateWishlistUseCaseInput, CreateWishlistUseCaseOutput>
{
  constructor(private wishlistRepository: IWishlistRepository) {}
  async execute(
    input: CreateWishlistUseCaseInput
  ): Promise<CreateWishlistUseCaseOutput> {
    const wishlistCreation = WishlistFactory.create(
      input.userId,
      input.gameId,
      input.interestLevel
    );

    const wishlist = await this.wishlistRepository.create(wishlistCreation);
    const formattedWishlist = convertObjectToSnakeCase(wishlist);
    return formattedWishlist;
  }
}
