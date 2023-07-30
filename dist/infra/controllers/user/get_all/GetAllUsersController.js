"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersController = void 0;
class GetAllUsersController {
    constructor(getAllUsersUseCase) {
        this.getAllUsersUseCase = getAllUsersUseCase;
    }
    async handle(request, response) {
        try {
            const result = await this.getAllUsersUseCase.execute({});
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetAllUsersController = GetAllUsersController;
//# sourceMappingURL=GetAllUsersController.js.map