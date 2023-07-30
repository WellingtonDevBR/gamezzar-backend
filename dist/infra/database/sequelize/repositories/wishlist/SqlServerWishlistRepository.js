"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerWishlistRepository = void 0;
const Game_1 = require("../../models/Game");
const Platform_1 = require("../../models/Platform");
const Wishlist_1 = require("../../models/Wishlist");
class SqlServerWishlistRepository {
    async create(wishlist) {
        const wishFactory = wishlist.getAllWishlistInformation();
        return await Wishlist_1.WishlistModel.create({
            WishId: wishFactory.id,
            UserId: wishFactory.userId,
            GameId: wishFactory.gameId,
            InterestLevel: wishFactory.interestLevel,
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