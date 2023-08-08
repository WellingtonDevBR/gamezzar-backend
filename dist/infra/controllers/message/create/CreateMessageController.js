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
            const { chat_id, bidder, receiver, receiver_game, message, is_sender } = request.body;
            const result = await this.createMessageUseCase.execute({
                senderId: is_sender ? receiver.user_id : bidder.user_id,
                receiverId: is_sender ? bidder.user_id : receiver.user_id,
                content: message,
                gameId: receiver_game.game_id,
            });
            server_1.io.to(`chat-${chat_id}`).emit("newMessage", {
                sender_id: is_sender ? receiver.user_id : bidder.user_id,
                receiver_id: is_sender ? bidder.user_id : receiver.user_id,
                content: message,
                game_id: receiver_game.game_id,
                created_at: new Date(),
            });
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(400).send(error);
        }
    }
}
exports.CreateMessageController = CreateMessageController;
//# sourceMappingURL=CreateMessageController.js.map