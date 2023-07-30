import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IProposeRepository } from "../../../../domain/repository/IProposeRepository";

interface Input {
  userId: string;
}
interface Output {}

export class GetProposalsByUserIdUseCase implements UseCase<Input, Output> {
  constructor(private proposeRepository: IProposeRepository) {}
  async execute(input: Input): Promise<Output> {
    const propose = await this.proposeRepository.getByUserId(input.userId);
    const formattedPropose = convertObjectToSnakeCase(propose);
    return {
      proposals: formattedPropose,
      user_id: input.userId,
    };
  }
}
