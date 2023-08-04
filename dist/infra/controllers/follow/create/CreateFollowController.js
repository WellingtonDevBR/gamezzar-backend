"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFollowController = void 0;
class CreateFollowController {
    constructor(createFollowUseCase) {
        this.createFollowUseCase = createFollowUseCase;
    }
    async handle(request, response) {
        const { userId, username } = request.body;
        try {
            const result = await this.createFollowUseCase.execute({
                userId: userId,
                followeeUsername: username,
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
exports.CreateFollowController = CreateFollowController;
//# sourceMappingURL=CreateFollowController.js.map