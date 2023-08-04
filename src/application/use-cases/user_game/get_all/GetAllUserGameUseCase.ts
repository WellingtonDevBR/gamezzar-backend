import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";

interface GetAllUserGameInput {
  offset: number;
  userId?: string;
}
interface GetAllUserGameOutput {}

export class GetAllUserGameUseCase
  implements UseCase<GetAllUserGameInput, GetAllUserGameOutput>
{
  constructor(private userGameRepository: IUserGameRepository) {}
  async execute(input: GetAllUserGameInput): Promise<GetAllUserGameOutput> {
    const userGames = await this.userGameRepository.getAll(
      input.offset,
      input.userId
    );
    const formattedUserGames = convertObjectToSnakeCase(userGames);
    return formattedUserGames;
  }
}
