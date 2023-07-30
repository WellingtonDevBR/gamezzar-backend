import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { IEditionRepository } from "../../../../domain/repository/IEditionRepository";
import { IPlatformRepository } from "../../../../domain/repository/IPlatformRepository";
import { IRegionRepository } from "../../../../domain/repository/IRegionRepository";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  email: string;
  gameId: string;
  region: string;
  platform: string;
  edition: string;
  satisfaction: number;
  disposition: string;
  disc_condition: number;
  cover_condition: number;
  manual_condition: number;
  description: string;
}

interface Output {}

export class CreateUserGameUseCase implements UseCase<Input, Output> {
  constructor(
    private userGameRepository: IUserGameRepository,
    private userRepository: IUserRepository,
    private regionRepository: IRegionRepository,
    private platformRepository: IPlatformRepository,
    private editionRepository: IEditionRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);
    const region = await this.regionRepository.getByName(input.region);
    const platform = await this.platformRepository.getByName(input.platform);
    console.log(input)
    const edition = await this.editionRepository.getByName(input.edition);
    const userGame = await this.userGameRepository.createOrUpdate({
      ...input,
      userId: user.UserId,
      regionId: region.RegionId,
      platformId: platform.PlatformId,
      editionId: edition.EditionId,
    });

    return {
      status: "success",
      message: "Successfully created user game",
    };
  }
}
