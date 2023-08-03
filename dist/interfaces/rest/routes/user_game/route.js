"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGameRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middleware/auth");
const _1 = require(".");
const SqlServerUserGameRepository_1 = require("../../../../infra/database/sequelize/repositories/user_game/SqlServerUserGameRepository");
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
const userGameRoutes = express_1.default.Router();
exports.userGameRoutes = userGameRoutes;
userGameRoutes.post("/", auth_1.authenticate, async (request, response) => {
    _1.createUserGameController.handle(request, response);
});
userGameRoutes.get("/", async (request, response) => {
    _1.getAllUserGameController.handle(request, response);
});
userGameRoutes.get("/all", auth_1.authenticate, async (request, response) => {
    _1.getAllUserGameByUserIdController.handle(request, response);
});
userGameRoutes.get("/collection/:collectionId", async (request, response) => {
    const collection = await new SqlServerUserGameRepository_1.SqlServerUserGameRepository().getById(request.params.collectionId);
    const formattedCollection = (0, objectConverter_1.convertObjectToSnakeCase)(collection);
    response.status(200).json(formattedCollection);
});
userGameRoutes.get("/has-collection/:id", auth_1.authenticate, async (request, response) => {
    _1.getUserGameByUserIdController.handle(request, response);
});
//# sourceMappingURL=route.js.map