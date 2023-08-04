"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllFollowersController = void 0;
class FindAllFollowersController {
    constructor(findAllFollowersUseCase) {
        this.findAllFollowersUseCase = findAllFollowersUseCase;
    }
    async handle(request, response) {
        const { userId } = request.body;
        try {
            const result = await this.findAllFollowersUseCase.execute({
                userId: userId,
            });
            return response.status(201).send(result);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error",
            });
        }
    }
}
exports.FindAllFollowersController = FindAllFollowersController;
//# sourceMappingURL=FindAllFollowersController.js.map