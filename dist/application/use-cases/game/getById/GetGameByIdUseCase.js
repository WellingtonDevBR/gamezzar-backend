"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGameByIdUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetGameByIdUseCase {
    constructor(gameRepository, userGameRepository) {
        this.gameRepository = gameRepository;
        this.userGameRepository = userGameRepository;
    }
    async execute(request) {
        const game = await this.gameRepository.getById(request.id);
        const userGame = await this.userGameRepository.getByGameId(request.id);
        console.log(userGame);
        const formattedGame = (0, objectConverter_1.convertObjectToSnakeCase)(game);
        const formattedUserGame = (0, objectConverter_1.convertObjectToSnakeCase)(userGame);
        return {
            game: formattedGame,
            owners: formattedUserGame
        };
    }
}
exports.GetGameByIdUseCase = GetGameByIdUseCase;
//# sourceMappingURL=GetGameByIdUseCase.js.map