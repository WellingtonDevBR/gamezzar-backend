"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameGenre = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class GameGenre extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createGameGenre(props) {
        const productGenre = new GameGenre(props);
        return productGenre;
    }
}
exports.GameGenre = GameGenre;
//# sourceMappingURL=GameGenre.js.map