import { Wishlist } from "../../../../../domain/entities/Wishlist";
import {
  IWishListProps,
  IWishlistRepository,
} from "../../../../../domain/repository/IWishlistRepository";
import { GameModel } from "../../models/Game";
import { PlatformModel } from "../../models/Platform";
import { UserModel } from "../../models/User";
import { WishlistModel } from "../../models/Wishlist";

export class SqlServerWishlistRepository implements IWishlistRepository {
  async deleteById(wishlistId: string): Promise<any> {
    return await WishlistModel.destroy({
      where: {
        WishlistId: wishlistId,
      },
    });
  }
  async create(wishlist: Wishlist): Promise<any> {
    const wishlistInformation = wishlist.getAllWishlistInformation();
    return WishlistModel.findOne({
      where: {
        UserId: wishlistInformation.userId,
        GameId: wishlistInformation.gameId,
      },
    }).then(function (obj) {
      // update
      if (obj)
        return obj.update({
          InterestLevel: wishlistInformation.interestLevel,
        });
      // insert
      return WishlistModel.create({
        WishId: wishlistInformation.id,
        UserId: wishlistInformation.userId,
        GameId: wishlistInformation.gameId,
        InterestLevel: wishlistInformation.interestLevel,
      });
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
        {
          model: UserModel,
          as: "user",
        },
      ],
    });
    return wishlist;
  }

  async getByGameAndUserId(gameId: string, userId: string): Promise<any> {
    const wishlist: any = await WishlistModel.findOne({
      raw: true,
      nest: true,
      where: {
        UserId: userId,
        GameId: gameId,
      },
      include: [
        {
          model: GameModel,
          as: "details", // Use the same alias as defined in the association
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
