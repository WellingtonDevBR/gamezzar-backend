import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IGameRepository } from "../../../../domain/repository/IGameRepository";

interface Input {
  name: string;
}

interface Output {}

export class SearchGameByNameUseCase implements UseCase<Input, Output> {
  constructor(private gamesRepository: IGameRepository) {}
  async execute(input: Input): Promise<Output> {
    const games = await this.gamesRepository.searchByName(input.name);
    if (games.length === 0) {
      return {};
    }

    const formattedGames = convertObjectToSnakeCase(games);
    return formattedGames;
  }
}
