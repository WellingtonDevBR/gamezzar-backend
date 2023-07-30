"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFactory = void 0;
const Game_1 = require("../entities/Game");
class GameFactory {
    static create(title, description, region, releaseDate, category, producer, genre, officialLink, image, slug, status) {
        return Game_1.Game.createGame({
            title,
            description,
            region,
            category,
            releaseDate,
            producer,
            genre,
            officialLink,
            image,
            slug,
            status,
        });
    }
}
exports.GameFactory = GameFactory;
//# sourceMappingURL=GameFactory.js.map