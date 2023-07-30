"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProposeController = void 0;
class CreateProposeController {
    constructor(createProposeUseCase) {
        this.createProposeUseCase = createProposeUseCase;
    }
    async handle(request, response) {
        const { userId, interested_game_id, owner_user_id, owner_game_id, status } = request.body;
        try {
            const result = await this.createProposeUseCase.execute({
                interestedUserId: userId,
                interestedGameId: interested_game_id,
                ownerUserId: owner_user_id,
                ownerGameId: owner_game_id,
                status,
            });
            return response.status(201).json(result);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.CreateProposeController = CreateProposeController;
//# sourceMappingURL=CreateProposeController.js.map