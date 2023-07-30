"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = exports.UserPasswordIsInvalidException = exports.UserNotFoundException = void 0;
const paseto_1 = __importDefault(require("paseto"));
const constants_1 = require("../../../../@seedowrk/helper/constants");
const { V4: { sign }, } = paseto_1.default;
class UserNotFoundException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, UserNotFoundException.prototype);
    }
}
exports.UserNotFoundException = UserNotFoundException;
class UserPasswordIsInvalidException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, UserPasswordIsInvalidException.prototype);
    }
}
exports.UserPasswordIsInvalidException = UserPasswordIsInvalidException;
class LoginUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const user = await this.userRepository.getByEmail(request.email);
        if (!user)
            throw new UserNotFoundException("User not found");
        if (user.Password != request.password)
            throw new UserPasswordIsInvalidException("Invalid password");
        const token = await sign({ email: request.email, userId: user.UserId, exp: constants_1.PASETO_EXPIRE_TIME }, constants_1.PASETO_PRIVATE_KEY);
        return {
            token,
        };
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
//# sourceMappingURL=LoginUserUseCase.js.map