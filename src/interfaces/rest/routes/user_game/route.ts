import express, { Request, Response } from "express";
import { authenticate } from "../../middleware/auth";
import {
  createUserGameController,
  getAllUserGameByUserIdController,
  getAllUserGameController,
  getUserGameByUserIdController,
  getUserPopularCollectionController,
} from ".";
import { SqlServerUserGameRepository } from "../../../../infra/database/sequelize/repositories/user_game/SqlServerUserGameRepository";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";

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

userGameRoutes.get("/popular", async (request: Request, response: Response) => {
  getUserPopularCollectionController.handle(request, response);
});

userGameRoutes.get(
  "/collection/:collectionId",
  async (request: Request, response: Response) => {
    const collection = await new SqlServerUserGameRepository().getById(
      request.params.collectionId
    );
    const formattedCollection = convertObjectToSnakeCase(collection);
    response.status(200).json(formattedCollection);
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
