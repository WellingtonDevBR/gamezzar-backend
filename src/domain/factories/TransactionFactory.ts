import { Transaction } from "../entities/TransactionId";

export class TransactionFactory {
  static create(
    senderId: string,
    receiverId: string,
    senderGameId: string,
    receiverGameId: string,
    status: string
  ): Transaction {
    return Transaction.createTransaction({
      senderId,
      receiverId,
      senderGameId,
      receiverGameId,
      status,
    });
  }
}
