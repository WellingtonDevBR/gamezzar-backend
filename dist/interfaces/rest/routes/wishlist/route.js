"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const wishlistRoutes = express_1.default.Router();
exports.wishlistRoutes = wishlistRoutes;
wishlistRoutes.post("/", async (request, response) => {
    _1.createWishlistController.handle(request, response);
});
wishlistRoutes.get("/", auth_1.authenticate, async (request, response) => {
    _1.getAllWishlistController.handle(request, response);
});
wishlistRoutes.put('/:id', auth_1.authenticate, async (request, response) => {
    _1.updateWishlistByIdController.handle(request, response);
});
//# sourceMappingURL=route.js.map