import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { FollowFactory } from "../../../../domain/factories/FollowFactory";
import { IFollowRepository } from "../../../../domain/repository/IFollowRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  userId: string;
  followeeUsername: string;
}
interface Output {}

export class UnfollowUseCase implements UseCase<Input, Output> {
  constructor(
    private followRepository: IFollowRepository,
    private usersRepository: IUserRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const followee = await this.usersRepository.getByUserName(
      input.followeeUsername
    );
    await this.followRepository.unfollow(input.userId, followee.UserId);
    return {
      status: "success",
      message: "Successfully created",
    };
  }
}
