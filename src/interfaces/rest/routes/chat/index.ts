import { FindChatByUserIdUseCase } from "../../../../application/use-cases/chat/findByUserId/FindChatByUserIdUseCase";
import { FindChatByUserIdController } from "../../../../infra/controllers/chat/findByUserId/FindChatByUserIdController";
import { DynamoDbChatRepository } from "../../../../infra/database/sequelize/repositories/chat/DynamoDBChatRepository";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";

const dybamoDbChatRepository = new DynamoDbChatRepository();
const usersRepository = new SqlServerUserRepository();

// find chat by user id
const findChatByUserIdUseCase = new FindChatByUserIdUseCase(
  dybamoDbChatRepository,
  usersRepository
);
const findChatByUserIdController = new FindChatByUserIdController(
  findChatByUserIdUseCase
);

export { findChatByUserIdController };
