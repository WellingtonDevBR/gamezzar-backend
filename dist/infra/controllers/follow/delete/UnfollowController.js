"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnfollowController = void 0;
class UnfollowController {
    constructor(unfollowUseCase) {
        this.unfollowUseCase = unfollowUseCase;
    }
    async handle(request, response) {
        const { userId, username } = request.body;
        try {
            const result = await this.unfollowUseCase.execute({
                userId: userId,
                followeeUsername: username,
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
exports.UnfollowController = UnfollowController;
//# sourceMappingURL=UnfollowController.js.map