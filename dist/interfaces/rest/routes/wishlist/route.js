"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const SqlServerWishlistRepository_1 = require("../../../../infra/database/sequelize/repositories/wishlist/SqlServerWishlistRepository");
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
const wishlistRoutes = express_1.default.Router();
exports.wishlistRoutes = wishlistRoutes;
wishlistRoutes.post("/", auth_1.authenticate, async (request, response) => {
    _1.createWishlistController.handle(request, response);
});
wishlistRoutes.get("/", auth_1.authenticate, async (request, response) => {
    _1.getAllWishlistController.handle(request, response);
});
wishlistRoutes.get("/:id", auth_1.authenticate, async (request, response) => {
    const wishlist = await new SqlServerWishlistRepository_1.SqlServerWishlistRepository().getByGameAndUserId(request.params.id, request.body.userId);
    const formattedWishList = (0, objectConverter_1.convertObjectToSnakeCase)(wishlist);
    response.status(200).json(formattedWishList);
});
wishlistRoutes.delete("/:id", auth_1.authenticate, async (request, response) => {
    const wishlist = await new SqlServerWishlistRepository_1.SqlServerWishlistRepository().deleteById(request.params.id);
    response.status(200).json(wishlist);
});
wishlistRoutes.put("/:id", auth_1.authenticate, async (request, response) => {
    _1.updateWishlistByIdController.handle(request, response);
});
//# sourceMappingURL=route.js.map