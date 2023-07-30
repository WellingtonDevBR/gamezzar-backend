import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";
import paseto from "paseto";
import {
  PASETO_EXPIRE_TIME,
  PASETO_PRIVATE_KEY,
} from "../../../../@seedowrk/helper/constants";

const {
  V4: { sign },
} = paseto;

interface LoginUserRequest {
  email: string;
  password: string;
}

interface LoginUserResponse {
  token: string;
}

export class UserNotFoundException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, UserNotFoundException.prototype);
  }
}

export class UserPasswordIsInvalidException extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, UserPasswordIsInvalidException.prototype);
  }
}

export class LoginUserUseCase
  implements UseCase<LoginUserRequest, LoginUserResponse>
{
  constructor(private userRepository: IUserRepository) {}

  async execute(request: LoginUserRequest): Promise<LoginUserResponse> {
    const user = await this.userRepository.getByEmail(request.email);

    if (!user) throw new UserNotFoundException("User not found");

    if (user.Password != request.password)
      throw new UserPasswordIsInvalidException("Invalid password");

    const token = await sign(
      { email: request.email, userId: user.UserId, exp: PASETO_EXPIRE_TIME },
      PASETO_PRIVATE_KEY
    );

    return {
      token,
    };
  }
}
