import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { TransactionFactory } from "../../../../domain/factories/TransactionFactory";
import { ITransactionRepository } from "../../../../domain/repository/ITransactionRepository";

interface Input {
  senderId: string;
  receiverId: string;
  senderGameId: string;
  receiverGameId: string;
  status: string;
}
interface Output {}
export class CreateTransactionUseCase implements UseCase<Input, Output> {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute(input: Input): Promise<Output> {
    const transactionFactory = TransactionFactory.create(
      input.senderId,
      input.receiverId,
      input.senderGameId,
      input.receiverGameId,
      input.status
    );
    return await this.transactionRepository.create(transactionFactory);
  }
}
