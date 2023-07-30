"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameGenreFactory = void 0;
const GameGenre_1 = require("../entities/GameGenre");
class GameGenreFactory {
    static create(gameId, genreId) {
        return GameGenre_1.GameGenre.createGameGenre({
            gameId,
            genreId,
        });
    }
}
exports.GameGenreFactory = GameGenreFactory;
//# sourceMappingURL=GameGenreFactory.js.map