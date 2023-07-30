"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWishlistByIdUseCase = void 0;
class UpdateWishlistByIdUseCase {
    constructor(wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }
    async execute(input) {
        const isWishlistUpdated = await this.wishlistRepository.updateById({
            wishlistId: input.wishlistId,
            interestLevel: input.interestLevel,
            userId: input.userId,
        });
        if (!isWishlistUpdated) {
            throw new Error("Wishlist not updated");
        }
        return {
            status: "success",
            message: "Wishlist updated successfully",
        };
    }
}
exports.UpdateWishlistByIdUseCase = UpdateWishlistByIdUseCase;
//# sourceMappingURL=UpdateWishlistByIdUseCase.js.map