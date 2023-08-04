import { CreateListingRequestUseCase } from "../../../../application/use-cases/listing_request/create/CreateListingRequestUseCase";
import { CreateListingRequestController } from "../../../../infra/controllers/listing_request/create/CreateListingRequestController";
import { DynamoDbListingRequestRepository } from "../../../../infra/database/sequelize/repositories/listing_request/DynamoDbListingRequestRepository";

const dynamoDbListingRequestRepository = new DynamoDbListingRequestRepository();

const createListingRequestUseCase = new CreateListingRequestUseCase(
  dynamoDbListingRequestRepository
);

const createListingRequestController = new CreateListingRequestController(
  createListingRequestUseCase
);

export { createListingRequestController };
