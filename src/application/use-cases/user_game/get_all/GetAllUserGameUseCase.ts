import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";

interface GetAllUserGameInput {}
interface GetAllUserGameOutput {}

export class GetAllUserGameUseCase
  implements UseCase<GetAllUserGameInput, GetAllUserGameOutput>
{
  constructor(private userGameRepository: IUserGameRepository) {}
  async execute(request: GetAllUserGameInput): Promise<GetAllUserGameOutput> {
    const userGames = await this.userGameRepository.getAll();
    const formattedUserGames = convertObjectToSnakeCase(userGames);
    return formattedUserGames;
  }
}
