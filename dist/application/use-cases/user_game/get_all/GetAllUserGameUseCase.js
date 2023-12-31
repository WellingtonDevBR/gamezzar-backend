"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserGameUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllUserGameUseCase {
    constructor(userGameRepository) {
        this.userGameRepository = userGameRepository;
    }
    async execute(input) {
        const userGames = await this.userGameRepository.getAll(input.offset, input.userId);
        const formattedUserGames = (0, objectConverter_1.convertObjectToSnakeCase)(userGames);
        return formattedUserGames;
    }
}
exports.GetAllUserGameUseCase = GetAllUserGameUseCase;
//# sourceMappingURL=GetAllUserGameUseCase.js.map