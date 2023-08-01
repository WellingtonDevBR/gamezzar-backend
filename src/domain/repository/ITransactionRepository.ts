import { Transaction } from "../entities/TransactionId";

export interface ITransactionRepository {
  create(transaction: Transaction): Promise<any>;
  findAllByUserId(userId: string): Promise<any>;
}
