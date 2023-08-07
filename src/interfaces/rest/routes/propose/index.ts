import { CreateProposeUseCase } from "../../../../application/use-cases/propose/create/CreateProposeUseCase";
import { GetProposalsByUserIdUseCase } from "../../../../application/use-cases/propose/get/GetProposalsByUserIdUseCase";
import { CreateProposeController } from "../../../../infra/controllers/propose/create/CreateProposeController";
import { GetProposalsByUserIdController } from "../../../../infra/controllers/propose/get/GetProposalsByUserIdController";
import { SqlServerGameRepository } from "../../../../infra/database/sequelize/repositories/game/SqlServerGameRepository";
import { SqlServerProposeRepository } from "../../../../infra/database/sequelize/repositories/propose/SqlServerProposeRepository";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";

const proposeRepository = new SqlServerProposeRepository();
const userRepository = new SqlServerUserRepository();
const gameRepository = new SqlServerGameRepository();

// Create Propose
const createProposeUseCase = new CreateProposeUseCase(
  proposeRepository,
  userRepository,
  gameRepository
);
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
