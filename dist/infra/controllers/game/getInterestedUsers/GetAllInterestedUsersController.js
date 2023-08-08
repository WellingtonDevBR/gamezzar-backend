"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInterestedUsersController = void 0;
class GetAllInterestedUsersController {
    constructor(getAllInterestedUsersUseCase) {
        this.getAllInterestedUsersUseCase = getAllInterestedUsersUseCase;
    }
    async handle(request, response) {
        try {
            const { gameId } = request.params;
            const interestedUsers = await this.getAllInterestedUsersUseCase.execute({
                gameId,
            });
            return response.status(200).json(interestedUsers);
        }
        catch (error) {
            return response
                .status(400)
                .json({ message: error || "Unexpected error." });
        }
    }
}
exports.GetAllInterestedUsersController = GetAllInterestedUsersController;
//# sourceMappingURL=GetAllInterestedUsersController.js.map