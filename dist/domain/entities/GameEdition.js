"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEdition = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class GameEdition extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createGameEdition(props) {
        const gameEdition = new GameEdition(props);
        return gameEdition;
    }
}
exports.GameEdition = GameEdition;
//# sourceMappingURL=GameEdition.js.map