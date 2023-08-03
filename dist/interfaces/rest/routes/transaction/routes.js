"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const SqlServerTransactionRepository_1 = require("../../../../infra/database/sequelize/repositories/transaction/SqlServerTransactionRepository");
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
const auth_1 = require("../../middleware/auth");
const transactionRoutes = express_1.default.Router();
exports.transactionRoutes = transactionRoutes;
transactionRoutes.post("/", auth_1.authenticate, async (request, response) => {
    _1.createTransactionController.handle(request, response);
});
transactionRoutes.get("/", auth_1.authenticate, async (request, response) => {
    const transactions = await new SqlServerTransactionRepository_1.SqlServerTransactionRepository().findAllByUserId(request.body.userId);
    const formattedTransaction = (0, objectConverter_1.convertObjectToSnakeCase)(transactions);
    response.status(200).json(formattedTransaction);
});
//# sourceMappingURL=routes.js.map