"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionUseCase = void 0;
const TransactionFactory_1 = require("../../../../domain/factories/TransactionFactory");
class CreateTransactionUseCase {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async execute(input) {
        const transactionFactory = TransactionFactory_1.TransactionFactory.create(input.bidderId, input.receiverId, input.bidderGameId, input.receiverGameId, input.status);
        return await this.transactionRepository.create(transactionFactory);
    }
}
exports.CreateTransactionUseCase = CreateTransactionUseCase;
//# sourceMappingURL=CreateTransactionUseCase.js.map