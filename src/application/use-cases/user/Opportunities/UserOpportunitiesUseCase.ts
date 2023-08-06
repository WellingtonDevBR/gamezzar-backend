import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  userId: string;
}

interface Output {}

export class UserOpportunitiesUseCase implements UseCase<Input, Output> {
  constructor(private userRepository: IUserRepository) {}

  async execute({ userId }: Input): Promise<Output> {
    const opportunities = await this.userRepository.getOpportunities(userId);
    const formattedOpportunities = convertObjectToSnakeCase(opportunities);
    return formattedOpportunities;
  }
}
