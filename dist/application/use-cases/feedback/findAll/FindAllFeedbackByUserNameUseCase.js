"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllFeedbackByUserNameUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class FindAllFeedbackByUserNameUseCase {
    constructor(feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }
    async execute(input) {
        const feedbacks = await this.feedbackRepository.findAllByUserName(input.userName);
        const feedbacksFormatted = (0, objectConverter_1.convertObjectToSnakeCase)(feedbacks);
        return feedbacksFormatted;
    }
}
exports.FindAllFeedbackByUserNameUseCase = FindAllFeedbackByUserNameUseCase;
//# sourceMappingURL=FindAllFeedbackByUserNameUseCase.js.map