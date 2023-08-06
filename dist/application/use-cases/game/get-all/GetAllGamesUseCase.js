"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllGamesUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllGamesUseCase {
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }
    async execute(input) {
        const games = await this.gameRepository.getAll(input.offset);
        let convertedGames = (0, objectConverter_1.convertObjectToSnakeCase)(games);
        return convertedGames;
    }
}
exports.GetAllGamesUseCase = GetAllGamesUseCase;
//# sourceMappingURL=GetAllGamesUseCase.js.map