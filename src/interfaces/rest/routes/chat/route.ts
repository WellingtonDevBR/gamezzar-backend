import express from "express";
import { findChatByUserIdController } from ".";
import { authenticate } from "../../middleware/auth";

const chatRoutes = express.Router();

chatRoutes.get("/", authenticate, (request, response) => {
  findChatByUserIdController.handle(request, response);
});

export { chatRoutes };