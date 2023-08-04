"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFactory = void 0;
const TransactionId_1 = require("../entities/TransactionId");
class TransactionFactory {
    static create(bidderId, receiverId, bidderGameId, receiverGameId, status) {
        return TransactionId_1.Transaction.createTransaction({
            bidderId,
            receiverId,
            bidderGameId,
            receiverGameId,
            status,
        });
    }
}
exports.TransactionFactory = TransactionFactory;
//# sourceMappingURL=TransactionFactory.js.map