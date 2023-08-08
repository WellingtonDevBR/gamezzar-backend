"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProposalsByUserIdController = exports.createProposeController = void 0;
const CreateProposeUseCase_1 = require("../../../../application/use-cases/propose/create/CreateProposeUseCase");
const GetProposalsByUserIdUseCase_1 = require("../../../../application/use-cases/propose/get/GetProposalsByUserIdUseCase");
const CreateProposeController_1 = require("../../../../infra/controllers/propose/create/CreateProposeController");
const GetProposalsByUserIdController_1 = require("../../../../infra/controllers/propose/get/GetProposalsByUserIdController");
const SqlServerGameRepository_1 = require("../../../../infra/database/sequelize/repositories/game/SqlServerGameRepository");
const SqlServerProposeRepository_1 = require("../../../../infra/database/sequelize/repositories/propose/SqlServerProposeRepository");
const SqlServerUserRepository_1 = require("../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository");
const proposeRepository = new SqlServerProposeRepository_1.SqlServerProposeRepository();
const userRepository = new SqlServerUserRepository_1.SqlServerUserRepository();
const gameRepository = new SqlServerGameRepository_1.SqlServerGameRepository();
const createProposeUseCase = new CreateProposeUseCase_1.CreateProposeUseCase(proposeRepository, userRepository, gameRepository);
const createProposeController = new CreateProposeController_1.CreateProposeController(createProposeUseCase);
exports.createProposeController = createProposeController;
const getProposalsByUserIdUseCase = new GetProposalsByUserIdUseCase_1.GetProposalsByUserIdUseCase(proposeRepository);
const getProposalsByUserIdController = new GetProposalsByUserIdController_1.GetProposalsByUserIdController(getProposalsByUserIdUseCase);
exports.getProposalsByUserIdController = getProposalsByUserIdController;
//# sourceMappingURL=index.js.map