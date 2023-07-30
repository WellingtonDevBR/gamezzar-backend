"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGame = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class UserGame extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createUserGame(props) {
        const userProduct = new UserGame(props);
        return userProduct;
    }
}
exports.UserGame = UserGame;
//# sourceMappingURL=UserGame.js.map