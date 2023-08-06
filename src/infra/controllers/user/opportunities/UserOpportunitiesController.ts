import { Request, Response } from "express";
import { UserOpportunitiesUseCase } from "../../../../application/use-cases/user/Opportunities/UserOpportunitiesUseCase";

export class UserOpportunitiesController {
  constructor(private userOpportunitiesUseCase: UserOpportunitiesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;
    const opportunities = await this.userOpportunitiesUseCase.execute({
      userId,
    });
    return response.status(200).json(opportunities);
  }
}
