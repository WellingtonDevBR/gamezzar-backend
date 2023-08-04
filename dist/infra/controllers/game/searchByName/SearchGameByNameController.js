"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGameByNameController = void 0;
class SearchGameByNameController {
    constructor(searchGameByNameUseCase) {
        this.searchGameByNameUseCase = searchGameByNameUseCase;
    }
    async handle(request, response) {
        const { query } = request.query;
        try {
            const games = await this.searchGameByNameUseCase.execute({
                name: query,
            });
            return response.status(200).json(games);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error!",
            });
        }
    }
}
exports.SearchGameByNameController = SearchGameByNameController;
//# sourceMappingURL=SearchGameByNameController.js.map