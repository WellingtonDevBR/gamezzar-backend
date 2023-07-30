import { ImageToPngConverter } from "../../../../@seedowrk/helper/imageConverter";
import { CreateGameUseCase } from "../../../../application/use-cases/game/create/CreateGameUseCase";
import { GetAllGamesUseCase } from "../../../../application/use-cases/game/get-all/GetAllGamesUseCase";
import { GetGameByIdUseCase } from "../../../../application/use-cases/game/getById/GetGameByIdUseCase";
import { CreateGameController } from "../../../../infra/controllers/game/create/CreateGameController";
import { GetGameByIdController } from "../../../../infra/controllers/game/getById/GetGameByIdController";
import { GetAllGamesController } from "../../../../infra/controllers/game/get-all/GetAllGamesController";
import { SqlServerGameRepository } from "../../../../infra/database/sequelize/repositories/game/SqlServerGameRepository";
import { SqlServerUserGameRepository } from "../../../../infra/database/sequelize/repositories/user_game/SqlServerUserGameRepository";

const sqlServerGameRepository = new SqlServerGameRepository();
const sqlServerUserGameRepository = new SqlServerUserGameRepository();
const imageToSvgConverter = new ImageToPngConverter();

// Create Games Route
const createGameUseCase = new CreateGameUseCase(
  sqlServerGameRepository,
  imageToSvgConverter
);
const createGameController = new CreateGameController(createGameUseCase);

// Get All Games Route
const getAllGamesUseCase = new GetAllGamesUseCase(sqlServerGameRepository);
const getAllGamesController = new GetAllGamesController(getAllGamesUseCase);

// Get Game By ID Route
const getGameByIdUseCase = new GetGameByIdUseCase(
  sqlServerGameRepository,
  sqlServerUserGameRepository
);
const getGameByIdController = new GetGameByIdController(getGameByIdUseCase);

export { createGameController, getAllGamesController, getGameByIdController };
