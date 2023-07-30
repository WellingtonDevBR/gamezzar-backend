"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGameByIdController = void 0;
class GetGameByIdController {
    constructor(getGameByIdUseCase) {
        this.getGameByIdUseCase = getGameByIdUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const result = await this.getGameByIdUseCase.execute({ id });
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(500).json({ error: "Failed to get game" });
        }
    }
}
exports.GetGameByIdController = GetGameByIdController;
//# sourceMappingURL=GetGameByIdController.js.map