import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";

interface Input {}

interface Output {}

export class GetUserPopularCollectionUseCase implements UseCase<Input, Output> {
  constructor(private userGameRepository: IUserGameRepository) {}
  async execute(input: Input): Promise<Output> {
    return await this.userGameRepository.getPopularCollectionByUserId();
  }
}
