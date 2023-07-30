"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllUsersUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(request) {
        const users = await this.usersRepository.getAll();
        const formattedUsers = (0, objectConverter_1.convertObjectToSnakeCase)(users);
        return formattedUsers;
    }
}
exports.GetAllUsersUseCase = GetAllUsersUseCase;
//# sourceMappingURL=GetAllUsersUseCase.js.map