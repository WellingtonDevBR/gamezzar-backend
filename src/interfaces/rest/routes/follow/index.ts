import { CreateFollowUseCase } from "../../../../application/use-cases/follow/create/CreateFollowUseCase";
import { FindAllFollowersUseCase } from "../../../../application/use-cases/follow/findAllFollowers/findAllFollowersUseCase";
import { FindOneFollowerUseCase } from "../../../../application/use-cases/follow/findFollower/findOneFollowerUseCase";
import { UnfollowUseCase } from "../../../../application/use-cases/follow/unfollow/UnfollowUseCase";
import { CreateFollowController } from "../../../../infra/controllers/follow/create/CreateFollowController";
import { UnfollowController } from "../../../../infra/controllers/follow/delete/UnfollowController";
import { FindAllFollowersController } from "../../../../infra/controllers/follow/findAllFollowers/FindAllFollowersController";
import { FindOneFollowerController } from "../../../../infra/controllers/follow/findFollower/FindOneFollowerController";
import { SqlServerFollowRepository } from "../../../../infra/database/sequelize/repositories/follow/ISqlServerFollowRepository";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";

const sqlServerFollowRepository = new SqlServerFollowRepository();
const usersRepository = new SqlServerUserRepository();

// Create Follow Controller
const createFollowUseCase = new CreateFollowUseCase(
  sqlServerFollowRepository,
  usersRepository
);
const createFollowController = new CreateFollowController(createFollowUseCase);

// Find Follower Controller
const findOneFollowerUseCase = new FindOneFollowerUseCase(
  sqlServerFollowRepository,
  usersRepository
);
const findOneFollowerController = new FindOneFollowerController(
  findOneFollowerUseCase
);

// Find Followers Controller
const findAllFollowersUseCase = new FindAllFollowersUseCase(
  sqlServerFollowRepository
);
const findAllFollowersController = new FindAllFollowersController(
  findAllFollowersUseCase
);

const unfollowUseCase = new UnfollowUseCase(
  sqlServerFollowRepository,
  usersRepository
);

const unfollowController = new UnfollowController(unfollowUseCase);


export {
  createFollowController,
  findOneFollowerController,
  findAllFollowersController,
  unfollowController
};
