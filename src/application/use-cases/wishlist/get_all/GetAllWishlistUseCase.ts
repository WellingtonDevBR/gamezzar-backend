import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IWishlistRepository } from "../../../../domain/repository/IWishlistRepository";

export class GetAllWishlistUseCase {
  constructor(private wishlistRepository: IWishlistRepository) {}
  async execute(userId: string): Promise<any> {
    const wishlist = await this.wishlistRepository.getAllByUserId(userId);
    if (!wishlist) throw new Error(`User ${userId} does not have a wishlist`);
    const formattedWishlist = convertObjectToSnakeCase(wishlist);
    return formattedWishlist;
  }
}
