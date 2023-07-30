"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePlatformFactory = void 0;
const GamePlatform_1 = require("../entities/GamePlatform");
class GamePlatformFactory {
    static create(gameId, platformId) {
        return GamePlatform_1.GamePlatform.createGamePlatform({
            gameId,
            platformId,
        });
    }
}
exports.GamePlatformFactory = GamePlatformFactory;
//# sourceMappingURL=GamePlatformFactory.js.map