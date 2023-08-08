"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindChatByUserIdController = void 0;
class FindChatByUserIdController {
    constructor(findChatByUserIdUseCase) {
        this.findChatByUserIdUseCase = findChatByUserIdUseCase;
    }
    async handle(request, response) {
        console.log(request);
        try {
            const { userId } = request.body;
            const chats = await this.findChatByUserIdUseCase.execute({ userId });
            return response.status(200).json(chats);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.FindChatByUserIdController = FindChatByUserIdController;
//# sourceMappingURL=FindChatByUserIdController.js.map