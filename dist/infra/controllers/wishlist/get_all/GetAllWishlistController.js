"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllWishlistController = void 0;
class GetAllWishlistController {
    constructor(getAllWishlistUseCase) {
        this.getAllWishlistUseCase = getAllWishlistUseCase;
    }
    async handle(request, response) {
        try {
            const { userId } = request.body;
            const wishlist = await this.getAllWishlistUseCase.execute(userId);
            return response.status(200).json(wishlist);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetAllWishlistController = GetAllWishlistController;
//# sourceMappingURL=GetAllWishlistController.js.map