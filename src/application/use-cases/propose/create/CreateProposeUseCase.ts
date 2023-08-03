import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { ProposeFactory } from "../../../../domain/factories/ProposeFactory";
import { IProposeRepository } from "../../../../domain/repository/IProposeRepository";

interface Input {
  bidderId: string;
  receiverId: string;
  bidderGameId: string;
  receiverGameId: string;
  status: string;
}
interface Output {}

export class CreateProposeUseCase implements UseCase<Input, Output> {
  constructor(private proposeRepository: IProposeRepository) {}
  async execute(input: Input): Promise<Output> {
    const proposeFactory = ProposeFactory.create(
      input.bidderId,
      input.receiverId,
      input.bidderGameId,
      input.receiverGameId,
      input.status
    );
    const proposeCreated = await this.proposeRepository.create(proposeFactory);
    if (!proposeCreated) {
      throw new Error("Propose not created");
    }
    return {
      status: "success",
      message: "Propose created",
    };
  }
}
