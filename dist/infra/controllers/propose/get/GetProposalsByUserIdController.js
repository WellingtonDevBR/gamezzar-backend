"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProposalsByUserIdController = void 0;
class GetProposalsByUserIdController {
    constructor(getProposalsByUserIdUseCase) {
        this.getProposalsByUserIdUseCase = getProposalsByUserIdUseCase;
    }
    async handle(request, response) {
        try {
            const { userId } = request.body;
            const propose = await this.getProposalsByUserIdUseCase.execute({
                userId,
            });
            return response.status(200).json(propose);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetProposalsByUserIdController = GetProposalsByUserIdController;
//# sourceMappingURL=GetProposalsByUserIdController.js.map