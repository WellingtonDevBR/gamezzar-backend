import { UseCase } from "../../../../@seedowrk/domain/usecase";
import {
  PASETO_EXPIRE_TIME,
  PASETO_PRIVATE_KEY,
} from "../../../../@seedowrk/helper/constants";
import { AwsClient } from "../../../../@seedowrk/service/aws-client";
import { UserFactory } from "../../../../domain/factories/UserFactory";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";
import paseto from "paseto";
require("dotenv").config();

const {
  V4: { sign },
} = paseto;

export interface CreateUserRequest {
  firstname: string;
  lastname: string;
  username: string;
  avatar: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  token: string;
}

export class CreateUserUseCase
  implements UseCase<CreateUserRequest, CreateUserResponse>
{
  constructor(private userRepository: IUserRepository) {}
  async execute(input: CreateUserRequest): Promise<CreateUserResponse> {
    const userAlreadyExists = await this.userRepository.getByEmail(input.email);

    if (userAlreadyExists) throw new Error("User already exists");

    input.avatar = "avatar1.svg";
    const user = UserFactory.create(
      input.firstname,
      input.lastname,
      input.username,
      input.avatar,
      input.email,
      input.password
    );

    await this.userRepository.save(user);
    const token = await sign(
      { email: input.email, userId: user.getId(), userexp: PASETO_EXPIRE_TIME },
      PASETO_PRIVATE_KEY
    );

    await new AwsClient(
      process.env.AWS_S3_ACCESS_KEY_ID,
      process.env.AWS_S3_SECRET_ACCESS_KEY
    ).sendWelcomingEmail({
      firstName: input.firstname,
      lastName: input.lastname,
      email: input.email,
    });

    return {
      token,
    };
  }
}
