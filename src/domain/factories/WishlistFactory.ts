import { Wishlist } from "../entities/Wishlist";

export class WishlistFactory {
  static create(
    userId: string,
    gameId: string,
    interestLevel: string
  ): Wishlist {
    return Wishlist.createWishlist({
      userId,
      gameId,
      interestLevel,
    });
  }
}
