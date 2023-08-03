"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerWishlistRepository = void 0;
const Game_1 = require("../../models/Game");
const Platform_1 = require("../../models/Platform");
const User_1 = require("../../models/User");
const Wishlist_1 = require("../../models/Wishlist");
class SqlServerWishlistRepository {
    async deleteById(wishlistId) {
        return await Wishlist_1.WishlistModel.destroy({
            where: {
                WishlistId: wishlistId,
            },
        });
    }
    async create(wishlist) {
        const wishlistInformation = wishlist.getAllWishlistInformation();
        return Wishlist_1.WishlistModel.findOne({
            where: {
                UserId: wishlistInformation.userId,
                GameId: wishlistInformation.gameId,
            },
        }).then(function (obj) {
            if (obj)
                return obj.update({
                    InterestLevel: wishlistInformation.interestLevel,
                });
            return Wishlist_1.WishlistModel.create({
                WishId: wishlistInformation.id,
                UserId: wishlistInformation.userId,
                GameId: wishlistInformation.gameId,
                InterestLevel: wishlistInformation.interestLevel,
            });
        });
    }
    async getAllByUserId(userId) {
        const wishlist = await Wishlist_1.WishlistModel.findAll({
            raw: true,
            nest: true,
            where: {
                UserId: userId,
            },
            include: [
                {
                    model: Game_1.GameModel,
                    as: "details",
                    include: [
                        {
                            model: Platform_1.PlatformModel,
                            as: "platform",
                        },
                    ],
                },
                {
                    model: User_1.UserModel,
                    as: "user",
                },
            ],
        });
        return wishlist;
    }
    async getByGameAndUserId(gameId, userId) {
        const wishlist = await Wishlist_1.WishlistModel.findOne({
            raw: true,
            nest: true,
            where: {
                UserId: userId,
                GameId: gameId,
            },
            include: [
                {
                    model: Game_1.GameModel,
                    as: "details",
                },
            ],
        });
        return wishlist;
    }
    async updateById(wishlist) {
        const data = await Wishlist_1.WishlistModel.update({
            InterestLevel: wishlist.interestLevel,
            returning: true,
        }, {
            where: {
                WishlistId: wishlist.wishlistId,
                UserId: wishlist.userId,
            },
        });
        return data;
    }
}
exports.SqlServerWishlistRepository = SqlServerWishlistRepository;
//# sourceMappingURL=SqlServerWishlistRepository.js.map