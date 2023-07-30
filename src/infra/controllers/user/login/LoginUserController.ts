import { Request, Response } from "express";
import {
  LoginUserUseCase,
  UserNotFoundException,
  UserPasswordIsInvalidException,
} from "../../../../application/use-cases/user/login/LoginUserUseCase";

export class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const result = await this.loginUserUseCase.execute({
        email,
        password,
      });
      return response.status(200).json(result);
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        return response.status(404).json({
          status: "error",
          message: "User not found.", // Custom error message for user not found
        });
      }

      if (error instanceof UserPasswordIsInvalidException) {
        return response.status(401).json({
          status: "error",
          message: "Password is invalid", // Custom error message for invalid password
        });
      }

      return response.status(400).json({
        message: "Unexpected Error",
      });
    }
  }
}
