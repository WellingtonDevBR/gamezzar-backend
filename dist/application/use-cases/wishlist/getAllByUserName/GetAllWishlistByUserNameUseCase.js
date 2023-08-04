"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllWishlistByUserNameUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllWishlistByUserNameUseCase {
    constructor(wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }
    async execute(input) {
        const wishlist = await this.wishlistRepository.getAllByUserName(input.userName);
        const formattedWishlist = (0, objectConverter_1.convertObjectToSnakeCase)(wishlist);
        return formattedWishlist;
    }
}
exports.GetAllWishlistByUserNameUseCase = GetAllWishlistByUserNameUseCase;
//# sourceMappingURL=GetAllWishlistByUserNameUseCase.js.map