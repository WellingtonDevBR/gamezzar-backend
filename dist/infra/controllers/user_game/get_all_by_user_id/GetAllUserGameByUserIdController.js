"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserGameByUserIdController = void 0;
class GetAllUserGameByUserIdController {
    constructor(getAllByUserIdUseCase) {
        this.getAllByUserIdUseCase = getAllByUserIdUseCase;
    }
    async handle(request, response) {
        try {
            const { userId } = request.body;
            const result = await this.getAllByUserIdUseCase.execute({
                userId,
            });
            response.status(200).json(result);
        }
        catch (error) {
            response.status(400).json({ message: error });
        }
    }
}
exports.GetAllUserGameByUserIdController = GetAllUserGameByUserIdController;
//# sourceMappingURL=GetAllUserGameByUserIdController.js.map