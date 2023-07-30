import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  email: string;
}

interface Output {}

export class GetUserUseCase implements UseCase<Input, Output> {
  constructor(private usersRepository: IUserRepository) {}
  async execute(request: Input): Promise<Output> {
    const user = await this.usersRepository.getByEmail(request.email);
    const formattedUser = convertObjectToSnakeCase(user);
    return formattedUser;
  }
}
