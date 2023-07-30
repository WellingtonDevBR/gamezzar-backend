"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRegionFactory = void 0;
const GameRegion_1 = require("../entities/GameRegion");
class GameRegionFactory {
    static create(gameId, regionId) {
        return GameRegion_1.GameRegion.createGameRegion({
            gameId,
            regionId,
        });
    }
}
exports.GameRegionFactory = GameRegionFactory;
//# sourceMappingURL=GameRegionFactory.js.map