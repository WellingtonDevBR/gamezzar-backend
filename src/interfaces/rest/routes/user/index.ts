import { CreateUserUseCase } from "../../../../application/use-cases/user/create/CreateUserUseCase";
import { GetUserUseCase } from "../../../../application/use-cases/user/get/GetUserUseCase";
import { GetUserByUserNameUseCase } from "../../../../application/use-cases/user/getByUserName/GetUserByUserNameUseCase";
import { GetAllUsersUseCase } from "../../../../application/use-cases/user/get_all/GetAllUsersUseCase";
import { LoginUserUseCase } from "../../../../application/use-cases/user/login/LoginUserUseCase";
import { CreateUserController } from "../../../../infra/controllers/user/create/CreateUserController";
import { GetUserController } from "../../../../infra/controllers/user/get/GetUserController";
import { GetUserByUserNameController } from "../../../../infra/controllers/user/getByUserName/GetUserByUserNameController";
import { GetAllUsersController } from "../../../../infra/controllers/user/get_all/GetAllUsersController";
import { LoginUserController } from "../../../../infra/controllers/user/login/LoginUserController";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";

const userRepository = new SqlServerUserRepository();

// Create User Controller
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

// Login User Controller
const loginUserUseCase = new LoginUserUseCase(userRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

// Details User Controller
const getUserUseCase = new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);

// Get By UserName Controller
const getUserByUserNameUseCase = new GetUserByUserNameUseCase(userRepository);
const getUserByUserNameController = new GetUserByUserNameController(
  getUserByUserNameUseCase
);

// Get Top Users Controller
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export {
  createUserController,
  loginUserController,
  getUserController,
  getUserByUserNameController,
  getAllUsersController
};
