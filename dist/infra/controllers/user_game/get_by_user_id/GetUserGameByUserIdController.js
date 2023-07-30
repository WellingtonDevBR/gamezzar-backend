"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserGameByUserIdController = void 0;
class GetUserGameByUserIdController {
    constructor(getUserGameByUserIdUseCase) {
        this.getUserGameByUserIdUseCase = getUserGameByUserIdUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { email } = request.body;
            const result = await this.getUserGameByUserIdUseCase.execute({
                email,
                gameId: id,
            });
            response.status(200).json(result);
        }
        catch (error) {
            response.status(400).json({ message: error || "Unexpected error." });
        }
    }
}
exports.GetUserGameByUserIdController = GetUserGameByUserIdController;
//# sourceMappingURL=GetUserGameByUserIdController.js.map