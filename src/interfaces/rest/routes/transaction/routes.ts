import express, { Request, Response } from "express";
import { createTransactionController } from ".";
import { SqlServerTransactionRepository } from "../../../../infra/database/sequelize/repositories/transaction/SqlServerTransactionRepository";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { authenticate } from "../../middleware/auth";

const transactionRoutes = express.Router();

transactionRoutes.post("/", authenticate, async (request: Request, response: Response) => {
  createTransactionController.handle(request, response);
});

transactionRoutes.get("/", authenticate, async (request: Request, response: Response) => {
  const transactions =
    await new SqlServerTransactionRepository().findAllByUserId(
      request.body.userId
    );
  const formattedTransaction = convertObjectToSnakeCase(transactions);
  response.status(200).json(formattedTransaction);
});

export { transactionRoutes };
