import { CreateTransactionUseCase } from "../../../../application/use-cases/transaction/create/CreateTransactionUseCase";
import { CreateTransactionController } from "../../../../infra/controllers/transaction/create/CreateTransactionController";
import { SqlServerTransactionRepository } from "../../../../infra/database/sequelize/repositories/transaction/SqlServerTransactionRepository";

const transactionRepository = new SqlServerTransactionRepository();
// Create Transaction Controller

const createTransactionUseCase = new CreateTransactionUseCase(
  transactionRepository
);
const createTransactionController = new CreateTransactionController(
  createTransactionUseCase
);

export { createTransactionController };
