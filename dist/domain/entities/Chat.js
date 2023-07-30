"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Chat extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createChat(props, id) {
        const chat = new Chat(props, id);
        return chat;
    }
    getAllChatInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map