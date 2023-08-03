import { Transaction } from "../entities/TransactionId";

export class TransactionFactory {
  static create(
    bidderId: string,
    receiverId: string,
    bidderGameId: string,
    receiverGameId: string,
    status: string,
  ): Transaction {
    return Transaction.createTransaction({
      bidderId,
      receiverId,
      bidderGameId,
      receiverGameId,
      status,
    });
  }
}
