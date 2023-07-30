import { Wishlist } from "../../../../../domain/entities/Wishlist";
import {
  IWishListProps,
  IWishlistRepository,
} from "../../../../../domain/repository/IWishlistRepository";
import { GameModel } from "../../models/Game";
import { PlatformModel } from "../../models/Platform";
import { WishlistModel } from "../../models/Wishlist";

export class SqlServerWishlistRepository implements IWishlistRepository {
  async create(wishlist: Wishlist): Promise<any> {
    const wishFactory = wishlist.getAllWishlistInformation();
    return await WishlistModel.create({
      WishId: wishFactory.id,
      UserId: wishFactory.userId,
      GameId: wishFactory.gameId,
      InterestLevel: wishFactory.interestLevel,
    });
  }
  async getAllByUserId(userId: string): Promise<any> {
    const wishlist: any[] = await WishlistModel.findAll({
      raw: true,
      nest: true,
      where: {
        UserId: userId,
      },
      include: [
        {
          model: GameModel,
          as: "details", // Use the same alias as defined in the association
          include: [
            {
              model: PlatformModel,
              as: "platform", // Use a different alias for PlatformModel association
            },
          ],
        },
      ],
    });

    return wishlist;
  }
  async updateById(wishlist: IWishListProps): Promise<any> {
    const data = await WishlistModel.update(
      {
        InterestLevel: wishlist.interestLevel,
        returning: true,
      },
      {
        where: {
          WishlistId: wishlist.wishlistId,
          UserId: wishlist.userId,
        },
      }
    );
    return data;
  }
}
