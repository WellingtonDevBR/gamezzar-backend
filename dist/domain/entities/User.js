"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class User extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createUser(props, id) {
        const user = new User(props, id);
        return user;
    }
    getAllUserInformation() {
        return { ...this.props, id: this.getId() };
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map