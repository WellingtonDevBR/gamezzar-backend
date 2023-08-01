import { Request, Response } from "express";
import { UpdateDetailsByIdUseCase } from "../../../../application/use-cases/user/update/UpdateDetailsByIdUseCase";

export class UpdateDetailsByIdController {
  constructor(private updateDetailsByIdUseCase: UpdateDetailsByIdUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { userId, email, phone, gender, address, password, country, dob } =
        request.body;
      const result = await this.updateDetailsByIdUseCase.execute({
        userId,
        email,
        mobileNumber: phone,
        address,
        gender,
        password,
        country,
        dob,
      });
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
