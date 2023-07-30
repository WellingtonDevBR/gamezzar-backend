"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRegion = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class GameRegion extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createGameRegion(props) {
        const gameRegion = new GameRegion(props);
        return gameRegion;
    }
}
exports.GameRegion = GameRegion;
//# sourceMappingURL=GameRegion.js.map