"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionController = void 0;
class CreateTransactionController {
    constructor(createTransactionUseCase) {
        this.createTransactionUseCase = createTransactionUseCase;
    }
    async handle(request, response) {
        try {
            const { bidder_id, receiver_id, bidder_game_id, receiver_game_id, status, } = request.body;
            console.log(request.body);
            const transaction = await this.createTransactionUseCase.execute({
                bidderId: bidder_id,
                receiverId: receiver_id,
                bidderGameId: bidder_game_id,
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