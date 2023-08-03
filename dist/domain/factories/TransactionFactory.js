"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFactory = void 0;
const TransactionId_1 = require("../entities/TransactionId");
class TransactionFactory {
    static create(senderId, receiverId, senderGameId, receiverGameId, status) {
        return TransactionId_1.Transaction.createTransaction({
            senderId,
            receiverId,
            senderGameId,
            receiverGameId,
            status,
        });
    }
}
exports.TransactionFactory = TransactionFactory;
//# sourceMappingURL=TransactionFactory.js.map