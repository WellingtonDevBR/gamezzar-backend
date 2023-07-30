"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEditionFactory = void 0;
const GameEdition_1 = require("../entities/GameEdition");
class GameEditionFactory {
    static create(gameId, EditionId) {
        return GameEdition_1.GameEdition.createGameEdition({
            gameId,
            EditionId,
        });
    }
}
exports.GameEditionFactory = GameEditionFactory;
//# sourceMappingURL=GameVersionFactory.js.map