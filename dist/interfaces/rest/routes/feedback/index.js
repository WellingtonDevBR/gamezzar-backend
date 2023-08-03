"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedbackController = void 0;
const SqlServerFeedbackRepository_1 = require("../../../../infra/database/sequelize/repositories/feedback/SqlServerFeedbackRepository");
const CreateFeedbackUseCase_1 = require("../../../../application/use-cases/feedback/create/CreateFeedbackUseCase");
const CreateFeedbackController_1 = require("../../../../infra/controllers/feedback/create/CreateFeedbackController");
const sqlServerFeedbackRepository = new SqlServerFeedbackRepository_1.SqlServerFeedbackRepository();
const createFeedbackUseCase = new CreateFeedbackUseCase_1.CreateFeedbackUseCase(sqlServerFeedbackRepository);
const createFeedbackController = new CreateFeedbackController_1.CreateFeedbackController(createFeedbackUseCase);
exports.createFeedbackController = createFeedbackController;
//# sourceMappingURL=index.js.map