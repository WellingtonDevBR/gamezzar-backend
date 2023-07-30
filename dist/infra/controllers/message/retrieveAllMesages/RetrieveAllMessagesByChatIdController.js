"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveAllMessagesByChatIdController = void 0;
class RetrieveAllMessagesByChatIdController {
    constructor(retrieveAllMessagesByChatIdUseCase) {
        this.retrieveAllMessagesByChatIdUseCase = retrieveAllMessagesByChatIdUseCase;
    }
    async handle(request, response) {
        try {
            const { chatId } = request.params;
            const result = await this.retrieveAllMessagesByChatIdUseCase.execute({
                chatId,
            });
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.RetrieveAllMessagesByChatIdController = RetrieveAllMessagesByChatIdController;
//# sourceMappingURL=RetrieveAllMessagesByChatIdController.js.map