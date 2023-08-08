import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IGameRepository } from "../../../../domain/repository/IGameRepository";

interface Input {
  gameId: string;
}
interface Output {}

export class GetAllInterestedUsersUseCase implements UseCase<Input, Output> {
  constructor(private gameRepository: IGameRepository) {}
  async execute(input: Input): Promise<Output> {
    const interestedUsers = await await this.gameRepository.getAllInterestedUsers(input.gameId);
    const formattedInterestedUsers = convertObjectToSnakeCase(interestedUsers);
    return formattedInterestedUsers;
  }
}
