"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGameFactory = void 0;
const UserGame_1 = require("../entities/UserGame");
class UserGameFactory {
    static create(userId, gameId, quantity, status) {
        return UserGame_1.UserGame.createUserGame({
            userId,
            gameId,
            quantity,
            status,
        });
    }
}
exports.UserGameFactory = UserGameFactory;
//# sourceMappingURL=UserGameFactory.js.map