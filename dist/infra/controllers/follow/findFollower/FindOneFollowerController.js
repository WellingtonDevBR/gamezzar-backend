"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneFollowerController = void 0;
class FindOneFollowerController {
    constructor(findOneFollowerUseCase) {
        this.findOneFollowerUseCase = findOneFollowerUseCase;
    }
    async handle(request, response) {
        const { username } = request.params;
        try {
            const result = await this.findOneFollowerUseCase.execute({
                username: username,
            });
            return response.status(200).send(result);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error",
            });
        }
    }
}
exports.FindOneFollowerController = FindOneFollowerController;
//# sourceMappingURL=FindOneFollowerController.js.map