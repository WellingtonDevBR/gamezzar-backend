import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IGameRepository } from "../../../../domain/repository/IGameRepository";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";

interface GetGameByIdInput {
  id: string;
}
interface GetGameByIdOutput {}

export class GetGameByIdUseCase
  implements UseCase<GetGameByIdInput, GetGameByIdOutput>
{
  constructor(
    private gameRepository: IGameRepository,
    private userGameRepository: IUserGameRepository
  ) {}
  async execute(request: GetGameByIdInput): Promise<GetGameByIdOutput> {
    const game = await this.gameRepository.getById(request.id);
    const userGame = await this.userGameRepository.getByGameId(request.id);
    console.log(userGame);
    const formattedGame = convertObjectToSnakeCase(game);
    const formattedUserGame = convertObjectToSnakeCase(userGame);
    return {
      game: formattedGame,
      owners: formattedUserGame
    };
  }
}
