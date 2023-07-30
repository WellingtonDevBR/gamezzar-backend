"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageController = void 0;
const server_1 = require("../../../../server");
class CreateMessageController {
    constructor(createMessageUseCase) {
        this.createMessageUseCase = createMessageUseCase;
    }
    async handle(request, response) {
        try {
            const { interested_user_id, owner_user_id, message, owner_game_id, is_sender, chat_id } = request.body;
            const result = await this.createMessageUseCase.execute({
                senderId: is_sender ? owner_user_id : interested_user_id,
                receiverId: is_sender ? interested_user_id : owner_user_id,
                content: message,
                gameId: owner_game_id,
            });
            server_1.io.to(`chat-${chat_id}`).emit("newMessage", {
                sender_id: is_sender ? owner_user_id : interested_user_id,
                receiver_id: is_sender ? interested_user_id : owner_user_id,
                content: message,
                game_id: owner_game_id,
                created_at: new Date(),
            });
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(400).json({ message: error });
        }
    }
}
exports.CreateMessageController = CreateMessageController;
//# sourceMappingURL=CreateMessageController.js.map