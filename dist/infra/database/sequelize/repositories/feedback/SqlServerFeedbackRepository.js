"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerFeedbackRepository = void 0;
const Feedback_1 = require("../../models/Feedback");
class SqlServerFeedbackRepository {
    async create(feedback) {
        const feedbackInformation = feedback.getAllFeedbackInformation();
        return await Feedback_1.FeedbackModel.create({
            FeedbackId: feedback.getId(),
            TransactionId: feedbackInformation.transactionId,
            Rating: feedbackInformation.rating,
            Comment: feedbackInformation.comment,
            GiverId: feedbackInformation.giverId,
            ReceiverId: feedbackInformation.receiverId,
            Status: "Completed",
        });
    }
    async findAllByUserId(userId) {
        return await Feedback_1.FeedbackModel.findAll({
            where: {
                ReceiverId: userId
            }
        });
    }
}
exports.SqlServerFeedbackRepository = SqlServerFeedbackRepository;
//# sourceMappingURL=SqlServerFeedbackRepository.js.map