"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.PASETO_EXPIRE_TIME = exports.PASETO_PRIVATE_KEY = void 0;
const fs_1 = __importDefault(require("fs"));
exports.PASETO_PRIVATE_KEY = fs_1.default.readFileSync("private_key.pem", {
    encoding: "utf8",
});
exports.PASETO_EXPIRE_TIME = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=constants.js.map