"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Transaction extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createTransaction(props, id) {
        const transaction = new Transaction(props, id);
        return transaction;
    }
    getAllTransactionInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=TransactionId.js.map