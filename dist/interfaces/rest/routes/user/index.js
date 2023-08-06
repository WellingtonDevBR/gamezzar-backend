"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserOpportunitiesController = exports.getPreferencesByIdController = exports.addPreferenceByIdController = exports.updateDetailsByIdController = exports.getAllUsersController = exports.getUserByUserNameController = exports.getUserController = exports.loginUserController = exports.createUserController = void 0;
const UserOpportunitiesUseCase_1 = require("../../../../application/use-cases/user/Opportunities/UserOpportunitiesUseCase");
const CreateUserUseCase_1 = require("../../../../application/use-cases/user/create/CreateUserUseCase");
const GetUserUseCase_1 = require("../../../../application/use-cases/user/get/GetUserUseCase");
const GetUserByUserNameUseCase_1 = require("../../../../application/use-cases/user/getByUserName/GetUserByUserNameUseCase");
const GetAllUsersUseCase_1 = require("../../../../application/use-cases/user/get_all/GetAllUsersUseCase");
const LoginUserUseCase_1 = require("../../../../application/use-cases/user/login/LoginUserUseCase");
const AddPreferencesByIdUseCase_1 = require("../../../../application/use-cases/user/preference/create/AddPreferencesByIdUseCase");
const GetPreferencesByIdUseCase_1 = require("../../../../application/use-cases/user/preference/get/GetPreferencesByIdUseCase");
const UpdateDetailsByIdUseCase_1 = require("../../../../application/use-cases/user/update/UpdateDetailsByIdUseCase");
const CreateUserController_1 = require("../../../../infra/controllers/user/create/CreateUserController");
const GetUserController_1 = require("../../../../infra/controllers/user/get/GetUserController");
const GetUserByUserNameController_1 = require("../../../../infra/controllers/user/getByUserName/GetUserByUserNameController");
const GetAllUsersController_1 = require("../../../../infra/controllers/user/get_all/GetAllUsersController");
const LoginUserController_1 = require("../../../../infra/controllers/user/login/LoginUserController");
const UserOpportunitiesController_1 = require("../../../../infra/controllers/user/opportunities/UserOpportunitiesController");
const AddPreferenceByIdController_1 = require("../../../../infra/controllers/user/preference/AddPreferenceByIdController");
const GetPreferencesByIdController_1 = require("../../../../infra/controllers/user/preference/GetPreferencesByIdController");
const UpdateDetailsByIdController_1 = require("../../../../infra/controllers/user/update/UpdateDetailsByIdController");
const SqlServerAddressRepository_1 = require("../../../../infra/database/sequelize/repositories/address/SqlServerAddressRepository");
const SqlServerPreferenceRepository_1 = require("../../../../infra/database/sequelize/repositories/preference/SqlServerPreferenceRepository");
const SqlServerUserRepository_1 = require("../../../../infra/database/sequelize/repositories/user/SqlServerUserRepository");
const userRepository = new SqlServerUserRepository_1.SqlServerUserRepository();
const addressRepository = new SqlServerAddressRepository_1.SqlServerAddressRepository();
const preferenceRepository = new SqlServerPreferenceRepository_1.SqlServerPreferenceRepository();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepository);
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
const loginUserUseCase = new LoginUserUseCase_1.LoginUserUseCase(userRepository);
const loginUserController = new LoginUserController_1.LoginUserController(loginUserUseCase);
exports.loginUserController = loginUserController;
const getUserUseCase = new GetUserUseCase_1.GetUserUseCase(userRepository);
const getUserController = new GetUserController_1.GetUserController(getUserUseCase);
exports.getUserController = getUserController;
const getUserByUserNameUseCase = new GetUserByUserNameUseCase_1.GetUserByUserNameUseCase(userRepository);
const getUserByUserNameController = new GetUserByUserNameController_1.GetUserByUserNameController(getUserByUserNameUseCase);
exports.getUserByUserNameController = getUserByUserNameController;
const getAllUsersUseCase = new GetAllUsersUseCase_1.GetAllUsersUseCase(userRepository);
const getAllUsersController = new GetAllUsersController_1.GetAllUsersController(getAllUsersUseCase);
exports.getAllUsersController = getAllUsersController;
const updateDetailsByIdUseCase = new UpdateDetailsByIdUseCase_1.UpdateDetailsByIdUseCase(userRepository, addressRepository);
const updateDetailsByIdController = new UpdateDetailsByIdController_1.UpdateDetailsByIdController(updateDetailsByIdUseCase);
exports.updateDetailsByIdController = updateDetailsByIdController;
const addPreferenceByIdUseCase = new AddPreferencesByIdUseCase_1.AddPreferenceByIdUseCase(preferenceRepository);
const addPreferenceByIdController = new AddPreferenceByIdController_1.AddPreferenceByIdController(addPreferenceByIdUseCase);
exports.addPreferenceByIdController = addPreferenceByIdController;
const getPreferencesByIdUseCase = new GetPreferencesByIdUseCase_1.GetPreferencesByIdUseCase(preferenceRepository);
const getPreferencesByIdController = new GetPreferencesByIdController_1.GetPreferencesByIdController(getPreferencesByIdUseCase);
exports.getPreferencesByIdController = getPreferencesByIdController;
const getUserOpportunitiesUseCase = new UserOpportunitiesUseCase_1.UserOpportunitiesUseCase(userRepository);
const getUserOpportunitiesController = new UserOpportunitiesController_1.UserOpportunitiesController(getUserOpportunitiesUseCase);
exports.getUserOpportunitiesController = getUserOpportunitiesController;
//# sourceMappingURL=index.js.map