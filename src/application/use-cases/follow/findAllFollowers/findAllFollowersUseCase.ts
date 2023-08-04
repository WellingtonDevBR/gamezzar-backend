import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IFollowRepository } from "../../../../domain/repository/IFollowRepository";

interface Input {
  userId: string;
}
interface Output {}

export class FindAllFollowersUseCase implements UseCase<Input, Output> {
  constructor(private followRepository: IFollowRepository) {}
  async execute(input: Input): Promise<Output> {
    const followers = await this.followRepository.findFollowers(input.userId);
    const formattedFollowers = convertObjectToSnakeCase(followers);
    return formattedFollowers;
  }
}
