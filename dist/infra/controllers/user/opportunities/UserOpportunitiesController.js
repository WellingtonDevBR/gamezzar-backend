"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOpportunitiesController = void 0;
class UserOpportunitiesController {
    constructor(userOpportunitiesUseCase) {
        this.userOpportunitiesUseCase = userOpportunitiesUseCase;
    }
    async handle(request, response) {
        const { userId } = request.body;
        const opportunities = await this.userOpportunitiesUseCase.execute({
            userId,
        });
        return response.status(200).json(opportunities);
    }
}
exports.UserOpportunitiesController = UserOpportunitiesController;
//# sourceMappingURL=UserOpportunitiesController.js.map