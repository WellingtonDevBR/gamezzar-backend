"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Game extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createGame(props, id) {
        const game = new Game(props, id);
        return game;
    }
    getAllUserInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map