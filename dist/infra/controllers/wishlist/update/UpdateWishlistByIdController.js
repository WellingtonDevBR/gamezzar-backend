"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWishlistByUserIdController = void 0;
class UpdateWishlistByUserIdController {
    constructor(updateWishlistByIdUseCase) {
        this.updateWishlistByIdUseCase = updateWishlistByIdUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { interest_level, userId } = request.body;
            const isWishlistUpdated = await this.updateWishlistByIdUseCase.execute({
                wishlistId: id,
                interestLevel: interest_level,
                userId,
            });
            return response.status(200).json(isWishlistUpdated);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.UpdateWishlistByUserIdController = UpdateWishlistByUserIdController;
//# sourceMappingURL=UpdateWishlistByIdController.js.map