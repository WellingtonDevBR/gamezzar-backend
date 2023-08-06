"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserPopularCollectionController = void 0;
class GetUserPopularCollectionController {
    constructor(getUserPopularCollectionUseCase) {
        this.getUserPopularCollectionUseCase = getUserPopularCollectionUseCase;
    }
    async handle(request, response) {
        try {
            const result = await this.getUserPopularCollectionUseCase.execute({});
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetUserPopularCollectionController = GetUserPopularCollectionController;
//# sourceMappingURL=GetUserPopularCollectionController.js.map