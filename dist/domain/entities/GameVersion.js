"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameVersion = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class GameVersion extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createGameVersion(props) {
        const gameVersion = new GameVersion(props);
        return gameVersion;
    }
}
exports.GameVersion = GameVersion;
//# sourceMappingURL=GameVersion.js.map