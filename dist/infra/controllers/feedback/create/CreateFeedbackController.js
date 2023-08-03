"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedbackController = void 0;
class CreateFeedbackController {
    constructor(createFeedbackUseCase) {
        this.createFeedbackUseCase = createFeedbackUseCase;
    }
    async handle(request, response) {
        try {
            const { transaction_id, score, comment, giver_id, receiver_id, userId } = request.body;
            const result = await this.createFeedbackUseCase.execute({
                transactionId: transaction_id,
                rating: score,
                comment,
                giverId: userId,
                receiverId: receiver_id,
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
exports.CreateFeedbackController = CreateFeedbackController;
//# sourceMappingURL=CreateFeedbackController.js.map