"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConversation = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class UserConversation extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createUserConversation(props) {
        const message = new UserConversation(props);
        return message;
    }
}
exports.UserConversation = UserConversation;
//# sourceMappingURL=UserConversation.js.map