"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePlatform = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class GamePlatform extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createGamePlatform(props) {
        const productPlataform = new GamePlatform(props);
        return productPlataform;
    }
}
exports.GamePlatform = GamePlatform;
//# sourceMappingURL=GamePlatform.js.map