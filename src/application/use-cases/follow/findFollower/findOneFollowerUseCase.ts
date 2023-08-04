import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IFollowRepository } from "../../../../domain/repository/IFollowRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  username: string;
}
interface Output {}

export class FindOneFollowerUseCase implements UseCase<Input, Output> {
  constructor(
    private followRepository: IFollowRepository,
    private userRepository: IUserRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByUserName(input.username);
    const follower = await this.followRepository.findFollower(user.UserId);
    const formattedFollower = convertObjectToSnakeCase(follower);
    return formattedFollower;
  }
}
