import { SqlServerFeedbackRepository } from "../../../../infra/database/sequelize/repositories/feedback/SqlServerFeedbackRepository";
import { CreateFeedbackUseCase } from "../../../../application/use-cases/feedback/create/CreateFeedbackUseCase";
import { CreateFeedbackController } from "../../../../infra/controllers/feedback/create/CreateFeedbackController";

const sqlServerFeedbackRepository = new SqlServerFeedbackRepository();

// Create Feedback
const createFeedbackUseCase = new CreateFeedbackUseCase(
  sqlServerFeedbackRepository
);
const createFeedbackController = new CreateFeedbackController(
  createFeedbackUseCase
);

export { createFeedbackController };
