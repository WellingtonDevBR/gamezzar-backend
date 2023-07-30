"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserGameController = void 0;
class GetAllUserGameController {
    constructor(getAllUserGameUseCase) {
        this.getAllUserGameUseCase = getAllUserGameUseCase;
    }
    async handle(request, response) {
        try {
            const result = await this.getAllUserGameUseCase.execute({});
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetAllUserGameController = GetAllUserGameController;
//# sourceMappingURL=GetAllUserGameController.js.map