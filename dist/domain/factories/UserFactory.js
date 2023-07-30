"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const User_1 = require("../entities/User");
const Email_1 = require("../value-objects/user/Email");
const Name_1 = require("../value-objects/user/Name");
const Password_1 = require("../value-objects/user/Password");
const Username_1 = require("../value-objects/user/Username");
class UserFactory {
    static create(firstname, lastname, username, avatar, email, password) {
        return User_1.User.createUser({
            firstName: new Name_1.Name(firstname),
            lastName: new Name_1.Name(lastname),
            username: new Username_1.Username(username),
            avatar,
            email: new Email_1.Email(email),
            password: new Password_1.Password(password),
        });
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=UserFactory.js.map