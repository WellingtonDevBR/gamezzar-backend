"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Message extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createMessage(props, id) {
        const user = new Message(props, id);
        return user;
    }
    getAllMessageInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.Message = Message;
//# sourceMappingURL=Message.js.map