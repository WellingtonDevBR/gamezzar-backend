"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionController = void 0;
const CreateTransactionUseCase_1 = require("../../../../application/use-cases/transaction/create/CreateTransactionUseCase");
const CreateTransactionController_1 = require("../../../../infra/controllers/transaction/create/CreateTransactionController");
const SqlServerTransactionRepository_1 = require("../../../../infra/database/sequelize/repositories/transaction/SqlServerTransactionRepository");
const transactionRepository = new SqlServerTransactionRepository_1.SqlServerTransactionRepository();
const createTransactionUseCase = new CreateTransactionUseCase_1.CreateTransactionUseCase(transactionRepository);
const createTransactionController = new CreateTransactionController_1.CreateTransactionController(createTransactionUseCase);
exports.createTransactionController = createTransactionController;
//# sourceMappingURL=index.js.map