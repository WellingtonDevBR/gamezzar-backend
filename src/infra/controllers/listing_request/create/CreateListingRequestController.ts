import { Request, Response } from "express";
import { CreateListingRequestUseCase } from "../../../../application/use-cases/listing_request/create/CreateListingRequestUseCase";

export class CreateListingRequestController {
  constructor(
    private createListingRequestUseCase: CreateListingRequestUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      fullName,
      email,
      title,
      description,
      image,
      platform,
      region,
      officialLink,
      status,
    } = request.body;
    try {
      await this.createListingRequestUseCase.execute({
        fullName,
        email,
        gameTitle: title,
        description,
        officialLink,
        imagePath: image,
        platform,
        region,
        status: "pending",
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error || "Unexpected error.",
      });
    }
  }
}
