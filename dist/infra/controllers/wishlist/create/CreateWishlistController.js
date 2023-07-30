"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWishlistController = void 0;
class CreateWishlistController {
    constructor(createWishlistUseCase) {
        this.createWishlistUseCase = createWishlistUseCase;
    }
    async handle(request, response) {
        try {
            const { userId, game_id, interest_level } = request.body;
            const wishlist = await this.createWishlistUseCase.execute({
                userId,
                gameId: game_id,
                interestLevel: interest_level,
            });
            return response.status(201).json(wishlist);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.CreateWishlistController = CreateWishlistController;
//# sourceMappingURL=CreateWishlistController.js.map