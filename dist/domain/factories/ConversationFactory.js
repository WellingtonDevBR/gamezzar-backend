"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationFactory = void 0;
const Chat_1 = require("../entities/Chat");
class ConversationFactory {
    static create(userOneId, userTwoId) {
        return Chat_1.Conversation.createConversation({
            userOneId,
            userTwoId,
        });
    }
}
exports.ConversationFactory = ConversationFactory;
//# sourceMappingURL=ConversationFactory.js.map