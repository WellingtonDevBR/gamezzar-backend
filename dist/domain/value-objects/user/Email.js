"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const validator_1 = __importDefault(require("validator"));
class Email {
    constructor(value) {
        if (!validator_1.default.isEmail(value)) {
            throw new Error("A valid email must be provided.");
        }
        this.value = value;
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map