"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedbackUseCase = void 0;
const FeedbackFactory_1 = require("../../../../domain/factories/FeedbackFactory");
class CreateFeedbackUseCase {
    constructor(feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }
    async execute(input) {
        const feedbackFactory = FeedbackFactory_1.FeedbackFactory.create(input.transactionId, input.rating, input.giverId, input.receiverId, input.comment);
        this.feedbackRepository.create(feedbackFactory);
        return {
            status: "success",
            message: "feedback given",
        };
    }
}
exports.CreateFeedbackUseCase = CreateFeedbackUseCase;
//# sourceMappingURL=CreateFeedbackUseCase.js.map