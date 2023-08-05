import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IGameRepository } from "../../../../domain/repository/IGameRepository";

interface InputUseCase {
  offset: number;
}
interface OutputUseCase {}

export class GetAllGamesUseCase
  implements UseCase<InputUseCase, OutputUseCase>
{
  constructor(private gameRepository: IGameRepository) {}
  async execute(input: InputUseCase): Promise<OutputUseCase> {
    const games = await this.gameRepository.getAll(input.offset);
    let convertedGames = convertObjectToSnakeCase(games);
    return convertedGames;
  }
}
