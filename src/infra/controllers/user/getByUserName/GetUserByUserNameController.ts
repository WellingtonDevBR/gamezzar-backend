import { Request, Response } from "express";
import { GetUserByUserNameUseCase } from "../../../../application/use-cases/user/getByUserName/GetUserByUserNameUseCase";

export class GetUserByUserNameController {
  constructor(private getUserByUserName: GetUserByUserNameUseCase) {}
  async handle(request: Request, response: Response): Promise<void> {
    try {
      const { user_name } = request.params;
      const user = await this.getUserByUserName.execute({
        userName: user_name,
      });
      response.status(200).json(user);
    } catch (error) {
      response.status(400).json({ message: error });
    }
  }
}
