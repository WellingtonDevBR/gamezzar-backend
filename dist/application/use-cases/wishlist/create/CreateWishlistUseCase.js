"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWishlistUseCase = void 0;
const WishlistFactory_1 = require("../../../../domain/factories/WishlistFactory");
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class CreateWishlistUseCase {
    constructor(wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }
    async execute(input) {
        const wishlistCreation = WishlistFactory_1.WishlistFactory.create(input.userId, input.gameId, input.interestLevel);
        const wishlist = await this.wishlistRepository.create(wishlistCreation);
        const formattedWishlist = (0, objectConverter_1.convertObjectToSnakeCase)(wishlist);
        return formattedWishlist;
    }
}
exports.CreateWishlistUseCase = CreateWishlistUseCase;
//# sourceMappingURL=CreateWishlistUseCase.js.map