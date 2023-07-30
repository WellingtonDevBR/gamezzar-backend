import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface GetAllUsersUseCaseInput {}
interface GetAllUsersUseCaseOutput {}

export class GetAllUsersUseCase
  implements UseCase<GetAllUsersUseCaseInput, GetAllUsersUseCaseOutput>
{
  constructor(private usersRepository: IUserRepository) {}
  async execute(
    request: GetAllUsersUseCaseInput
  ): Promise<GetAllUsersUseCaseOutput> {
    const users = await this.usersRepository.getAll();
    const formattedUsers = convertObjectToSnakeCase(users);
    return formattedUsers;
  }
}
