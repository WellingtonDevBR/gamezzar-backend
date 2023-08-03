import { SqlServerFeedbackRepository } from "../../../../infra/database/sequelize/repositories/feedback/SqlServerFeedbackRepository";
import { CreateFeedbackUseCase } from "../../../../application/use-cases/feedback/create/CreateFeedbackUseCase";
import { CreateFeedbackController } from "../../../../infra/controllers/feedback/create/CreateFeedbackController";
import { FindAllFeedbackByUserNameUseCase } from "../../../../application/use-cases/feedback/findAll/FindAllFeedbackByUserNameUseCase";
import { FindAllFeedbackByUserNameController } from "../../../../infra/controllers/feedback/findAll/FindAllFeedbackByUserNameController";

const sqlServerFeedbackRepository = new SqlServerFeedbackRepository();

// Create Feedback
const createFeedbackUseCase = new CreateFeedbackUseCase(
  sqlServerFeedbackRepository
);
const createFeedbackController = new CreateFeedbackController(
  createFeedbackUseCase
);

// Find All By User ID
const findAllFeedbackByUserNameUseCase = new FindAllFeedbackByUserNameUseCase(
  sqlServerFeedbackRepository
);
const findAllFeedbackByUserNameController = new FindAllFeedbackByUserNameController(
  findAllFeedbackByUserNameUseCase
);

export { createFeedbackController, findAllFeedbackByUserNameController };
