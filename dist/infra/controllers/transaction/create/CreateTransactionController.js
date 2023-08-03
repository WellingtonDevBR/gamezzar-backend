"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionController = void 0;
class CreateTransactionController {
    constructor(createTransactionUseCase) {
        this.createTransactionUseCase = createTransactionUseCase;
    }
    async handle(request, response) {
        try {
            const { sender_id, receiver_id, sender_game_id, receiver_game_id, status, } = request.body;
            const transaction = await this.createTransactionUseCase.execute({
                senderId: sender_id,
                receiverId: receiver_id,
                senderGameId: sender_game_id,
                receiverGameId: receiver_game_id,
                status,
            });
            return response.status(201).json(transaction);
        }
        catch (error) {
            return response.status(400).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.CreateTransactionController = CreateTransactionController;
//# sourceMappingURL=CreateTransactionController.js.map