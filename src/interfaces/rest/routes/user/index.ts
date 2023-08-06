import { UserOpportunitiesUseCase } from "../../../../application/use-cases/user/Opportunities/UserOpportunitiesUseCase";
import { CreateUserUseCase } from "../../../../application/use-cases/user/create/CreateUserUseCase";
import { GetUserUseCase } from "../../../../application/use-cases/user/get/GetUserUseCase";
import { GetUserByUserNameUseCase } from "../../../../application/use-cases/user/getByUserName/GetUserByUserNameUseCase";
import { GetAllUsersUseCase } from "../../../../application/use-cases/user/get_all/GetAllUsersUseCase";
import { LoginUserUseCase } from "../../../../application/use-cases/user/login/LoginUserUseCase";
import { AddPreferenceByIdUseCase } from "../../../../application/use-cases/user/preference/create/AddPreferencesByIdUseCase";
import { GetPreferencesByIdUseCase } from "../../../../application/use-cases/user/preference/get/GetPreferencesByIdUseCase";
import { UpdateDetailsByIdUseCase } from "../../../../application/use-cases/user/update/UpdateDetailsByIdUseCase";
import { CreateUserController } from "../../../../infra/controllers/user/create/CreateUserController";
import { GetUserController } from "../../../../infra/controllers/user/get/GetUserController";
import { GetUserByUserNameController } from "../../../../infra/controllers/user/getByUserName/GetUserByUserNameController";
import { GetAllUsersController } from "../../../../infra/controllers/user/get_all/GetAllUsersController";
import { LoginUserController } from "../../../../infra/controllers/user/login/LoginUserController";
import { UserOpportunitiesController } from "../../../../infra/controllers/user/opportunities/UserOpportunitiesController";
import { AddPreferenceByIdController } from "../../../../infra/controllers/user/preference/AddPreferenceByIdController";
import { GetPreferencesByIdController } from "../../../../infra/controllers/user/preference/GetPreferencesByIdController";
import { UpdateDetailsByIdController } from "../../../../infra/controllers/user/update/UpdateDetailsByIdController";
import { SqlServerAddressRepository } from "../../../../infra/database/sequelize/repositories/address/SqlServerAddressRepository";
import { SqlServerPreferenceRepository } from "../../../../infra/database/sequelize/repositories/preference/SqlServerPreferenceRepository";
import { SqlServerUserRepository } from "../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository";

const userRepository = new SqlServerUserRepository();
const addressRepository = new SqlServerAddressRepository();
const preferenceRepository = new SqlServerPreferenceRepository();

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

// Update User Details Controller
const updateDetailsByIdUseCase = new UpdateDetailsByIdUseCase(
  userRepository,
  addressRepository
);
const updateDetailsByIdController = new UpdateDetailsByIdController(
  updateDetailsByIdUseCase
);

// Add Prefereces
const addPreferenceByIdUseCase = new AddPreferenceByIdUseCase(
  preferenceRepository
);
const addPreferenceByIdController = new AddPreferenceByIdController(
  addPreferenceByIdUseCase
);

// Get Preferences
const getPreferencesByIdUseCase = new GetPreferencesByIdUseCase(
  preferenceRepository
);
const getPreferencesByIdController = new GetPreferencesByIdController(
  getPreferencesByIdUseCase
);

// Get User Opportunities Controller
const getUserOpportunitiesUseCase = new UserOpportunitiesUseCase(
  userRepository
);
const getUserOpportunitiesController = new UserOpportunitiesController(
  getUserOpportunitiesUseCase
);

export {
  createUserController,
  loginUserController,
  getUserController,
  getUserByUserNameController,
  getAllUsersController,
  updateDetailsByIdController,
  addPreferenceByIdController,
  getPreferencesByIdController,
  getUserOpportunitiesController,
};
