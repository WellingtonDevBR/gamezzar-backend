"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllGamesController = void 0;
class GetAllGamesController {
    constructor(getAllGamesUseCase) {
        this.getAllGamesUseCase = getAllGamesUseCase;
    }
    async handle(request, response) {
        const { offset } = request.query;
        try {
            const games = await this.getAllGamesUseCase.execute({
                offset: Number(offset),
            });
            return response.status(200).json(games);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.GetAllGamesController = GetAllGamesController;
//# sourceMappingURL=GetAllGamesController.js.map