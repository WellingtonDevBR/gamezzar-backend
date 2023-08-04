"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListingRequestController = void 0;
const CreateListingRequestUseCase_1 = require("../../../../application/use-cases/listing_request/create/CreateListingRequestUseCase");
const CreateListingRequestController_1 = require("../../../../infra/controllers/listing_request/create/CreateListingRequestController");
const DynamoDbListingRequestRepository_1 = require("../../../../infra/database/sequelize/repositories/listing_request/DynamoDbListingRequestRepository");
const dynamoDbListingRequestRepository = new DynamoDbListingRequestRepository_1.DynamoDbListingRequestRepository();
const createListingRequestUseCase = new CreateListingRequestUseCase_1.CreateListingRequestUseCase(dynamoDbListingRequestRepository);
const createListingRequestController = new CreateListingRequestController_1.CreateListingRequestController(createListingRequestUseCase);
exports.createListingRequestController = createListingRequestController;
//# sourceMappingURL=index.js.map