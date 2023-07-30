"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(request) {
        const user = await this.usersRepository.getByEmail(request.email);
        const formattedUser = (0, objectConverter_1.convertObjectToSnakeCase)(user);
        return formattedUser;
    }
}
exports.GetUserUseCase = GetUserUseCase;
//# sourceMappingURL=GetUserUseCase.js.map