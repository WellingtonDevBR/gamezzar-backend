import { CreateProposeUseCase } from "../../../../application/use-cases/propose/create/CreateProposeUseCase";
import { GetProposalsByUserIdUseCase } from "../../../../application/use-cases/propose/get/GetProposalsByUserIdUseCase";
import { CreateProposeController } from "../../../../infra/controllers/propose/create/CreateProposeController";
import { GetProposalsByUserIdController } from "../../../../infra/controllers/propose/get/GetProposalsByUserIdController";
import { SqlServerProposeRepository } from "../../../../infra/database/sequelize/repositories/propose/SqlServerProposeRepository";

const proposeRepository = new SqlServerProposeRepository();

// Create Propose
const createProposeUseCase = new CreateProposeUseCase(proposeRepository);
const createProposeController = new CreateProposeController(
  createProposeUseCase
);

// Get Proposals
const getProposalsByUserIdUseCase = new GetProposalsByUserIdUseCase(
  proposeRepository
);
const getProposalsByUserIdController = new GetProposalsByUserIdController(
  getProposalsByUserIdUseCase
);

export { createProposeController, getProposalsByUserIdController };
