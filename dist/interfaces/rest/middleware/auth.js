"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const paseto_1 = __importDefault(require("paseto"));
const crypto_1 = require("crypto");
const constants_1 = require("../../../@seedowrk/helper/constants");
require("dotenv").config();
const { V4 } = paseto_1.default;
const privateKey = (0, crypto_1.createPrivateKey)({
    key: constants_1.PASETO_PRIVATE_KEY,
    format: "pem",
    type: "pkcs8",
});
const authenticate = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader)
        return response.status(401).json({ message: "Token not found" });
    const token = authHeader.split(" ")[1];
    try {
        const payload = await V4.verify(token, privateKey);
        request.body.email = payload.email;
        request.body.userId = payload.userId;
        return next();
    }
    catch (error) {
        return response.status(401).json({ message: "Invalid token" });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map