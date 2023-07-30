import { GetUserUseCase } from "../../../../application/use-cases/user/get/GetUserUseCase";

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}
  async handle(request: any, response: any) {
    try {
      const { email } = request.body;

      const user = await this.getUserUseCase.execute({ email });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ error: "Failed to get user" });
    }
  }
}
