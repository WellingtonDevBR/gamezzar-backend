import { Request, Response } from "express";
import { GetAllUserGameUseCase } from "../../../../application/use-cases/user_game/get_all/GetAllUserGameUseCase";
import { V4 } from "paseto";
import { createPrivateKey } from "crypto";
import { PASETO_PRIVATE_KEY } from "../../../../@seedowrk/helper/constants";

export class GetAllUserGameController {
  constructor(private getAllUserGameUseCase: GetAllUserGameUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { offset } = request.query;
      const authHeader = request.headers.authorization;
      const token = authHeader?.split(" ")[1];

      if (token == "undefined" || token == undefined) {
        const result = await this.getAllUserGameUseCase.execute({
          offset: Number(offset),
        });
        return response.status(200).json(result);
      } else {
        const privateKey = createPrivateKey({
          key: PASETO_PRIVATE_KEY,
          format: "pem",
          type: "pkcs8",
        });

        const token = authHeader!.split(" ")[1]; // Extract token from 'Bearer tokenString'
        const payload = await V4.verify(token, privateKey); // Decoding token with private key
        const userId: any = payload.userId;

        const result = await this.getAllUserGameUseCase.execute({
          offset: Number(offset),
          userId: userId,
        });
        return response.status(200).json(result);
      }
    } catch (error) {
      return response.status(500).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
