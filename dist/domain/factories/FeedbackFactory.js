"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackFactory = void 0;
const Feedback_1 = require("../entities/Feedback");
class FeedbackFactory {
    static create(transactionId, rating, giverId, receiverId, comment) {
        return Feedback_1.Feedback.createFeedback({
            transactionId,
            rating,
            comment,
            giverId,
            receiverId,
        });
    }
}
exports.FeedbackFactory = FeedbackFactory;
//# sourceMappingURL=FeedbackFactory.js.map