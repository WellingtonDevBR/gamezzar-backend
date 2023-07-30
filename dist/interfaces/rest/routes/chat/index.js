"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findChatByUserIdController = void 0;
const FindChatByUserIdUseCase_1 = require("../../../../application/use-cases/chat/findByUserId/FindChatByUserIdUseCase");
const FindChatByUserIdController_1 = require("../../../../infra/controllers/chat/findByUserId/FindChatByUserIdController");
const DynamoDBChatRepository_1 = require("../../../../infra/database/sequelize/repositories/chat/DynamoDBChatRepository");
const SqlServerUserRepository_1 = require("../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository");
const dybamoDbChatRepository = new DynamoDBChatRepository_1.DynamoDbChatRepository();
const usersRepository = new SqlServerUserRepository_1.SqlServerUserRepository();
const findChatByUserIdUseCase = new FindChatByUserIdUseCase_1.FindChatByUserIdUseCase(dybamoDbChatRepository, usersRepository);
const findChatByUserIdController = new FindChatByUserIdController_1.FindChatByUserIdController(findChatByUserIdUseCase);
exports.findChatByUserIdController = findChatByUserIdController;
//# sourceMappingURL=index.js.map