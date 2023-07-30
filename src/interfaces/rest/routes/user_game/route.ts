import express, { Request, Response } from "express";
import { authenticate } from "../../middleware/auth";
import {
  createUserGameController,
  getAllUserGameByUserIdController,
  getAllUserGameController,
  getUserGameByUserIdController,
} from ".";

const userGameRoutes = express.Router();

userGameRoutes.post(
  "/",
  authenticate,
  async (request: Request, response: Response) => {
    createUserGameController.handle(request, response);
  }
);

userGameRoutes.get("/", async (request: Request, response: Response) => {
  getAllUserGameController.handle(request, response);
});

userGameRoutes.get(
  "/all",
  authenticate,
  async (request: Request, response: Response) => {
    getAllUserGameByUserIdController.handle(request, response);
  }
);

userGameRoutes.get(
  "/has-collection/:id",
  authenticate,
  async (request: Request, response: Response) => {
    getUserGameByUserIdController.handle(request, response);
  }
);

export { userGameRoutes };
