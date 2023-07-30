"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const messageRoutes = express_1.default.Router();
exports.messageRoutes = messageRoutes;
messageRoutes.post("/", auth_1.authenticate, (request, response) => {
    _1.createMessageController.handle(request, response);
});
messageRoutes.get("/:chatId", auth_1.authenticate, (request, response) => {
    _1.retrieveAllMessagesByChatIdController.handle(request, response);
});
//# sourceMappingURL=route.js.map