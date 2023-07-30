import { Request, Response } from "express"; // This import was missing.
import { CreateUserUseCase } from "../../../../application/use-cases/user/create/CreateUserUseCase";

export class CreateUserController {
  constructor(private userCreateUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { first_name, last_name, user_name, avatar, email, password, address } =
        request.body;
      const output = await this.userCreateUseCase.execute({
        firstname: first_name,
        lastname: last_name,
        username: user_name,
        avatar,
        email,
        password,
      });
      response.status(201).send({
        status: "success",
        token: output.token,
      });
    } catch (error: any) {
      response.status(400).send({
        status: "error",
        message: error.message,
      });
    }
  }
}
