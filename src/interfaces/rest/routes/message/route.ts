import express, { Request, Response } from "express";
import {
  createMessageController,
  retrieveAllMessagesByChatIdController,
} from ".";
import { authenticate } from "../../middleware/auth";

const messageRoutes = express.Router();

messageRoutes.post(
  "/",
  authenticate,
  (request: Request, response: Response) => {
    createMessageController.handle(request, response);
  }
);

messageRoutes.get(
  "/:chatId",
  authenticate,
  (request: Request, response: Response) => {
    retrieveAllMessagesByChatIdController.handle(request, response);
  }
);

export { messageRoutes };
