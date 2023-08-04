"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllFeedbackByUserNameController = void 0;
class FindAllFeedbackByUserNameController {
    constructor(findAllFeedbackByUserNameUseCase) {
        this.findAllFeedbackByUserNameUseCase = findAllFeedbackByUserNameUseCase;
    }
    async handle(request, response) {
        try {
            const { username } = request.params;
            const feedbacks = await this.findAllFeedbackByUserNameUseCase.execute({
                userName: username,
            });
            return response.status(200).json(feedbacks);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.FindAllFeedbackByUserNameController = FindAllFeedbackByUserNameController;
//# sourceMappingURL=FindAllFeedbackByUserNameController.js.map