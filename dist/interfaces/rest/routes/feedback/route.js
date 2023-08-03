"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const auth_1 = require("../../middleware/auth");
const feedbackRoutes = express_1.default.Router();
exports.feedbackRoutes = feedbackRoutes;
feedbackRoutes.post("/", auth_1.authenticate, async (request, response) => {
    _1.createFeedbackController.handle(request, response);
});
//# sourceMappingURL=route.js.map