import { Wishlist } from "../entities/Wishlist";

export interface IWishListProps {
    wishlistId: string;
    interestLevel: string;
    userId: string;
}

export interface IWishlistRepository {
    create(wishlist: Wishlist): Promise<any>;
    getAllByUserId(userId: string): Promise<any>;
    getAllByUserName(userName: string): Promise<any>;
    updateById(wishlist: IWishListProps): Promise<any>;
    deleteById(wishlistId: string): Promise<any>;
}