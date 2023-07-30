"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserGameController = void 0;
class CreateUserGameController {
    constructor(createUserGameUseCase) {
        this.createUserGameUseCase = createUserGameUseCase;
    }
    async handle(request, response) {
        try {
            const result = await this.createUserGameUseCase.execute({
                email: request.body.email,
                gameId: request.body.game_id,
                platform: request.body.platform,
                region: request.body.region,
                edition: request.body.edition,
                satisfaction: request.body.satisfaction,
                disposition: request.body.disposition,
                disc_condition: request.body.disc_condition,
                cover_condition: request.body.cover_condition,
                manual_condition: request.body.manual_condition,
                description: request.body.description,
            });
            return response.status(201).json(result);
        }
        catch (error) {
            console.log(error);
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.CreateUserGameController = CreateUserGameController;
//# sourceMappingURL=CreateUserGameController.js.map