"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const SqlServerProposeRepository_1 = require("../../../../infra/database/sequelize/repositories/propose/SqlServerProposeRepository");
const proposeRoutes = express_1.default.Router();
exports.proposeRoutes = proposeRoutes;
proposeRoutes.post("/", auth_1.authenticate, (request, response) => {
    _1.createProposeController.handle(request, response);
});
proposeRoutes.get("/all", auth_1.authenticate, (request, response) => {
    _1.getProposalsByUserIdController.handle(request, response);
});
proposeRoutes.delete("/:id", auth_1.authenticate, async (request, response) => {
    const deletedPropose = await new SqlServerProposeRepository_1.SqlServerProposeRepository().deleteById(request.params.id);
    response.status(200).json(deletedPropose);
});
//# sourceMappingURL=route.js.map