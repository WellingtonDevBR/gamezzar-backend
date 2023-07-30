"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistFactory = void 0;
const Wishlist_1 = require("../entities/Wishlist");
class WishlistFactory {
    static create(userId, gameId, interestLevel) {
        return Wishlist_1.Wishlist.createWishlist({
            userId,
            gameId,
            interestLevel,
        });
    }
}
exports.WishlistFactory = WishlistFactory;
//# sourceMappingURL=WishlistFactory.js.map