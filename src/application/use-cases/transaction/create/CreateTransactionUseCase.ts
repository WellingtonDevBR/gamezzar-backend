import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { TransactionFactory } from "../../../../domain/factories/TransactionFactory";
import { ITransactionRepository } from "../../../../domain/repository/ITransactionRepository";

interface Input {
  bidderId: string;
  receiverId: string;
  bidderGameId: string;
  receiverGameId: string;
  status: string;
}
interface Output {}
export class CreateTransactionUseCase implements UseCase<Input, Output> {
  constructor(private transactionRepository: ITransactionRepository) {}
  async execute(input: Input): Promise<Output> {
    const transactionFactory = TransactionFactory.create(
      input.bidderId,
      input.receiverId,
      input.bidderGameId,
      input.receiverGameId,
      input.status
    );
    return await this.transactionRepository.create(transactionFactory);
  }
}
