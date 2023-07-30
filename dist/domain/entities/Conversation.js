"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Conversation extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createConversation(props) {
        const conversation = new Conversation(props);
        return conversation;
    }
}
exports.Conversation = Conversation;
//# sourceMappingURL=Conversation.js.map