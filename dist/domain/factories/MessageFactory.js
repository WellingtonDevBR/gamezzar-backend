"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFactory = void 0;
const Message_1 = require("../entities/Message");
class MessageFactory {
    static create(chatId, senderId, receiverId, content) {
        return Message_1.Message.createMessage({
            chatId,
            senderId,
            receiverId,
            content,
        });
    }
}
exports.MessageFactory = MessageFactory;
//# sourceMappingURL=MessageFactory.js.map