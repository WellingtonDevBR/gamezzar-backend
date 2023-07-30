"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const userRoutes = express_1.default.Router();
exports.userRoutes = userRoutes;
userRoutes.post("/login", async (request, response) => {
    _1.loginUserController.handle(request, response);
});
userRoutes.post("/register", async (request, response) => {
    _1.createUserController.handle(request, response);
});
userRoutes.get("/top-vendors", async (request, response) => {
    _1.getAllUsersController.handle(request, response);
});
userRoutes.get("/details", auth_1.authenticate, async (request, response) => {
    _1.getUserController.handle(request, response);
});
userRoutes.get("/:user_name", async (request, response) => {
    _1.getUserByUserNameController.handle(request, response);
});
//# sourceMappingURL=route.js.map