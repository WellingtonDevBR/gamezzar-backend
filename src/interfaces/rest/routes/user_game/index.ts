import { CreateUserGameUseCase } from "../../../../application/use-cases/user_game/create/CreateUserGameUseCase";
import { GetUserPopularCollectionUseCase } from "../../../../application/use-cases/user_game/getUserPopularCollection/GetUserPopularCollectionUseCase";
import { GetAllUserGameUseCase } from "../../../../application/use-cases/user_game/get_all/GetAllUserGameUseCase";
import { GetAllUserGameByUserIdUseCase } from "../../../../application/use-cases/user_game/get_all_by_user_id/GetAllUserGameByUserIdUseCase";
import { GetUserGameByUserIdUseCase } from "../../../../application/use-cases/user_game/get_by_user_id/GetUserGameByUserIdUseCase";
import { CreateUserGameController } from "../../../../infra/controllers/user_game/create/CreateUserGameController";
import { GetUserPopularCollectionController } from "../../../../infra/controllers/user_game/getUserPopularCollection/GetUserPopularCollectionController";
import { GetAllUserGameController } from "../../../../infra/controllers/user_game/get_all/GetAllUserGameController";
import { GetAllUserGameByUserIdController } from "../../../../infra/controllers/user_game/get_all_by_user_id/GetAllUserGameByUserIdController";
import { GetUserGameByUserIdController } from "../../../../infra/controllers/user_game/get_by_user_id/GetUserGameByUserIdController";
import { SqlServerEditionRepository } from "../../../../infra/database/sequelize/repositories/edition/SqlServerEditionRepository";
import { SqlServerPlatformRepository } from "../../../../infra/database/sequelize/repositories/platform/SqlServerPlatformRepository";
import { SqlServerRegionRepository } from "../../../../infra/database/sequelize/repositories/region/SqlServerRegionRepository";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";
import { SqlServerUserGameRepository } from "../../../../infra/database/sequelize/repositories/user_game/SqlServerUserGameRepository";

const userRepository = new SqlServerUserRepository();
const userGameRepository = new SqlServerUserGameRepository();
const regionRepository = new SqlServerRegionRepository();
const platformRepository = new SqlServerPlatformRepository();
const editionRepository = new SqlServerEditionRepository();

// Add Game to User Collection
const createUserGameUseCase = new CreateUserGameUseCase(
  userGameRepository,
  userRepository,
  regionRepository,
  platformRepository,
  editionRepository
);
const createUserGameController = new CreateUserGameController(
  createUserGameUseCase
);

// Retrieve User's Collections
const getAllUserGameUseCase = new GetAllUserGameUseCase(userGameRepository);
const getAllUserGameController = new GetAllUserGameController(
  getAllUserGameUseCase
);

// Find if User has already added a Game to their Collection
const getUserGameByUserIdUseCase = new GetUserGameByUserIdUseCase(
  userGameRepository,
  userRepository
);
const getUserGameByUserIdController = new GetUserGameByUserIdController(
  getUserGameByUserIdUseCase
);

// Find All User Game Collection by User Id
const getAllUserGameByUserIdUseCase = new GetAllUserGameByUserIdUseCase(
  userGameRepository
);
const getAllUserGameByUserIdController = new GetAllUserGameByUserIdController(
  getAllUserGameByUserIdUseCase
);

// Get Popular COllection
const getUserPopularCollectionUseCase = new GetUserPopularCollectionUseCase(
  userGameRepository
);
const getUserPopularCollectionController =
  new GetUserPopularCollectionController(getUserPopularCollectionUseCase);

export {
  createUserGameController,
  getAllUserGameController,
  getUserGameByUserIdController,
  getAllUserGameByUserIdController,
  getUserPopularCollectionController
};
