"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const gamesRoutes = express_1.default.Router();
exports.gamesRoutes = gamesRoutes;
gamesRoutes.post("/create", upload.single("image"), async (request, response) => {
    _1.createGameController.handle(request, response);
});
gamesRoutes.get("/get-all", async (request, response) => {
    _1.getAllGamesController.handle(request, response);
});
gamesRoutes.get("/search/", async (request, response) => {
    _1.searchGameByNameController.handle(request, response);
});
gamesRoutes.get("/:id", async (request, response) => {
    _1.getGameByIdController.handle(request, response);
});
//# sourceMappingURL=route.js.map