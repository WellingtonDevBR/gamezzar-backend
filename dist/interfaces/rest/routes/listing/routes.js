"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const listingRoutes = express_1.default.Router();
exports.listingRoutes = listingRoutes;
listingRoutes.post("/request", function (request, response) {
    _1.createListingRequestController.handle(request, response);
});
//# sourceMappingURL=routes.js.map