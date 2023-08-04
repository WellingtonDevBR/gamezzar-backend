"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllWishlistByUserNameController = void 0;
class GetAllWishlistByUserNameController {
    constructor(getAllWishlistByUserNameUseCase) {
        this.getAllWishlistByUserNameUseCase = getAllWishlistByUserNameUseCase;
    }
    async handle(request, response) {
        const { username } = request.params;
        try {
            const wishlist = await this.getAllWishlistByUserNameUseCase.execute({
                userName: username,
            });
            return response.status(200).json(wishlist);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetAllWishlistByUserNameController = GetAllWishlistByUserNameController;
//# sourceMappingURL=GetAllWishlistByUserNameController.js.map