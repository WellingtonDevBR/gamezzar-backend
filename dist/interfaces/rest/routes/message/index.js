"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveAllMessagesByChatIdController = exports.createMessageController = void 0;
const CreateMessageUseCase_1 = require("../../../../application/use-cases/message/create/CreateMessageUseCase");
const RetrieveAllMessagesByChatIdUseCase_1 = require("../../../../application/use-cases/message/retreiveAllMessages/RetrieveAllMessagesByChatIdUseCase");
const CreateMessageController_1 = require("../../../../infra/controllers/message/create/CreateMessageController");
const RetrieveAllMessagesByChatIdController_1 = require("../../../../infra/controllers/message/retrieveAllMesages/RetrieveAllMessagesByChatIdController");
const DynamoDBChatRepository_1 = require("../../../../infra/database/sequelize/repositories/chat/DynamoDBChatRepository");
const DynamoDbMessageRepository_1 = require("../../../../infra/database/sequelize/repositories/message/DynamoDbMessageRepository");
const dynamoDbChatRepository = new DynamoDBChatRepository_1.DynamoDbChatRepository();
const dybamoDbMessageRepository = new DynamoDbMessageRepository_1.DynamoDbMessageRepository();
const creatMessageUseCase = new CreateMessageUseCase_1.CreateMessageUseCase(dybamoDbMessageRepository, dynamoDbChatRepository);
const createMessageController = new CreateMessageController_1.CreateMessageController(creatMessageUseCase);
exports.createMessageController = createMessageController;
const retrieveAllMessagesByChatIdUseCase = new RetrieveAllMessagesByChatIdUseCase_1.RetrieveAllMessagesByChatIdUseCase(dybamoDbMessageRepository);
const retrieveAllMessagesByChatIdController = new RetrieveAllMessagesByChatIdController_1.RetrieveAllMessagesByChatIdController(retrieveAllMessagesByChatIdUseCase);
exports.retrieveAllMessagesByChatIdController = retrieveAllMessagesByChatIdController;
//# sourceMappingURL=index.js.map