"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGameByNameUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class SearchGameByNameUseCase {
    constructor(gamesRepository) {
        this.gamesRepository = gamesRepository;
    }
    async execute(input) {
        const games = await this.gamesRepository.searchByName(input.name);
        if (games.length === 0) {
            return {};
        }
        const formattedGames = (0, objectConverter_1.convertObjectToSnakeCase)(games);
        return formattedGames;
    }
}
exports.SearchGameByNameUseCase = SearchGameByNameUseCase;
//# sourceMappingURL=SearchGameByNameUseCase.js.map