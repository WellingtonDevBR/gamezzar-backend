import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface GetUserByUserNameInput {
  userName: string;
}

interface GetUserByUserNameOutput {
  id: string;
  first_name: string;
  last_name: string;
  user_name: string;
  avatar: string;
  email: string;
  password: string;
  updated_at: string;
  created_at: string;
}

export class GetUserByUserNameUseCase
  implements UseCase<GetUserByUserNameInput, GetUserByUserNameOutput>
{
  constructor(private usersRepository: IUserRepository) {}
  async execute(
    request: GetUserByUserNameInput
  ): Promise<GetUserByUserNameOutput> {
    const user = await this.usersRepository.getByUserName(request.userName);
    if (!user) throw new Error("User not found");
    return {
      id: user.UserID,
      first_name: user.FirstName,
      last_name: user.LastName,
      user_name: user.UserName,
      avatar: user.Avatar,
      email: user.Email,
      password: user.Password,
      updated_at: user.updatedAt,
      created_at: user.createdAt,
    };
  }
}
