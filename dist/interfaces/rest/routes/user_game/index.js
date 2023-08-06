"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPopularCollectionController = exports.getAllUserGameByUserIdController = exports.getUserGameByUserIdController = exports.getAllUserGameController = exports.createUserGameController = void 0;
const CreateUserGameUseCase_1 = require("../../../../application/use-cases/user_game/create/CreateUserGameUseCase");
const GetUserPopularCollectionUseCase_1 = require("../../../../application/use-cases/user_game/getUserPopularCollection/GetUserPopularCollectionUseCase");
const GetAllUserGameUseCase_1 = require("../../../../application/use-cases/user_game/get_all/GetAllUserGameUseCase");
const GetAllUserGameByUserIdUseCase_1 = require("../../../../application/use-cases/user_game/get_all_by_user_id/GetAllUserGameByUserIdUseCase");
const GetUserGameByUserIdUseCase_1 = require("../../../../application/use-cases/user_game/get_by_user_id/GetUserGameByUserIdUseCase");
const CreateUserGameController_1 = require("../../../../infra/controllers/user_game/create/CreateUserGameController");
const GetUserPopularCollectionController_1 = require("../../../../infra/controllers/user_game/getUserPopularCollection/GetUserPopularCollectionController");
const GetAllUserGameController_1 = require("../../../../infra/controllers/user_game/get_all/GetAllUserGameController");
const GetAllUserGameByUserIdController_1 = require("../../../../infra/controllers/user_game/get_all_by_user_id/GetAllUserGameByUserIdController");
const GetUserGameByUserIdController_1 = require("../../../../infra/controllers/user_game/get_by_user_id/GetUserGameByUserIdController");
const SqlServerEditionRepository_1 = require("../../../../infra/database/sequelize/repositories/edition/SqlServerEditionRepository");
const SqlServerPlatformRepository_1 = require("../../../../infra/database/sequelize/repositories/platform/SqlServerPlatformRepository");
const SqlServerRegionRepository_1 = require("../../../../infra/database/sequelize/repositories/region/SqlServerRegionRepository");
const SqlServerUserRepository_1 = require("../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository");
const SqlServerUserGameRepository_1 = require("../../../../infra/database/sequelize/repositories/user_game/SqlServerUserGameRepository");
const userRepository = new SqlServerUserRepository_1.SqlServerUserRepository();
const userGameRepository = new SqlServerUserGameRepository_1.SqlServerUserGameRepository();
const regionRepository = new SqlServerRegionRepository_1.SqlServerRegionRepository();
const platformRepository = new SqlServerPlatformRepository_1.SqlServerPlatformRepository();
const editionRepository = new SqlServerEditionRepository_1.SqlServerEditionRepository();
const createUserGameUseCase = new CreateUserGameUseCase_1.CreateUserGameUseCase(userGameRepository, userRepository, regionRepository, platformRepository, editionRepository);
const createUserGameController = new CreateUserGameController_1.CreateUserGameController(createUserGameUseCase);
exports.createUserGameController = createUserGameController;
const getAllUserGameUseCase = new GetAllUserGameUseCase_1.GetAllUserGameUseCase(userGameRepository);
const getAllUserGameController = new GetAllUserGameController_1.GetAllUserGameController(getAllUserGameUseCase);
exports.getAllUserGameController = getAllUserGameController;
const getUserGameByUserIdUseCase = new GetUserGameByUserIdUseCase_1.GetUserGameByUserIdUseCase(userGameRepository, userRepository);
const getUserGameByUserIdController = new GetUserGameByUserIdController_1.GetUserGameByUserIdController(getUserGameByUserIdUseCase);
exports.getUserGameByUserIdController = getUserGameByUserIdController;
const getAllUserGameByUserIdUseCase = new GetAllUserGameByUserIdUseCase_1.GetAllUserGameByUserIdUseCase(userGameRepository);
const getAllUserGameByUserIdController = new GetAllUserGameByUserIdController_1.GetAllUserGameByUserIdController(getAllUserGameByUserIdUseCase);
exports.getAllUserGameByUserIdController = getAllUserGameByUserIdController;
const getUserPopularCollectionUseCase = new GetUserPopularCollectionUseCase_1.GetUserPopularCollectionUseCase(userGameRepository);
const getUserPopularCollectionController = new GetUserPopularCollectionController_1.GetUserPopularCollectionController(getUserPopularCollectionUseCase);
exports.getUserPopularCollectionController = getUserPopularCollectionController;
//# sourceMappingURL=index.js.map