"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllWishlistUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllWishlistUseCase {
    constructor(wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }
    async execute(userId) {
        const wishlist = await this.wishlistRepository.getAllByUserId(userId);
        if (!wishlist)
            throw new Error(`User ${userId} does not have a wishlist`);
        const formattedWishlist = (0, objectConverter_1.convertObjectToSnakeCase)(wishlist);
        return formattedWishlist;
    }
}
exports.GetAllWishlistUseCase = GetAllWishlistUseCase;
//# sourceMappingURL=GetAllWishlistUseCase.js.map