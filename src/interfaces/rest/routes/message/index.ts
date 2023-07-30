import { CreateMessageUseCase } from "../../../../application/use-cases/message/create/CreateMessageUseCase";
import { RetrieveAllMessagesByChatIdUseCase } from "../../../../application/use-cases/message/retreiveAllMessages/RetrieveAllMessagesByChatIdUseCase";
import { CreateMessageController } from "../../../../infra/controllers/message/create/CreateMessageController";
import { RetrieveAllMessagesByChatIdController } from "../../../../infra/controllers/message/retrieveAllMesages/RetrieveAllMessagesByChatIdController";
import { DynamoDbChatRepository } from "../../../../infra/database/sequelize/repositories/chat/DynamoDBChatRepository";
import { DynamoDbMessageRepository } from "../../../../infra/database/sequelize/repositories/message/DynamoDbMessageRepository";

const dynamoDbChatRepository = new DynamoDbChatRepository();
const dybamoDbMessageRepository = new DynamoDbMessageRepository();

// Create Message
const creatMessageUseCase = new CreateMessageUseCase(
  dybamoDbMessageRepository,
  dynamoDbChatRepository
);

const createMessageController = new CreateMessageController(
  creatMessageUseCase
);

// Retrieve All Messages By Chat Id
const retrieveAllMessagesByChatIdUseCase =
  new RetrieveAllMessagesByChatIdUseCase(dybamoDbMessageRepository);

const retrieveAllMessagesByChatIdController =
  new RetrieveAllMessagesByChatIdController(retrieveAllMessagesByChatIdUseCase);

export { createMessageController, retrieveAllMessagesByChatIdController };
