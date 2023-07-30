import { Entity } from "../../@seedowrk/domain/entity";

interface WishlistProps {
  id?: string;
  userId?: string;
  gameId: string;
  interestLevel: string;
}
export class Wishlist extends Entity<WishlistProps> {
  private constructor(props: WishlistProps, id?: string) {
    super(props, id);
  }

  static createWishlist(props: WishlistProps, id?: string) {
    const wishlist = new Wishlist(props, id);
    return wishlist;
  }

  getAllWishlistInformation(): WishlistProps {
    return { ...this.props, id: this.getId() };
  }
}
