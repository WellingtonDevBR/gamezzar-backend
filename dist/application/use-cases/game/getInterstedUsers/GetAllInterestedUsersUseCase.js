"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInterestedUsersUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllInterestedUsersUseCase {
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }
    async execute(input) {
        const interestedUsers = await await this.gameRepository.getAllInterestedUsers(input.gameId);
        const formattedInterestedUsers = (0, objectConverter_1.convertObjectToSnakeCase)(interestedUsers);
        return formattedInterestedUsers;
    }
}
exports.GetAllInterestedUsersUseCase = GetAllInterestedUsersUseCase;
//# sourceMappingURL=GetAllInterestedUsersUseCase.js.map