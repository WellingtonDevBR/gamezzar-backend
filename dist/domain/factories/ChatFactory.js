"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatFactory = void 0;
const Chat_1 = require("../entities/Chat");
class ChatFactory {
    static create(user1Id, user2Id, gameId) {
        return Chat_1.Chat.createChat({
            user1Id,
            user2Id,
            gameId,
        });
    }
}
exports.ChatFactory = ChatFactory;
//# sourceMappingURL=ChatFactory.js.map