import { Request, Response } from "express";
import { GetProposalsByUserIdUseCase } from "../../../../application/use-cases/propose/get/GetProposalsByUserIdUseCase";

export class GetProposalsByUserIdController {
  constructor(
    private getProposalsByUserIdUseCase: GetProposalsByUserIdUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId } = request.body;
      const propose = await this.getProposalsByUserIdUseCase.execute({
        userId,
      });
      return response.status(200).json(propose);
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
