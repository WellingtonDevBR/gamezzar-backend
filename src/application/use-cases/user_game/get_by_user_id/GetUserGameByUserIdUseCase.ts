import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface GetUserGameByUserIdUseCaseInput {
  email: string;
  gameId: string;
}
interface GetUserGameByUserIdUseCaseOutput {}

export class GetUserGameByUserIdUseCase
  implements
    UseCase<GetUserGameByUserIdUseCaseInput, GetUserGameByUserIdUseCaseOutput>
{
  constructor(
    private userGameRepository: IUserGameRepository,
    private usersRepository: IUserRepository
  ) {}
  async execute(
    request: GetUserGameByUserIdUseCaseInput
  ): Promise<GetUserGameByUserIdUseCaseOutput> {
    const user = await this.usersRepository.getByEmail(request.email);
    const userGame = await this.userGameRepository.getByUserId(
      user.UserId,
      request.gameId
    );

    if (!userGame) {
      throw new Error("User game not found");
    }
    return {
        status: 'success',
        found: true,
    };
  }
}
