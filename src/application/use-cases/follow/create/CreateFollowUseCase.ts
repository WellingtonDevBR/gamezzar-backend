import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { FollowFactory } from "../../../../domain/factories/FollowFactory";
import { IFollowRepository } from "../../../../domain/repository/IFollowRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  userId: string;
  followeeUsername: string;
}
interface Output {}

export class CreateFollowUseCase implements UseCase<Input, Output> {
  constructor(
    private followRepository: IFollowRepository,
    private usersRepository: IUserRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const followee = await this.usersRepository.getByUserName(
      input.followeeUsername
    );
    const followFactory = FollowFactory.create(input.userId, followee.UserId);
    const follow = await this.followRepository.create(followFactory);
    return {
      status: "success",
      message: "Successfully created",
    };
  }
}
